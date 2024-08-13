import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
export async function middleware(req: NextRequest,res:NextResponse) {
    const bearerToken = req.headers.get("authorization") as string;

    if(!bearerToken){
        // return res.status(401).json({
        //     errorMessage: "Unauthorized request",
        // })
        return new NextResponse(
            JSON.stringify({errorMessage: "Unauthorized request"}),
            { status: 401}
        )
    }
    const token= bearerToken.split(" ")[1]
    if(!token){
        return new NextResponse(
            JSON.stringify({errorMessage: "Unauthorized request"}),{ status: 401}
        )
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // verify token
    try{
        await jose.jwtVerify(token,secret)
    } catch(error){
        return new NextResponse(
            JSON.stringify({errorMessage: "Unauthorized request"}),{ status :401}
        )
    }
}

// only to run the middleware at api/auth/me instead of running a
export const config ={
    matcher: ["/api/auth/me"]
}