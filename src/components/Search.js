import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({filter}) {
  const [filtro, setFiltro] = useState ("")
  const filtroHandler = (e) => {
    setFiltro(e.target.value);
    filter(e.target.value)  
  }
  

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={filtro} type="text" onChange={filtroHandler} />

    </>
  );
}

export default Search;
