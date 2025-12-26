import { prisma } from "@/lib/prisma";
import * as bcrypt from 'bcrypt';

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL || ""
    const adminPassword = process.env.ADMIN_PASSWORD || ""

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    const existingAdmin = await prisma.user.findUnique({
        where: {
            email: adminEmail,
        },
    });

    if (existingAdmin) {
        console.log("Admin user already exists. Skipping creation.");
        return;
    }
    await prisma.user.create({
        data: {
            email: adminEmail,
            password: hashedPassword,
        }
    })
}

main()    
.then(async () => {
        await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});