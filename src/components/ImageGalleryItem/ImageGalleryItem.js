import React from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  saveSrcImgModal,
}) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={() => {
          saveSrcImgModal({ largeImageURL, tags });
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  saveSrcImgModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
