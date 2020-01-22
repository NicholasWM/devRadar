import axios from 'axios'

const api = axios.create({
    baseURL: `https://3333-faf1a301-71e0-49e3-893b-169419f076fb.ws-us02.gitpod.io/`,
})

export default api