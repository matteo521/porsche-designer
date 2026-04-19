import React, { useState } from 'react';
import './App.css';
import CarBrandSelector from './components/CarBrandSelector';
import Car3DViewer from './components/Car3DViewer';
import ExteriorOptions from './components/ExteriorOptions';
import InteriorOptions from './components/InteriorOptions';

interface CarCustomization {
  brand: string;
  exterior: {
    color: string;
    wheels: string;
    spoiler: boolean;
    suspension: string;
  };
  interior: {
    seatColor: string;
    steeringWheel: string;
    dashboard: string;
    carpet: string;
    audio: string;
  };
}

const App: React.FC = () => {
  const [carConfig, setCarConfig] = useState<CarCustomization>({
    brand: 'Porsche',
    exterior: {
      color: '#FF0000',
      wheels: 'sport',
      spoiler: false,
      suspension: 'standard'
    },
    interior: {
      seatColor: '#000000',
      steeringWheel: 'leather',
      dashboard: 'carbon',
      carpet: 'black',
      audio: 'premium'
    }
  });

  const handleBrandChange = (brand: string) => {
    setCarConfig(prev => ({ ...prev, brand }));
  };

  const handleExteriorChange = (exterior: any) => {
    setCarConfig(prev => ({ ...prev, exterior }));
  };

  const handleInteriorChange = (interior: any) => {
    setCarConfig(prev => ({ ...prev, interior }));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🚗 Porsche Designer - 3D Car Customizer</h1>
        <p>Customise votre voiture et visualisez les modifications en temps réel</p>
      </header>
      
      <div className="app-container">
        <div className="left-panel">
          <CarBrandSelector 
            selectedBrand={carConfig.brand} 
            onBrandChange={handleBrandChange}
          />
          
          <ExteriorOptions 
            exterior={carConfig.exterior}
            onExteriorChange={handleExteriorChange}
          />
          
          <InteriorOptions 
            interior={carConfig.interior}
            onInteriorChange={handleInteriorChange}
          />
        </div>
        
        <div className="right-panel">
          <Car3DViewer carConfig={carConfig} />
        </div>
      </div>
    </div>
  );
};

export default App;