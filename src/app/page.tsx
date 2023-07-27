import { GlobalStyle } from "@/styles/GlobalStyles"
import { CustomThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <h1>Hello World!</h1>
    </CustomThemeProvider>
  )
}
