import s from './button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
