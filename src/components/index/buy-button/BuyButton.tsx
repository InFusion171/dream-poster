import React from 'react'

import "./buy-button.css"
import "../../../index.css";


const BuyButton = ({onClick}: any) => {
  return (
    <>
      <div className="body__buy-button body-text-properties button-properties">
        <button type="button" id="buy-button" onClick={onClick}>Jetzt bestellen</button>
      </div>    
    </>
  )
}

export default BuyButton