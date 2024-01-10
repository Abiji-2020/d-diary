// Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        {/* Add header content */}
        <h1>Digital Diary</h1>
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer content */}
        <p>&copy; 2024 Digital Diary</p>
      </footer>
    </div>
  );
};

export default Layout;
