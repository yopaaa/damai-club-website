import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";
import Image from "next/image";
import styles from '../styles/Gallery.module.css';

function Gallery({ data }) {
  const { frontmatter } = data;
  const { title, images } = frontmatter;

  const [isViewImages, setisViewImages] = useState(false);
  const [viewImageURL, setviewImageURL] = useState(
    "/images/20231123_130131 (1).png"
  );

  return (
    <section className="section">
      {markdownify(title, "h1", "text-center font-normal")}
      <div
        style={{
          position: "fixed",
          backgroundColor: "#80808070",
          width: "100%",
          height: "100%",
          top: 0,
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          display: isViewImages ? "flex" : "none",
        }}
        onClick={() => {
          setisViewImages(false);
          // setviewImageURL(val.image);
        }}
      >
        <div>
          <Image
            src={viewImageURL}
            width={800}
            height={800}
            alt="Picture of the author"
            style={{ borderRadius: 10 }}
          />
          {/* <p style={{position: 'absolute'}}>close</p> */}
        </div>
      </div>

      <div className={styles.galleryContainers}>
        {images.map((val, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${val.image})`,
            }}
            className={styles.imagesContainer}
            onClick={() => {
              setisViewImages(true);
              setviewImageURL(val.image);
            }}
          >
            <div
              style={{
                padding: 5,
                width: 300,
                height: 71,
                // position: "relative",
                background: "rgba(93.50, 93.50, 93.50, 0.67)",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <p
                style={{
                  width: "100%",
                  color: "white",
                  fontSize: 12,
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                {val.title}
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: 10,
                  fontStyle: "italic",
                  fontWeight: "700",
                }}
              >
                {val.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
