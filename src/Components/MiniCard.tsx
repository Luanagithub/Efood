import styled from "styled-components";

interface Componentes{
  children: React.ReactNode;
}

export const SCardContainer= styled.div<Componentes>`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  padding: 100px 100px 200px 100px;
  zoom: 80%;
  max-width: 100%;
  column-gap: 5%;
  row-gap: 20px;
  height: 450px;
  position: relative;
      margin: auto;
      width: 95vw;
      height: fit-content;
      font-weight: 800;
      font-family: 'Roboto', sans-serif;
      text-align: center;
`

export const CardContainer: React.FC<Componentes> = () => {
  return (
    <SCardContainer>
      {/* MiniCard component content */}
      
    </SCardContainer>
  );
}


export const SMiniCard=styled.div<Componentes>`
background-color: #E66767;
border-radius: 1%;
padding: 10px;
padding-bottom: 30px;
width: 30vw;
max-width: 500px;
min-width: 320px;
height: fit-content;
min-height: fit-content;
text-align: left;
color: white;
display: inline-flex;
flex-wrap: wrap;
font-family: 'Roboto', sans-serif;
position: relative;


&:hover{
    background-color: #ef7979;
}
`

export const MiniCard: React.FC<Componentes> = () => {
  return (
    <SMiniCard>
      {/* MiniCard component content */}
      
    </SMiniCard>
  );
}


export const SButtonCard=styled.button`
    color:#E66767;
    border: none;
    background-color: #FFEBD9;
    height: fit-content;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    cursor: pointer;
    font-size: 20px;
    position: relative;
`
