import User from "@/server/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const users = await User.find();
    const userDetails = users.map((user) => {
        return {
            username: user.username,
            password: user.password,
        };
    });

    const reqData = await request.json();

    const reqDetails = {
        username: reqData.username,
        password: reqData.password,
    };

    for (let i = 0; i < userDetails.length; i++) {
        if (
            reqDetails.username === userDetails[i].username &&
            reqDetails.password === userDetails[i].password
        ) {
            return NextResponse.json({ reqData }, { status: 200 });
        }
    }

    return NextResponse.json(
        { message: "Authentication failed" },
        { status: 500 }
    );
}
