import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import * as S from "../home/style";
import { Sidebar } from "../../components/sidebar";
import * as Ss from "./style";
import NavBar from "../home/mock";
import * as Icons from "react-icons/md";
import { api } from "../../../../services/axios";

const deleteUser = async (id) => {
  api.delete("login");
};
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Nome do usuário", width: 180 },
  { field: "numero", headerName: "Número de Telefone", width: 160 },
  {
    field: "bi",
    headerName: "BI",
    type: "number",
    width: 180,
  },
  {
    field: "endereco",
    headerName: "Endereço",
    width: 180,
  },
  {
    field: "action",
    headerName: "",
    width: 160,
    renderCell: () => {
      return (
        <Ss.Buttons>
          <button style={{ color: "blue" }}>
            <Icons.MdOutlineVisibility />
          </button>
          <button style={{ color: "red" }} onClick={deleteUser()}>
            <Icons.MdOutlineDelete />
          </button>
        </Ss.Buttons>
      );
    },
  },
];

export default function Users() {
  const [user, setQueryUser] = React.useState("");
  const [dataUsers, setdataUsers] = React.useState([]);

  React.useEffect(() => {
    api.get("users").then((response) => {
      setdataUsers(response.data.ExistUser);
    });
  }, [user]);

  console.log(dataUsers);

  const rows = [
    {
      id: 1,
      firstName: "Jon",
      bi: 35,
      numero: "994394902",
      endereco: "Luanda, Palanca",
    },
    { id: 2, firstName: "Cersei", age: 42 },
    { id: 3, firstName: "Jaime", age: 45 },
    { id: 4, firstName: "Arya", age: 16 },
    { id: 5, firstName: "Daenerys", age: null },
    { id: 6, firstName: null, age: 150 },
    { id: 7, firstName: "Ferrara", age: 44 },
    { id: 8, firstName: "Rossini", age: 36 },
    { id: 9, firstName: "Harvey", age: 65 },
  ];
  //   {
  //     schools
  //       .filter((school) =>
  //         school.nome.toLowerCase().includes(query.toLowerCase())
  //       )
  //       .map((school) => {
  //         return <Post nome={school.nome} />;
  //       });
  //   }
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <S.NavContent>
          <NavBar />
        </S.NavContent>

        <Ss.ContentBody>
          <Ss.ContentFirstChild>
            <h3>Usuários</h3>
          </Ss.ContentFirstChild>
          <Ss.ContentSecondChild>
            <button>Criar usuário</button>
            <Ss.Input>
              <input
                placeholder="Pesquisar usuário"
                type="text"
                onChange={(e) => {
                  setQueryUser(e.target.value);
                }}
              />
            </Ss.Input>
          </Ss.ContentSecondChild>
        </Ss.ContentBody>
        <Ss.UserTable>
          <div style={{ height: 600, width: "90%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[8]}
              checkboxSelection
            />
          </div>
        </Ss.UserTable>
      </S.Content>
    </S.Container>
  );
}
