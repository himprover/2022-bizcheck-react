import styled from 'styled-components';
import {Background} from '../Background/Background';

export const BackgroundCover = () => <StyledCover />;

const StyledCover = styled(Background)`
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
`;
