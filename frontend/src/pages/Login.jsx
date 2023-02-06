// import React, {useState} from 'react';
import React, { useEffect } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { getGoals , reset} from '../features/goals/goalSlice'
import './page.css'
import GoalForm from '../components/GoalForm';
// import GoalItem from '../components/GoalItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import axios from 'axios'
// import { response } from 'express';
// import { useState } from 'react';




function LoginPage() {
  
  // const [state, setState] =useState('')
  
  function getAllGoals() {
    
    axios.get('http://localhost:8000/api/goals')
    .then((response) => {
      const data = response.data 
      // setState({posts:data})
      console.log('data received')
    })
  
    .catch(() => {
      alert('data cnot display, but u can add goals ')
    })
  } 

  useEffect(()=>{
    getAllGoals()
  })
  // const displaygoals = (goals) => {
  //   if(!goals.length) return null;

  //   return goals.map((goal,index)=>(
  //     <div key={index}>
  //       <h3>{goal.text}</h3>
  //     </div>
  //   ));
  // };

    return (
    <>

    <div className='container'>
      <div className ='centered'>
        
        <section className='heading'> 
          <h1> Welcome, add a goal below</h1>
          {/* <subtitle>Goals Dashboard</subtitle> */}
        <GoalForm />
        </section>


        <div>
          
          {/* {displaygoals()} */}
        </div>
    
        {/* <section className='content'>
          {goals.length > 0 ? (
            <div className='goals'> 
            {goals.map((goal)=>(
              <GoalItem key={goal._id} goal={goal} />
            ))}</div>
          ) : (<h3>You have not set any goals</h3>)}
        </section> */}

      </div>

    </div>

        
    </>
  
    );
  
  }

export default LoginPage;