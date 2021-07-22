import {useState,useEffect} from 'react';
import axios from 'axios';
const useApi = (params) => {
    const [datas, setdatas] = useState({items:[],articles:[]});
    useEffect(()=>{
        axios.get(`https://techsites.net/ho01/${params}`)
        .then(res => {
            setdatas(res.data)
        })
        // fetch(`https://techsites.net/ho01/${params}`)
        // .then(response => response.json())
        // .then(res => setdatas(res))
        // console.log(datas)
    },[params])
    return datas
}
export default useApi
