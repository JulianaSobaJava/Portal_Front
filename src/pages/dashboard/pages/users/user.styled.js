import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";

export const userList = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const Delete = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;

export const Edit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
