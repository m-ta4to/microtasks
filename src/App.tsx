import React, {useState} from 'react';
import './App.css';
import {CarsTask} from "./CarsTask";
import {ButtonTask} from "./ButtonTask";
import {Button} from "./components/Button";
import {MoneyTask} from "./MoneyTask";

function App() {
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]
    const ButtonBook=(opinion:string, rating:number)=>{
         console.log(opinion,rating)
    }
    const ButtonDor=(opinion:string, rating:number)=>{
      console.log(opinion,rating)
    }
    const B3=(message:string)=>{
      console.log(message)
    }
        // let a=1
    let[a, setA]=useState(1)

     const onClickHandler=()=>{
       setA(++a);
         console.log(a)
     }
     const onClickHandler1=()=>{
      setA(0)
     }
  return (
    <div className="App">
      <CarsTask cars={topCars}/>
      <ButtonTask/>
        <Button name={"MyImazingBooks"} callBack={()=>ButtonBook('Great choice', 10)}/>
      <Button name={"MyImazingDoramas"}  callBack={()=>ButtonDor('I like it', 9)}/>
        <Button name={'N3'} callBack={()=>B3("I'm stupid button")}/>
      <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandler1}>0</button>
        <MoneyTask/>
    </div>
  );
}

export default App;
