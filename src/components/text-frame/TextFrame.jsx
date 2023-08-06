import React from 'react'

import "./text-frame.css"

const TextFrame = ({inputTextFieldRef, outputTextFieldRef}) => {
    
  const setHeightToScrollheight = (e) => {
    e.target.style.height = "inherit"; 
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

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
            rows="1"
            ref={inputTextFieldRef} 
            onChange={setHeightToScrollheight} />
        </div>
      </div>
    </>
  )
}

export default TextFrame