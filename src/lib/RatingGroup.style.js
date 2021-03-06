import styled, { keyframes, css } from 'styled-components';

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
  position: relative;
`;

const fillBar = ({ size }) => keyframes`
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
  -webkit-animation-name: ${fillBar};
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: ease-out;
  animation-name: ${fillBar};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  
  ${({ isGlowing }) => isGlowing && 
    css`
        transition: box-shadow 0.3s;
        transition-timing-function: ease;
        :hover {
            box-shadow: 2px 2px 10px ${({color}) => color};
        }
    `}
  }
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

export const Limit = styled.div`
    position: absolute;
    left: ${({limit}) => limit > 100 ? 100 : limit}%;
    top: 0;
    height: 60%;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 10px;
    border-right: #676766 7px solid;
`;
