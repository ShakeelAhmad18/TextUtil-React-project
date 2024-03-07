import React from 'react'

export default function Count() {
  const [count,setCount]=React.useState({
    num1:2,
    num2:6,
    response:'',
    score:0,
    incorrect:false
  })
  const hanndlekey=(event)=>{
    if(event.key==='Enter')
    {
      const answer=parseInt(count.response)
      if(count.num1+count.num2===answer)
      //correct answer
      {
        setCount({
         ...count,
         score:count.score+1,
         num1:Math.ceil(Math.random()*10),
         num2:Math.ceil(Math.random()*10),
         response:"",
         incorrect:false
        })
      }
      else
      {
        //incorrect answer
        setCount({
          ...count,
          score:count.score-1,
          response:"",
          incorrect:true
        })
      }
    }

  }
  const handleresponse=(event)=>{
    setCount({
      ...count,
      response:event.target.value
    })
  }
  if(count.score===10)
  {
    return(
      <h1>You Win!</h1>
    )
  }
  return (
    <div>
      <div className={count.incorrect ? 'incorrect':""} id='probluem'>{count.num1} + {count.num2}</div>
      <input type="text" autoFocus={true} onKeyDown={hanndlekey} value={count.response} onChange={handleresponse}/>
      <div>Score:{count.score}</div>
    </div>
  )
}
