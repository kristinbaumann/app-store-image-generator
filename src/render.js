import React, {Component} from 'react';
import { render } from 'react-sketchapp';
import Container from './components/Container';
import getData from './getData';

export default (context) => {
    const data = getData();
    render(
        <Container data={data} />, 
        context.document.currentPage()
    )
}   