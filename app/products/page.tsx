"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [products,setProducts] = useState<any>();
  // gọi api lấy data để đi render ra màn hình 

  //fetch
  //axios

  useEffect(()=>{
    axios.get("http://localhost:3000/api/products")
    .then((res)=>{
      console.log("data",res);
      setProducts(res.data.data);
    })
    .catch((err)=>{
      console.log("err",err);
      
    })
  },[])
  const handleClick = (id:number)=>{
    console.log("giá trị id: ",id);
    axios.get(`http://localhost:3000/api/products/${id}`)
    .then((res)=>{
      console.log("chi tiết sản phẩm", res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>Danh sách sản phẩm
      {products?.map((item:any)=>{
        return (
          <div key={item.id}>
            <p>Tên: {item.name}</p>
            <p>Giá: {item.price}</p>
            <button onClick={()=> handleClick(item.id)}>chi tiết sản phẩm</button>
            <p>*********************</p>
          </div>
        )
      })}
    </div>
  )
}
