import React, { useClient } from "react";

const LocationDropdown = () => {
  // Define the list of locations
  const locations = ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Chennai"];

  // State to manage the selected location
  const [selectedLocation, setSelectedLocation] = useState("");

  // Function to handle change in selected location
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Select a location:
      </label>
      <select
        id="location"
        name="location"
        value={selectedLocation}
        onChange={handleLocationChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select</option>
        {/* Populate options dynamically from the locations array */}
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      {/* Display selected location */}
      {selectedLocation && (
        <p className="mt-2 text-sm text-gray-500">
          You selected: {selectedLocation}
        </p>
      )}
    </div>
  );
};

export default LocationDropdown;
