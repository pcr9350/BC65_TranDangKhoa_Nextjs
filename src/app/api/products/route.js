import {NextRequest, NextResponse} from 'next/server'
import { httpApiStore } from '@/app/util/setting';

export async function GET(resquest) {
    let url = new URL(resquest.url)
    let params =  new URLSearchParams(url.search)
    let paramID = params.get('id') || null;

    try {
        //xây dựng api = nextjs 
        let urlApi = '';
        if(paramID) {
            urlApi = `/api/Product/getbyid?id=${paramID}`;
        } else {
            urlApi = `/api/Product`
        }
        const res = await httpApiStore.get(urlApi)
        return NextResponse.json(res.data, {status:200})
    }catch (err) {
        return NextResponse.json({content:'Lỗi server', status:500})
    }
}



