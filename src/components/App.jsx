import React, { Component } from 'react';

import Container from './Container';

class App extends Component {
  state = {
    showModal: false
  };

   // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
    
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }
  // }

  toggleModal =() => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  } 

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {/* Если showModal=true рендерим <Modal /> */}
        {showModal && (
          <Modal>
            <h1>Привет это контент модалки как children</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Quae cumque reiciendis pariatur deserunt tempora adipisci eaque ipsam, 
              incidunt libero in soluta numquam commodi sapiente nulla doloribus 
              cum saepe dicta eligendi.
            </p>
            <button type='button' onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
        
      </Container>
    );
  }
}

export default App;