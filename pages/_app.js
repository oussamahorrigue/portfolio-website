import Layout from '../components/Layout';
import '../styles/globals.css';
import  Transition  from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head'
import circles from "../assets/circles.png"
import favicon from "../assets/favicon.ico"
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <Head>
    <title>Oussama Horrigue</title>
    <meta name="google-site-verification" content="hWvja5zXBHRWOXK9h3GRJXzYx0XYii0PnJ_J3pJvgS4" />
    <meta name="description" content="Oussama horrigue's portfolio website" />

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
    <link rel="manifest" href="favicon/site.webmanifest"/>

    </Head>
    <AnimatePresence mode="sync">
      <motion.div key={router.route} className='h-full'>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;
