import React from "react";
import { ToastContainer } from "react-toastify";
import s from "./App.module.css";

import Searchbar from "./components/Searchbar/Searchbar";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends React.Component {
  state = {
    pictureName: "",
  };

  searchBarSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.searchBarSubmit} />

        <ImageGallery pictureName={this.state.pictureName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
