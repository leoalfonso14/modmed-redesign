import { useState, useRef, useEffect } from 'react';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, X, Trash2, Send, Bot, AlertCircle } from 'lucide-react';

// ─── localStorage helpers (12-hour TTL) ──────────────────────────────────────

const STORAGE_KEY = 'modmed_chat_messages';
const TTL_MS = 12 * 60 * 60 * 1000;

interface StoredChat { messages: UIMessage[]; savedAt: number; }

function loadMessages(): UIMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: StoredChat = JSON.parse(raw) as StoredChat;
    if (Date.now() - parsed.savedAt > TTL_MS) { localStorage.removeItem(STORAGE_KEY); return []; }
    return parsed.messages;
  } catch { return []; }
}

function saveMessages(messages: UIMessage[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, savedAt: Date.now() })); } catch {}
}

// ─── Suggested prompts ───────────────────────────────────────────────────────

const SUGGESTED_PROMPTS = [
  'What specialties does ModMed support?',
  'Tell me about ModMed Scribe 2.0',
  'How does RCM work?',
  'How do I book a demo?',
];

// ─── Markdown link renderer ───────────────────────────────────────────────────

function FormattedMessage({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
    const [, label, url] = match;
    parts.push(
      url.startsWith('http') ? (
        <a key={match.index} href={url} target="_blank" rel="noopener noreferrer"
          className="text-brand-purple-light underline underline-offset-2 hover:text-white transition-colors">
          {label}
        </a>
      ) : (
        <Link key={match.index} to={url}
          className="text-brand-purple-light underline underline-offset-2 hover:text-white transition-colors">
          {label}
        </Link>
      ),
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return <>{parts.length > 0 ? parts : text}</>;
}

// ─── Typing dots animation ───────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-brand-purple-light"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, setMessages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    messages: loadMessages(),
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  // Derived: show unread badge when chat is closed and last message is from assistant
  const hasNewMessage =
    !isOpen &&
    messages.length > 0 &&
    messages[messages.length - 1]?.role === 'assistant';

  useEffect(() => {
    if (messages.length > 0) saveMessages(messages);
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const confirmReset = () => {
    stop();
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
    setIsConfirmingReset(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput('');
  };

  const getMessageText = (m: UIMessage): string =>
    m.parts.filter((p) => p.type === 'text')
      .map((p) => (p as { type: 'text'; text: string }).text)
      .join('');

  return (
    <>
      {/* ── Floating toggle button ────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close ModMed AI' : 'Open ModMed AI assistant'}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple hover:bg-brand-purple-light text-white shadow-[0_12px_24px_rgba(80,45,127,0.4)] hover:shadow-[0_12px_32px_rgba(106,60,168,0.6)] transition-all duration-300 hover:scale-105 focus:outline-none"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="open"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}>
                <Sparkles className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Unread dot */}
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"
            />
          )}
        </button>
      </div>

      {/* ── Chat panel ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            style={{ width: '380px', height: '560px' }}
            role="dialog"
            aria-label="ModMed AI Assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50/80 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-purple/10 border border-brand-purple/5 shadow-sm">
                <Sparkles className="w-5 h-5 text-brand-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-slate-900 leading-none uppercase tracking-tight">ModMed AI</p>
                <p className="text-[10px] text-slate-400 mt-1.5 font-bold uppercase tracking-wider">Specialty Intelligence</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsConfirmingReset(true)}
                  title="Clear conversation"
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Reset confirmation banner */}
            <AnimatePresence>
              {isConfirmingReset && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-b border-red-100 bg-red-50 shrink-0"
                >
                  <div className="flex flex-col gap-3 p-5 text-sm">
                    <p className="text-center text-slate-900 font-bold">Clear this conversation?</p>
                    <div className="flex justify-center gap-3">
                      <button onClick={() => setIsConfirmingReset(false)}
                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-colors text-xs font-black uppercase tracking-widest">
                        Cancel
                      </button>
                      <button onClick={confirmReset}
                        className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-colors text-xs font-black uppercase tracking-widest">
                        Clear it
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin">
              {messages.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col gap-5 pt-4">
                  {/* Welcome message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mt-0.5 shadow-sm">
                      <Bot className="w-4 h-4 text-brand-purple" />
                    </div>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-50 border border-slate-100 px-4 py-3 text-sm text-slate-700 leading-relaxed font-medium">
                      Hi! 👋 I'm <span className="text-brand-purple font-black">ModMed AI</span>. Ask me about our EHR, AI solutions, or how we support your specialty.
                    </div>
                  </div>

                  {/* Suggested prompts */}
                  <div className="flex flex-wrap gap-2.5 pl-11">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => { if (!isLoading) sendMessage({ text: prompt }); }}
                        disabled={isLoading}
                        className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[11px] text-slate-600 font-bold hover:border-brand-purple/40 hover:text-brand-purple hover:bg-brand-purple/5 transition-all shadow-sm active:scale-95 disabled:opacity-50"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Message history */
                messages.map((m) => {
                  const text = getMessageText(m);
                  const isUser = m.role === 'user';
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      {!isUser && (
                        <div className="w-8 h-8 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mt-0.5 shadow-sm">
                          <Bot className="w-4 h-4 text-brand-purple" />
                        </div>
                      )}
                      <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-medium ${
                        isUser
                          ? 'rounded-tr-sm bg-brand-purple text-white shadow-[0_8px_16px_rgba(80,45,127,0.2)]'
                          : 'rounded-tl-sm bg-slate-50 border border-slate-100 text-slate-700'
                      }`}>
                        {text ? <FormattedMessage text={text} /> : <span className="opacity-40 italic text-xs">...</span>}
                      </div>
                    </motion.div>
                  );
                })
              )}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4 text-brand-purple" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-slate-50 border border-slate-100 px-4 py-3">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              {/* Error state */}
              {error && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mt-0.5">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-red-50 border border-red-100 px-4 py-3 text-sm">
                    <p className="text-red-600 font-black uppercase tracking-widest text-[10px]">Connection Error</p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">{error.message || 'Could not reach the AI service.'}</p>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 px-5 py-5 border-t border-slate-100 bg-white shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask ModMed AI anything…"
                disabled={isLoading}
                className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-brand-purple/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-purple/5 disabled:opacity-60 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-purple hover:bg-brand-purple-light text-white transition-all shadow-lg shadow-brand-purple/20 active:scale-95 disabled:opacity-40 disabled:shadow-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
