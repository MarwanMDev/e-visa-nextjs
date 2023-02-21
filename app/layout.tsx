import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body className="mx-auto bg-[#013068] dark:bg-zinc-900 transition-all duration-700 flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
