import React, { useEffect, useRef } from 'react';
import { RatingGroupContainer, BarContainer, Bar, BarLengthContainer, Size, BarTitle, Limit } from './RatingGroup.style';
import PropTypes from 'prop-types';

const RatingGroup = ({ bars, empHighest, limitBars, className, onFinish }) => {

    const barRef = useRef(null);

    const barSizes = bars.map(({ size = 0 }) => size);

    const checkLimit = limit => {
        const num = limitBars ? limitBars : limit;
        return Math.sign(num) === 1 ? true : false;
    }

    useEffect(() => {
        barRef.current.addEventListener('webkitAnimationEnd', onFinish);

        return () => {
            barRef.current.removeEventListener('webkitAnimationEnd');
        }
    }, [])

    return (
        <RatingGroupContainer className={`rating-container ${className}`}>
            {
                bars.map(({size = 0, color = 'black', title = '', limit}) => {
                    const sizeValue = isNaN(size) ? 0 : size;

                    return (
                        <BarContainer key={size + color + title}>
                            <BarTitle>
                                {title}
                            </BarTitle>
                            <BarLengthContainer>
                                <Bar size={sizeValue > 100 ? 100 : sizeValue} color={color} ref={barRef} />
                                {checkLimit(limit || limitBars) ? <Limit limit={limitBars ? limitBars : limit} /> : ''}
                            </BarLengthContainer>
                            <Size
                                empHighest={empHighest}
                                isMax={sizeValue === Math.max(...barSizes)}
                            >
                                {sizeValue > 100 ? 100 : sizeValue}%
                            </Size>
                        </BarContainer>
                    )
                })
            }
        </RatingGroupContainer>
    );
};

export default RatingGroup;

RatingGroup.propTypes = {
    bars: PropTypes.array.isRequired,
    empHighest: PropTypes.bool,
    limitBars: PropTypes.number
}