import { Component } from 'react';
import s from './searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = { input: '' };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className={s.Searchbar} onSubmit={this.handleSubmit}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            name="input"
            value={this.state.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
