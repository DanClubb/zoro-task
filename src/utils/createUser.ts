import User from "@/server/db";

export async function createUser(username: string, password: string) {
    await User.create({
        username,
        password,
    });
}
