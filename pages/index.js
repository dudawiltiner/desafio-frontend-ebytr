import Head from 'next/head';
import React, { useEffect } from 'react';
import Aos from 'aos';
import HomeMain from './home';
import 'aos/dist/aos.css';
import NoMobile from '../components/nomobile';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NoMobile />
      <div className="invisible h-0 md:visible md:h-full">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="sorfcut icon" href="/icone.png" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google" content="notranslate" />
          <title>Ebytr - To Do List</title>
        </Head>
        <HomeMain />
      </div>
    </div>
  );
}
