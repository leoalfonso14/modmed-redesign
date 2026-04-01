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
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#FCFCFD]">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] mix-blend-multiply opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] mix-blend-multiply opacity-15" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-brand-purple-light/5 rounded-full blur-[100px] mix-blend-multiply opacity-10" />
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
