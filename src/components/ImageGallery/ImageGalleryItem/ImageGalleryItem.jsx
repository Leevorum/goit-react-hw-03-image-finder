import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import s from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

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
    const { tags, webformatURL, largeImageURL } = this.props.image;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={this.handleOnClick}
        />
        {this.state.modalShow && (
          <Modal onClose={this.handleOnClick}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propType = {
  image: PropTypes.object.isRequired,
};
