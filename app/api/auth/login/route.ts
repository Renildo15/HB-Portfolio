import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcrypt';

export async function POST(req: Request) {
    const { email, password } = await req.json();
    console.log(email, password);
    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const valid = await bcrypt.compare(password, user.password);
    
    if (!valid) {
        return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    const res = NextResponse.json({ message: "Login successful" }, { status: 200 });

    res.cookies.set('auth', String(user.id), {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
    })

    return res;
}