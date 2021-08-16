import {useState,useEffect} from 'react';
import axios from 'axios';
const useApi = (params) => {
    const [datas, setdatas] = useState({items:[],articles:[]});
    useEffect(()=>{
        axios.get(`https://top10-webhostings.com/cp/${params}`)
        .then(res => {
            setdatas(res.data)
        })
    },[params])
    return datas
}
export default useApi
