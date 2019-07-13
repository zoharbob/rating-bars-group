import React from 'react';
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle } from './RatingGroup.style';
import PropTypes from 'prop-types';

const RatingGroup = ({ bars, empHighest }) => {

    const barSizes = bars.map(({ size = 0 }) => size);

    return (
        <RatingGroupContainer>
            {bars.map( ({ size = 0, color = 'black', title }, index) => (
                    <BarContainer key={index}>
                        <BarTitle>
                            {title}
                        </BarTitle>
                        <BarLengthContainer>
                            <Bar size={size > 100 ? 100 : size} color={color} />
                        </BarLengthContainer>
                        <Size
                            empHighest={empHighest}
                            isMax={size === Math.max(...barSizes)}
                        >
                            {size > 100 ? 100 : size}%
                        </Size>
                    </BarContainer>
                )
            )}
        </RatingGroupContainer>
    )
};

export default RatingGroup;

RatingGroup.propTypes = {
    bars: PropTypes.array.isRequired,
    empHighest: PropTypes.bool
}