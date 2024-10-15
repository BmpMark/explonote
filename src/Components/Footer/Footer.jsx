// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Mark Boampong. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs">
          ExploNotes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
