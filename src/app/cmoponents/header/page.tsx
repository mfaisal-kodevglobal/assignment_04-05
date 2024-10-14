import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#0b0b0b', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px', padding: '0 16px' }}>
        {/* Logo or Brand */}
        <div style={{ color: 'white', fontSize: '1.5rem' }}>
          Logo Image
        </div>

        {/* Navigation Links */}
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '9999px',
  textAlign: 'center',
  margin: '0 8px', // Horizontal margin for spacing
  padding: '12px 24px',
  transition: 'background-color 0.3s, color 0.3s',
  cursor: 'pointer'
}}>
            <Link href="/">Home</Link>
          </li>
          <li style={{
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '9999px',
  textAlign: 'center',
  margin: '0 8px', // Horizontal margin for spacing
  padding: '12px 24px',
  transition: 'background-color 0.3s, color 0.3s',
  cursor: 'pointer'
}}>
            <Link href="/about">About</Link>
          </li>
          <li style={{
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '9999px',
  textAlign: 'center',
  margin: '0 8px', // Horizontal margin for spacing
  padding: '12px 24px',
  transition: 'background-color 0.3s, color 0.3s',
  cursor: 'pointer'
}}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '9999px',
  textAlign: 'center',
  margin: '0 8px', // Horizontal margin for spacing
  padding: '12px 24px',
  transition: 'background-color 0.3s, color 0.3s',
  cursor: 'pointer'
};


