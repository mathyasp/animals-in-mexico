/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import './Map.css';
const API_KEY = import.meta.env.VITE_API_KEY;

declare global {
  interface Window {
    initMap: any;
    google: any;
  }
}

interface MapProps {
  isSpanish: boolean;
}

function Map({ isSpanish }: MapProps) {
  const initializeMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 20.6534, lng: -105.2253 }, // Puerto Vallarta, Mexico
      zoom: 8
    });

    new window.google.maps.Marker({
      position: { lat: 20.6534, lng: -105.2253 },
      map: map
    });
  };

  useEffect(() => {
    if (window.google) {
      initializeMap();
    } else {
      window.initMap = function() {
        initializeMap();
      };

      if (!document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]')) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <div className='Map'>
      <h2>{isSpanish ? 'Mapa' : 'Map'}</h2>
      <div id='map' style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default Map;