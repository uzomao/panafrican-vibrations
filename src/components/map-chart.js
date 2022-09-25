import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";

const markers = [
  { awardee: 'Abdoul', name: "Kigali", coordinates: [30.104429, -1.970579] },
  { awardee: 'Alice', name: "Nkongsamba", coordinates: [9.936900, 4.955260] },
  { awardee: 'Athandiwe', name: "Johannesburg", coordinates: [28.047304, -26.204103] },
  { awardee: 'Delasi', name: "Accra", coordinates: [-0.186964, 5.603717] },
  { awardee: 'Keren', name: "Abidjan", coordinates: [-4.008256, 5.359952] },
  { awardee: 'Luamba', name: "Luanda", coordinates: [13.289437, -8.839988] },
  { awardee: 'Souleymane', name: "Ouagadougou", coordinates: [-1.519920, 12.371530] },
  { awardee: 'Uzoma', name: "Abuja", coordinates: [7.398574, 9.076479] },
  { awardee: 'Valu', name: "Lagos", coordinates: [3.379206, 6.524379] },
];

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [45, 8, 5],
        center: [50, 22.5],
        scale: 675
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#407a33"
              stroke="#407a33"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#fff" stroke="#fff" strokeWidth={2} />
          {/* <text
            textAnchor="middle"
            style={{ fontFamily: "system-ui", fill: "#fff" }}
          >
            {name}
          </text> */}
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
