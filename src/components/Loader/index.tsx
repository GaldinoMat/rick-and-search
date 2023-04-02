import React from "react";
import { useRouter } from "next/router";
import { LoaderComponent } from "./styles";

export default function Loader(props: any) {
  const { text = "Loading..." } = props;
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();
  const LOADER_THRESHOLD = 250;

  React.useEffect(() => {
    let timer: any;

    const start = () =>
      (timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD));

    const end = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);

      if (timer) {
        clearTimeout(timer.current);
      }
    };
  }, [router.events]);

  if (!isLoading) return null;

  return (
    <LoaderComponent className="navigation-loader">{text}</LoaderComponent>
  );
}
