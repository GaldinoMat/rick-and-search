import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import store from "@/store";
import GlobalStyle from "@/styles/globalstyles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Loader />
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
