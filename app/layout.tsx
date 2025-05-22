import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { MagicCursor } from "@/components/ui/magic-cursor"
import { SubtleBackground } from "@/components/ui/subtle-background"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              document.documentElement.classList.add('no-transition');
              window.addEventListener('load', function() {
                document.documentElement.classList.remove('no-transition');
              });
            })();
          `,
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased min-h-screen bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SubtleBackground />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <MagicCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: "CampusHire - Freelance Platform for Students",
  description: "Connect, collaborate and create with student freelancers and clients",
    generator: 'v0.dev'
}
