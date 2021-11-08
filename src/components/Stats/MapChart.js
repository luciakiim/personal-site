/* eslint-disable */
import React from 'react';
import { geoCentroid } from 'd3-geo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';
import { Popup } from "semantic-ui-react";

import allStates from '../../data/stats/allstates.json';
import { nationalParksMarker } from '../../data/stats/nationalParksMarkers';
import { visitedStates } from '../../data/stats/visitedStates';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};
const tooltipStyle = {
	position: 'relative',
	display: 'inline-block',
	backgroundColor: 'black',
  color: '#fff',
  textAlign: 'center',
  padding: '5px 10px',
  borderRadius: '6px',
}

const MarkedUSMap = () => (
  <>
    {/* <h3>Parks &amp; States Visited</h3> */}
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
							visitedStates.includes(geo.properties.name) ?
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#99ac9d"
              /> :
							<Geography
								key={geo.rsmKey}
								stroke="#FFF"
								geography={geo}
								fill="#DDD"
						/>
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + '-name'}>
                  {
									cur && centroid[0] > -160 && centroid[0] < -67
									&& (Object.keys(offsets).indexOf(cur.id) === -1 ? (
											<Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))
									}
                </g>
              );
            })}
				{nationalParksMarker.map(({ name, coordinates }) => 
				(
					<Popup
						key={`${name}-tooltip`}
						content={name}
						position="top center"
						style={tooltipStyle}
						trigger={
						 <Marker 
							key={`${name}-marker`}
							coordinates={coordinates}
							data-tip data-for={`tooltip-${name}`}
						 >
							<g
								fill="none"
								stroke="#FF5533"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								transform="translate(-12, -24)"
							>
								<circle cx="12" cy="10" r="3" />
								<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
							</g>
						</Marker>
					} />
				)
				)}
          </>
        )}
      </Geographies>
    </ComposableMap>
  </>
);

export default MarkedUSMap;
