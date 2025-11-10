import React from 'react'
export default function SidebarHelp(){
  return (
    <div className="card sidebar-card" aria-labelledby="help-heading">
      <h2 id="help-heading">Quick help</h2>
      <p className="muted">Focus any input for short guidance. Key terms are shown below.</p>
      <dl>
        <dt>APR</dt>
        <dd className="muted">Annual Percentage Rate — overall yearly cost of borrowing including fees.</dd>
        <dt>Repayment</dt>
        <dd className="muted">Repays interest and capital across the term.</dd>
        <dt>Interest-only</dt>
        <dd className="muted">Monthly payments only cover interest; capital must be repaid separately.</dd>
      </dl>
      <div style={{marginTop:12}}>
        <strong>Mobile tip:</strong>
        <p className="muted">This prototype autosaves inputs. Test responsiveness on small screens.</p>
      </div>
    </div>
  )
}
