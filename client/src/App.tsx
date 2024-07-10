// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import  Box  from '@mui/material/Box';
import useSWR from "swr";
// import { Box } from '@mantine/core';
import './App.css'
import AddTodo from './Components/AddTodo';

export const ENDPOINT = 'http://localhost:4000'

const fetcher = (url:string) => fetch(`${ENDPOINT}/${url}`).then(r => r.json());



function App() {

  const{data, mutate} = useSWR('api/todos', fetcher);

  return (
    
    <Box>
      {JSON.stringify(data)}
      <AddTodo/>
    </Box>

  );
}

export default App



{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.tsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}
