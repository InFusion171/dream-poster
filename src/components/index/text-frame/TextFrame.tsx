import React, { RefObject, useRef } from 'react'

import "./text-frame.css"

interface ICallbackTextFrame{
  callback: (outputRef: RefObject<HTMLTextAreaElement>, inputRef: RefObject<HTMLTextAreaElement>) => void;
}

const TextFrame = ({callback}: ICallbackTextFrame) => {
    
  const inputTextFieldRef = useRef<HTMLTextAreaElement>(null);
  const outputTextFieldRef = useRef<HTMLTextAreaElement>(null);


  const setHeightToScrollHeight = (e: any) => {
    e.target.style.height = "inherit"; 
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  callback(outputTextFieldRef, inputTextFieldRef);

  return (
    <>
      <div className="body__text-frame">
        <div className="body__text-frame__text-output body-text-properties">
          <textarea
            disabled
            name="output-text-field"
            id="output-text-field"
            ref={outputTextFieldRef} />
        </div>

        <div className="body__text-frame__text-input body-text-properties">
          <textarea 
            name="input-text-field" 
            id="input-text-field" 
            placeholder="Beschreiben hier dein Poster" 
            rows={1}
            ref={inputTextFieldRef} 
            onChange={setHeightToScrollHeight} />
        </div>
      </div>
    </>
  )
}

export default TextFrame