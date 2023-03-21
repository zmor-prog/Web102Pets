import { useState } from "react";
import fetch from "isomorphic-fetch";

function DogImage(){
    const [imageUrl, setImageUrl] = useState('');

    function getRandomDogIamge() {
        fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => setImageUrl(data[0].url))
        .catch(error => console.error(error));
    }

    return (
        <div className="center-btn">
            <button className="discover-btn" onClick={getRandomDogIamge}>🔀 Discover!</button>
            {imageUrl && <img src={imageUrl} alt="Random dog" />}           
        </div>
    );
}

export default DogImage;