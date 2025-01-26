import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './Greeting'
import NewMain   from './NewMain'
import './App.css'

function App() {
  const [data, setData] = useState({ username: "", password: "" });

  return (
    <>
      <Greeting username={data.username} password={data.password} />
      <NewMain data={data} setData={setData} />
      <Greeting username="Mohamed" password="1234" />
    </>
  )
}

export default App
