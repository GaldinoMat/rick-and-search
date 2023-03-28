import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useCallback, useEffect } from "react";
import { fetchAPI, loadAPI } from "../store/modules/data/actions";
import { useDispatch } from "react-redux";
import { ApiLoad } from "@/store/modules/data/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();

  const getCharacters = useCallback(async () => {
    const { data } = await dispatch(fetchAPI());

    if (data) {
      dispatch(loadAPI(data as unknown as ApiLoad));
    }
  }, [dispatch]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Footer />
      </main>
    </>
  );
}
