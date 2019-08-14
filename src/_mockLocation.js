import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      latitude: 14.5560188 + increment * tenMetersWithDegrees,
      longitude: 121.0500989 + increment * tenMetersWithDegrees,
      altitude: 5,
      altitudeAccuracy: 5,
      accuracy: 5,
      heading: 0,
      speed: 0,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
