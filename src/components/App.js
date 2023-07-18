
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const App = () => {

    let list=[{tab1:"This is content for Tab 1."},{tab2:"This is content for Tab 2."},{tab3:"This is content for Tab 3."}]
  return (
    <div>
       <Tabs list={list} />
    </div>
  )
}

export default App
