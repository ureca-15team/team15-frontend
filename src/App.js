import React from "react"
import GlobalStyle from "./lib/styles/GlobalStyle"
import Router from "./shared/Router"
import theme from "./lib/styles/theme"
import { ThemeProvider } from "styled-components"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App;
