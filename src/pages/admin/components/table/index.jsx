import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Nome", headerName: "Nome do Usuário", width: 180 },
];

const rows = [
  { id: 1, Nome: "Jon" },
  { id: 2, Nome: "Cersei" },
  { id: 3, Nome: "Jaime" },
  { id: 4, Nome: "Arya" },
  { id: 5, Nome: "Daenerys" },
  { id: 6, Nome: null },
  { id: 7, Nome: "Ferrara" },
  { id: 8, Nome: "Rossini" },
  { id: 9, Nome: "Harvey" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
