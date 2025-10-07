'use client';

import { useEffect, useRef } from 'react';

interface NaverMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export const NaverMap = ({ latitude, longitude, zoom = 15 }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.naver) return;

      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom: zoom,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(latitude, longitude),
        map: map,
      });
    };

    if (!window.naver) {
      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} style={{ width: '100%' }} />;
};
