import { streamText, convertToModelMessages, type UIMessage } from "ai"
import { products } from "@/lib/products-data"

export const maxDuration = 30

const productSummary = products
  .map((p) => `- ${p.name} (${p.tag}): ${p.description}`)
  .join("\n")

const SYSTEM_PROMPT = `You are the AEIV Assistant, the official AI concierge for AEIV Global Private Limited (CIN: U62011MH2024PTC419187), a software company headquartered at 24 B Layout, Bezonbagh, Nagpur, Maharashtra, India, 440014.

AEIV Global builds three enterprise software products:
${productSummary}

Contact email: sidaeivarc@gmail.com

Your role:
- Answer questions about AEIV Global, its products (Blisswork, GRC, WCAG), and how to get in touch.
- Be concise, professional, and helpful — a few sentences per answer unless more detail is requested.
- If asked about pricing, implementation timelines, or anything requiring a human, direct the visitor to the Contact page or sidaeivarc@gmail.com.
- If asked something unrelated to AEIV Global or its products, politely redirect the conversation back to how you can help with AEIV Global.
- Never invent facts about the company that are not provided here.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-4o-mini",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
