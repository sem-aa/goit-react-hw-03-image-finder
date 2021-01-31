import React from "react";
import Button from "../Button/Button";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import s from "./ImageGallery.module.css";
import Modal from "../Modal/Modal";

class ImageGallery extends React.Component {
  state = {
    pictures: null,
    status: "idle",
    page: 1,
    showModal: false,
    image: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      await this.setState({ status: "pending", page: 1 });
      const key = "19324940-21d8938b8dfbc074399017655";

      fetch(
        `https://pixabay.com/api/?q=${this.props.pictureName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((respone) => respone.json())
        .then((pictures) => {
          if (pictures.hits.length === 0) {
            this.setState({ status: "rejected" });
            return;
          }
          this.setState({
            pictures: [...pictures.hits],
            status: "resolved",
            page: this.state.page + 1,
          });
        });
    }
  }

  nextPage = () => {
    const key = "19324940-21d8938b8dfbc074399017655";

    fetch(
      `https://pixabay.com/api/?q=${this.props.pictureName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((respone) => respone.json())
      .then((pictures) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures.hits],
          page: this.state.page + 1,
        }));
      });
    this.scrollTo();
  };

  handleClickImg = (e) => {
    if (e.currentTarget) {
      console.log(e.currentTarget);
      this.setState();
    }
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { pictures, status } = this.state;
    const { pictureName } = this.props;

    if (status === "idle") {
      return (
        <div className={s.ImageGallery}>Введите имя картинки для поиска</div>
      );
    }

    if (status === "pending") {
      return <Loader className={s.ImageGallery} pictureName={pictureName} />;
    }

    if (status === "rejected") {
      return (
        <div className={s.ImageGallery}>
          Картитинки с именем {pictureName} не существует
        </div>
      );
    }

    if (status === "resolved") {
      return (
        <>
          <ul onClick={this.handleClickImg} className={s.ImageGallery}>
            {pictures.map((picture) => (
              <ImageGalleryItem props={picture} />
            ))}
          </ul>
          <Button loadMore={this.nextPage} />
          <button type="button" onClick={this.toggleModal}>
            Open modal
          </button>
          {this.state.showModal && (
            <Modal onClose={this.toggleModal}>
              {" "}
              <img src={pictures[0].webformatURL} alt="" />
            </Modal>
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
