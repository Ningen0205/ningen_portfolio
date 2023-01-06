import Header from "../components/Header.tsx";
import { ChakraProvider } from "chakra-ui";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </>
  );
}
