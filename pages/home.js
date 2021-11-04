import React, { useState, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import ListTask from '../components/listTask';
import Loading from '../components/loading';
import NavBar from '../components/navBar';
import ProgressBar from '../components/progressBar';
import { cookieVerifyHome } from '../helper/verifyFunc/cookieVerify';
import { getData } from '../helper/asyncFunc/asyncData';

/**
 * Page HomeMain que pode ser acessada pela URL com "/" ou "/home"
 * @returns todos os componentes: NavBar, ProgressBar, ListTask juntos
 * para compor a página principal.
 */

export default function HomeMain() {
  const [loading, setLoading] = useState(true);
  const [collaborator, setCollaborator] = useState('');
  const [nickName, setNickName] = useState('');
  const router = useRouter();

  /* Busca todas as tarefas, status e colaboradores
  registrados no banco de dados */
  const getAllData = async () => {
    await getData();
    setLoading(false);
  };

  useEffect(() => {
    cookieVerifyHome(router);
    const name = cookieCutter.get('collaborator');
    // Salva o nome para aparecer no NavBar
    setNickName(name);
    const arrayName = name.split(' ');
    // Salva o primeiro nome para aparecer nas Boas Vindas
    setCollaborator(arrayName[0]);
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="h-0 overflow-hidden md:h-screen md:overflow-auto">
      { loading ? <Loading />
        : (
          <>
            <NavBar showName name={ nickName } />
            <ProgressBar collaborator={ collaborator } />
            <ListTask />
          </>)}
    </main>
  );
}
