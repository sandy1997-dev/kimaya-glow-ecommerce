
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FuturisticBackground from './FuturisticBackground';
import ScrollProgress from './ScrollProgress';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <FuturisticBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow bg-transparent relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
