import React, { useState } from "react";

import { Input,Button, Space, Select } from 'antd';

import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
const Tasks = () =>{ 
    const [value,setValue] = useState('none');
    const [dataFromServ,setDataFromServ] = useState({});
    const [list,setList] = useState(['']);
    const   sendData = async () =>{
        if(value==='none' || list[list.length-1] === '')
        return;
        // console.log(list);
        // console.log({'tasks':list,'version':{value});
        console.log(value)
        axios.post('https://hack-solution.tech/api/text2json', {'tasks':list,'version':value}).then((response)=>{setDataFromServ(response.data);console.log((response.data));})
    }

    const addNew = (e) =>
    {
        if(list[list.length - 1] === '')
        return; 
        e.currentTarget.remove();
        e.stopPropagation();
        setList([...list,'']);
    }
    const inputHandler = (e,index) =>{
        let data = list;
        data[index] = e.target.value;
        setList(data);
    }
    const items = [
  {
    key: '1',
    label: 'desktop'
  },
  {
    key: '2',
    label: 'mobile',
  },
];

return(
<div>
 {list.map((e,index)=>{
    return <div style={{width:'50%',verticalAlign:'center',display:'flex',position:'relative',marginLeft:'auto',marginRight:'auto',itemsAlign:'center',marginBottom:'30px'}}>
    <Input  onChange={(event)=>inputHandler(event,index)}  placeholder="Добавьте задачу"/>
    <PlusOutlined style={{fontSize:'30px'}} onClick={(event)=>addNew(event)}/>
        </div>
   
 })}

 <div style={{display:'block'}}> 
    <Select
      defaultValue="Выберите устройство"
      style={{ width: '15vw' }}
      onChange={(e)=>{setValue(e)}}
      options={[
        { value: 'mobile', label: 'mobile' },
        { value: 'desktop', label: 'desktop' },
      ]}
    />
    <div>
    <Button  onClick={sendData}>Получить макет</Button>
    <Button >Перенести в Figma</Button>
    </div>
    </div>
    <div>{JSON.stringify(dataFromServ) !== '{}' && <h2>{JSON.stringify(dataFromServ)}</h2>}</div>
    
    
</div>
)

}
export default Tasks;