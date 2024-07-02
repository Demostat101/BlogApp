import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl:string)=>{

    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        let isMounted = true;

        // const source = axios.CancelToken.source();
        //to abort the request
        const source= axios.CancelToken.source() /* new AbortController().abort(); */

        const fetchData = async(url:string)=>{
            setIsLoading(true);
            try {

                const response = await axios.get(url, {

                    cancelToken:source.token
                    
                });

                isMounted ? setData(response.data) : setFetchError(null)
                
            } catch (error:any) {

                isMounted ? setFetchError(error.message) : setData([]) ;
          
            } finally {
                isMounted && setIsLoading(false)
            }

        }

        fetchData(dataUrl)

        const cleanUp = ()=>{
            console.log("clean up running");
            isMounted = false
            source.cancel();
        }

        return cleanUp


    },[dataUrl]);
    return {data, fetchError,isLoading};

}

export default useAxiosFetch;