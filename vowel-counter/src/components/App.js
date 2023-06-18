import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      count: 0,
      word: 0,
    };
  }
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      inputText: value,
    });
    const vowel = value.match(/[aeiou]/gi);
    const count = vowel ? vowel.length : 0;
    this.setState({
      count: count,
    });
    const word = value.length;
    this.setState({
      word: word,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div className="text-center">
          <h1 className="fs-6.5 mt-3 text-danger">Vowel & Word Counter</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="text"
              className="mb-3 mt-3 text-black"
              placeholder="Enter a sentence"
              value={this.state.inputText}
              onChange={this.handleChange}
            />
            <input className="text-primary" type="submit" value="submit" />
          </form>
          <p className="text-info fs-5">{`Total vowel in this sentence is ${this.state.count}`}</p>
          <p className="text-info fs-5">{`Total word in this sentence is ${this.state.word}`}</p>
        </div>
      </>
    );
  }
}

export default App;
