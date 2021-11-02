import React, { useState, useEffect } from 'react';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import ListTask from '../components/listTask';
import Loading from '../components/loading';
import NavBar from '../components/navBar';
import ProgressBar from '../components/progressBar';
import { fetchGetAllTask } from '../services/taskAPI';
import { fetchGetAllStatus } from '../services/statusAPI';
import { fetchGetAllCollabs } from '../services/collaboratorAPI';

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
    await takeStatus();
    await takeCollabs();
    setLoading(false);
  }

  const takeStatus = async () => {
    let arrayTotal = JSON.parse(localStorage.getItem('status'));

    if (!arrayTotal) {
      const rest = await fetchGetAllStatus(cookieCutter.get('token'));

      if (rest.message) {
        console.log(rest);
        arrayTotal = [];
      } else {
        console.log(rest);
        arrayTotal = rest;
      }

      const newA = arrayTotal.map((item) => ({ id: item._id, nameStatus: item.statusName }));
      localStorage.setItem('status', JSON.stringify(newA));
    }
  };

  const takeCollabs = async () => {
    let arrayTotal = JSON.parse(localStorage.getItem('collabs'));

    if (!arrayTotal) {
      const rest = await fetchGetAllCollabs(cookieCutter.get('token'));

      if (rest.message) {
        console.log(rest);
        arrayTotal = [];
      } else {
        console.log(rest);
        arrayTotal = rest;
      }
      // console.log(arrayTotal);
      const newA = arrayTotal.map((item) => ({ id: item._id, nameCollab: item.collaboratorName.split(' ') }));
      // console.log(newA);
      localStorage.setItem('collabs', JSON.stringify(newA));
    }
  };

  useEffect(() => {
    takeStatus();
    takeCollabs();
  }, []);

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
