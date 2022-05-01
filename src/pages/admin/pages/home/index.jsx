import React from "react";
import { Sidebar } from "../../components/sidebar";
import * as S from "./style";

export function AdminHome() {
  return (
    <>
      <Sidebar />
      <S.Container>Admin Home</S.Container>
    </>
  );
}
