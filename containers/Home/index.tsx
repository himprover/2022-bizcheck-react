import {BackgroundCover} from 'components/common/BackgroundCover/BackgroundCover';
import {BackgroundImage} from 'components/common/BackgroundImage/BackgroundImage';
import {Button} from 'components/common/Button/Button';
import type {NextPage} from 'next';
import styled from 'styled-components';

export const Home: NextPage = () => {
  return (
    <>
      <BackgroundImage backgroundUrl={'https://i.ibb.co/FXYwDSj/home-bg.jpg'} />
      <BackgroundCover />
      <Wrap>
        <Button>바로가기</Button>
      </Wrap>
    </>
  );
};

const Wrap = styled.div``;
