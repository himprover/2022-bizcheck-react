import {useState} from 'react';
import styled from 'styled-components';

import {Icon} from 'components/common/Icon/Icon';
import {BackgroundCover} from 'components/common/BackgroundCover/BackgroundCover';
import Link from 'next/link';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setIsOpen(state => !state);
  };

  return (
    <>
      <Wrap onClick={clickHandler}>
        {isOpen ? <Icon>close</Icon> : <Icon>menu</Icon>}
      </Wrap>
      {isOpen && (
        <Menu>
          <Link href="/StatusCheck">
            <Item>상태조회</Item>
          </Link>
          <Link href="/ValidationCheck">
            <Item>진위확인</Item>
          </Link>
        </Menu>
      )}
      {isOpen && (
        <BackgroundCover color="#00000030" zIndex={1} onClick={clickHandler} />
      )}
    </>
  );
};

const Wrap = styled.div`
  z-index: 3;
`;

const Menu = styled.div`
  z-index: 2;
  width: 40vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  background: #585858;
  padding-top: 5rem;
`;

const Item = styled.a`
  font-size: 2rem;
`;
