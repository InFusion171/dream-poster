import React from 'react'

import "./create-poster-button.css"
import "../../index.css"

const CreatePosterButton = ({handleClick}: any) => {
  return (
    <>
      <div className="body__create-button button-properties body-text-properties">
        <button type="button" id="create-button" onClick={handleClick}>Persönliches Poster jetzt erstellen</button>
      </div>
    </>
  )
}

export default CreatePosterButton