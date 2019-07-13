import React from "react";
import ReactDOM from "react-dom";
import { RatingGroup } from './lib'

const bars = [
    { size: 30, color: 'red', title: 'john'},
    { size: 100, color: 'green', title: 'dani'},
    { size: 90, color: 'yellow', title: 'jessica'},
    { size: 41, color: 'blue', title: 'avi'}
];

ReactDOM.render(
    <div style={{width: 800, height: 300}}>
        <RatingGroup bars={bars} empHighest={true} />
    </div>,
    document.getElementById("root")
);