import React from "react";
import { useState } from "react";


function Tabs(props){
    let [msg,setmsg]=useState("")

    function func1()
    {
        setmsg(props.list[0].tab1)
    }
    function func2()
    {
        setmsg(props.list[1].tab2)
    }
    function func3()
    {
        setmsg(props.list[2].tab3)
    }


    console.log(props)
    return(
        <div><ul>
            <li onClick={func1}>Tab 1</li>
            <li onClick={func2}>Tab 2</li>
            <li onClick={func3}>Tab 3</li>
            </ul>
            <p id="output">{msg}</p>
            </div>
    )
}
export default Tabs