import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/container/index";
import * as style from "./user.styled";
import * as Icons from "@material-ui/icons";
import Form from "../../../components/form/form";

export default function User() {
  return (
    <>
      <Container>
        <style.User>
          <style.UserUpdateTittle>
            <h1>Editar Usuário</h1>
            <Link to="/newUser">
              <button>Criar Usuário</button>
            </Link>
          </style.UserUpdateTittle>
          <style.UserContainer>
            <style.UserProfile>
              <style.UserInfoTop>
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div>
                  <h3>Anna Becker</h3>
                  <span>Software Engineer</span>
                </div>
              </style.UserInfoTop>
              <style.UserInfoBottom>
                <h4>Detalhes da Conta</h4>
                <style.Info>
                  <Icons.PermIdentity style={{ fontSize: "16px" }} />
                  <span>annabeck99</span>
                </style.Info>

                <style.Info>
                  <Icons.CalendarToday style={{ fontSize: "16px" }} />
                  <span>10.12.1999</span>
                </style.Info>

                <span>Contactos</span>
                <style.Info>
                  <Icons.PhoneAndroid style={{ fontSize: "16px" }} />
                  <span>+1 123 456 67</span>
                </style.Info>
                <style.Info>
                  <Icons.MailOutline style={{ fontSize: "16px" }} />
                  <span>annabeck99@gmail.com</span>
                </style.Info>
                <style.Info>
                  <Icons.LocationSearching style={{ fontSize: "16px" }} />
                  <span>New York | USA</span>
                </style.Info>
              </style.UserInfoBottom>
            </style.UserProfile>
            <style.UserFormUpdate>
              <style.UserUpdateTittleForm>Editar</style.UserUpdateTittleForm>

              <Form />
            </style.UserFormUpdate>
          </style.UserContainer>
        </style.User>
      </Container>
    </>
  );
}
