import React from "react";
import s from "./App.module.css";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <div className={s.App}>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Текст модалки</h1>{" "}
            <p>
              Это тестовое модальное окно. Рендерится только если поставить
              свойство детей в самой модалке
            </p>
            <button type="button" onClick={this.toggleModal}>
              close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
