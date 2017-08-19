import React, {Component} from 'react';
import { render } from 'react-sketchapp';
import Container from './components/Container';
import getData from './helper/getData';

export default (context) => {
    render(
        <Container data={getData()} />, 
        context.document.currentPage()
    )
}   