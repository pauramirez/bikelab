export function PostData(type, userData){

    let baseUrl = "/loginUser";
    console.log("prepromise");
    return new Promise((resolve, reject )=>{
        console.log("prepost");
        fetch(baseUrl,{
            method:"POST",
            body : JSON.stringify(userData)
        })
            .then((response)=> response.json())
            .then((res)=>{
                resolve(res);
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
                reject(error);
            });
    });
}