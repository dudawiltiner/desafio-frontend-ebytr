/* É importante desabilitar essas configurações para o uso do Tailwind */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import { authOne } from '../helper/asyncFunc/asyncCollaborator';
import AlertLogin from './alertLogin';

/**
 * Componente Login chamado na Page LoginMain
 * @returns um formulário de autenticação do
 * usuário para dar acesso ao colaborador
 */

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
  const [alert, setAlert] = useState('invisible');
  const router = useRouter();

  // A função que vai verificar autenticar o usuário
  const auth = async (e) => {
    e.preventDefault();
    setShow(!show);
    const res = await authOne(email, password, router);

    /* Cria um alerta caso o usuário não seja encontrado
    no banco de dados */
    if (res) {
      setAlertTitle('Falha na autenticação...');
      setAlertDescription(`${res}, reveja a senha e o email preenchidos`);
      setAlert('visible transition transform -translate-y-10 duration-500 ease-in-out');
    }

    setShow(false);
  };

  return (
    <div className="flex flex-col items-center justify-center invisible w-full h-0 min-h-screen px-10 md:visible md:h-full">
      <div className="flex space-x-20">
        <div className="max-w-md">
          <div className="mt-16 text-gray-800 text-7xl mb-14 animate-bounce-slow">
            <Typewriter
              options={ {
                strings: 'To Do List',
                autoStart: true,
                delay: 150,
                loop: true,
              } }
            />
          </div>
          <img className="w-full" src="/list.svg" alt="Imagem da logo" />
        </div>
        <div className="flex flex-col items-center justify-center max-w-md p-12 rounded-lg shadow-xl shadow-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-brown-color" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <p className="mt-6 text-4xl text-gray-800 ">Entrar para usar a plataforma</p>
          <form data-testid="form-login" onSubmit={ auth } className="w-full mt-6 space-y-10">
            <div className="py-2 space-y-2 border-b border-brown-color">
              <p className="text-md ext-gray-800">Qual o seu email?</p>
              <input onClick={ () => setAlert('invisible') } name="email" onChange={ ({ target }) => setEmail(target.value) } required className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="nome@nome.com" />
            </div>
            <div className="py-2 border-b border-brown-color">
              <p className="text-md ext-gray-800">Digite a sua senha:</p>
              <input onClick={ () => setAlert('invisible') } name="password" onChange={ ({ target }) => setPassword(target.value) } required className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="password" placeholder="•••••••••" />
            </div>
            <button className="flex px-2 py-1 text-sm text-white border-4 border-teal-500 rounded cursor-pointer bg-brown-color" type="submit">
              { show
                ? (
                  <div className="flex">
                    <div className="w-4 h-4 p-1 mr-2 border-b-2 border-white rounded-full animate-spin" />
                    Processando
                  </div>)
                : 'Entrar'}
            </button>
          </form>
        </div>
        <AlertLogin show={ alert } title={ alertTitle } description={ alertDescription } />
      </div>
    </div>
  );
}
