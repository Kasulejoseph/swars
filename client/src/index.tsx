import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, gql, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { cache } from './utils/cache';

import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  cache,
  uri: "https://swars-production.up.railway.app"
})

client.query({
  query: gql`
    {
    people (page: 6) {
    next,
    previous,
    count,
    people {
      name,
      height,
      mass,
      homeworld,
      gender
    }
    }
    }
  `,
}).then((result) => console.log(result))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
