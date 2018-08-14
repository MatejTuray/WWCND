import React from 'react';

export default class AddOption extends React.Component {
    state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="addoption-error">{this.state.error}</p>}
        <form className="addoption" onSubmit={this.handleAddOption}>
          <input className="addoption__input" type="text" name="option" placeholder="Write something in here..." />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
