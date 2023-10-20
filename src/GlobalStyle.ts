import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
    }

    body{
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: auto;
        text-align: center;
        
    }
`  

export default EstiloGlobal