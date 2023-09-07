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
      <h1>Warenkorb</h1>
        <div className="checkout-preview-frame__wrapper">
          <table>
            <tr>
              <th>Vorschau</th>
              <th>Artikel</th>
              <th>Menge</th>
              <th>Gesamtpreis</th>
            </tr>
            <tr>
              <td><div className="checkout-preview-frame__preview-frame"></div></td>
              <td>Poster 12 x 13 cm</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default CheckoutPreviewFrame