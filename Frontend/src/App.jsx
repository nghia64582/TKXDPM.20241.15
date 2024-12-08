import React from 'react';
import {useRoutes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import routes from './app/routes';

const App = () => {

  const routing = useRoutes(routes);

  return (
    <>
      <CssBaseline/>
      {routing}
    </>
  );
};

export default App;
