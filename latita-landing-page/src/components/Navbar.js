import React from 'react';
import { ChevronRight, Home, Search } from 'lucide-react';

export default function HorizontalNavbar() {
  const breadcrumbs = [
    { label: 'Home', icon: <Home size={16} />, path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Business in Africa', path: '/services/business-in-africa' },
    { label: 'Business formation', path: '/services/business-formation' },
    { label: 'Expanding your global footprint in Africa', path: '/services/expanding' },
  ];

  return (
    <nav className="navbar">
      <div className="breadcrumb-container">
        {breadcrumbs.map((item, index) => (
          <div className="breadcrumb-item" key={index}>
            {index === 0 && <span className="breadcrumb-icon">{item.icon}</span>}
            <a
              href={item.path}
              className={`breadcrumb-link ${index === breadcrumbs.length - 1 ? 'breadcrumb-active' : ''}`}
            >
              {item.label}
            </a>
            {index < breadcrumbs.length - 1 && (
              <ChevronRight size={16} className="breadcrumb-chevron" />
            )}
          </div>
        ))}
      </div>

      {/* 🔍 Search Bar */}
      <div className="navbar-search">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
}
