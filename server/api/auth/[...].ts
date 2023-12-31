import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

const prisma = new PrismaClient()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  adapter: PrismaAdapter(),
  secret: runtimeConfig.authJs.secret,
  providers: []
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
