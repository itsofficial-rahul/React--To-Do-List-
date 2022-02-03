function Data(props)
{
    console.log(props.data)
    
    return(
        <div>
 
     <h1>{props.data}</h1>
 {/* <button onClick={()=>Showdata()}>add</button>
    <button onClick={()=>reset()}>reset</button> */}
        </div>
    )
}
export default Data;