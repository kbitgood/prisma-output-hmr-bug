import prisma from "@/lib/prisma";
import { Prisma } from "@/app/generated";

export default async function Home() {
  // THIS DOES NOT WORK AFTER HMR
  // Issue is with this Prisma.{...} calls and HMR it seems
  const test = await prisma.$queryRaw`
   SELECT * FROM user
   ${true ? Prisma.empty : Prisma.sql`WHERE id > 0`}
   `;

  // THIS WORKS
  // const test = await prisma.user.findMany();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        This is main
        <br />
        {JSON.stringify(test)}
      </main>
    </div>
  );
}
