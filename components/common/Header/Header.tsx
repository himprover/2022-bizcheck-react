import styled from 'styled-components';

export const Header = () => {
  return (
    <Wrap>
      <Logo>BizCheck</Logo>
      <Item>상태조회</Item>
      <Item>진위확인</Item>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: 500;
  width: 50vw;
`;

const Item = styled.div`
  font-size: 2rem;
`;
