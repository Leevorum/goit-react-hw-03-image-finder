import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    modalShow: false,
  };

  handleOnClick = () => {
    this.setState(state => ({
      modalShow: !state.modalShow,
    }));
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          onClick={this.handleOnClick}
        />
        {this.state.modalShow && (
          <Modal onClose={this.handleOnClick}>
            <img
              src={this.props.image.largeImageURL}
              alt={this.props.image.tags}
            />
          </Modal>
        )}
      </li>
    );
  }
}
