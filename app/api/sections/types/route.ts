import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const auth = req.cookies.get("auth");

    if (!auth) {
      return NextResponse.json(
          { error: "Não autorizado" },
          { status: 401 }
      );
    }
  try {
    const sectionsTypes = await prisma.sectionType.findMany();

    return NextResponse.json(
      { section_types: sectionsTypes },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Erro ao buscar tipos de seção" },
      { status: 500 }
    );
  }
}
