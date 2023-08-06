import React from 'react'

import "./settings-frame.css"
import "../../index.css"


const SettingsFrame = ({useStateInputX, useStateInputY}) => {  
  return (
    <>
      <div className="body__settings-frame">
        <div className="body__settings-frame__settings-material body-text-properties select-properties">
          <p>Material</p>
          <select name="material" id="material-options">
            <option value="Poster">Poster</option>
            <option value="Leinwand">Leinwand</option>
          </select>
        </div>

        <div className="body__settings-frame__settings-size body-text-properties">
          <p>Breite</p>
          <input 
            type="textfield" 
            name="x-size" 
            id="x-size" 
            maxLength="3" 
            onChange={(e) => {
            useStateInputX[1](e.target.value.replace(/^0|\D+/, ""));
              }} 
            value={useStateInputX[0]}/>

          <p>cm</p>
        </div>
        
        <div className="body__settings-frame__settings-size body-text-properties">
          <p>Höhe</p>
          <input 
            type="textfield" 
            name="y-size" 
            id="y-size" 
            maxLength="3" 
            onChange={(e) => {
            useStateInputY[1](e.target.value.replace(/^0|\D+/, ""));
              }} 
            value={useStateInputY[0]}/>

          <p>cm</p>
        </div>
      </div>
    </>
  )
}

export default SettingsFrame