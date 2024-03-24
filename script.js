const countValue =document.querySelector('#counter');

const increment = () =>{
    // get teh vlaue form UI
let value = parseInt(countValue.innerText);
// vlue update
value=value+1;
// set the value
countValue.innerText=value;

}


// funcion decrement (){

// }


const decrement=()=>{
 // get teh vlaue form UI
let value = parseInt(countValue.innerText);
// vlue update
value=value-1;
// set the value
countValue.innerText=value;
}