import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProgressNav from './components/ProgressNav'
import InputForm from './components/InputForm'
import OptionsPanel from './components/OptionsPanel'
import ResultsPanel from './components/ResultsPanel'
import SidebarHelp from './components/SidebarHelp'
import Footer from './components/Footer'
import { calculateMonthlyPayment } from './utils/calc'

export default function App(){
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    propertyPrice: '',
    deposit: '',
    termYears: '25',
    interestRate: '3.5',
    income: '',
    mortgageType: 'repayment'
  })

  // load from localStorage
  useEffect(()=>{
    try{
      const saved = localStorage.getItem('lloydsMortgageForm')
      if(saved) setForm(JSON.parse(saved))
    }catch(e){}
  },[])

  // autosave (debounced simple)
  useEffect(()=>{
    const t = setTimeout(()=> localStorage.setItem('lloydsMortgageForm', JSON.stringify(form)), 250)
    return ()=> clearTimeout(t)
  },[form])

  const update = (field, value) => setForm(prev=> ({...prev, [field]: value}))

  return (
    <div className="app-root">
      <div className="container">
        <Header />
        <div className="main-grid">
          <main className="main-area">
            <ProgressNav step={step} setStep={setStep} />
            {step === 1 && <InputForm form={form} update={update} next={()=>setStep(2)} />}
            {step === 2 && <OptionsPanel form={form} update={update} back={()=>setStep(1)} next={()=>setStep(3)} />}
            {step === 3 && <ResultsPanel form={form} calcFn={calculateMonthlyPayment} back={()=>setStep(2)} reset={()=>{ setForm({propertyPrice:'',deposit:'',termYears:'25',interestRate:'3.5',income:'',mortgageType:'repayment'}); localStorage.removeItem('lloydsMortgageForm') }} />}
          </main>
          <aside className="sidebar">
            <SidebarHelp />
          </aside>
        </div>
        <Footer />
      </div>
    </div>
  )
}
