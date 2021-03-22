 import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'
function App() {
  const [data,setData]=useState([])
  const [search,setSearch]=useState("")
  const [globalData,setGlobalData]=useState([])
  useEffect(()=>{
    Axios
    .get("https://reqres.in/api/users")
    .then(res=>{
      setData(res.data.data)
      setGlobalData(res.data.data)
    })

  },[])
  useEffect(()=>{
    const da=globalData.filter(a=>a.first_name.toLowerCase().includes(search.toLowerCase())||a.last_name.toLowerCase().includes(search.toLowerCase()))
    setData(da)
  },[search,globalData])
  return (
    <div className="container App">
      <input type="search" placeholder="search for user name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <div className="row">
        {
         data.map(a=>(
           <div className="col-lg-2 col-md-3 col-xl-2 col-sm-3 col-xs-3" style={{margin:"20px"}}>
             <div className="card " key={a.id} style={{width:"18rem"}}>
  <img className="card-img-top" src={a.avatar} alt={`${a.first_name} ${a.last_name}`}/>
  <div className="card-body">
    <h5 className="card-title">{a.first_name}    {a.last_name}</h5>
    <p className="card-text">{a.email}</p>
   </div>
</div>
</div>          
         ))
       }
    </div>
    </div>
  );
}

export default App;
