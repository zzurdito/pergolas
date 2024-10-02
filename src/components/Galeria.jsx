
import { useState, useEffect } from "react";
import Imagen from "./Imagen";

const images = import.meta.glob('../images/galeria/*.webp', {eager: false});

function Galeria() {

    const [imageList, setImageList] = useState([])

    useEffect(() => {
        const loadImages = async () => {
          const imgPromises = Object.values(images).map(async (importImage) => {
            const img = await importImage();
            return img.default;
          });
    
          const imgs = await Promise.all(imgPromises);
          setImageList(imgs);
        };
        loadImages();
      }, []);
  return (
    <div className="galeria__fotos">
    {
        imageList.map((src, index) =>{
            return(
            <Imagen source={src} key={index}/>
            )
        })
    }
    </div>
  )
}

export default Galeria