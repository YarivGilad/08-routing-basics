import ReactDOMClient from 'react-dom/client'
import { App } from './view/App.tsx'
import { GlobalStyle as ResetCSS } from './styles/reset.styles.ts';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
  <>
    <ResetCSS />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>)