import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component { ...pageProps } />;
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}.Required;

export default MyApp;
