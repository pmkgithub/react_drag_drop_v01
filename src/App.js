import React, { Component } from 'react';
import styled from 'styled-components';
import DndTest from './dragndrop/dndtest';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div``;


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <AppWrapper>
        <Container>
          <DndTest />
        </Container>
      </AppWrapper>
    );
  }
}

export default App;
