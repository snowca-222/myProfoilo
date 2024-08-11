import {service} from "@/libs/js/request.js"
export function PPP(username, userage){
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