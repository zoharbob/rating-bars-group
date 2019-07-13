import styled, { keyframes } from 'styled-components';

export const RatingGroupContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;

export const BarContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BarLengthContainer = styled.div`
  width: 92%;
  height: 30px;
  background-color: #e5e5e5;
  flex: 1;
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
`;

export const BarTitle = styled.div`
  padding: 10px;
  width: 50px;
`

export const Size = styled.div`
  margin-left: 10px;
  width: 30px;
  padding: 10px;
  font-size: ${({ empHighest, isMax }) => empHighest && isMax ? '12.5px' : '12px'};
  font-weight: ${({ empHighest, isMax }) => empHighest && isMax && 'bold'};
`;
