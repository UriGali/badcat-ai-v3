import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { theme } from '../themeConfig';

const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(245,245,245,0.055) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
};

const LABEL = {
  fontFamily: '"Space Grotesk", sans-serif',
  fontSize: '0.6rem',
  letterSpacing: '0.34em',
  color: '#FFB400',
  textTransform: 'uppercase',
  marginBottom: '1.5rem',
};

function BentoBox({ children, style, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        border: '1px solid rgba(245,245,245,0.07)',
        padding: '2.5rem',
        ...DOT_BG,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      style={{ backgroundColor: '#111111', padding: '6rem 2rem 3rem' }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

        {/* Bento grid */}
        <div className="contact-bento">

          {/* Box 1 — Main CTA */}
          <BentoBox
            delay={0}
            className="bento-main"
            style={{
              padding: '4.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              <p style={LABEL}>{t('footer.newProject')}</p>
              <h2
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: 'clamp(3.2rem, 5.5vw, 6rem)',
                  lineHeight: 0.93,
                  color: '#F5F5F5',
                  letterSpacing: '0.02em',
                }}
              >
                {t('footer.headingLine1')}<br />{t('footer.headingLine2')}
              </h2>
            </div>

            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.a
                href={`mailto:${theme.contact.email}`}
                className="email-hero"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.6rem, 3vw, 3rem)',
                  fontWeight: 400,
                  color: 'rgba(245,245,245,0.82)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                  lineHeight: 1,
                }}
                whileHover={{ color: '#ffffff' }}
                transition={{ duration: 0.25 }}
              >
                {theme.contact.email}
              </motion.a>
            </div>
          </BentoBox>

          {/* Box 2 — Location */}
          <BentoBox delay={0.1} className="bento-location">
            <p style={LABEL}>{t('footer.locationLabel')}</p>
            <p
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: '2.2rem',
                color: '#F5F5F5',
                letterSpacing: '0.06em',
                lineHeight: 1.05,
                marginBottom: '1rem',
              }}
            >
              {t('footer.locationCity')}<br />{t('footer.locationCountry')}
            </p>
            <p
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '0.78rem',
                color: 'rgba(245,245,245,0.32)',
                lineHeight: 1.7,
              }}
            >
              {t('footer.available')}
            </p>
          </BentoBox>

          {/* Box 3 — Social */}
          <BentoBox delay={0.15} className="bento-social">
            <p style={LABEL}>{t('footer.follow')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {theme.footer.social.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '0.88rem',
                    color: 'rgba(245,245,245,0.42)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    letterSpacing: '0.1em',
                  }}
                  whileHover={{ color: '#F5F5F5', x: 4 }}
                  transition={{ duration: 0.18 }}
                >
                  <Instagram size={15} strokeWidth={1.5} style={{ flexShrink: 0, opacity: 0.55 }} />
                  {s.label}
                </motion.a>
              ))}
            </div>
          </BentoBox>

          {/* Box 4 — Brand */}
          <BentoBox
            delay={0.2}
            className="bento-brand"
            style={{
              padding: '2rem 3.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <h3
              style={{
                fontFamily: '"Bebas Neue", cursive',
                fontSize: 'clamp(3rem, 7vw, 7.5rem)',
                color: '#FFB400',
                letterSpacing: '0.08em',
                lineHeight: 1,
              }}
            >
              BADCAT AI
            </h3>
            <p
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '0.7rem',
                color: 'rgba(245,245,245,0.18)',
                letterSpacing: '0.1em',
                textAlign: 'right',
                lineHeight: 1.8,
              }}
            >
              {t('footer.copyright', { year: new Date().getFullYear() })}
              <br />
              {t('footer.rights')}
            </p>
          </BentoBox>

        </div>

        {/* Legal */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '2rem',
          }}
        >
          {theme.footer.legalLinks.map((l) => (
            <a
              key={l.key}
              href={l.href}
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '0.66rem',
                color: 'rgba(245,245,245,0.16)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
            >
              {t(`legal.${l.key}`)}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
