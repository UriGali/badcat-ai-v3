import { motion } from 'framer-motion';
import { theme } from '../themeConfig';

export default function ClientCarousel() {
  const doubled = [...theme.clients, ...theme.clients];

  return (
    <section
      id="clients"
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid rgba(245,245,245,0.05)',
        borderBottom: '1px solid rgba(245,245,245,0.05)',
        padding: '5rem 0 4.5rem',
      }}
    >
      {/* Label */}
      <motion.p
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          color: 'rgba(245,245,245,0.25)',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Brands We've Moved
      </motion.p>

      {/* Carousel */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '12%',
            background: 'linear-gradient(to right, #111111 0%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0, top: 0, bottom: 0,
            width: '12%',
            background: 'linear-gradient(to left, #111111 0%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div
          className="carousel-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4.5rem',
            width: 'max-content',
            paddingLeft: '2rem',
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                opacity: 0.22,
                transition: 'opacity 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.22')}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    height: '26px',
                    filter: 'grayscale(100%) brightness(10)',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: '"Bebas Neue", cursive',
                    fontSize: '1.35rem',
                    letterSpacing: '0.22em',
                    color: '#F5F5F5',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
