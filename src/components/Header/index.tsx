import styled from 'styled-components';

import {useResponsive} from 'hooks/useResponsive';
import {MobileMenu} from 'components/Header/MobileMenu';
import Link from 'next/link';

export const Header = () => {
  const isMobile = useResponsive({type: 'mobile'});
  return (
    <Wrap>
      <Logo>BizCheck</Logo>

      {isMobile ? (
        <MobileMenu />
      ) : (
        <>
          <Link href="/StatusCheck">
            <Item>상태조회</Item>
          </Link>
          <Link href="/ValidationCheck">
            <Item>진위확인</Item>
          </Link>
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

const Item = styled.a`
  font-size: 2rem;
  cursor: pointer;
`;
