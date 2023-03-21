import { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import axios from 'axios';

const DogImage = () => {
    const [breeds, setBreeds] = useState([]);
    const [dogAttributes,setDogAttributes] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const[imageHeight, setImageHeight] = useState(350);

    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds').then(response => {
            setBreeds(response.data);
        });
    }, []);

 

    const handleClick = () => {
        const randomBreedIndex = Math.floor(Math.random() * breeds.length);
        const randomBreed = breeds[randomBreedIndex];
        fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${randomBreed.id}`)
          .then(response => response.json())
          .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            setImageUrl(data[randomIndex].url);
            setDogAttributes({
              name: randomBreed.name,
              lifespan: randomBreed.life_span,
              temperament: randomBreed.temperament,
            });
          })
          .catch(error => console.error(error));
      };

   return (
      <div>
        
        {dogAttributes && (
          <div>
            <h2>{dogAttributes.name}</h2>
            <p>Life Span: {dogAttributes.lifespan}</p>
            <p>Temperament: {dogAttributes.temperament}</p>
          </div>
        )}
        {imageUrl && <img src={imageUrl} alt="Random dog" height={imageHeight} />}
        <br />
        <button className='discover-btn' onClick={handleClick}>🔀 Discover!</button>
      </div>
    );
  };

export default DogImage;