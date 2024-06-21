import { NextResponse } from "next/server";

const userDetails = {
    username: "danclubb",
    password: "test123",
    createdAt: new Date().toISOString(),
};

export async function GET(request: Request, context: any) {
    const { username } = context.params;
    console.log(username);
    return NextResponse.json(userDetails);
}
