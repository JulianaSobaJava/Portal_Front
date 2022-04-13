import styled from "styled-components";
import * as Icons from "react-icons/md";

export const Container = styled.div`
  display: flex;
  padding: 1%;
  border: 4px solid var(--main-color);
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 8;
  margin-right: 50px;
`;
export const Others = styled.div`
  display: flex;
  align-items: center;
  flex: 2;

  span {
    padding: 10px 20px;
    background-color: #333;
    border-radius: 40px;
    color: var(--white-color);
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  cursor: pointer;
  border: 2px solid transparent;
  padding: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;

  &:hover {
    border: 2px solid #333;
  }
`;
export const Settings = styled(Icons.MdSettings)`
  font-size: 1.2em;
  cursor: pointer;
`;
