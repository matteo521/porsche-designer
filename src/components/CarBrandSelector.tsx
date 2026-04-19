import React, { useState } from 'react';

interface CarBrandSelectorProps {
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
}

const brands = ['Porsche', 'BMW', 'Mercedes', 'Audi', 'Ferrari'];

const CarBrandSelector: React.FC<CarBrandSelectorProps> = ({
  selectedBrand,
  onBrandChange
}) => {
  return (
    <div className="brand-selector">
      <h2>Sélectionner une marque</h2>
      <div className="brand-buttons">
        {brands.map(brand => (
          <button
            key={brand}
            className={`brand-btn ${selectedBrand === brand ? 'active' : ''}`}
            onClick={() => onBrandChange(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarBrandSelector;