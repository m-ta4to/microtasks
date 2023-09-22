import React from 'react';

export const ButtonTask = () => {

                         //Task1
    // const Wishes = () => {
    //     console.log('Great day!')
    // }
    // return (
    //     <div>
    //         <button onClick={Wishes}></button>
    //     </div>
    // );

                         // Task2
    const foo1=() => {
      console.log(100200)
    }
    const foo2=(num:number) => {
        console.log(num)
    }
    return (
        <>
        <button onClick={foo1}>1</button>
        <button onClick={()=>foo2(100200)}>2</button>

        </>

    );

};

