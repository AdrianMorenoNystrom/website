import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showPicture, setShowPicture] = useState(false);

  const handleCopyrightClick = () => {
    setShowPicture(!showPicture);


    document.body.style.backgroundColor = showPicture ? '' : 'lightblue';
  };

  const handleClickOutside = (event) => {
    if (showPicture && !event.target.closest("p")) {
      setShowPicture(false);
      document.body.style.backgroundColor = ''; 
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showPicture]);

  return (
    <div>
      <p>
        Adrian Moreno 2024 
        <span onClick={handleCopyrightClick}>&copy;</span>
      </p>

      {showPicture && (
        <div>
          <img className="egg" src={`${process.env.PUBLIC_URL}/assets/cat.png`} alt="Easter Egg" />
        </div>
      )}
    </div>
  );
}
