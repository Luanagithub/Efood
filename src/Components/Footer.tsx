import './arquivo.css'
import styled from "styled-components";


interface SFooterComponent {
  children: React.ReactNode;
}

export const SFooter= styled.footer<SFooterComponent>`
    position: relative;
    //alinhado ao centro
    margin: auto;
    background-color: #FFEBD9;
    //veja que o tamanho foi reduzido
    padding-top: 20px;
    width: 95vw;
    height: fit-content;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    text-align: center;
`

const Footer: React.FC<SFooterComponent> = () => {
  return (
    <SFooter>
      {/* MiniCard component content */}
      
    </SFooter>
  );
}

export default Footer;