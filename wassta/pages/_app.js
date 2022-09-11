import Image from 'next/image';
import { Router } from 'next/router';
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
   });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });
  

  return (
    
    <>
    {loading ? (
        <div className='relative w-screen h-screen flex items-center justify-center '>
          <Image src="/image/load.gif" width={400} height={400}  />
        </div>
      ) : (        
          <Component {...pageProps} />        
      )}
</>
  )
}

export default MyApp
