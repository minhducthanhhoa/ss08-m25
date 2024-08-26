import { NextRequest,NextResponse } from "next/server";
import fs from "fs"
import path from "path";

export const GET = async ()=>{
    const filePath = path.join(process.cwd(), "data/products.json");
    const product = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json(
        product ? product : {
            message: "Không thể lấy được sản phẩm"
        }
    )

}