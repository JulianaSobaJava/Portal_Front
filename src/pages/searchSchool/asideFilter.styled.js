import styled from 'styled-components'

export const AsideFilterContainer = styled.aside`
  width: 38%;
  height: 100%;
`;

export const FilterConatiner = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20% 10% 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FilterContent = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--main-color);
  margin-bottom: 0.8em;
`;

export const FilterButtonAside = styled.button`
  width: 100%;
  height: 8vh;
  display: flex;
  font-size: 1em;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
export const FilterOptionsText = styled.div`
  display: ${(props) => (props.isExpanded ? "flex" : "none")};

  ${(props) =>
    props.isExpanded &&
    `
     width:100%;
     height:10vh;
     align-items:center;
     justify-content:center;
     padding:3% 2%;

     div{
      width: 100%;
      height: 96%;
     }
    `}
`;
export const FilterOptionsCheckBox = styled.div`
  display: ${(props) => (props.isExpanded ? "flex" : "none")};

  ${(props) =>
    props.isExpanded &&
    `
     width:100%;
     align-items:center;
     justify-content:center;
     padding:3% 2%;

     div{
      width: 100%;
      height: 96%;
     }
    `}
`;

export const TextField = styled.input`
    width: 100%;
    height: 100%;
    padding:2%;
    border: 1px solid var(--grey-text-color),
     `;
     
export const Checkbox = styled.input`

`