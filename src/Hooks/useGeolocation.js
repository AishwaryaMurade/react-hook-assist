import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported by your browser',
      }));
      return;
    }

    const success = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const error = () => {
      setLocation((prevState) => ({
        ...prevState,
        error: 'Unable to retrieve your location',
      }));
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return location;
};


export default useGeolocation