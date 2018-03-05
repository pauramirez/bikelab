export function PostData(type, userData){

    let baseUrl = "/loginUser";

    return new Promise((resolve, reject )=>{
        fetch(baseUrl,{
            method:"POST",
            body : JSON.stringify(userData)
        })
            .then((response)=> response.json())
            .then((res)=>{
                resolve(res);
            })
            .catch((error)=>{
                reject(error);
            });
    });
}