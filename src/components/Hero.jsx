import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../themeConfig';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
        maxWidth: '1600px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '0.68rem',
            letterSpacing: '0.32em',
            color: '#FFB400',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}
        >
          Madrid, España
        </p>

        <h1
          className="glitch-title"
          style={{
            fontFamily: '"Bebas Neue", cursive',
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            lineHeight: 0.95,
            color: '#F5F5F5',
            letterSpacing: '0.02em',
            marginBottom: '2rem',
          }}
        >
          {theme.brand.tagline}
        </h1>

        <p
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '1rem',
            color: 'rgba(245,245,245,0.45)',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          {theme.brand.subTagline}
        </p>

        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/proyectos"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#111111',
                backgroundColor: '#FFB400',
                padding: '0.75rem 2rem',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 700,
                display: 'inline-block',
              }}
            >
              Ver Proyectos
            </Link>
          </motion.div>

          <motion.a
            href="#contact"
            whileHover={{ color: '#F5F5F5' }}
            transition={{ duration: 0.18 }}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'rgba(245,245,245,0.45)',
              padding: '0.75rem 0',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
              borderBottom: '1px solid rgba(245,245,245,0.15)',
            }}
          >
            Start a Project
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
