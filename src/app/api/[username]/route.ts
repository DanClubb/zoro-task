import User from "@/server/db";
import { NextResponse } from "next/server";

const userDetails = {
    username: "danclubb",
    password: "test123",
    createdAt: new Date().toISOString(),
};

export async function GET(request: Request, context: any) {
    const { username } = context.params;
    console.log("test");
    try {
        const user = await User.findOne({ username: username });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }
}
