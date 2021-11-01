import React from 'react';
import ListTask from '../components/listTask';
import NavBar from '../components/navBar';
import ProgressBar from '../components/progressBar';
import TemplateCRUD from '../components/templateCRUD';

export default function HomeMain() {
  return (
    <main className="h-screen overflow-hidden dark:bg-dark-color md:overflow-auto">
      <TemplateCRUD showRemover nameType="Editando uma tarefa" labelDeadline="Mudar o praxo da tarefa" labelStatus="Mudar o Status" />
    </main>
  );
}
