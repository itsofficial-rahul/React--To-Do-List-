
import './App.css';
function ToDo(props)
{
   
    return(
        <>
            <div> 
               <li>      
               <button id="btn1" onClick={()=>props.Delet(props.id)}>delet</button> 
          &nbsp;   &nbsp;  &nbsp;    {props.items}
              <input id="chek"type="checkbox"  name='Done'></input><span>Done</span>
               </li>
              
        </div>
        </>
    )
}
export default ToDo;