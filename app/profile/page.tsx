import type { Metadata } from "next"
import ProfileClientPage from "./profile-client-page"

export const metadata: Metadata = {
  title: "Profile | CampusHire",
  description: "View and edit your profile",
}

export default function ProfilePage() {
  return <ProfileClientPage />
}
