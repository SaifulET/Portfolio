// components/Navbar.tsx
'use client'
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skill' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  
  return (
    <header className="sticky top-0 z-50 bg-dark/80 backdrop-blur border-b border-[#1a1a1a]">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="text-primary font-bold text-xl">PORTFOLIO</a>
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="text-white hover:text-[#0FF0FC] transition-all duration-300 ">{link.name}</Link>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/8801707961402"target="_blank"rel="noopener noreferrer" className="bg-primary text-dark px-6 py-2 rounded-full font-semibold shadow-neon hover:scale-105 transition">
          <span className='text-xl font-bold text-green-200'>{'{'}</span>Hire Me<span className='text-xl font-bold text-green-200'>{'}'}</span>
        </a>
      </nav>
    </header>
  );
}