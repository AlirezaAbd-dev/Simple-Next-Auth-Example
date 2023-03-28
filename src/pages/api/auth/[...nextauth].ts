import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        console.log("token", token);
        console.log("account", account);

        token.accessToken = account.access_token;

        console.log("after", token);
      }
      return token;
    },
  },
};
export default NextAuth(authOptions);
