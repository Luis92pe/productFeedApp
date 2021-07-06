import { createGlobalStyle } from 'styled-components'
import colors from "./theme/white";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');
  
  body {
    font-family: 'Jost', sans-serif;
    //color: ${colors.blue};
  }
`

export default GlobalStyles
