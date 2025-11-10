import React from 'react'

export default function OptionsPanel({form, update, back, next}){
  return (
    <section className="card" aria-labelledby="options-heading">
      <h2 id="options-heading">Mortgage Options</h2>
      <form onSubmit={(e)=>e.preventDefault()} className="form-grid">
        <fieldset>
          <legend>Mortgage type</legend>
          <label className="radio">
            <input type="radio" name="mortgageType" value="repayment" checked={form.mortgageType==='repayment'} onChange={e=>update('mortgageType', e.target.value)} />
            Repayment
            <span className="muted">Repays capital and interest</span>
          </label>
          <label className="radio">
            <input type="radio" name="mortgageType" value="interest-only" checked={form.mortgageType==='interest-only'} onChange={e=>update('mortgageType', e.target.value)} />
            Interest-only
            <span className="muted">Only pay interest (capital due separately)</span>
          </label>
        </fieldset>

        <label>
          <span>Annual income (£) — optional</span>
          <input type="number" inputMode="numeric" value={form.income} onChange={e=>update('income', e.target.value)} />
          <small className="muted">Used for affordability indicator.</small>
        </label>

        <div className="form-actions">
          <button type="button" onClick={back}>Back</button>
          <button type="button" className="primary" onClick={next}>See Results</button>
        </div>
      </form>
    </section>
  )
}
