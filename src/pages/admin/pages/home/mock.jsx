import React from "react";
import * as Icons from "react-icons/md";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 10px 4px rgba(201, 201, 201, 0.47);
  align-items: center;
  padding: 4px 8px;

  ul {
    display: flex;
    align-items: center;

    li {
      & + li {
        margin-left: 20px;
      }
    }
  }
`;

const AdminInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 4px;

  p {
    font-size: 10px;
    display: flex;
    align-items: center;

    div {
      width: 8px;
      height: 8px;
      background-color: #50f150;
      border-radius: 50%;
      margin-right: 1px;
    }
  }
`;

const PictureProfile = styled.span`
  height: 30px;
  width: 30px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  border-radius: 50%;
  padding: 1px;
`;

export default function NavBar() {
  return (
    <Navbar>
      <ul>
        <li>
          <Icons.MdOutlineNotifications />
        </li>
        <li>
          <Icons.MdOutlineEmail />
        </li>
        <li>
          <Icons.MdOutlineMessage />
        </li>
        <li>
          <Icons.MdOutlineCalendarToday />
        </li>
      </ul>

      <AdminInfo>
        <span>
          <h6>Java 23</h6>
          <p>
            <div></div>Super Admin
          </p>
        </span>
        <PictureProfile>
          <Icons.MdPerson />
        </PictureProfile>
      </AdminInfo>
    </Navbar>
  );
}
