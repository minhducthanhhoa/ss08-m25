import { NextRequest, NextResponse } from "next/server";

let product = [
    {
        id: 1,
        name:"iphone5",
        price:4000,
    },
    {
        id: 2,
        name:"iphone6",
        price:5000,
    },
    {
        id: 3,
        name:"iphone7",
        price:6000,
    },
]

export async function GET(){
    return NextResponse.json({
        message:"lấy danh sách sản phẩm thành công",
        data: product,
    });
}
export async function POST(req:NextRequest){
    console.log("req", await req.json());

    const dataClient = await req.json();

    // push dữ liệu từ client vào trong mảng 
    product.push(dataClient);
    
    // Trả về 1 mảng mới vừa được thêm vào
    
    return NextResponse.json({
        data: product,
    });
}