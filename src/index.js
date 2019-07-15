import React from "react";
import ReactDOM from "react-dom";
import { RatingGroup } from './lib'

const bars = [
    { size: 30, color: 'red', title: 'john', limit: 10 },
    { size: 100, color: 'green', title: 'dani', limit: 1 },
    { size: 90, color: 'yellow', title: 'david'},
    { size: 41, color: 'blue', title: 'avi' }
];

ReactDOM.render(
    <div style={{width: 800, height: 300}}>
        <RatingGroup bars={bars} empHighest={true} />
    </div>,
    document.getElementById("root")
);