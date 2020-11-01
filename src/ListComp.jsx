import React, {useState} from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from '@material-ui/icons/Close';

/**
* @author
* @function ListComp
**/

let mark = true;

const ListComp = (props) => {

    const [line, setLine] = useState(false);
    const cutIt = () => {
        if(mark){
            setLine(mark);
            mark = false;
        }else{
            setLine(mark);
            mark = true; 
        }
    }

  return(
      <>
        <div className='todo_style'>
            
            <span onClick={()=>{ props.onSelect(props.id); }} >
                    <DeleteIcon className="deleteIcon" />
            </span>
            <span onClick={cutIt}>
                    <CloseIcon className="deleteIcon" />
            </span>
                
            <li style={{textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
        </div>
      </>
   );
 }

export default ListComp