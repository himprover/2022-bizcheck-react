import {useResponsive} from 'hooks/useResponsive';
import styled from 'styled-components';
import {MobileMenu} from 'components/Header/MobileMenu';

export const Header = () => {
  const isMobile = useResponsive({type: 'mobile'});
  return (
    <Wrap>
      <Logo>BizCheck</Logo>

      {isMobile ? (
        <MobileMenu />
      ) : (
        <>
          <Item>상태조회</Item>
          <Item>진위확인</Item>
        </>
      )}
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
