import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 12.4%;
`;
export const ContentBody = styled.div`
  background-color: var(--grey-text-color);
  margin-top: 15px;
  padding: 2% 2%;
`;
export const Body = styled.div`
  border: 1px solid var(--grey-dark);
  background-color: var(--white-color);
  padding: 2% 4%;
`;

export const Head = styled.div`
  padding: 2% 0;
  border-bottom: 2px solid var(--grey-text-color);

  h2 {
    font-size: 2em;
  }
`;
export const Midle = styled.div`
  width: 100%;
  padding: 2% 0;
  display: flex;
  justify-content: flex-end;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
export const SectionContent = styled.div`
  padding: 1% 1%;
  border: 0.5px solid var(--grey-text-color);
  border-radius: 10px;

  & + div {
    margin-top: 20px;
  }
`;

export const FirstCotent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    display: flex;
    align-items: center;
  }
`;
export const Icons = styled.button`
  font-size: 1.2em;
  color: var(--black-color);
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
