// components
// linking sysem
import Link from "next/link"
export default function TopNav() {
  const id=2
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog/posts">Blogs</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href={`/user/profile/${id}`}>Profile</Link></li>
       
      </ul>
    </div>
  )
}
