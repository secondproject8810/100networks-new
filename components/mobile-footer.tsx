"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageSquare, Globe, Briefcase, GraduationCap, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const footerItems = [
  {
    name: "Feed",
    href: "/feed",
    icon: MessageSquare,
  },
  {
    name: "Freelance",
    href: "/jobs/freelance",
    icon: Globe,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    name: "Internships",
    href: "/internships",
    icon: GraduationCap,
  },
  {
    name: "Network",
    href: "/network",
    icon: Users,
  },
]

export default function MobileFooter() {
  const pathname = usePathname()

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 md:hidden">
      <div className="flex items-center justify-around px-2 py-2 safe-area-pb">
        {footerItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors min-w-0 flex-1",
                isActive
                  ? "text-[#0056B3] bg-[#0056B3]/5"
                  : "text-slate-600 hover:text-[#0056B3] hover:bg-slate-50"
              )}
            >
              <item.icon className={cn("h-4 w-4 mb-0.5", isActive ? "text-[#0056B3]" : "text-slate-600")} />
              <span className={cn(
                "text-[10px] font-medium max-w-full leading-none text-center",
                isActive ? "text-[#0056B3]" : "text-slate-600"
              )}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </footer>
  )
} 