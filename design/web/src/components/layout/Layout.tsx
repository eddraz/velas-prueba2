import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="wrapper">
      {/* Preload animation */}
      <div className="preload preload-container">
        <div className="preload-logo">
          <div className="spinner"></div>
        </div>
      </div>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
