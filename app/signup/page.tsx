import type { Metadata } from "next"
import SignUpForm from "@/components/auth/signup-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign Up | CampusHire",
  description: "Create your CampusHire account",
}

export default function SignUpPage() {
  return (
    <div className="container max-w-md py-12">
      <div className="mb-8">
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">Enter your information to get started with CampusHire</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
