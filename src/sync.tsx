const BASE_URL = 'https://refactored-chainsaw-teeti.onrender.com/api/v1/users';
export const promiseThen = new Promise((resolve, reject) => {
    fetch('https://refactored-chainsaw-teeti.onrender.com/api/v1/users',{
      method:'GET',
      headers:{}
    })
    .then((res)=>res.json())
    .then(dat=>{
      resolve(dat)
    })
    
});

