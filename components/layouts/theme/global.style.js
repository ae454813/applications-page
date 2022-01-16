import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "../../../constants";


export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
}

*{
    box-sizing: border-box;
}

.sider{
    @media (max-width: ${Breakpoints.md}){
        display: none;
    }
}
`
