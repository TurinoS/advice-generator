import { GlobalStyle } from "@/styles/GlobalStyles"
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import Switcher from "@/components/Switcher";

export default function Home() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Switcher />
      <h1>Hello World!</h1>
    </CustomThemeProvider>
  )
}
