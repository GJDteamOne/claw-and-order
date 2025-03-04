import React from 'react';
import Footer from '../Footer';

export const FinalPage = ({ result }) => {


  return (
    <div>

      {result === "win" ? (
        <h1> Congrats you won</h1>
      ) :
        (
          <h1>Raw-Roh</h1>
        )}
      <Footer />
    </div>
  )
}