import {useEffect} from 'react';

const useScriptForMaps = () => {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
    scriptTag.integrity = "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==";
    scriptTag.crossOrigin = "";
    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    }
  },[])
}

export default {
  useScriptForMaps
}