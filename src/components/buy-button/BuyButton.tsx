import React from 'react'

import "./buy-button.css"
import "../../index.css";

const BuyButton = ({handleClick}: any) => {
  return (
    <>
      <div className="body__buy-button body-text-properties button-properties">
        <button type="button" id="buy-button" onClick={handleClick}>Jetzt bestellen</button>
      </div>    
    </>
  )
}

export default BuyButton