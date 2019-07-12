import styled, { keyframes } from 'styled-components';

export const RatingGroupContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  padding: 30px;
`;

export const BarContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BarLengthContainer = styled.div`
  width: 95%;
  height: 30px;
  background-color: #e5e5e5;
`;

const rotate = ({ size }) => keyframes`
  from {
    width: 0;
  }

  to {
    width: ${size}%;
  }
`;

export const Bar = styled.div`
  width: ${({ size }) => size}%;
  height: 100%;
  background-color: ${({ color }) => color};
  border-bottom-right-radius: ${({ size }) => size === 100 ? 0 : '15px'};
  border-top-right-radius: ${({ size }) => size === 100 ? 0 : '15px'};
  animation-name: ${rotate};
  animation-duration: 2s;
  animation-timing-function: ease-out;
`

export const Size = styled.div`
  font-size: ${({ empHeight, isMax }) => empHeight && isMax ? '12.5px' : '12px'};
  font-weight: ${({ empHeight, isMax }) => empHeight && isMax && 'bold'};
`
