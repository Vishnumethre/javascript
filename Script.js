

let arr=[1,2,3,4,5];
// let count=arr.reduce((a,b)=>
// {
// return a+b;
// },0)
// document.write(count);
// console.log('hello');


// let nam= document.getElementById('vishnu');
// // console.log(nam.innerText);
// nam.innerText="hey my name is vishnu, this is javascript course for free";

// let some = document.getElementById('ram');
// console.log(some.innerText);



// let tab= document.getElementById('table');
// tab.style.color='blue';
// console.log(tab.innerText);
// tab.innerText='vishnu baroor';
// console.log(tab.innerText);

// tab.innerHTML='<p>Hello</p>'



// let redDiv= document.getElementById('red');
// redDiv.onclick=()=>
// {
//     console.log('you clicked red buddy');
// }

// let yellowDiv=document.getElementById('yellow');
// yellowDiv.onclick=()=>
// {
//     let obj={
//         Name:'vishnu',
//         SurName:'Methre'
//     };
//     console.log(obj);
//     console.log('you clicked yellow buddy');
// }

// let greenDiv= document.getElementById('green');
// greenDiv.onclick=()=>
// {
//     let count=1;
//     let pa=Math.random(-1,2)*2;
//     if(count>pa)
//     {
//         console.log("you won buddy!");
//     }
//     else{
//         console.log('You lose buddy');
//     }
//     console.log("you clicked green budy!");
// }
// console.log(greenDiv);

// let val= Math.floor(Math.random(0,3)*3);
// console.log(val);

// console.log(Math.random(-1,1));

// let terminator;
// let cl=document.getElementById('click');
// cl.onclick= ()=>
// {
//     console.log('you clicked button');
//     let count=50;
//     terminator=setInterval(()=>
//     {
//         console.log(`The count is started:- ${count}`);
//         count+=1;


//     },1000)
// }
// document.getElementById('terminate').onclick=()=>
// {
//     if(count<60){
// console.log('worst, you need to practice daily');
//     }
//     else if(count>60 && count<80)
//     {
//         console.log("good you need to improve..");
//     }
//     else{
// console.log("great, your beast...")
//     }
// clearInterval(terminator);
// }


// let numberoftimesclicked={
//     'rock':0,
//     'papper':0,
//     'seizer':0
// };

// let squares=document.querySelectorAll('button');
// squares.forEach(squre=> {
//     squre.onclick=()=>
//     {
//         numberoftimesclicked[squre.value]+=1;
//         console.log(`you clicked this one :- ${ squre.value} ${numberoftimesclicked[squre.value]}`);
// squre.innerText=numberoftimesclicked[squre.value];
       
//     }
//     console.log(`Number of times you clicked the buttons is ${numberoftimesclicked[squre.value]} :- is ${numberoftimesclicked[squre.value]}`);

// });

// const clearcolorbox =()=>
// {
//     squares.forEach(squre =>
//         {
//             numberoftimesclicked[squre.value]=0;
//             squre.innerHTML= ' ';
//         })
// }
// let  toClear = document.getElementById('clear');
// toClear.onclick = ()=>
// {
//     clearcolorbox();
// }

// let amount=document.getElementById('v');
// console.log(amount);
//  const idCard = ()=>
//  {

//      console.log(amount.innerText);
//  }
// let something= document.getElementById('back');
// something.onclick = () =>
// {
//     idCard();
// }

// let input = document.getElementById('mouse');
// console.log(input.value);

// const call = () =>
// {
//     console.log(input.value);
// }



let input1=document.getElementById('plant');
let input2 = document.getElementById('output');

let p = document.getElementById('display');
let tip = document.getElementById('tip');


const calculate = ()=>
{
    let tipcalculation = Number(tip.value)/100;
    console.log(`Tip percentage ${tipcalculation}`);
    let tipamount= Number(input1.value) * tipcalculation;
    console.log(`Tip amount from bill ${tipamount}`);
    let totalamount= tipamount + Number(input1.value)
    console.log(`Total amount to pay is ${totalamount}`);
    p.innerHTML = totalamount;
}
input2.addEventListener('click',calculate);

console.log('vishnu');