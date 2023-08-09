import React, { useCallback, useRef, useState } from 'react'

import PreviewFrame from '../../components/preview-frame/PreviewFrame';
import SettingsFrame from '../../components/settings-frame/SettingsFrame';
import TextFrame from '../../components/text-frame/TextFrame';
import CreatePosterButton from '../../components/create-poster-button/CreatePosterButton';
import BuyButton from '../../components/buy-button/BuyButton';

import "./body.css";

const Body = () => {
  const useStateInputX = useState("");
  const useStateInputY = useState("");

  const inputTextFieldRef = useRef(null);
  const outputTextFieldRef = useRef(null);

  const handleClick = useCallback(() => {
    outputTextFieldRef.current.value = inputTextFieldRef.current.value;
    inputTextFieldRef.current.value = "";
  }, []);


  return (
    <div className="body__container">
      <div className="body__container__contents">
        <div className="body__container__preview-settings-frame">
          <PreviewFrame />
          <SettingsFrame useStateInputX={useStateInputX}
                         useStateInputY={useStateInputY} />
        </div>
          <TextFrame inputTextFieldRef={inputTextFieldRef} 
                     outputTextFieldRef={outputTextFieldRef} />
          
          <CreatePosterButton handleClick={handleClick} />
          <BuyButton handleClick={()=>{/*Placeholder func*/}} />
      </div>
    </div>
  )
}

export default Body