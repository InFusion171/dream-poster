import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__text">
        <p>So einfach gehts:</p>
        <ol>
          <li>Dein Traum-Poster in der Textbox beschreiben. <br />Optional kannst du auch ein Foto hochladen.</li>
          <li>Auf <code>“Persönliches Poster jetzt erstellen”</code> klicken.</li>
          <li>Diese Schritte kannst du so oft wiederholen, <br />bis du zufrieden mit deinem Poster bist.</li>
        </ol>
      </div>
    </div>
  )
}

export default Header