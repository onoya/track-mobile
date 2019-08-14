import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import { useEffect, useState, useRef } from 'react';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const subscriber = useRef(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      subscriber.current = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.current.remove();
    }
  }, [shouldTrack]);

  return [err];
};
