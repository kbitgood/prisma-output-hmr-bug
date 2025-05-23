import { PrismaClient, Prisma as PrismaNamespace } from "@/app/generated";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
  PrismaNamespace: typeof PrismaNamespace;
};

const prisma = globalForPrisma.prisma || new PrismaClient();
export const Prisma = globalForPrisma.PrismaNamespace || PrismaNamespace;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.PrismaNamespace = Prisma;
}

export default prisma;
