import axios from 'axios';
import React from 'react'
import { httpApiStore } from './util/setting';
import { getProductApi } from './server/action/product';
import Link from 'next/link';
import Image from 'next/image';



const Home = async () => {
  const arrProduct = await getProductApi() ;
  return (
    <main className='container'>
      <h3>Shoes shop</h3>
       <div className='row'>
       {arrProduct?.map((item, index) => {
        return <div className="col-4 mt-2" key={index}>
          <div className='card'>
            <Image src={item.image} alt='...' width={200} height={200} style={{width:'100%', height:'auto'}} />
            <div className='card-body'>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
              <Link className='btn btn-dark' href={`/detail/${item.id}`}>View detail</Link>
            </div>
          </div>
          
        </div>
      })}
       </div>
      
    </main>
  )
}

export default Home




// CLient side data 
// 'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [arrProduct,setArrayProduct] = useState([])

//   const getApiProduct = async () => {
//     const res = await axios.get('/api/products');
//     setArrayProduct(res.data.content);
//   }
//   useEffect(() =>{
//     getApiProduct();
//   },[])

//   return (
//     <main className={styles.main}>
//       <h3>Shoes shop</h3>
//       {arrProduct?.map((item,index)=>{
//         return <div className="" key={index}>
//           <h3>{item.name}</h3>
//         </div>
//       })}
//     </main>
//   );
// }
