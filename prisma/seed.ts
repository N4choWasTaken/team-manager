import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create clubs
  await prisma.club.createMany({
    data: [
      { name: 'Club A' },
      { name: 'Club B' },
      { name: 'Club C' },
    ],
  });

  // Retrieve clubs
  const clubs = await prisma.club.findMany();

  // Create teams
  await prisma.team.createMany({
    data: [
      { name: 'Team A', clubId: clubs[0].id },
      { name: 'Team B', clubId: clubs[0].id },
      { name: 'Team C', clubId: clubs[1].id },
      { name: 'Team D', clubId: clubs[2].id },
    ],
  });

  // Create users
  await prisma.user.createMany({
    data: [
      { name: 'User A', password: 'password', email: 'usera@example.com' },
      { name: 'User B', password: 'password', email: 'userb@example.com' },
      { name: 'User C', password: 'password', email: 'userc@example.com' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
