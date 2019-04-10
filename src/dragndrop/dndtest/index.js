import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from '../draggable';
import Droppable from '../droppable';

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
`;

const Item = styled.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

// demonstrates propse can be passed to Styled Components
const itemStyle = {
    margin: '8px',
};

const droppableStyle = {
    backgroundColor: '#555',
    width: '250px',
    height: '300px',
    margin: '32px',
};

export default class DndTest extends Component {
    render() {
        return (
            <Wrapper>
                <Droppable id="dir1" style={droppableStyle}>
                    <Draggable id="dragabble1" >
                        <Item style={itemStyle}>Some Text</Item>
                    </Draggable>
                </Droppable>
                <Droppable id="dir2" style={droppableStyle}>
                    <Draggable id="dragabble2">
                        <Item style={itemStyle}>Foo Foo</Item>
                    </Draggable>
                    <Draggable id="dragabble3">
                        <Item style={itemStyle}>Bar Bar</Item>
                    </Draggable>
                </Droppable>
            </Wrapper>
        );
    }
};