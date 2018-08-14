import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
      state = {
      options: [],
      selectedOption: undefined,
      subtitle : ""
    
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
                   
    }
    fetch("https://api.icndb.com/jokes/random").then(response => response.json()).then(json => { this.setState({ subtitle: json.value.joke.replace(/&quot;/g,"'")})
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      fetch("https://api.icndb.com/jokes/random").then(response => response.json()).then(json => { this.setState({ subtitle: json.value.joke.replace(/&quot;/g,"'")})
    })
  }
}
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
   
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    
    this.setState((prevState,prevProps) => ({
        selectedOption: option,
        

    }));
    
  }
  handleCloseModal = () => {
    this.setState({
      selectedOption: undefined
    })
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Chuck Norris can taste lies.';
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists, don't you wanna try something else?";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    
    
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className="widget">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        </div>
        </div>
        <OptionModal handleCloseModal={this.handleCloseModal} selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
