"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
    username: z.string().min(2),
    password: z.string().min(5),
});

export async function Login(prevState: unknown, formData: FormData) {
    const result = loginSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if (result.success === false) {
        return { validationError: result.error.formErrors.fieldErrors };
    }

    const credentials = result.data;
    const response = await fetch("http://localhost:3000//api", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.status === 500) {
        const data = await response.json();
        return { authError: data.message as string };
    }

    redirect(`/${credentials.username}`);
}
