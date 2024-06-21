import { NextResponse } from "next/server";

const userDetails = {
    username: "danclubb",
    password: "test123",
};

export async function POST(request: Request) {
    const data = await request.json();
    if (
        data.username === userDetails.username &&
        data.password === userDetails.password
    ) {
        return NextResponse.json({ data }, { status: 200 });
    }
    return NextResponse.json(
        { message: "Authentication failed" },
        { status: 500 }
    );
}
