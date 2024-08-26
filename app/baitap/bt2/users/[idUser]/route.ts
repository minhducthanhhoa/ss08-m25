import { NextResponse } from "next/server";

let users = [
    {
        id: 1,
        user_name: "hoa",
        age: 20
    },
    {
        id: 2,
        user_name: "huệ",
        age: 30
    },
    {
        id: 3,
        user_name: "nhung",
        age: 25
    }
]

export async function GET(req:any,res:any){
    let findItem = users.find((item)=>{
        return item.id == res.params.idProduct
    })
    return NextResponse.json({
        message:"lấy danh sách 1 người dùng thành công",
        data: findItem,
    });
}