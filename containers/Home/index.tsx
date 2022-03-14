import type {NextPage} from 'next';
import styled from 'styled-components';

import {BackgroundCover} from 'components/common/BackgroundCover/BackgroundCover';
import {BackgroundImage} from 'components/common/BackgroundImage/BackgroundImage';
import {Button} from 'components/common/Button/Button';
import {Title} from 'components/Home/Title';

export const Home: NextPage = () => {
  return (
    <>
      <BackgroundImage backgroundUrl={'https://i.ibb.co/FXYwDSj/home-bg.jpg'} />
      <BackgroundCover />
      <Content>
        <Title>사업자 등록 번호로 검색하고,</Title>
        <Title>진위 여부를 확인해보세요.</Title>
        <Button>바로가기</Button>
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18vh;
  padding-top: 10vh;
`;
