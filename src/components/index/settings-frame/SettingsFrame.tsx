import React, {useRef, useState, RefObject} from 'react'

import "./settings-frame.css"
import "../../../index.css";
import { ICallbackSettingsFrame } from '../../../types/DataTypes';


const SettingsFrame = ({callback}: ICallbackSettingsFrame) => {  

  const useStateInputWidth = useState("");
  const useStateInputHeight = useState("");

  const [inputWidth, setInputX] = useStateInputWidth;
  const [inputHeight, setInputY] = useStateInputHeight;

  const materialOptionsRef = useRef<HTMLSelectElement>(null);

  callback(parseInt(inputWidth), parseInt(inputHeight), materialOptionsRef);

  return (
    <>
      <div className="body__settings-frame">
        <div className="body__settings-frame__settings-material body-text-properties select-properties">
          <p>Material</p>
          <select name="material-options" id="material-options" ref={materialOptionsRef}>
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
            maxLength={3} 
            onChange={(e) => {
              setInputX(e.target.value.replace(/^0|\D+/, ""));
            }}
            value={inputWidth} />

          <p>cm</p>
        </div>
        
        <div className="body__settings-frame__settings-size body-text-properties">
          <p>Höhe</p>
          <input 
            type="textfield" 
            name="y-size" 
            id="y-size" 
            maxLength={3} 
            onChange={(e) => {
              setInputY(e.target.value.replace(/^0|\D+/, ""));
            }}
            value={inputHeight} />

          <p>cm</p>
        </div>
      </div>
    </>
  )
}

export default SettingsFrame