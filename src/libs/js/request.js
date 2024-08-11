import axios from "axios";

export const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// 攔截請求
service.interceptors.request.use(
    (config) => {
        // console.log(config)
        // 寫入邏輯需求
        return config
    },
    (error) => {
        console.log('error')
        return Promise.reject(error)
    }
)

// 攔截回應
service.interceptors.response.use(
    (response) => {
        // console.log(response)
        // 寫入邏輯需求
        return response
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

// export default service