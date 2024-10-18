// let ar = [1,2,2,3,34,33,45];
// let newar = ar.map((x)=>x*2);
// console.log(newar);
// let newar = ar.filter((x)=>x%2==0).map((x)=>x*3);
// let newar = ar.reduce((x,y) => x+y,0);
// let newar = ar.filter((x)=>x%2==0).map((x)=>x*4).reduce((x, y) => x+y, 0);
// console.log(newar);

// const students =[
//     {name:"Alice",
//      score:64,
//     },
//     {name:"Bob",
//      score:50,
//     },
//     {name:"Charlie",
//      score:80,
//     },
//     {name:"David",
//         score:45,
//      }
// ];

// let newresult = students.filter((x)=>x.score>60).map((x)=>x.score*2).reduce((x, y) => x+y, 0);  
// console.log(newresult);

// sayhello = () => {
//     console.log("Hello Function");
// };
// console.log('start');
// setTimeout(sayhello, 4000);
// console.log("End");

// console.log("Start");
// setTimeout(() => {
//     console.log("First Task Completed");
//     setTimeout(() => {
//         console.log("Second Task Completed");
//         setTimeout(() => {
//             console.log("Third Task Completed");
//         }, 3000);
//     }, 2000);
// },1000);
// console.log("End");



function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(message);
            resolve();
        },delay);
    });
}

task("First Task Completed",1000)
.then(()=> task("Second Task Completed", 2000))
.then(()=> task("Third Task Completed", 3000));
