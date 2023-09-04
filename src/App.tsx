// App.tsx

import React from 'react';
 
import AppRoutes from './AppRoutes';  // Importe aqui
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />  {/* Adicione isso para usar as rotas organizadas */}
    </>
  );
};

export default App;
