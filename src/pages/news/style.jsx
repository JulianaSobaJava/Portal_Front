import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  padding: 0 3%;
`;

export const Aside = styled.aside`
  width: 25%;
  height: 100%;
`;

export const AsideContent = styled.div`
  padding: 8% 2% 2% 0;
`;

export const SeachInput = styled.div`
  margin: 0 2% 0 2%;
  border-radius: 30px;

  input {
    width: 100%;
    height: 100%;
    padding: 3%;
    border-radius: 30px;
    border: 1px solid #e4e4e4;
  }
`;

export const List = styled.ul`
  margin: 40px 10px 10px 40px;

  h3 {
    margin: 3% 0;
    color: #232332;
    font-size: 30px;
    font-weight: 500;
  }
`;
export const ListItem = styled.li`
  & + li {
    margin-top: 20px;
  }
`;
export const ListArticle = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 4px;
  & + li {
    margin-top: 20px;
  }

  > div {
    width: 40px;
    height: 40px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const Span = styled.span`
  font-size: 18px;
  color: #232332;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  span {
    font-size: 12px;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;

  li {
    background: #e4e4e4;
    padding: 6px;
    margin-top: 10px;
    cursor: pointer;
    & + li {
      margin-left: 20px;
    }
  }
`;
export const Main = styled.div`
  width: 75%;
  height: 100%;
`;
export const Postes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4% 2% 2% 6%;
`;
