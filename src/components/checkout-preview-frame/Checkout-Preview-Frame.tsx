import React from 'react'

import "./checkout-preview-frame.css";
import "../../index.css";

const DivWithBodyHeadbar = ({headContent, bodyContent}:  any) => {

  return(
    <div className="divWithBodyHeadbar">
      <div className="headerDiv">
        {headContent}
      </div>
      <hr />
      <div className="bodyDiv">
        {bodyContent}
      </div>
    </div>
  )
}

const CheckoutPreviewFrame = () => {
  
  
  return (
    <>
      <div className="checkout-preview-frame__container">
      <p>Warenkorb</p>
        <div className="checkout-preview-frame__wrapper">
          <DivWithBodyHeadbar 
          headContent={<p>test</p>}
          bodyContent={<p>123</p>} />
        </div>
      </div>
    </>
  )
}

export default CheckoutPreviewFrame