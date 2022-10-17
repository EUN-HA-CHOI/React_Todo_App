import React, {useEffect, useState} from 'react'

function Info() {
  const [name, setName] = useState('');
  const [nickname , setNickname] = useState('');
  
  const onChangeName = (e) => {
    setName(e.target.value);  //setName 값을 name 에 바꿔주는 역할
  }
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  }
  
  useEffect(()=>{
    console.log("랜더링이 완료되었습니다. componentDidMount()"); //바꿀 때마다 componentDidMount()에 의해 바뀌는 건 좋지 않음 
    console.log({name,nickname}); //componentDidUpdate() 역할
  },[name,nickname]); //state([])의 값이 바뀌면 useEffect 한 번 더 바뀜
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <div> <b>이름:</b>{name}</div>
        <div> <b>닉네임:</b>{nickname}</div>
      </div>
    </div>
  )
}

export default Info