import React, { useState } from 'react'

function Counter() {
  //const [isLoading, setIsLoading] = useState(true);
 // const [movies, setMovies] = useState([]); //= state ={isLoading:true, movies[],} 
 const [value,setValue] = useState(0); 

  return (
    <>
    
    {/*<button onClick={()=>setIsLoading(false)}>클릭</button>
    <button onClick={()=>setMovies([1,2,3])}>클릭2</button> */}
    <h1>useState Hook 사용하기</h1>
    <p>현재 카운터 값은 : <b>{value}</b> 입니다.</p>
    <button onClick={()=>setValue(value + 1)}>더하기</button>
    <button onClick={()=>setValue(value - 1)}>빼기</button>
    </>
    
  )
}

export default Counter