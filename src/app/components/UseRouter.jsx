"use client"
import { useRouter } from "next/navigation"
export default function UseRouter() {
    const router=useRouter()
    console.log("data = ",router)
    return (
    <div>UseRouter
        <button  type="button" onClick={()=>router.push("/admin/dashboard")}>Go to Admin</button>
    </div>
  )
}
