const taskPro=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("task accomplished");
    },2000);
});

taskPro.then((msg)=>
console.log(msg)
);


//promise for age

const check=(age)=>{
    return new Promise((resolve,reject)=>{
        if(age>=18)  resolve("Eligible");

        else reject("Not Eligible");
    })
}
check(20).then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})

//promise chain

const chain=Promise.resolve(5)

chain.then((msg)=> msg*5 )
.then ((msg)=> msg+5)
.then((msg)=>console.log(msg))

//reject promise with catch

const reject=new Promise((resolve,reject)=>{
    reject("error")
})
reject.catch((err)=> console.log(err))

//promise with uppercase string

const string=(str)=>{
    return new Promise((resolve)=>{
        resolve(str.toUpperCase());
    })
}
string("hello").then((msg)=> console.log(msg));

//async function with await

const hello=(()=>{
    return new Promise((resolve)=> resolve("async function"))
})

async function run() {
   const aaa=await hello();
   console.log(aaa); 
}
run();

//async function
const num= ()=>Promise.resolve(10);

async function number() {
    const double= await num();
    console.log(double*2);
    }
    number();

//async with rejection

const rreject=()=>new Promise((resolve,reject)=>{
    reject("error")
})

async function newReject(){
    try{
        const take=await rreject();
        console.log(take);
    }catch(err){
        console.log(err);
    }
}
newReject();

//sequential promises

const step1=()=>Promise.resolve("step1");
const step2=()=>Promise.resolve("step12");

async function sequence() {
    const seq=await step1();
    console.log(seq);
    const seq1=await step2();
    console.log(seq1);
}
sequence();

//normal async function

async function normal() {
    const nor=await 10;
    console.log(nor);
}
normal();