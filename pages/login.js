/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React from 'react';
import Login from '../components/login';
import NavBar from '../components/navBar';

export default function LoginMain() {
  return (
    <div>
      <NavBar showName={ false } />
      <main className="h-screen overflow-hidden md:overflow-auto">
        <Login />
      </main>
    </div>
  );
}
