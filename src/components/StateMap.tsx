import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function StateMap() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[500px]">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                data-tooltip-id="state-tooltip"
                data-tooltip-content={geo.properties.name}
                onClick={() => navigate(`/states/${geo.properties.name.toLowerCase()}`)}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none"
                  },
                  hover: {
                    fill: "#3B82F6",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#2563EB",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <Tooltip id="state-tooltip" />
    </div>
  );
}