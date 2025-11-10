import React from 'react'
export default function ProgressNav({step,setStep}){
  return (
    <nav aria-label="Progress" className="progress-nav">
      <button className={step===1? 'active':''} onClick={()=>setStep(1)}>1. Details</button>
      <button className={step===2? 'active':''} onClick={()=>setStep(2)}>2. Options</button>
      <button className={step===3? 'active':''} onClick={()=>setStep(3)}>3. Results</button>
    </nav>
  )
}
