import axios from 'axios'

const instance = axios.create({
baseURL: 'https://api.github.com/users/',
headers: {
    accept: "application/json",
}
})

export default instance
