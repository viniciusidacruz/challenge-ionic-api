import { Prisma, User } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log("User: ", user);

    return user;
  }
}
