import { useEffect, useState } from "react";
import axios from 'axios'


export default function useBookSearch(query,pageNumber) {

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [books,setBooks] = useState([]);
    const [hasMore,setHasMore] = useState(false);


    useEffect(()=>{
         setBooks([])
    },[query])

    useEffect(()=>{
        setLoading(true);
        setError(false);
        let Cancal;
        axios({
            method:'GET',
            url:"/colleges.json",
            params:{q:query,page:pageNumber},
            cancelToken: new axios.CancelToken(c=>Cancal=c)
        }).then(resp=>{
            console.log(resp)
            setBooks(prev=>[...new Set([...prev,...resp.data.docs.map(b=>b.title)])])
            setHasMore(resp.data.docs.length>0)
            setLoading(false)
        }).catch(e=>{
            if(axios.isCancel(e)) return
            setError(true)
        })

        return ()=>{Cancal()} 

    },[query,pageNumber]);

    return [loading,books,hasMore,error]

}

