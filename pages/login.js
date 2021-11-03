/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import Login from '../components/login';
import NavBar from '../components/navBar';
import Loading from '../components/loading';
import NoMobile from '../components/nomobile';

export default function LoginMain() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const verify = () => {
    if (cookieCutter.get('token')) {
      return router.push('/');
    }
    setLoading(false);
  };

  useEffect(() => {
    verify();
  }, []);
  return (
    <div>
      <NoMobile />
      { loading
        ? <Loading />
        : (
          <div className="invisible h-0 md:h-full md:visible">
            <Head>
              <meta charSet="UTF-8" />
              <link rel="sorfcut icon" href="/icone.png" type="image/x-icon" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="google" content="notranslate" />
              <title>Ebytr - Login</title>
            </Head>
            <NavBar showName={ false } />
            <main className="h-0 overflow-auto md:h-screen">
              <Login />
            </main>
          </div>) }
    </div>
  );
}
