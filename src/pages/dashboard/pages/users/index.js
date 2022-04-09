import React, { useState, useEffect } from "react";
import Container from "../../components/container/index";
import * as style from "./user.styled";
import { api } from "../../config/services/axios";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { userRows } from "../../data/dataUserRow";

export default function Users() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "Usuário",
      width: 350,
      renderCell: (params) => {
        return (
          <style.userList>
            <img src={params.row.userAvatar} alt="" />
            {params.row.userName}
          </style.userList>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 300,
      editable: true,
    },
    {
      field: "contact",
      headerName: "Contacto",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <style.Edit>Edit</style.Edit>
            </Link>
            <style.Delete onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUser(response.data.ExistUser);
      })
      .catch((e) => {
        console.log("erro ups", e);
      });
  }, []);

  console.log("user", user);

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
}
