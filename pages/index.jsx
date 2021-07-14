import Head from "next/head";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from './components/home';

// export const getStaticProps = async () => {
//     const res = await fetch('http://localhost:3000');
//     const data = await res.json();

//     return {
//         props: {
//             con: data
//         }
//     }
// }

const index = () => {
  return (
    <div className={global.app}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.google.com/specimen/Public+Sans"
        />
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default index;
