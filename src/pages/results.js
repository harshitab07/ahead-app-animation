import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Results = () => {
    let { id } = useParams();
    const [display, setDisplay] = useState('');

    useEffect(() => {
        let results = localStorage.getItem('results');
        if(!results) {
            setDisplay('No results to display');
        } else {
            results = JSON.parse(results);
            const myResult = results.find(res => {
                return res.id == id;
            });
            if (!myResult) {
                setDisplay('No results to display for provided id');
            } else {
                const ans = myResult.answers.join(', ');
                setDisplay(ans);
            }
        }
    }, []);
    
  return (
    <div className='w-screen h-screen flex items-center flex-col justify-center'>
    <div className='w-1/2 flex items-center p-20 flex-col border border-4 rounded-3xl'>
      <h2 className='font-bold text-3xl'>Your Answers:</h2>
      <p className='text-xl mt-2'>{display}</p>
    </div>
    </div>

  )
}

export default Results;
