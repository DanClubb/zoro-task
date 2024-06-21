import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const serverDetails = {
        username: "danclubb",
        password: "test123",
    };
    const data = await request.json();
    if (
        data.username === serverDetails.username &&
        data.password === serverDetails.password
    ) {
        return NextResponse.json({ data }, { status: 200 });
    }
    return NextResponse.json(
        { message: "Authentication failed" },
        { status: 500 }
    );
}
