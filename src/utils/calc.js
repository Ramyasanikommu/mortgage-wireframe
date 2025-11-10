// calculateMonthlyPayment(loanAmount, annualRatePercent, termYears, mortgageType)
// returns monthly payment (number) or NaN if insufficient data
export function calculateMonthlyPayment(P, annualRatePercent, termYears, mortgageType){
  const principal = Number(P)
  const rate = Number(annualRatePercent)
  const years = Number(termYears)
  if(!principal || principal<=0 || years<=0) return NaN
  // if interest-only: payment = principal * annualRate / 100 / 12
  if(mortgageType === 'interest-only'){
    return principal * (rate/100) / 12
  }
  const r = (rate/100)/12
  const n = years * 12
  if(r === 0) return principal / n
  const payment = (principal * r) / (1 - Math.pow(1 + r, -n))
  return payment
}
