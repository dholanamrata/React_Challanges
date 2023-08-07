import { useState } from 'react';
import { sculptureList } from './data.jsx';
import "./styles.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const lastindex = index === sculptureList.length - 1;
  function handleNextClick() {
    if(index<sculptureList.length-1){
      setIndex(index + 1);
    }
    if(index===sculptureList.length-1){
      setIndex(0);
    }
    
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  const resetHandling = () => {
    setIndex(0);
  };
  let sculpture = sculptureList[index];
  return (
    <>
    {lastindex ? (
        <button onClick={resetHandling}>Reset</button>
      ) : (
        <button onClick={handleNextClick}>Next</button>
      )}
     
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
