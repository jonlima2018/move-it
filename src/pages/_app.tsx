import { LoginProvider } from "../contexts/LoginContext";
import "../style/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
}

export default MyApp;
