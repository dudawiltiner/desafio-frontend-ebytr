import React, { useState, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import ListTask from '../components/listTask';
import Loading from '../components/loading';
import NavBar from '../components/navBar';
import ProgressBar from '../components/progressBar';
import { fetchGetAllTask } from '../services/taskAPI';
import { takeCollabs } from '../helper/asyncFunc/asyncCollaborator';
import { takeStatus } from '../helper/asyncFunc/asyncStatus';

export default function HomeMain() {
  const [loading, setLoading] = useState(true);
  const [collaborator, setCollaborator] = useState('');
  const [nickName, setNickName] = useState('');
  const router = useRouter();

  async function verify() {
    if (!cookieCutter.get('token')) {
      return router.push('/login');
    }
    const name = cookieCutter.get('collaborator');
    setNickName(name);

    const arrayName = name.split(' ');
    setCollaborator(arrayName[0]);

    let arrayTasks = JSON.parse(localStorage.getItem('tasks'));

    if (!arrayTasks) {
      const rest = await fetchGetAllTask(cookieCutter.get('token'));

      if (rest.message) {
        console.log(rest);
        arrayTasks = [];
      } else {
        console.log(rest);
        arrayTasks = rest;
      }

      localStorage.setItem('tasks', JSON.stringify(arrayTasks));
    }

    await takeStatus();
    await takeCollabs();

    setLoading(false);
  }

  useEffect(() => {
    verify();
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
