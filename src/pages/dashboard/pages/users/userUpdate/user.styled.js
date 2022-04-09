import styled from "styled-components";
// import {
//   CalendarToday,
//   LocationSearching,
//   MailOutline,
//   ,
//   PhoneAndroid,
//   Publish,
// } from "@material-ui/icons";

export const User = styled.div`
  flex: 4;
  padding: 0 3%;
`;
export const UserUpdateTittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    padding: 8px 5px;
    background-color: var(--main-color);
    border-radius: 5px;
    cursor: pointer;
    color: var(--black-color);
    font-size: 18px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const UserProfile = styled.div`
  flex: 1;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const UserFormUpdate = styled.div`
  flex: 2;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
  position: relative;
`;
export const UserInfoTop = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  h3 {
    font-weight: 600;
    margin: 0;
  }

  span {
    font-weight: 300;
  }
`;

export const UserInfoBottom = styled.div`
  margin-top: 20px;

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;

  span {
    margin-left: 10px;
  }
`;

export const UserUpdateTittleForm = styled.span`
  margin-bottom: 100px;
`;

// .userUpdateForm{
//     display: flex;
//     justify-content: space-between;
//     margin-top: 20px;
// }

// .userUpdateItem{
//     display: flex;
//     flex-direction: column;
//     margin-top: 10px;
// }

// .userUpdateItem>label{
//     margin-bottom: 5px;
//     font-size: 14px;
// }

// .userUpdateInput{
//     border: none;
//     width: 250px;
//     height: 30px;
//     border-bottom: 1px solid gray;
// }

// .userUpdateRight{
//
// }

// .userUpdateUpload{
//
// }

// .userUpdateImg{
//
// }

// .userUpdateIcon{
//     cursor: pointer;
// }

// .userUpdateButton{
//     border-radius: 5px;
//     border: none;
//     padding: 5px;
//     cursor: pointer;
//     background-color: darkblue;
//     color: white;
//     font-weight: 600;
// }
