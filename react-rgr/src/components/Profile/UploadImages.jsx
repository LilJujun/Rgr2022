import React, {useState, useEffect } from "react";

export default function UploadImages(){

const [images,setImages] = useState([]);
const [imagesURLs,setImageURLs] = useState([]);

useEffect( () =>{

    if (images.length <1) return;
    const newImagesUrls = [];
    images.forEach(image => newImagesUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImagesUrls);
},[images] );

function onImageChange (e){
    setImages([...e.target.files]);
}
return(
    <>
    <input type='file' multiple accept="image/*" onChange={onImageChange}/>
    {imagesURLs.map(imageSrc => <img src={imageSrc}/>)}
    </>
)

}