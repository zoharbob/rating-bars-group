import React from "react";
import { mount } from 'enzyme';
import { RatingGroup } from "./index";
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle } from './RatingGroup.style';

const bars = [
    { size: 30, color: 'red', title: 'john'},
    { size: 100, color: 'green', title: 'dani'},
    { size: 90, color: 'yellow', title: 'jessica'},
    { size: 41, color: 'blue', title: 'avi'}
];

describe('Rating Group', () => {

    it('render correctly', () => {

        const ratingGroup = mount(<RatingGroup bars={bars} />);
        const barSizes = ratingGroup.prop('bars').map(({ size = 0 }) => size);

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

    it('passing props correctly', () => {
        const ratingGroup = mount(<RatingGroup bars={bars} empHighest={true} />);

        expect(ratingGroup.prop('empHighest')).toBe(true);
    })

});