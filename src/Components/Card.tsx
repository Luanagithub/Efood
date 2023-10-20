import styled from "styled-components";
import { PropsWithChildren } from "react";

//Acabamos de adicionar essa interface
interface SCardComponent {
  children: React.ReactNode;
  customProp: () => void;
}
interface Container {
  children: React.ReactNode;
}

//Adicionamos no styled
export const SContainerCard = styled.div<Container>`
  display: grid;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 95vw;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(3, 1fr); 
  gap: 30px;
  place-items: center;
  zoom: 70%;
  cursor: pointer;
`

export const SCard = styled.div<Container>`
  position: relative;
  background-color: rgb(255, 255, 255);
  border: 1px solid #e97979;
  color: #E66767;
  font-weight: 300;
  width: 33vw;
  min-width: 380px;
  height: 420px;
  min-height: fit-content;
  font-family: 'Roboto', sans-serif;
`

export const SButtonCard = styled.button`
  background-color: #e97979;
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  width: 30%;
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  bottom: 10px;
  border: none;
  display: block;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eb8e8e;
  }
`
export const ButtonCard: React.FC<SCardComponent> = (props) => {
  return (
    <SButtonCard onClick={() => props.customProp} >
      {/* MiniCard component content */}
    </SButtonCard>
  );
}

export const SButtonAbsolut = styled.button`
  background-color: #e97979;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  bottom: -10px;
  border: none;
  display: block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ed9090;
  }

  position: absolute;
  top: 5px;
  right: 5px;
  height: 24px;
`;


export const CardComponent: React.FC<PropsWithChildren<Container>> = ({ children }) => {
  return (
    <SCard>
          {children}
    </SCard>
  );
}

export const ContainerCardComponent: React.FC<PropsWithChildren<Container>> = ({ children }) => {
  return (
    <SContainerCard>
          {children}
    </SContainerCard>
  );
}


