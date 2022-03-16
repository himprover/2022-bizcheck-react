import styled from 'styled-components';
import {Background} from 'components/common/Background';

export interface BackgroundImageProps {
  backgroundUrl: string;
}

interface StyledBackgroundImageProps {
  backgroundUrl: string;
}

export const BackgroundImage = ({backgroundUrl}: BackgroundImageProps) => {
  return <StyledBackgroundImage backgroundUrl={backgroundUrl} />;
};

const StyledBackgroundImage = styled(Background)<StyledBackgroundImageProps>`
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.backgroundUrl});
`;
