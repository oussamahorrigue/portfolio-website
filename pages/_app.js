import Layout from '../components/Layout';
import '../styles/globals.css';
import  Transition  from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <Head>
    <title>Oussama Horrigue</title>
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
