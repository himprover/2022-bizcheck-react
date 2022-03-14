import styled from 'styled-components';

export interface ButtonProps {
  children?: string;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 1.5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: 100;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 10rem;
`;
