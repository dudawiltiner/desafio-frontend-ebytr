import React from 'react';
import ListTask from '../components/listTask';
import NavBar from '../components/navBar';
import ProgressBar from '../components/progressBar';

export default function HomeMain() {
  return (
    <main className="h-screen overflow-hidden dark:bg-dark-color md:overflow-auto">
      <NavBar showName />
      <ProgressBar collaborator="Nome" />
      <ListTask />
    </main>
  );
}
