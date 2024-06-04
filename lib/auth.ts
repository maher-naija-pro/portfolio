import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

import type { Provider } from "next-auth/providers";

const providers: Provider[] = [GitHub];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,

  pages: {
    signIn: "/user/sign-in",
  },
});
export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});
