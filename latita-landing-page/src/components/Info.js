import React from 'react';
import { ArrowRight } from 'lucide-react'; // For arrow icons if you're using Lucide

const Info = () => {
  return (
    <section className="info-page">
      <div className="info-container">
        {/* Left Section */}
        <div className="info-text">
          <h2 className="section-title">Forensics</h2>
          <ul className="service-links">
            <li>
              <span>Independent audit</span>
              <ArrowRight size={16} />
            </li>
            <li>
              <span>Independent Review</span>
              <ArrowRight size={16} />
            </li>
            <li>
              <span>Investigations and queries</span>
              <ArrowRight size={16} />
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="info-image">
          <img src="/LatitaA.jpg" alt="Latita Visual" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="info-footer">
        <h3>Contact our qualified consultants</h3>
        <p>Discover how Latita Africa can assist you.</p>
        <button className="callback-btn">Request a callback</button>
      </div>
    </section>
  );
};

export default Info;
