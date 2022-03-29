import styled from "styled-components";

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.veryDark};
  font-family: Oswald;
  font-weight: 100;
  letter-spacing: 1px;
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};
  margin: 4px 2px;
  opacity: 0.9;
  transition: 0.3s;

  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }

  &:hover:active {
    cursor: pointer;
    background-color: black;
    opacity: 1;
  }
`;
