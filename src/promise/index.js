//A PARTIR DE AQUI SE USA ECMAS6

const somethingWillHappen = () => {
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
 .then(response => console.log(response))
 .catch(err => console.log(err)); 

 //DE ESTA MANERA PODEMOS VISUALIZAR MEJOR LOS ERRORES
 // Y HACER UN MEJOR DEBUGGING
 const somethingWillHappen2 = () => {
     return new Promise((resolve,reject) => {
         if(true){
             setTimeout(() => {
             resolve('True');
             },2000)
         }else{
             const error = new Error('Whoops!');
             reject(error);
         }
     });
 }

somethingWillHappen2()
 .then(response => console.log(response))
 .catch(err => console.error(err));

 // CORRER VARIAS PROMESAS AL MISMO TIEMPO

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results',response);
})
.catch(err => {
    console.error(err);
})