import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showPicture, setShowPicture] = useState(false);

  const handleCopyrightClick = () => {
    setShowPicture(!showPicture);
  };

  const handleClickOutside = (event) => {
    if (showPicture && !event.target.closest("p")) {
      setShowPicture(false);
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

      {/* Display the picture if showPicture is true */}
      {showPicture && (
        <div>
          {/* Replace 'your-picture-url.jpg' with the actual URL of your picture */}
          <img className="egg" src={`${process.env.PUBLIC_URL}/assets/cat.png`} alt="Easter Egg" />
        </div>
      )}
    </div>
  );
}
