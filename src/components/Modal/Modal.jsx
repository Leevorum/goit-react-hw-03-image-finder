import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './modal.module.css';
import PropTypes from 'prop-types';

const modalPortal = document.querySelector('#modal-portal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleOnClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleOnClose);
  }

  handleOnClose = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClose = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClose}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalPortal,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
