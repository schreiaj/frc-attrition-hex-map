import React, { Component } from 'react';
import {State} from './state';

const STATES = [
      { abbr: "AK", name: "Alaska" },
      { abbr: "ME", name: "Maine"},

      { abbr: "VT", name: "Vermont" },
      { abbr: "NH", name: "New Hampshire"},

      { abbr: "WA", name: "Washington" },
      { abbr: "MT", name: "Montana" },
      { abbr: "ND", name: "North Dakota" },
      { abbr: "MN", name: "Minnesota" },
      { abbr: "WI", name: "Wisconsin" },
      { abbr: "MI", name: "Michigan" },
      { abbr: "NY", name: "New York" },
      { abbr: "MA", name: "Massachusetts" },
      { abbr: "RI", name: "Rhode Island"},

      { abbr: "ID", name: "Idaho" },
      { abbr: "WY", name: "Wyoming" },
      { abbr: "SD", name: "South Dakota" },
      { abbr: "IA", name: "Iowa" },
      { abbr: "IL", name: "Illinois" },
      { abbr: "IN", name: "Indiana" },
      { abbr: "OH", name: "Ohio" },
      { abbr: "PA", name: "Pennsylvania" },
      { abbr: "NJ", name: "New Jersey" },
      { abbr: "CT", name: "Connecticut"},

      { abbr: "OR", name: "Oregon" },
      { abbr: "NV", name: "Nevada" },
      { abbr: "CO", name: "Colorado" },
      { abbr: "NE", name: "Nebraska" },
      { abbr: "MO", name: "Missouri" },
      { abbr: "KY", name: "Kentucky" },
      { abbr: "WV", name: "West Virgina" },
      { abbr: "VA", name: "Virginia" },
      { abbr: "MD", name: "Maryland" },
      { abbr: "DE", name: "Delaware"},

      { abbr: "CA", name: "California" },
      { abbr: "UT", name: "Utah" },
      { abbr: "NM", name: "New Mexico" },
      { abbr: "KS", name: "Kansas" },
      { abbr: "AR", name: "Arkansas" },
      { abbr: "TN", name: "Tennessee" },
      { abbr: "NC", name: "North Carolina" },
      { abbr: "SC", name: "South Carolina" },
      { abbr: "DC", name: "District of Columbia"},

      { abbr: "AZ", name: "Arizona" },
      { abbr: "OK", name: "Oklahoma" },
      { abbr: "LA", name: "Louisiana" },
      { abbr: "MS", name: "Mississippi" },
      { abbr: "AL", name: "Alabama" },
      { abbr: "GA", name: "Georgia"},

      { abbr: "HI", name: "Hawaii" },
      { abbr: "TX", name: "Texas" },
      { abbr: "FL", name: "Florida" }
    ];

const stateMatrix = [
          [1,0,0,0,0,0,0,0,0,0,0,1],
          [0,0,0,0,0,0,0,0,0,1,1,0],
          [0,1,1,1,1,1,0,1,0,1,1,1],
          [0,1,1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,1,0,0,0],
          [1,0,0,0,1,0,0,0,1,0,0,0]
        ];

export class Map extends Component {
  render(){
  let index = -1;
  const r = this.props.r

  const pi_six = Math.PI/6;
  const cos_six = Math.cos(pi_six);
  const sin_six = Math.sin(pi_six);
  const xOff = 2*r*cos_six;
  const yOff = 3*r*sin_six;
  return (
    <g className="state-map" transform={`translate(${xOff},${yOff})`}>
    {
      stateMatrix.map(function(row, y){
        let rowOffset = (y % 2) * 0.5;
        return row.map(function(col, x){
          if(col){
            index++
            return <State 
              stateData={STATES[index]} 
              key={`${index}`} 
              x={xOff*(x + rowOffset)} 
              y={yOff*y} 
              r={r}/>
          }
        });
      })
    }
    </g>
  );
  }
}

