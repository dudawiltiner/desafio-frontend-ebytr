import React, { useState, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import ListTask from '../components/listTask';
import Loading from '../components/loading';
import NavBar from '../components/navBar';
import ProgressBar from '../components/progressBar';
import { fetchGetAllTask } from '../services/taskAPI';

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
    let arrayTotal = JSON.parse(localStorage.getItem('tasks'));
    console.log(arrayName, arrayTotal);
    if (!arrayTotal) {
      const rest = await fetchGetAllTask(cookieCutter.get('token'));

      if (rest.message) {
        console.log(rest);
        arrayTotal = [];
      } else {
        console.log(rest);
        arrayTotal = rest;
      }

      localStorage.setItem('tasks', JSON.stringify(arrayTotal));
    }
    setLoading(false);
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <main className="h-screen overflow-hidden dark:bg-dark-color md:overflow-auto">
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
