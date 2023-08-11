import React, { useCallback, useRef, useState, useEffect } from 'react'

import PreviewFrame from '../../components/preview-frame/PreviewFrame';
import SettingsFrame from '../../components/settings-frame/SettingsFrame';
import TextFrame from '../../components/text-frame/TextFrame';
import CreatePosterButton from '../../components/create-poster-button/CreatePosterButton';
import BuyButton from '../../components/buy-button/BuyButton';

import "./body.css";
import { useNavigate } from 'react-router-dom';

const Body = () => {

  const inputTextFieldRef = useRef(null);
  const outputTextFieldRef = useRef(null);

  const navigate = useNavigate();

  var widthValue = null;
  var heightValue = null;
  var materialOptionRef = null;

  const handleClick = useCallback(() => {
    outputTextFieldRef.current.value = inputTextFieldRef.current.value;
    inputTextFieldRef.current.value = "";    
  }, []);

  const callbackSettingsFrame = (inputX, inputY, materialOptionsRef) => {
    widthValue = inputX;
    heightValue = inputY;
    materialOptionRef = materialOptionsRef;
  };



  return (
    <div className="body__container">
      <div className="body__container__contents">
        <div className="body__container__preview-settings-frame">
          <PreviewFrame />
          <SettingsFrame callback={callbackSettingsFrame}/>
        </div>
          <TextFrame inputTextFieldRef={inputTextFieldRef} 
                     outputTextFieldRef={outputTextFieldRef} />
          
          <CreatePosterButton handleClick={handleClick} />
          <BuyButton handleClick={()=>{navigate("/bestellung")}} />
      </div>
    </div>
  )
}

export default Body