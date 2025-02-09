import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col w-full  items-center  min-h-screen gap-2 sm:p-20">
      <main className="flex flex-col flex-1 gap-2">
        <div className="flex flex-col gap-2 items-center h-52">
          <h1 className="text-4xl font-bold">Micro Chat App</h1>
          <p className="text-lg font-mono text-muted-foreground">
            open source chat app that you can integrate with any ai in backend
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="link"
            className="flex items-center gap-2 hover:animate-bounce"
          >
            <Link href="/chat">Go TO CHAT</Link>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
