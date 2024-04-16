import React from "react";
import { ThemeProvider } from "../components/themes";


function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider
    enableSystem
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>;
}

export default Providers;
