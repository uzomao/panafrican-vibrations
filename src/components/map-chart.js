import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { awardees } from "../awardees";

const { abdoul, alice, athandiwe, delasi, keren, luamba, souleymane, uzoma, valu } = awardees

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";

const markers = [
  { awardee: abdoul.name, name: "Kigali", coordinates: [30.104429, -1.970579] },
  { awardee: alice.name, name: "Nkongsamba", coordinates: [9.936900, 4.955260] },
  { awardee: athandiwe.name, name: "Johannesburg", coordinates: [28.047304, -26.204103] },
  { awardee: delasi.name, name: "Accra", coordinates: [-0.186964, 5.603717] },
  { awardee: keren.name, name: "Abidjan", coordinates: [-4.008256, 5.359952] },
  { awardee: luamba.name, name: "Luanda", coordinates: [13.289437, -8.839988] },
  { awardee: souleymane.name, name: "Ouagadougou", coordinates: [-1.519920, 12.371530] },
  { awardee: uzoma.name, name: "Abuja", coordinates: [7.398574, 9.076479] },
  { awardee: valu.name, name: "Lagos", coordinates: [3.379206, 6.524379] },
];

const MapChart = ({ awardeeSelected }) => {

  const [mapScale, setMapScale] = useState(675)

  useEffect(() => {
    let viewBox;
    
    // Modify map viewbox dynamically for mobile and desktop
    if(window && window.innerWidth < 768){
      setMapScale(750)
      viewBox = "100 0 800 1200"
    } else {
      viewBox = "0 0 1000 1000"
    }
    document.getElementsByClassName('rsm-svg')[0].setAttribute("viewBox", viewBox);

  }, [])

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [45, 2.5, 7],
        center: [50, 22.5],
        scale: mapScale
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
      {markers.map(({ name, awardee, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <rect x="-10" y="-20" width="30" height="30" transform="rotate(45)" fill="#00f001" className="marker" id={`marker-${awardee}`}
            style={{boxShadow: '-5px 0 5px #00f001'}}
            onClick={() => awardeeSelected(awardee)}
            onMouseEnter={() => {document.getElementById(`marker-${awardee}`).style.fill="#ef7bb3"}}
            onMouseLeave={() => {document.getElementById(`marker-${awardee}`).style.fill="#00f001"}}
          />
          <text
            textAnchor="middle"
            x="7"
            y="-20"
            style={{ fontFamily: "Space Mono, Courier, monospace", fill: "#fff" }}
            className="marker-text"
            id={`marker-text-${awardee}`}
          >
            {awardee}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
