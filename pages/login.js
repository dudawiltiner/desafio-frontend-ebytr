/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import Head from 'next/head';
import React from 'react';
import Login from '../components/login';
import NavBar from '../components/navBar';

export default function LoginMain() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="sorfcut icon" href="/icone.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google" content="notranslate" />
        <title>Ebytr - Login</title>
      </Head>
      <NavBar showName={ false } />
      <main className="h-screen overflow-hidden md:overflow-auto">
        <Login />
      </main>
    </div>
  );
}
