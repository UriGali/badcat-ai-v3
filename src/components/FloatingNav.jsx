import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../themeConfig';

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: scrolled ? '0.85rem 2rem' : '1.5rem 2rem',
        background: scrolled
          ? 'rgba(17, 17, 17, 0.93)'
          : 'linear-gradient(to bottom, rgba(17,17,17,0.75) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,245,245,0.05)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: '1.8rem',
            letterSpacing: '0.15em',
            color: '#FFB400',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.2em',
          }}
          whileHover={{ letterSpacing: '0.22em', color: '#F5F5F5' }}
          transition={{ duration: 0.25 }}
        >
          {theme.brand.name}
          {theme.brand.aiSuffix && (
            <span style={{ fontSize: '1.1rem', letterSpacing: '0.06em', fontWeight: 300 }}>
              {theme.brand.aiSuffix}
            </span>
          )}
        </motion.a>

        {/* Links + CTA */}
        <div className="nav-links">
          {theme.nav.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link-label"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                color: 'rgba(245,245,245,0.55)',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              whileHover={{ color: '#F5F5F5' }}
              transition={{ duration: 0.18 }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: '#111111',
              backgroundColor: '#FFB400',
              backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)',
              backgroundSize: '10px 10px',
              padding: '0.55rem 1.4rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 700,
              display: 'inline-block',
            }}
            whileHover={{ backgroundColor: '#F5F5F5', scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            Start a Project
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
