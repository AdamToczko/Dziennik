import { code, default as theme } from "mdx-deck/themes";

import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
  ...code,
  font: "system-ui, sans-serif",
  fontSizes: ["0.75em", "1em", "1.44em", "1.44em", "1.44em"],
  prism: {
    style: okaidia
  },
  colors: {
    ...code.colors,
    background: "white"
  }
};
