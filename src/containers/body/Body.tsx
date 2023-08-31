import React, { useCallback, useRef, useState, useEffect, RefObject } from 'react'
import { useNavigate } from 'react-router-dom';

import PreviewFrame from '../../components/preview-frame/PreviewFrame';
import SettingsFrame from '../../components/settings-frame/SettingsFrame';
import TextFrame from '../../components/text-frame/TextFrame';
import CreatePosterButton from '../../components/create-poster-button/CreatePosterButton';
import BuyButton from '../../components/buy-button/BuyButton';
import ImageUploadButton from '../../components/image-upload-button/ImageUploadButton';

import "./body.css";
import postPosterData from '../../network/Network';
import {IPosterData, ISettingsFrameData} from '../../types/DataTypes'
import SettingsFrameDataManager from '../../manager/SettingsFrameDataManager';

const Body = () => {

  const navigate = useNavigate();
  const settingsFrameDataManager = new SettingsFrameDataManager();

  const callbackSettingsFrame = (inputWidth: number, inputHeight: number, materialOptionsRef: RefObject<HTMLSelectElement>) => {
    settingsFrameDataManager.width(inputWidth);
    settingsFrameDataManager.height(inputHeight);
    settingsFrameDataManager.material(materialOptionsRef);
  }

  const callbackTextFrame = (outputRef: RefObject<HTMLTextAreaElement>, inputRef: RefObject<HTMLTextAreaElement>) => {
    settingsFrameDataManager.outputText(outputRef);
    settingsFrameDataManager.inputText(inputRef);
  }


  const onClickCreatePosterButton = (): void => {
    settingsFrameDataManager.moveInputTextToOutputText();
    settingsFrameDataManager.sendData("http://192.168.111.88:8080/create");
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
          <CreatePosterButton onClick={onClickCreatePosterButton} />
          <BuyButton onClick={()=>{navigate("/bestellung")}} />
      </div>
    </div>
  )
}

export default Body