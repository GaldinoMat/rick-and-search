import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import store from "@/store";
import GlobalStyle from "@/styles/globalstyles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Loader />
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Layout>
    </Provider>
  );
}
