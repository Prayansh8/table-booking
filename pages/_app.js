import "@/styles/globals.css";
import { Toaster, toast } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
