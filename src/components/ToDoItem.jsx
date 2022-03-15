import React, { useState } from "react";

//here we are trying to add some functionality to todolist items
// when an item is clicked it should get line through
// text decoration
// function ToDoItem(params) {
//   // here we will add a onClick method to div
//   // so that whenever an utem in div is clicked
//   // some function is called
//   // for this we will amke use of an variable and to change that variable we will use useState

//   const [isDone, setIsDone] = useState(false);

//   function handleClick(prevValue) {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       {/* inline styling */}
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {params.text}
//       </li>
//     </div>
//   );
// }

//** TILL NOW WHAT WE ARE ABLE TO ACHIEVE */
// ** ITEMS ARE GETTING ADDED AND CAN BE STRIKED THROUGH WHEN CLICKED
// BUT NOW WE WANT TO DELETE AN ITEM FROM TEMS ARRAY WHEN CLICKED
function ToDoItem(params) {
  return (
    // this is wrong bcz this way we are calling onClick method as soon as div line gets executed
    // <div onClick={params.onChecked(params.id)}>

    // to call that function when div is clicked we have to add that as a function

    <div
      onClick={() => {
        params.onChecked(params.id);
      }}
    >
      <li>{params.text}</li>
    </div>
  );
}

export default ToDoItem;
