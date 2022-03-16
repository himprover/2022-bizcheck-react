import styled from 'styled-components';

export const Footer = () => {
  return (
    <Wrap>
      <Text>Developer : Himprover</Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 6rem;
  background: #242424;
`;

const Text = styled.div`
  font-size: 2rem;
`;
