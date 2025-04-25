import React, { useState } from 'react';

const ReadMoreButton = ({ onClick }) => (
  <button className="read-more-btn" onClick={onClick}>
    Read More
  </button>
);

const services = [
  {
    id: 1,
    title: "Independent Audit",
    description: "We conduct independent audits to provide an unbiased evaluation of your financial statements, ensuring accuracy and compliance with South African accounting standards."
  },
  {
    id: 2,
    title: "Independent Review",
    description: "Our independent reviews offer a limited assurance engagement, assessing your financial information to confirm its credibility and reliability for stakeholders.",
    isRed: true
  },
  {
    id: 3,
    title: "Investigations and Queries",
    description: "We ensure your trust meets all SARS tax requirements, including preparation and submission of trust tax returns, minimising risks and ensuring compliance."
  },
  {
    id: 4,
    title: "Estate Planning",
    description: "Incorporating trusts into your estate planning can provide tax efficiency and asset protection. We offer strategic advice to optimise your estate plan.",
    isRed: true
  },
  {
    id: 5,
    title: "Trust Restructuring",
    description: "We help restructure trusts to align with changing legal, tax, or financial circumstances, ensuring your trust remains effective and compliant."
  },
  {
    id: 6,
    title: "Wealth Protection and Asset Preservation",
    description: "Trusts are ideal for safeguarding wealth. We provide expert advice on how to structure trusts for maximum protection and preservation of assets.",
    isRed: true
  }
];

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="services">
      <h2 className="services-title">Forensic Tax Services</h2>

      <div className="navbar-search" style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Search services..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="service-grid">
        {filteredServices.slice(0, visibleCount).map(service => (
          <div className="service-card" key={service.id}>
            <h4 className={`service-heading ${service.isRed ? 'highlight' : ''}`}>
              {`${service.id}. ${service.title}`}
            </h4>
            <p className="service-description">{service.description}</p>
            <ReadMoreButton onClick={() => alert(`More info about ${service.title}`)} />
          </div>
        ))}
      </div>

      {visibleCount < filteredServices.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      <div className="contact-section">
        <div className="contact-left">
          <h3>Contact Us Today</h3>
          <p>to schedule a consultation and let us make your life a bit more easier.</p>
          <button className="contact-button">Contact Us</button>
        </div>
        <div className="contact-right">
          <p className="mission-highlight">
            Ensuring your organisation<br />
            maintains Integrity and<br />
            transparency in all financial matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
