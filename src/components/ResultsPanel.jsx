import React from 'react'

export default function ResultsPanel({form, calcFn, back, reset}){
  const loanAmount = (Number(form.propertyPrice||0) - Number(form.deposit||0)) || 0
  const monthly = calcFn(loanAmount, Number(form.interestRate||0), Number(form.termYears||0), form.mortgageType)
  const monthlyFormatted = isFinite(monthly) ? '£' + Number(monthly).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}) : '—'
  const loanDisplay = loanAmount>0 ? '£' + loanAmount.toLocaleString() : '—'
  const affordability = form.income ? (Number(form.income)>0 ? Math.round((monthly*12)/Number(form.income)*100) + '% of income' : '—') : 'Optional'

  return (
    <section className="card" aria-labelledby="results-heading">
      <h2 id="results-heading">Results</h2>

      <div className="results-grid">
        <div className="result">
          <div className="label">Loan amount</div>
          <div className="value">{loanDisplay}</div>
        </div>

        <div className="result">
          <div className="label">Estimated monthly payment</div>
          <div className="value">{monthlyFormatted}</div>
        </div>

        <div className="result">
          <div className="label">Affordability</div>
          <div className="value">{affordability}</div>
        </div>
      </div>

      <div className="explain">
        <h3>How inputs affect your result</h3>
        <ul>
          <li>Higher deposit → lower loan and monthly payment.</li>
          <li>Higher interest rate → higher monthly payments over time.</li>
          <li>Longer term → lower monthly payments but more interest paid overall.</li>
        </ul>
        <p className="muted">Tap 'Explain calculation' to see the formula details below.</p>
        <details>
          <summary>Explain calculation</summary>
          <pre>{`Monthly payment formula used:
P = loan amount
r = monthly interest rate (annual rate / 12)
n = number of payments (years * 12)
payment = (P * r) / (1 - (1 + r)^-n)`}</pre>
        </details>
      </div>

      <div className="form-actions">
        <button onClick={back}>Back</button>
        <div>
          <button onClick={reset}>Start over</button>
        </div>
      </div>
    </section>
  )
}
