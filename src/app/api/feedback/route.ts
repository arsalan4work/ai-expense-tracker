// src/app/api/feedback/route.ts
import { db } from "../../../../utils/dbConfig";
import { Feedback } from "../../../../utils/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, email } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    await db.insert(Feedback).values({
      message,
      email: email || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
