import {useState,useEffect} from 'react';
import axios from 'axios';
const useApi = (params) => {
    const [datas, setdatas] = useState([]);
    useEffect(()=>{
        axios.get(`https://techsites.net/keymat/${params}`)
        .then(res => {
            setdatas(res.data.eko)
        })
    },[])
    return datas
}
export default useApi
