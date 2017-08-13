import React, {Component} from 'react';
import { render } from 'react-sketchapp';
import Container from './components/Container';

export default (context) => {
    render(
        <Container />, 
        context.document.currentPage()
    )
}   