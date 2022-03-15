import styled, {css} from 'styled-components';
import {Background} from '../Background/Background';

export interface BackgroundCoverProps {
  color?: string;
  zIndex?: number;
}

export const BackgroundCover = ({color, zIndex}: BackgroundCoverProps) => (
  <StyledCover color={color} zIndex={zIndex} />
);

const StyledCover = styled(Background)<BackgroundCoverProps>`
  z-index: -1;
  background-color: ${props =>
    props.color ? props.color : 'rgba(0, 0, 0, 0.2)'};
  ${props =>
    props.zIndex
      ? css`
          z-index: ${props.zIndex};
        `
      : null}
  backdrop-filter: blur(1px);
`;
