import React from 'react';
import { useNavigate } from 'react-router-dom';

function CatOrDog() {
  const navigate = useNavigate();
  const handleClick = (imageName) => {
    console.log(`You clicked on ${imageName}`);
    navigate(`/starting-pot?animal=${imageName}`);
  };

  return (
    <div>
      <img src="/cat.png" alt="Cat" loading="lazy" onClick={() => handleClick('Cat')} style={{width: 200, height: 200, borderRadius: '50%', cursor: 'pointer'}} />
      <img src="/dog.png" alt="Dog" loading="lazy" onClick={() => handleClick('Dog')} style={{width: 200, height: 200, borderRadius: '50%', cursor: 'pointer'}} />
    </div>
  );
}

export default CatOrDog;