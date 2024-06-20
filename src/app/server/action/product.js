import { httpApiStore } from "@/app/util/setting";

export const getProductApi = async () => {
    // const res = await axios.get('http://localhost:3000/api/products');
    // const res = await httpApiStore.get('/api/product');
    const res = await fetch('https://apistore.cybersoft.edu.vn/api/product', {
        next: {revalidate: 60 * 1000 * 15}
    });
    const resData = await res.json();
    return resData.content;
}

export const getDetailProductByIdApi = async (id) => {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/product/getbyid?id=${id}`, {
        next: {revalidate: 60 * 1000 * 15}
    })
    const resData = await res.json();
    return resData.content;
}

export const getProductListByKeyword = async (keyword) => {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`,{
        // next:{revalidate: 60 * 1000 *15 }
    })
    const resData = await res.json();
    return resData.content;
}