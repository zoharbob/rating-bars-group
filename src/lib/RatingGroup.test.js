import React from "react";
import { mount } from 'enzyme';
import { RatingGroup } from "./index";
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle, Limit } from './RatingGroup.style';

const bars = [
    { size: 30, color: 'red', title: 'john', limit: 80},
    { size: 100, color: 'green', title: 'dani'},
    { size: 90, color: 'yellow', title: 'jessica', limit: 10},
    { size: 41, color: 'blue', title: 'avi'}
];

describe('Rating Group', () => {

    it('render correctly', () => {

        const ratingGroup = mount(<RatingGroup bars={bars} />);
        const barSizes = ratingGroup.prop('bars').map(({ size = 0 }) => size);
        const limitCount = ratingGroup.prop('bars').filter(({ limit }) => limit).length;

        expect(ratingGroup.prop('bars')).toEqual(bars);

        const ratingGroupContainer = ratingGroup.find(RatingGroupContainer);

        expect(ratingGroupContainer).toHaveLength(1);
        expect(ratingGroupContainer.find(BarContainer)).toHaveLength(ratingGroup.prop('bars').length);
        expect(ratingGroupContainer.find(BarTitle)).toHaveLength(ratingGroup.prop('bars').length);
        expect(ratingGroupContainer.find(BarLengthContainer)).toHaveLength(ratingGroup.prop('bars').length);
        expect(ratingGroupContainer.find(Size)).toHaveLength(ratingGroup.prop('bars').length);

        expect(ratingGroupContainer.find(BarTitle).forEach((node, index) => {
            const title = ratingGroup.prop('bars')[index].title;
            expect(node.prop('children')).toEqual(title);
        }));

        expect(ratingGroupContainer.find(BarLengthContainer).forEach((node, index) => {
            const size = ratingGroup.prop('bars')[index].size;
            const color = ratingGroup.prop('bars')[index].color;
            const bar = node.find(Bar);
            const limitComp = ratingGroup.find(Limit);

            expect(limitComp).toHaveLength(limitCount);
            expect(bar.props()).toMatchObject({ size, color });
        }));

        expect(ratingGroupContainer.find(Size).forEach((node, index) => {
            const empHighestProp = ratingGroup.prop('empHighest');
            const size = ratingGroup.prop('bars')[index].size;
            const isMaxProp = size === Math.max(...barSizes);

            expect(node.props()).toMatchObject({ empHighest: empHighestProp, isMax: isMaxProp });
            expect(node.prop('children')).toEqual([size, '%']);
        }));

    });

    it('passing limitBars prop', () => {
        const ratingGroup = mount(<RatingGroup bars={bars} limitBars={10} />);
        const limitComp = ratingGroup.find(Limit);
        const limitBarsProp = ratingGroup.prop('limitBars');

        expect(limitComp).toHaveLength(ratingGroup.prop('bars').length);
        limitComp.forEach(node => {
            expect(node.prop('limit')).toEqual(limitBarsProp);
        })
    });

    it('passing props correctly', () => {
        const ratingGroup = mount(<RatingGroup bars={bars} empHighest={true} />);

        expect(ratingGroup.prop('empHighest')).toBe(true);
    })

});