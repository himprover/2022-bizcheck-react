import styled from 'styled-components';

interface SubTitleProps {
  children: string | React.ReactNode;
  fontSize?: string;
}

interface StyledTextProps {
  fontSize?: string;
}

export const SubTitle = ({children, fontSize}: SubTitleProps) => (
  <Text fontSize={fontSize}>{children}</Text>
);

const Text = styled.h2<StyledTextProps>`
  color: rgb(255, 255, 255);
  filter: drop-shadow(3px 3px 1px #00000050);
  font-size: ${props => (props.fontSize ? props.fontSize : '3rem')};
  font-weight: 3;
`;
