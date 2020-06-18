import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../Button';
// import { isTSAnyKeyword } from '@bable/types';

it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})
