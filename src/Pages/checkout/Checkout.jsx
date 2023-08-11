import React from 'react';

import "./checkout.css";
import Navbar from "../../containers/navbar/Navbar";
import CheckoutPreviewFrame from '../../components/checkout-preview-frame/Checkout-Preview-Frame';

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="checkout__body">
        <CheckoutPreviewFrame />
      </div>
    </>
  )
}

export default Checkout