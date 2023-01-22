import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'


/*
  Next Level?
    - Autenticação(firebase, Auth0)
    - Notificações Push / Services Workers
    - Perfil público com gráfico de resumo(parecido com github)
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
