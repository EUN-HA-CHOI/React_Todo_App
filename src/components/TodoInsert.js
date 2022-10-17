import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";  //아이콘 이름 넣기
import '../styles/TodoInsert.scss'

function TodoInsert({onInsert}) {

  const [value, setValue] = useState(''); 

  const onChange = useCallback (e => {
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback(e => {
    onInsert(value);
    setValue('');
    e.preventDefauit();
    //submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
  },[value]);

  return (
    <form className='TodoInsert' onSubmit = {onSubmit}>
      <input 
      placeholder='할 일을 입력하세요.'
      value={value}
      onChange={onChange}
      />
      <button type='submit'> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert
//