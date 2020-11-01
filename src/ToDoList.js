import React, { useState } from 'react';
import ListComp from './ListComp';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const ToDoLis = () => {

  const [inputItem, setInputItem] = useState('');
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputItem(event.target.value)
  }

  const ListOfItem = () => {
    if(inputItem !== ''){
      setItems((oldArr) => {
        return [...oldArr, inputItem];
      })
    }else{
      alert('Please add a task');
    }
    setInputItem('');
  }


  const deleteItem = (id) => {
    let li = document.getElementsByTagName("li");
    console.log(li);
    setItems((oldArr)=>{
      return oldArr.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  };
  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add task' value={inputItem} onChange={itemEvent} />
          <Button className="newBtn" onClick={ListOfItem}>
            <AddIcon />
          </Button>
          <ol>
            {Items.map((itemValue, index) => {
              return <ListComp key={index} id={index} text={itemValue} onSelect={deleteItem} ></ListComp>
            })}
          </ol>

        </div>
      </div>
    </>
  );
}

export default ToDoLis;
