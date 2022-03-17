import styled from 'styled-components';

interface InputProps extends React.HTMLAttributes<HTMLElement> {
  type: string;
  placeholder?: string;
}
export const Input = ({placeholder, type}: InputProps) => (
  <StyledInput type={type} placeholder={placeholder} />
);

const StyledInput = styled.input`
  width: 28rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.38);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  font-size: 2rem;
  font-weight: 300;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  &::placeholder {
    color: rgb(255, 255, 255);
  }
  &:focus {
    width: 40rem;
  }
`;
