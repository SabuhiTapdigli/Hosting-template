import {useState,useEffect} from 'react';
import axios from 'axios';
const useApi = (params) => {
    const [datas, setdatas] = useState({items:[],articles:[]});
    useEffect(()=>{
        axios.get(`https://techsites.net/ho01/${params}`)
        .then(res => {
            setdatas(res.data)
        })
    },[])
    return datas
}
export default useApi
