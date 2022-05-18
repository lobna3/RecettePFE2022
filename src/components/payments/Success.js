import React from 'react'
import { PaiementHeader } from "../RacetteHeader";

const Success = () => {
  return (
    <main id="main" className="main bg-light">
    <PaiementHeader />
    <div className="p-4">
        <div className="alert alert-success">
            Success Payment
        </div>
      </div>
    </main>
  )
}

export default Success