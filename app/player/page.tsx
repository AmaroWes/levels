import { getSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default async function Player() {
    const session = await getSession()
    if (!session) {
        redirect("/")
    }
    return(
        <div>
            Here, {session?.user?.name}
        </div>
    )
}