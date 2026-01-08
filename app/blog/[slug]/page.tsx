'use client'
import { useRouter, usePathname } from 'next/navigation'

export default function slug() {
  const pathname = usePathname()
  return <div>{pathname}</div>
}
