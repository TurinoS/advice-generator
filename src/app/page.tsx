import { GlobalStyle } from "@/styles/GlobalStyles"
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import Switcher from "@/components/Switcher";
import AdviceCard from "@/components/AdviceCard";

export default function Home() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Switcher />
      <AdviceCard />
    </CustomThemeProvider>
  )
}
