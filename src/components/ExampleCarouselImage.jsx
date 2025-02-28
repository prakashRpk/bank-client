// ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({ text, imagePath }) {
    
  return (<>
  <img style={{ height: '500px', width:'90%', marginTop:'50px' }}
   src={imagePath} alt={text} className="d-block w-100" />
  {/* <span>{text}</span> */}

</>
);
;
}
export default ExampleCarouselImage;

