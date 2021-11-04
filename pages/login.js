/* É importante desabilitar essas configurações para o uso do Tailwind */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Login from '../components/login';
import NavBar from '../components/navBar';
import Loading from '../components/loading';
import NoMobile from '../components/nomobile';
import { cookieVerifyLogin } from '../helper/verifyFunc/cookieVerify';

/**
 * A paǵina da LoginMain acessada com "/login"
 * @returns um componente NoMobile caso o usuário tente
 * acessar a plataforma pelo celular, caso contrário, retorna
 * o componente Login para autenticação do usuário.
 */

export default function LoginMain() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    /* vai verificar se existe um tokem,
    ou seja, se o usuário já está autenticado, se já
    a plataforma vai voltar para a Home */
    cookieVerifyLogin(router);
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
