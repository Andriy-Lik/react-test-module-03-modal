import React, { Component } from 'react';
import publications from './Data/publications.json';
import Container from './Container';
import Controls from './Controls';
import Progress from './Progress';
import Publications from './Publications';

const LS_KEY = 'reader_item_index';

class App extends Component {
  state = {
    index: 0,
    items: publications
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({index: Number(savedState)});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    const { index, items } = this.state;
    const currentItem = items[index];
    const totalItems = items.length;

    return (
      <Container items={publications}>
        <Controls 
          current={index} 
          total={totalItems} 
          onChange={this.changeIndex} 
        />
        <Progress current={index + 1} total={totalItems} />
        <Publications title={currentItem.title} text={currentItem.text} />
      </Container>
    );
  }
}

export default App;