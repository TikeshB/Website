"use client"

import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { MessageCircle, X, ArrowUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SUGGESTIONS = ["What does AEIV Global do?", "Tell me about Blisswork", "How do I get in touch?"]

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, status])

  const isBusy = status === "submitted" || status === "streaming"

  function submit(text: string) {
    const value = text.trim()
    if (!value || isBusy) return
    sendMessage({ text: value })
    setInput("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {open && (
        <div className="flex h-[560px] w-[min(400px,calc(100vw-3rem))] flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium leading-tight">AEIV Assistant</p>
                <p className="text-xs text-muted-foreground leading-tight">Ask about our products</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-foreground/5 hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center gap-4 px-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5">
                  <Sparkles className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Ask me anything about AEIV Global, Blisswork, GRC, or WCAG.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="rounded-full border border-foreground/10 px-3 py-1.5 text-xs text-foreground/80 hover:bg-foreground/5 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-foreground text-background rounded-br-md"
                      : "bg-foreground/5 text-foreground rounded-bl-md",
                  )}
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? <span key={i}>{part.text}</span> : null,
                  )}
                </div>
              </div>
            ))}

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-foreground/5 px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce"
                      style={{ animationDelay: `${i * 120}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(input)
            }}
            className="flex items-end gap-2 border-t border-foreground/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              disabled={isBusy}
              className="flex-1 resize-none rounded-full border border-foreground/10 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-foreground/30 disabled:opacity-50"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isBusy || !input.trim()}
              className="h-10 w-10 rounded-full bg-foreground text-background hover:bg-foreground/90 shrink-0"
              aria-label="Send message"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      <Button
        onClick={() => setOpen((v) => !v)}
        size="icon"
        aria-label={open ? "Close AEIV Assistant" : "Open AEIV Assistant"}
        className={cn(
          "h-14 w-14 rounded-full bg-foreground text-background shadow-xl hover:bg-foreground/90 transition-transform hover:scale-105",
          open && "rotate-0",
        )}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>
    </div>
  )
}
