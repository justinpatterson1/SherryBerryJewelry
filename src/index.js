import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient() 

root.render(
  <QueryClientProvider client = {queryClient}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  {/* <ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-right"/> */}
  </QueryClientProvider>
);

