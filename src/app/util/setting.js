import axios from "axios";
import { setupCache } from "axios-cache-adapter";

// cấu hình cache axios 
// const cache = setupCache({maxAge: 60 * 1000 * 15}); // cache 15 phút
//Khai báo interceptor
// Khai báo interceptor
const httpApiStore = axios.create({
    baseURL: "https://apistore.cybersoft.edu.vn",
    timeout: 30 * 1000, // mili giây = 30 giây hủy request nếu không có kết quả trả về
    // adapter: cache.adapter,
  });
//Cấu hình interceptor req Gửi đi (mở network để xem)  
httpApiStore.interceptors.request.use((req) => {
    return req;
},err => {
    return Promise.reject(err);
});

//Cấu hình interceptor response (kết quả nhận về)
httpApiStore.interceptors.response.use((res) => {
    return res;
},  err => {
    return Promise.reject(err);
})
export {httpApiStore}