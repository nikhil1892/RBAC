const getBaseUrl = () => "https://swapi.dev/api/people"

export const getRequest = async (): Promise<any> => {

    try {
        const url = getBaseUrl();
        const request = {};
        const resp = await fetch(url, request);
        const response = await resp?.json();
        return response;
    }
    catch (error) {
        console.log(error)
    }
}