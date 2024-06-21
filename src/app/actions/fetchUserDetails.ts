"use server";

import { notFound } from "next/navigation";

export async function fetchUserDetails(username: string) {
    const response = await fetch(`http://localhost:3000//api/${username}`, {
        cache: "no-store",
    });
    if (response.status === 404) {
        return notFound();
    }
    const data = await response.json();
    return data;
}
