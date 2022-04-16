import styled from "styled-components";

export const Container = styled.div`
  padding: 2% 3%;
  margin: 0 3% 0 10px;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.6);
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  text-align: left;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 0.5em 1em;
    text-align: left;
    line-height: 1.5rem;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  display: table;
`;
export const CardInfo = styled.span`
  display: flex;
  justify-content: space-between;
`;
