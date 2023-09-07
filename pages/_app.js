import Layout from '../components/Layout';
import '../styles/globals.css';
import  Transition  from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head'
import circles from "../assets/circles.png"
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <Head>
    <title>Oussama Horrigue</title>
    <meta name="google-site-verification" content="hWvja5zXBHRWOXK9h3GRJXzYx0XYii0PnJ_J3pJvgS4" />
    <meta name="description" content="Oussama horrigue's portfolio website" />
    
    </Head>
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className='h-full'>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;
