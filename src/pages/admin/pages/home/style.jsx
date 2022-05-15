import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 20px;
`;
export const NavContent = styled.div`
  width: 100%;
  padding: 20px 30px;
`;
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 500;
  }
`;

export const CardContentChildren = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 6px;
`;

export const CardsContent = styled.div`
  display: flex;
  flex: 4;
  margin-left: 20px;
`;
export const Card = styled.div`
  padding: 4px 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-color);
  background-size: cover;
  flex: 1;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);

  h5 {
    font-weight: 400;
  }

  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 4px 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      position: relative;
    }
  }
  span {
    font-size: 12px;
  }
`;
export const ContentBody = styled.div`
  display: flex;
  margin-top: 40px;
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
