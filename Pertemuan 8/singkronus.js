//callback synchronus
function fungsi1(parameter1,parameter2,callback){
    console.log(parameter1,parameter2)
    callback()
}
function fungsi2(){
    console.log('callback')
}

fungsi1(1,2,fungsi2)


//callback asynchronus

function proses1(){
    console.log('proses 1')
}
function proses2(){
    console.log('proses 2')
}
function proses3(){
    console.log('proses 3')
}
proses1()
proses2()
proses3()

//asynchronus settimeout

function proses1(){
    console.log('proses 1')
}
function proses2(){
    setTimeout(
        function(){
            console.log('proses 2')
        },1000
    ) 
}
function proses3(){
    console.log('proses 3')
}
proses1()
proses2()
proses3()

function proses1(){
    console.log('proses 1')
}
function proses2(callback){
    setTimeout(
        function(){
            console.log('proses 2')
            callback()
        },1000
    )
    
}
function proses3(){
    console.log('proses 3')
}
proses1()
proses2(proses3)

//promise

let promes = new Promise((resolve,reject) => {
    // resolve('sukses')
    reject('gagal')
})

promes
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})


fetch('https://bukuprojek.herokuapp.com/buku/1')
    .then(function(response){
        return response.json()
    })
    .then(data =>{console.log(data.data.nama)})

//async await
async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // tunggu sampai promise selesai (*)
  
    console.log(result); // "done!"
}
  
  f();