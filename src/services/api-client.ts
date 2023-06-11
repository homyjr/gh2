import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key:'37fcf55d7d164a6c8b94213a8f6f29d9'
    }
})