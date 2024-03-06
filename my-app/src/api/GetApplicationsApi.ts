import { getRequest } from "../fetch"

export default async function GetApplicationsApi() {
    try{
const resp = await getRequest();
return resp;
    }
    catch(error){
        console.log(error)
    }
}