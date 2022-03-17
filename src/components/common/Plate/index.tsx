import styled from 'styled-components';

import {Title} from 'components/common/Title';
import {SubTitle} from '../SubTitle';
import {Input} from '../Input';

export const Plate = () => {
  return (
    <Wrap>
      <Title fontSize="4rem">사업자 등록 번호 기반 사업자 상태 조회</Title>
      <br />
      <SubTitle fontSize="2rem">
        사업자 등록 번호로 해당 사업자의 상태를 조회합니다.
        <br />
        해당 결과는 국세청 데이터를 기반합니다.
      </SubTitle>
      <br />
      <Input type="text" placeholder="사업자 등록 번호를 입력해주세요" />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  // 가로 padding 값 제외
  width: calc(90vw - 10rem);
  max-width: calc(1224px - 10rem);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.2rem;
  padding: 5rem;

  // Title, SubTitle, Input 중앙 정렬
  & > h1,
  & > h2,
  & > input {
    align-self: center;
    text-align: center;
  }

  // Input
  & > input {
  }
`;
