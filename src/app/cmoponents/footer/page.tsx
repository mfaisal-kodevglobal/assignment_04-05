import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-gray-700 to-black py-8 px-4 text-center"
      style={{ color: 'white' }}
    >
      <div className="mx-auto flex flex-col items-center justify-center">

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-6">
          <a
            href="https://github.com/Sheikh-Muhammad-Mujtaba"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            {/* <FaGithub /> */}
          </a>
          <a
            href="mailto:smujtabaja@gmail.com"
            className="transition-transform transform hover:scale-110 hover:text-gray-400 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            {/* <FaEnvelope /> */}
          </a>
          <a
            href="https://www.instagram.com/sheikh_zada.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-pink-600 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            {/* <FaInstagram /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/sheikh-m-mujtaba-javed-0362872b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-500 text-gray-200 p-3 rounded-full"
            style={{ fontSize: "2rem" }}
          >
            {/* <FaLinkedin /> */}
          </a>
        </div>

        {/* Horizontal Navigation Links */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '9999px',
  textAlign: 'center',
  margin: '0 1rem', // Horizontal margin for spacing
  padding: '1rem 1.5rem',
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
  margin: '0 1rem', // Horizontal margin for spacing
  padding: '1rem 1.5rem',
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
  margin: '0 1rem', // Horizontal margin for spacing
  padding: '1rem 1.5rem',
  transition: 'background-color 0.3s, color 0.3s',
  cursor: 'pointer'
}}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Rights Reserved */}
      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '9999px',
  textAlign: 'center',
  margin: '0 1rem', // Horizontal margin for spacing
  padding: '1rem 1.5rem',
  transition: 'background-color 0.3s, color 0.3s',
  cursor: 'pointer'
};

const hoverStyle = {
  backgroundColor: 'white',
  color: 'black'
};

// // Add hover effect with JavaScript
// const handleMouseEnter = (e) => {
//   Object.assign(e.currentTarget.style, hoverStyle);
// };

// const handleMouseLeave = (e) => {
//   Object.assign(e.currentTarget.style, linkStyle);
// };

// const NavItem = ({ href, children }) => (
//   <li
//     style={{
//       color: 'white',
//       backgroundColor: 'transparent',
//       borderRadius: '9999px',
//       textAlign: 'center',
//       margin: '0 1rem', // Horizontal margin for spacing
//       padding: '1rem 1.5rem',
//       transition: 'background-color 0.3s, color 0.3s',
//       cursor: 'pointer'
//     }}
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//   >
//     <Link href={href}>{children}</Link>
//   </li>
// );
