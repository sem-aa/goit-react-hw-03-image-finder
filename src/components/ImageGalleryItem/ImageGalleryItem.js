import React from "react";
import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem(picture, onClick) {
  const { id, webformatURL, tags, largeImageURL } = picture.props;

  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}
