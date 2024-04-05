import './App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import AuthData from "./components/AuthData"
import RegForm from "./components/RegForm"
import { incNumber, decNumber } from './actions/index';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const myStore = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  
  const [data, setData] = useState("");
  const [isReload, setIsReload] = useState(true);

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/api/auth");
    setData(response.data);
  }

  useEffect(() => {
    if (isReload) {
      getData();
      setIsReload(() => {
        return !isReload;
      })
    }
  }, [isReload]);

  // console.log(data)+"--------------------------------------------------------------------------------------------------------------";

  function createTable(data) {
    if (data) {
      return <AuthData
        key={data._id}
        id={data._id}
        name={data.name}
        email={data.email}
        pass={data.password}
        date={data.date}
      />
    } else {
      console.log("error Occured");
    }

  }
  // This is for To display table  
  const [state, setState] = useState(true)

  return (
    <>
      <div className="App">
        {console.log(data)}
        <h1>Jay Shree Ram </h1>
        <button onClick={() => setState(!state)} className="bg-success">Display Table </button>

        {state ? Array.isArray(data) && data.map(createTable) : ""}
        <RegForm onReload={setIsReload} />
      </div>

      <div className='container d-flex align-item-center justify-content-center h-50'>
        <h1>Using react and redux</h1>
        <div >
          <button className='btn btn-primary' onClick={() => dispatch(incNumber())} > <span> + </span></button>
          <h2>{myStore}</h2>
          <button className='btn btn-primary' onClick={() => dispatch(decNumber())}> <span> - </span></button>
        </div>
      </div>
    </>
  );

}

export default App;
