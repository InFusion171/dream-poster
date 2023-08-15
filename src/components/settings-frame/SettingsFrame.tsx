import React, {useRef, useState, RefObject} from 'react'

import "./settings-frame.css"
import "../../index.css"

interface ICallbackSettingsFrame {
  callback: (inputX: number, inputY: number, materialOption: RefObject<HTMLSelectElement>) => void;
}

const SettingsFrame = ({callback}: ICallbackSettingsFrame) => {  

  const useStateInputX = useState("");
  const useStateInputY = useState("");

  const [inputX, setInputX] = useStateInputX;
  const [inputY, setInputY] = useStateInputY;

  const materialOptionsRef = useRef<HTMLSelectElement>(null);

  callback(parseInt(inputX), parseInt(inputY), materialOptionsRef);

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
            value={inputX} />

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
            value={inputY} />

          <p>cm</p>
        </div>
      </div>
    </>
  )
}

export default SettingsFrame