import styled from 'styled-components';

interface TitleProps {
  children: string;
}

export const Title = (props: TitleProps) => <Text>{props.children}</Text>;

const Text = styled.h1`
  color: rgb(255, 255, 255);
  filter: drop-shadow(5px 5px 1px #00000050);
  font-size: 5rem;
`;
