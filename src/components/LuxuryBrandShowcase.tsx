"use client";

import React from 'react';

const brandLogos = [
  { name: 'Candia', src: 'https://i.ibb.co/twtKYMdx/candia-logo-png-transparent.png' },
  { name: 'Côte d’Or', src: 'https://i.ibb.co/HTSf5Q0j/Cote-dOr.png' },
  { name: 'Cevital', src: 'https://i.ibb.co/DfvLsBgY/cropped-Favicon.png' },
  { name: 'Ferrero', src: 'https://i.ibb.co/gMTtrTzV/ferrero-collection-logo.png' },
  { name: 'Soummam', src: 'https://i.ibb.co/3YhdY2Kv/footer-logo-ombre-1.png' },
  { name: 'Betouche', src: 'https://i.ibb.co/v65XPZy8/images.png' },
  { name: 'Lindt', src: 'https://i.ibb.co/HpGYcBxx/Lindt-Lindt.png' },
  { name: 'La Belle', src: 'https://i.ibb.co/F47vRRZ5/La-Belle-logo.png' },
  { name: 'Nestlé', src: 'https://i.ibb.co/SXY5zX9b/nestle-logo.png' },
  { name: 'El Morjene', src: 'https://i.ibb.co/5gM2fJhs/Logo-El-Mordjene-CEBON.png' },
  { name: 'Lotus', src: 'https://i.ibb.co/MkvCHwRm/Lotus-Bakeries-logo-svg.png' },
  { name: 'Bimo', src: 'https://i.ibb.co/V8DN9ZV/logo-bimo2.png' },
  { name: 'Godiva', src: 'https://i.ibb.co/LhYJYJLK/logo-3707-1620547795.png' },
  { name: 'Medina', src: 'https://i.ibb.co/ymRk1H4P/medina.png' },
];

const LuxuryBrandShowcase = () => {
  return (
    <section className="brand-showcase bg-background py-6">
      <div className="brand-track">
        {/* Duplicate logos for a seamless infinite loop */}
        {brandLogos.map((brand, index) => (
          <img
            key={`first-${index}`}
            src={brand.src}
            alt={brand.name}
            className="brand-logo"
          />
        ))}
        {brandLogos.map((brand, index) => (
          <img
            key={`second-${index}`}
            src={brand.src}
            alt={brand.name}
            className="brand-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default LuxuryBrandShowcase;