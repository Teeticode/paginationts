import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {promiseThen} from './sync';

function App() {
  const [data, setData] = useState({});
  const[loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[postPerPage, setPostPerPage] = useState(10);
  //current posts
  const indexOfLastUser = currentPage * postPerPage;
  const indexOfFirstUser = indexOfLastUser - postPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser)
  const sync = ()=>{
    setLoading(true)
    promiseThen.then(dat=>{
      if(dat){
        setLoading(false);
        setData(dat)
      }
      
    }).catch((err)=>{
      setLoading(false);
      console.log(err);
    })
  }
  return (
    <div className="App" >
      <button disabled={loading} onClick={sync}>press me</button>
      <div style={{marginTop:20}}>
        {data}
      </div>

    </div>
  );
}

export default App;
