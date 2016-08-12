import React from 'react';
import { Motion, spring, presets } from 'react-motion';

export const State = ({stateData, x=0,y=0,r=10}) => 
	{const pi_six = Math.PI/6;
		const cos_six = Math.cos(pi_six);
		const sin_six = Math.sin(pi_six);
		let hexPoints = [
		    [0, 0 - r].join(","),
		    [0 + cos_six * r, 0 - sin_six * r].join(","),
		    [0 + cos_six * r, 0 + sin_six * r].join(","),
		    [0, 0 + r].join(","),
		    [0 - cos_six * r, 0 + sin_six * r].join(","),
		    [0 - cos_six * r, 0 - sin_six * r].join(",")
		  ];
		let geoPosition = `${x},${y}`;

		return (
			<Motion defaultStyle= {{xPos: 0, yPos:0}} style={{xPos: spring(x, presets.wobbly), yPos: spring(y, presets.wobbly)}} >
				{({xPos,yPos}) =>
					<g className="state" transform={`translate(${xPos},${yPos})`}> 
						<polygon points={hexPoints.join(" ")}/>
						<text className="state-abbr">{stateData.abbr}</text>
					</g>
				}
			</Motion>
			);
	}