import React, { useCallback, useRef, useState, useEffect, RefObject } from 'react'

import PreviewFrame from '../../components/preview-frame/PreviewFrame';
import SettingsFrame from '../../components/settings-frame/SettingsFrame';
import TextFrame from '../../components/text-frame/TextFrame';
import CreatePosterButton from '../../components/create-poster-button/CreatePosterButton';
import BuyButton from '../../components/buy-button/BuyButton';
import ImageUploadButton from '../../components/image-upload-button/ImageUploadButton';

import "./body.css";
import { useNavigate } from 'react-router-dom';

const Body = () => {

  const navigate = useNavigate();

  var widthValue: number;
  var heightValue: number;
  var materialOptionRef: RefObject<HTMLSelectElement>;
  var inputTextRef: RefObject<HTMLTextAreaElement>;
  var outputTextRef: RefObject<HTMLTextAreaElement>;

  const sanatizeHTML = (input: string) => {
  
    //regex: match anything except "&#[0-9]+;"
    return input.replaceAll(/[^(&#){1}\d+;]/gi, (c) => {
      return "&#" + c.charCodeAt(0) + ";";
    });
  }

  const callbackSettingsFrame = (inputX: number, inputY: number, materialOptionsRef: RefObject<HTMLSelectElement>) => {
    widthValue = inputX;
    heightValue = inputY;
    materialOptionRef = materialOptionsRef;
  };

  const callbackTextFrame = (outputRef: RefObject<HTMLTextAreaElement>, inputRef: RefObject<HTMLTextAreaElement>) => {
    outputTextRef = outputRef;
    inputTextRef = inputRef;
  }

  const moveInputTextToOutputText = () => {
    if(inputTextRef.current === null || outputTextRef.current === null)
      return;

    outputTextRef.current.value = sanatizeHTML(inputTextRef.current.value);
    inputTextRef.current.value = "";    
    inputTextRef.current.style.height = "inherit";
  };


  return (
    <div className="body__container">
      <div className="body__container__contents">
          <ImageUploadButton />
        <div className="body__container__preview-settings-frame">
          <PreviewFrame />
          <SettingsFrame callback={callbackSettingsFrame}/>
        </div>
          <TextFrame callback={callbackTextFrame} />
          
          <CreatePosterButton onClick={moveInputTextToOutputText} />
          <BuyButton onClick={()=>{navigate("/bestellung")}} />
      </div>
    </div>
  )
}

export default Body