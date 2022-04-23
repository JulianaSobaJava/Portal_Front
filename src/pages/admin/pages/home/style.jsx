import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const Charts = styled(Widgets)`
  padding: 5px 20px !important;
`;

export const HomeContainer = styled.div`
  flex: 6;
`;

export const ListContainer = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;

export const ListTittle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;
