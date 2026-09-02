import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { Phone, MapPin, Mail, Menu, X } from 'lucide-react';
import logoUrl from '../assets/lyvin logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="container header-container" style={{ padding: '0.5rem 0', height: '100%' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logoUrl} alt="Lyvin Health Hub Logo" className="header-logo-img" />
        </div>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} style={{ gap: '3.5rem' }}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/rmo" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>Daytime RMO</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
          <a href="tel:+91963322149" className="btn btn-gradient mobile-book-now" onClick={() => setIsMobileMenuOpen(false)}>
            Book Now
          </a>
        </nav>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="tel:+91963322149" className="btn btn-gradient desktop-book-now" style={{ borderRadius: '4px', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            Book Now
          </a>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger-lines">
               <span className="line line1"></span>
               <span className="line line2"></span>
               <span className="line line3"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Section with Logo and Socials */}
        <div className="footer-top-section" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '.3rem', borderBottom: '1px solid rgba(13, 124, 124, 0.15)', marginBottom: '3rem', gap: '2rem' ,marginTop: '-5rem' }}>
           <img src={logoUrl} alt="Lyvin Health Hub Logo" style={{ height: '200px', objectFit: 'contain', marginLeft: '-15px' }} />
           <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
             <a href="#" className="social-icon" aria-label="Facebook">
               <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
             <a href="#" className="social-icon" aria-label="Instagram">
               <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="#" className="social-icon" aria-label="Twitter">
               <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
             </a>
           </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h3>About Us</h3>
            <p>A premium neighbourhood walk-in clinic offering comprehensive care.</p>
            <p style={{ marginTop: '0.5rem', fontWeight: '500', color: 'var(--color-teal)' }}>Expert Care You Can Trust.</p>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <a href="tel:+91963322149"><Phone size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> +91 963 322 2149</a>
            <a href="tel:+91963322143"><Phone size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> +91 963 322 2143</a>
            <a href="mailto:lyvinhealthclinic@gmail.com"><Mail size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> lyvinhealthclinic@gmail.com</a>
          </div>
          <div className="footer-col">
            <h3>Location</h3>
            <a href="https://share.google/9CAtiXdCxMBPDfJbI" target="_blank" rel="noreferrer" className="footer-location-link">
              <MapPin size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
              <span>Kasthurba Rd, Koorkenchery,<br/>Thrissur, Kerala 680007</span>
            </a>
            <p style={{ marginTop: '1.25rem' }}><strong>Open Hours:</strong> 9:00 AM - 8:30 PM (Daily)</p>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="footer-legal-link">Terms & Conditions</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aadithya Lyvin Health Hub. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            Designed & Developed by <a href="http://infynixsolutions.ae" target="_blank" rel="noreferrer" style={{ color: 'var(--color-teal)', textDecoration: 'none', fontWeight: '500' }}>Infynix Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 400px)' }}>
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/91963322149" 
        target="_blank" 
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg viewBox="0 0 24 24" width="35" height="35" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
};

export default Layout;
