import React from "react";
import s from "./Searchbar.module.css";
import { toast } from "react-toastify";

class Searchbar extends React.Component {
  state = {
    pictureName: "",
  };

  handlePictureChange = (event) => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.pictureName.trim() === "") {
      toast.error("Введите название картинки");
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            name="pictureName"
            value={this.state.pictureName}
            onChange={this.handlePictureChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
