import { httpApiStore } from '@/app/util/setting';
import {NextRequest,NextResponse} from 'next/server';

export async function GET(resquest) {
    //cách tạo ra api/id và bóc tách param
    console.log(resquest.url);
    console.log(resquest.url.split('/')[resquest.url.split('/').length-1])
    try {
        //xây dựng api = nextjs 
        const res = await httpApiStore.get('/api/Product');
        return NextResponse.json(res.data, {status:200})
    }catch (err) {
        return NextResponse.json({content:'Lỗi server', status:500})
    }
} 

