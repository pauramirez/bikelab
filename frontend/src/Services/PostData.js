import request from "superagent";

export function PostData(type, userData) {

  let baseUrl = "/loginUser";
  console.log("API: "+ userData);
  request
    .post(baseUrl)
    .set("Content-Type", "application/json")
    .send(userData)
    .end(function (err, res) {
      return res;
    });
}
/**
Paula Ramirez 
Se puede implementar mongo en la base de datos
**/
/**   console.log("prepromise");
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
}**/
