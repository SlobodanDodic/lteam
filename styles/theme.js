import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

export const myTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // color: mode("#0e1214", "#f8f6f0")(props),
        bg: "#dcdbda",
        // bgImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 7px ), repeating-linear-gradient( #d5d5d555, #d5d5d5 )",
      },
      html: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
      "*::placeholder": {
        // color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        // borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  fonts: {
    // heading: `'Mars', sans-serif`,
    // body: "Roboto, sans-serif",
  },
  colors: {
    // reds: "#a70000",
    // grays: "#6c6c6c",
  },
});
