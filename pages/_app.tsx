import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import PageLayout from "../components/pageLayout"
import Login from "./login"
import Signup from "./signup"
import "reset-css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    components: {
      Button: {
        variants: {
          link: {
            ":focus": {
              outline: "none",
              boxShadow: "none",
            }
          }
        }
      }
    }
  }
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {Component == Login || Component == Signup ? (
          <Component {...pageProps} />
        ) : (
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        )}

      </ChakraProvider>
    </SessionProvider>
  )
}
