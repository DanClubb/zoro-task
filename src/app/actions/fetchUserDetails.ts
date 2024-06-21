"use server";

export async function fetchUserDetails(username: string) {
    const response = await fetch(`http://localhost:3000//api/${username}`);
    const data = await response.json();
    return data;
}
