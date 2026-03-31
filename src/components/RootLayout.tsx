import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

/**
 * RootLayout — wraps every route with the persistent
 * Navbar, ambient background glows, and Footer.
 */
export function RootLayout() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-purple selection:text-white">
      {/* Fixed ambient background glows — rendered once, persist across navigations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-950">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2E1A4A] rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-brand-purple-light/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />
      </div>

      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
