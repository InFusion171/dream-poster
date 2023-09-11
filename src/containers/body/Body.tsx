import React, { RefObject, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import PreviewFrame from '../../components/index/preview-frame/PreviewFrame';
import SettingsFrame from '../../components/index/settings-frame/SettingsFrame';
import TextFrame from '../../components/index/text-frame/TextFrame';
import CreatePosterButton from '../../components/index/create-poster-button/CreatePosterButton';
import BuyButton from '../../components/index/buy-button/BuyButton';
import ImageUploadButton from '../../components/index/image-upload-button/ImageUploadButton';

import "./body.css";
import SettingsFrameDataManager from '../../manager/SettingsFrameDataManager';

const Body = () => {

  const navigate = useNavigate();
  const settingsFrameDataManager = new SettingsFrameDataManager();
  const [posterId, setPosterId] = useState("");

  const callbackSettingsFrame = (inputWidth: number, inputHeight: number, materialOptionsRef: RefObject<HTMLSelectElement>) => {
    settingsFrameDataManager.width(inputWidth);
    settingsFrameDataManager.height(inputHeight);
    settingsFrameDataManager.material(materialOptionsRef);
  }

  const callbackTextFrame = (outputRef: RefObject<HTMLTextAreaElement>, inputRef: RefObject<HTMLTextAreaElement>) => {
    settingsFrameDataManager.outputText(outputRef);
    settingsFrameDataManager.inputText(inputRef);
  }

  const onClickCreatePosterButton = async () => {
    settingsFrameDataManager.moveInputTextToOutputText();
    setPosterId(JSON.stringify(await settingsFrameDataManager.sendPosterData("http://192.168.111.88:8080/create")));
  } 

  //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

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