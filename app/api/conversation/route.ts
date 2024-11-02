// api/conversation/route.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Message is require", { status: 500 });
    }
    const freeTrial = checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });
    await increaseApiLimit();
    return NextResponse.json(response.choices[0].message); // Return the assistant's message
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
