import { NextRequest,NextResponse } from "next/server";
import fs from "fs"
import path from "path";
import { json } from "stream/consumers";

export const POST = async (req:NextRequest) =>{
    try {
        const filesPath = path.join(process.cwd(), "data/products.json");
        const product = JSON.parse(fs.readFileSync(filesPath, "utf-8"));
        const newproduct = await req.json();
        product.push(newproduct);
        fs.writeFileSync(filesPath, JSON.stringify(product, null, 3), "utf8");
        return NextResponse.json({
            message:"Thêm sản phẩm thành công"
        })
    } catch (error) {
        
    }
}