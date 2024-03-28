import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "/src/Styles/Gallery.module.css";

const Gallery = () => {
  const nImages = 16;
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState({ img: "", i: 0 });
  const [showOtherImages, setShowOtherImages] = useState(true);

  useEffect(() => {
    const imagesArray = [];
    for (let i = 1; i <= nImages; i++) {
      const route = `/images/${i}.jpg`;
      imagesArray.push(route);
    }
    setImages(imagesArray);
  }, []);

  const viewImage = (img, i) => {
    setSelectedImage({ img, i });
    setShowOtherImages(false);
  };

  const closeImage = () => {
    setSelectedImage({ img: "", i: 0 });
    setShowOtherImages(true);
  };

  const actionImg = (action) => {
    let i = selectedImage.i;
    if (action === "next" && i < images.length - 1) {
      setSelectedImage({ img: images[i + 1], i: i + 1 });
    } else if (action === "previous" && i > 0) {
      setSelectedImage({ img: images[i - 1], i: i - 1 });
    }
  };

  return (
    <>
      {selectedImage.img && (
        <div className={styles.modal}>
          <button onClick={closeImage} className={styles.closeButtom}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <button onClick={() => actionImg("next")} className={styles.next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevrons-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7l5 5l-5 5" />
              <path d="M13 7l5 5l-5 5" />
            </svg>
          </button>
          <button
            onClick={() => actionImg("previous")}
            className={styles.previous}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevrons-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 7l-5 5l5 5" />
              <path d="M17 7l-5 5l5 5" />
            </svg>
          </button>
          <img
            src={selectedImage.img}
            alt={selectedImage.i}
            className={styles.imgModal}
          />
        </div>
      )}
      <div
        className={styles.contenedor}
        style={{ display: showOtherImages ? "block" : "none" }}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 750: 2, 800: 4 }}>
          <Masonry gutter="8px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className={styles.img}
                alt={i}
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
