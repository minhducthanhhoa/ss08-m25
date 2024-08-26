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

export async function GET(){
    return NextResponse.json({
        message:"lấy danh sách người dùng thành công",
        data: users,
    });
}