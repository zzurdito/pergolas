import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 500px;
  position: relative;
  margin: 60px 0px;
  gap: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  overflow: hidden;
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  margin: 0 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AnimatedRow = styled(Row)`
  animation: ${(props) => (props.direction === "left" ? moveLeft : moveRight)} 300s linear infinite;
`;

const images = import.meta.glob('../images/galeria/*.webp', {eager: false}); // Usamos glob()
console.log('Images found:', images);

const Carousel = () => {
  const [imageList, setImageList] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);


  useEffect(() => {
    const loadImages = async () => {
      const imgPromises = Object.values(images).map(async (importImage) => {
        const img = await importImage();
        return img.default;
      });

      const imgs = await Promise.all(imgPromises);
      setImageList(imgs);

       // Mezcla las imágenes para la fila inferior
       const shuffled = [...imgs].sort(() => Math.random() - 0.5);
       setShuffledImages(shuffled);
    };

    loadImages();
  }, []);

    // Duplica las imágenes para evitar el vacío al final
    const duplicatedImageList = [...imageList, ...imageList];
    const duplicatedShuffledImages = [...shuffledImages, ...shuffledImages];

  return (
    <CarouselContainer>
      <AnimatedRow direction="left">
        {duplicatedImageList.map((src, index) => {
           console.log(`Image ${index} src:`, src); 
           return(
          <ImageWrapper className="image-wrapper" key={index}>
            <img src={src} alt={`Image ${index}`} />
          </ImageWrapper>
           );
        })}
      </AnimatedRow>
      <AnimatedRow className="image-wrapper" direction="right">
        {duplicatedShuffledImages.map((src, index) => (
          <ImageWrapper key={index}>
            <img src={src} alt={`Image ${index}`} />
          </ImageWrapper>
        ))}
      </AnimatedRow>
    </CarouselContainer>
  );
};

export default Carousel;