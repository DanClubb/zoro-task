import User from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    const { username } = context.params;
    try {
        const user = await User.findOne({ username: username });
        if (user) return NextResponse.json(user);
        else
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
