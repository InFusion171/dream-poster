import React, { useCallback, useRef, useState, useEffect, RefObject } from 'react'
import sanitizeHtml from 'sanitize-html';

import PreviewFrame from '../../components/preview-frame/PreviewFrame';
import SettingsFrame from '../../components/settings-frame/SettingsFrame';
import TextFrame from '../../components/text-frame/TextFrame';
import CreatePosterButton from '../../components/create-poster-button/CreatePosterButton';
import BuyButton from '../../components/buy-button/BuyButton';
import ImageUploadButton from '../../components/image-upload-button/ImageUploadButton';

import "./body.css";
import { useNavigate } from 'react-router-dom';

interface PosterData{
  material: string;
  width: number;
  height: number;
  posterDiscription: string;
  posterId?: string;
}

const Body = () => {

  const navigate = useNavigate();

  var widthValue: number;
  var heightValue: number;
  var materialOptionRef: RefObject<HTMLSelectElement>;
  var inputTextRef: RefObject<HTMLTextAreaElement>;
  var outputTextRef: RefObject<HTMLTextAreaElement>;

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

    outputTextRef.current.value = sanitizeHtml(inputTextRef.current.value);
    inputTextRef.current.value = "";    
    inputTextRef.current.style.height = "inherit";
  };

  async function postPosterData(url: string, data: PosterData) {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if(!response.ok)
          console.log(response.statusText);
      
        return response.json();
        })
  }

  function onClickPosterButton(): void {
    moveInputTextToOutputText();

    var posterData: PosterData = {material: materialOptionRef.current === null ? "" : materialOptionRef.current.value,
                                  width: widthValue,
                                  height: heightValue,
                                  posterDiscription: outputTextRef.current === null ? "" : outputTextRef.current.value}

   postPosterData("http://192.168.111.88:8080/create", posterData);
  } 

  return (
    <div className="body__container">
      <div className="body__container__contents">
          <ImageUploadButton />
        <div className="body__container__preview-settings-frame">
          <PreviewFrame />
          <SettingsFrame callback={callbackSettingsFrame}/>
        </div>
          <TextFrame callback={callbackTextFrame} />
          <CreatePosterButton onClick={onClickPosterButton} />
          <BuyButton onClick={()=>{navigate("/bestellung")}} />
      </div>
    </div>
  )
}

export default Body