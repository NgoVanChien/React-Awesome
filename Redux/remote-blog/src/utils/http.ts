import axios, { AxiosInstance } from 'axios'

class Http {
  intstance: AxiosInstance
  constructor() {
    this.intstance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 10000
    })
  }
}

const http = new Http().intstance

export default http
