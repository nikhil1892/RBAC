import React, {useEffect, useState} from "react";
import GetApplicationsApi from "../../api/GetApplicationsApi";


export default function Dashboarad(){
const [applicationData, setApplicationData] = useState<any>();

    const getApplications = async () => {
        const resp = await GetApplicationsApi();
        setApplicationData(resp?.results);
    }
    console.log(applicationData);

    useEffect(()=>{
        getApplications();
    },[])

    return (
        <>
        <h2>dashboard page</h2>
        {applicationData?.map((x: any) => (
            <h2>{x.name}</h2>
        ))}
    </>
    )
}