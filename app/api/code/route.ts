// api/conversation/route.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const istructionMessage: ChatCompletionMessage = {
  role: "assistant",
  refusal: null,
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations",
};
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

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [istructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message); // Return the assistant's message
  } catch (error) {
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}