import {service} from "../request.ts"
export function PPP(username:string, userage:number){
    return service.request({
        method: "post",
        params: {
            name: username,
            age: userage
        }
    })
}
export function ggg(){
    return service.request({
        method: "get"
    })
}