import React, { useMemo, useState } from 'react'

const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_000_00
    }
})

const UseMeno = () => {

    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(nums);

    const add = () => {
        setCount(prev => prev + 1);
    }

//    const magical =  numbers.find(item => item.isMagical === true)
    
    const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]) // expensive calculation

  return (
      <div>

          <h2 className='text-4xl px-10 py-10'>
            {count}
          </h2>
          <button onClick={add} className='p-5 bg-amber-300 '> adding</button><br /><br />

          <span className='text-5xl font-medium text-cyan-300'> magical numbers is {magical.index}</span>

    </div>
  )
}

export default UseMeno

