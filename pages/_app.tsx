import "../styles/globals.css";
import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const { version } = require("../package.json");

  pageProps.version = version;

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
