import styled from 'styled-components';

interface TitleProps {
  children: string | React.ReactNode;
  fontSize?: string;
}

interface StyledTextProps {
  fontSize?: string;
}

export const Title = ({children, fontSize}: TitleProps) => (
  <Text fontSize={fontSize}>{children}</Text>
);

const Text = styled.h1<StyledTextProps>`
  color: rgb(255, 255, 255);
  filter: drop-shadow(5px 5px 1px #00000050);
  font-size: ${props => (props.fontSize ? props.fontSize : '5rem')};
`;
