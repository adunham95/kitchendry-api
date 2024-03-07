import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const roundsOfHashing = 10;

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const passwordUser1 = await bcrypt.hash('password', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'adunham95@gmail.com' },
    update: {
      password: passwordUser1,
      firstName: 'Adrian',
      lastName: 'Dunham',
    },
    create: {
      email: 'adunham95@gmail.com',
      firstName: 'Adrian',
      lastName: 'Dunham',
      password: passwordUser1,
    },
  });

  console.log(user1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
