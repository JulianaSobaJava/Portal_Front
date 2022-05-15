import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  flex: 1;
  padding: 6px 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Span = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--main-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Div = styled.div`
  h6 {
    font-weight: 400;
  }
  label {
    margin: 4px;
    font-size: 14px;
    & + label {
      color: var(--main-color);
    }
  }
`;

export const NewUsers = styled.div`
  width: 90%;
  margin-bottom: 14px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px;

  span {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: blue;
    font-size: 12px;
    display: flex;
    align-items: center;
    border: 1px solid var(--main-color);

    & + span {
      position: absolute;
      left: 20px;
    }
  }
`;
