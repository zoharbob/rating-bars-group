import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from  '@storybook/addon-knobs';
import { RatingGroup } from '../lib';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

const bars = [
    { size: 30, color: 'red', title: 'Angular' },
    { size: 100, color: '#53D2F9', title: 'React' },
    { size: 90, color: 'green', title: 'Vue' }
];

stories.add('Props', () => (
    <RatingGroup bars={bars} empHighest={boolean('empHighest')} limitBars={number('limitBars', 50)} />
));