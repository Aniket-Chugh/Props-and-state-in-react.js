function FunctionAsProps() {
   function InsideFunction() {
alert("inside code just ran");
   }

   return <MainFunction onclick={InsideFunction}></MainFunction>
}



function MainFunction({onclick}) {
    return (
        <button onClick={onclick} >Click mee to run Inside function </button>
    );
}

export default FunctionAsProps;
