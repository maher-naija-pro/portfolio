      "use server";

import { signIn } from "@/lib/auth";


export async function SignInn() {
    return (async () => {
        await signIn("github");
    })
}