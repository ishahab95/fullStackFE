import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'




const Book = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState({heading:'',description:''})
  const SaveData=(e)=>{
    setUserData({...userData,[e.target.id]:e.target.value})
  }
  let result=async()=>{
    let result=await axios.get('http://localhost:5000')
    setData(result.data)
  }

  let updateData=async()=>{
    let update=await axios.post('http://localhost:5000',userData)
    setData(update.data)
  }

  let deleteData=async()=>{
    let deleteData=await axios.delete('http://localhost:5000')
    setData(deleteData.data)
  }
useEffect(()=>{
result()
}
,[])
   
  return (
    <div>
      {data.map((item)=>{
        return(
          <div className="card" key={item.heading}>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
          </div>
        )
      })}
       <input type="text" name="" id="heading" value={userData.heading} onChange={(e)=>SaveData(e)}/>
       <input type="text" name="" id="description" value={userData.description} onChange={(e)=>SaveData(e)}/>
       <button onClick={updateData}>Update</button>
       <button onClick={deleteData}>Delete</button>


    </div>
  )
}

export default Book