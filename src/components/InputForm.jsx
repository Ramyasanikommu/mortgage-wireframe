import React from 'react'

export default function InputForm({form, update, next}){
  return (
    <section aria-labelledby="details-heading" className="card">
      <h2 id="details-heading">Property & Personal Details</h2>
      <form onSubmit={(e)=>e.preventDefault()} className="form-grid">
        <label>
          <span>Property price (£)</span>
          <input type="number" inputMode="numeric" value={form.propertyPrice} onChange={e=>update('propertyPrice', e.target.value)} placeholder="e.g. 350000" aria-describedby="price-help" />
          <small id="price-help" className="muted">Enter the purchase price.</small>
        </label>

        <label>
          <span>Deposit (£)</span>
          <input type="number" inputMode="numeric" value={form.deposit} onChange={e=>update('deposit', e.target.value)} placeholder="e.g. 70000" aria-describedby="deposit-help" />
          <small id="deposit-help" className="muted">You can enter a number. Percentage not implemented in this prototype.</small>
        </label>

        <label>
          <span>Mortgage term (years)</span>
          <input type="number" min="1" max="40" value={form.termYears} onChange={e=>update('termYears', e.target.value)} />
        </label>

        <label>
          <span>Interest rate (%)</span>
          <input type="number" step="0.01" value={form.interestRate} onChange={e=>update('interestRate', e.target.value)} />
        </label>

        <div className="form-actions">
          <button type="button" className="primary" onClick={next}>Next: Options</button>
        </div>
      </form>
    </section>
  )
}
