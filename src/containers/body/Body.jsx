import React, { useRef, useState } from 'react'
import "./body.css";

const Body = () => {
  const [inputXValue, setInputXValue] = useState("");
  const [inputYValue, setInputYValue] = useState("");

  const outputTextFieldRef = useRef(null);

  /*let textArea = document.getElementById("input-text-field");

  textArea.addEventListener("input", function(){
    if(textArea.scrollTop != 0)
      textArea.style.height = textArea.scrollHeight + "px";
  });*/

  return (
    <div className="body__container">
      <div className="body__container__contents">
        <div className="body__container__preview-settings-frame">
          <div className="body__preview-frame">
          </div>
          <div className="body__settings-frame">
            <div className="body__settings-frame__settings-material">
              <p>Material</p>
              <select name="material" id="material-options">
                <option value="Poster">Poster</option>
                <option value="Leinwand">Leinwand</option>
              </select>
            </div>
            <div className="body__settings-frame__settings-size-x">
              <p>Breite</p>
              <input 
                type="textfield" 
                name="x-size" 
                id="x-size" 
                maxLength="3" 
                onChange={(e) => {
                    setInputXValue(e.target.value.replace(/^0|\D+/, ""));
                  }} 
                value={inputXValue}/>

              <p>cm</p>
            </div>
            <div className="body__settings-frame__settings-size-y">
              <p>Höhe</p>
              <input 
                type="textfield" 
                name="y-size" 
                id="y-size" 
                maxLength="3" 
                onChange={(e) => {
                  setInputYValue(e.target.value.replace(/^0|\D+/, ""));
                }} 
                value={inputYValue}/>

              <p>cm</p>
            </div>
          </div>
        </div>
        <div className="body__text-frame">
          <div className="body__text-frame__text-output">
            <textarea
              disabled
              name="output-text-field"
              id="output-text-field"

            />
          </div>
          <div className="body__text-frame__text-input" contentEditable="true">
            <textarea 
              disabled
              name="input-text-field" 
              id="input-text-field" 
              placeholder="Beschreiben hier dein Poster" 
              rows="1"
              ref={outputTextFieldRef} 
              onChange={(e) =>{
                e.target.style.height = "inherit"; 
                e.target.style.height = `${e.target.scrollHeight}px`;   
              }}
              />

          </div>
        </div>
        <div className="body__create-button">
          <button type="button" id="create-button">Persönliches Poster jetzt erstellen</button>
        </div>
        <div className="body__buy-button">
          <button type="button" id="buy-button">Jetzt bestellen</button>
        </div>
      </div>
    </div>
  )
}

export default Body