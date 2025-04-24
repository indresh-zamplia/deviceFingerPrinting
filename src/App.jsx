import {getDeviceFingerprint } from './crossprint/index.js'
import './App.css'
import { useEffect } from 'react'

function App() {
useEffect(() => {
  const getFingerprint = async () => {
    const fingerprint = await getDeviceFingerprint();
    console.log(fingerprint);
  };
  getFingerprint();
}
, [])
  return (
    <>
      <div className="App">
        <h1>Device Fingerprint Example</h1>
        <p>Check the console for the fingerprint data.</p>
      </div>
      
    </>
  )
}

export default App
