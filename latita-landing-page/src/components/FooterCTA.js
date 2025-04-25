import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from '../Logo/Logo'; 

const ContactItem = ({ icon, title, detail }) => (
  <div className="contact-item">
    <div className="contact-icon-container">{icon}</div>
    <div className="contact-info">
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  </div>
);


const FooterLinkSection = ({ title, links, isFirst }) => (
  <div className="footer-link-section">
    {isFirst && title && <h3 className="footer-section-title">{title}</h3>}
    <ul className="footer-link-list">
      {links.map((link, index) => (
        <li key={index} className="footer-link-item">
          <a href={link.url} className="footer-link">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


const SocialLinks = () => (
  <div className="social-links">
    <a
      href="https://web.facebook.com/latita.africa?_rdc=1&_rdr"
      className="social-link"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook size={20} />
    </a>
    <a
      href="https://www.linkedin.com/company/latita-africa/"
      className="social-link"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="https://www.instagram.com/latitaafrica/"
      className="social-link"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram size={20} />
    </a>
  </div>
);

// Main Footer Component
const FooterCTA = () => {
  const companyLinks = [
    {
      title: 'Company',
      links: [
        { label: 'Who Is Latita Africa', url: '#' },
        { label: 'Ubuntu Connect', url: '#' },
        { label: 'FAQ', url: '#' },
        { label: 'Podcasts & Interviews', url: '#' },
        { label: 'Careers', url: '#' }
      ]
    },
    {
      title: '',
      links: [
        { label: 'The Latita Team', url: '#' },
        { label: 'Partnerships', url: '#' },
        { label: 'Industries', url: '#' },
        { label: 'Events', url: '#' },
        { label: 'Press Releases', url: '#' }
      ]
    }
  ];

  const serviceLinks = [
    {
      title: 'Our Services',
      links: [
        { label: 'Tax', url: '#' },
        { label: 'Advisory', url: '#' },
        { label: 'Business In Africa', url: '#' },
        { label: 'Corporate Tax', url: '#' },
        { label: 'Value Added Tax (VAT)', url: '#' }
      ]
    },
    {
      title: '',
      links: [
        { label: 'Legal', url: '#' },
        { label: 'Risk Assurance', url: '#' },
        { label: 'Tax Debt And Dispute', url: '#' },
        { label: 'Individual Tax', url: '#' },
        { label: 'Crypto Asset Tax', url: '#' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-contact">
        <ContactItem
          icon={<MapPin className="contact-icon" />}
          title="Find us"
          detail="The Woodlands Office Park"
        />
        <ContactItem
          icon={<Phone className="contact-icon" />}
          title="Call us"
          detail="086 152 8482"
        />
        <ContactItem
          icon={<Mail className="contact-icon" />}
          title="Mail us"
          detail="info@latitaafrica.com"
        />
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <div className="footer-social">
            <h3>Follow us</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="footer-links-container">
          <div className="footer-links-group">
            {companyLinks.map((section, index) => (
              <FooterLinkSection
                key={`company-${index}`}
                title={section.title}
                links={section.links}
                isFirst={index === 0}
              />
            ))}
          </div>

          <div className="footer-links-group">
            {serviceLinks.map((section, index) => (
              <FooterLinkSection
                key={`service-${index}`}
                title={section.title}
                links={section.links}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Latita Africa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
