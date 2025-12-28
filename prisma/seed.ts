import { prisma } from "@/lib/prisma";
import * as bcrypt from 'bcrypt';
import path from "path";
import fs from "fs";

function loadJson(file: string) {
    const filePath = path.join(process.cwd(), "prisma/seeds/section", file);
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function main() {
    sectionsTypeSeed();
    
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
    });

}

async function sectionsTypeSeed() {
    await prisma.sectionType.createMany({
        data: [
            {
                type: "sc:header",
                name: "Header",
                configs_json: loadJson("header.json"),
            },
            {
                type: "sc:hero",
                name: "Hero",
                configs_json: loadJson("hero.json"),
            },
            {
                type: "sc:skill",
                name: "Habilidades",
                configs_json: loadJson("skill.json"),
            },
            {
                type: "sc:experience",
                name: "Experiência",
                configs_json: loadJson("experience.json"),
            },
            {
                type: "sc:about",
                name: "Sobre mim",
                configs_json: loadJson("about.json"),
            },
            {
                type: "sc:project",
                name: "Projetos",
                configs_json: loadJson("project.json"),
            },
            {
                type: "sc:contact",
                name: "Contato",
                configs_json: loadJson("contact.json"),
            },
            {
                type: "sc:footer",
                name: "Footer",
                configs_json: loadJson("footer.json"),
            },
        ],

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