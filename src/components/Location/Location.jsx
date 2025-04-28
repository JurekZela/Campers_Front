import { LocationHead, LocationInput } from './Location-styled.js';

export default function Location() {
  return (
    <div>
      <LocationHead>Location</LocationHead>
      <LocationInput placeholder='City' type="text" alt="Location" />
    </div>
  );
};