import { NextApiRequest, NextApiResponse } from "next";
import { TextEncoder } from "util";
import  * as jose from "jose"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();
// extract token from header
export default async function handler(req: NextApiRequest,res:NextApiResponse) {
    const bearerToken = req.headers["authorization"] as string;
    const token= bearerToken.split(" ")[1]
// extract the payload
    const payload = jwt.decode(token) as {email:string};

    if(!payload.email){
        return res.status(401).json({
            errorMessage: "Unauthorized request",
        })
    }
    // fetch from db
    const user= await  prisma.user.findUnique({
        where:{
            email:payload.email
        },
        select:{
            id:true,
            first_name:true,
            last_name:true,
            city:true,
            phone:true,
            email:true
        }
    });

    return res.json({user});
    
} 