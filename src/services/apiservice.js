const baseUrl = 'http://localhost:8080/api/services'

export function servicesApi(){
    return {url:`${baseUrl}/services`,mode:'cors'}
}
export function bookServiceApi(serviceId,serviceDate){
    return {url:`${baseUrl}/slots/${serviceId}/${serviceDate}`}
}
