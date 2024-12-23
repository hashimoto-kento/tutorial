import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButton render')

  return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButton render')

  return <button onClick={onClick}>Increment</button>
})

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButton render')

  return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1)
  }, [])

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  const double = useCallback(() => {
    setCount((prevCount) => prevCount * 2)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}
