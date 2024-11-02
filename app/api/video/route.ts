// api/conversation/route.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate, { FileOutput } from "replicate";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is require", { status: 500 });
    }

    const freeTrial = checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }
    const output: FileOutput = (await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          fps: 24,
          model: "xl",
          width: 1024,
          height: 576,
          prompt: prompt,
          batch_size: 1,
          num_frames: 24,
          init_weight: 0.5,
          guidance_scale: 17.5,
          negative_prompt:
            "very blue, dust, noisy, washed out, ugly, distorted, broken",
          remove_watermark: false,
          num_inference_steps: 50,
        },
      }
    )) as FileOutput;

    await increaseApiLimit();

    return NextResponse.json(output.url().href);
  } catch (error) {
    console.error("[VIDEO_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
// Clown fish swimming in a coral reef, beautiful, 8k, perfect, award winning, national geographic
