"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Users, Building2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NetworkPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // If accessing from desktop, redirect to people page (existing behavior)
    if (window.innerWidth >= 768) {
      router.replace('/people')
    }
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [router])

  const handleTabChange = (value: string) => {
    if (value === "people") {
      router.push('/people')
    } else if (value === "companies") {
      router.push('/employers')
    }
  }

  // Don't render anything on desktop (will redirect)
  if (!isMobile) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-4 px-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-heading text-primary-navy mb-2">Network</h1>
        <p className="text-slate-600 font-subheading text-base sm:text-lg">
          Connect with professionals and discover companies
        </p>
      </div>

      {/* Mobile Tabs */}
      <Tabs defaultValue="people" onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100 rounded-xl p-1 h-12">
          <TabsTrigger 
            value="people" 
            className="flex items-center space-x-2 data-[state=active]:bg-primary-navy data-[state=active]:text-white rounded-lg font-subheading text-sm transition-all"
          >
            <Users className="h-4 w-4" />
            <span>People</span>
          </TabsTrigger>
          <TabsTrigger 
            value="companies" 
            className="flex items-center space-x-2 data-[state=active]:bg-primary-navy data-[state=active]:text-white rounded-lg font-subheading text-sm transition-all"
          >
            <Building2 className="h-4 w-4" />
            <span>Companies</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="people" className="mt-6">
          <div className="text-center py-8">
            <div className="h-16 w-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-navy" />
            </div>
            <h3 className="text-lg font-heading text-primary-navy mb-2">Redirecting to People...</h3>
            <p className="text-slate-600 font-subheading">You'll be taken to the people directory shortly.</p>
          </div>
        </TabsContent>

        <TabsContent value="companies" className="mt-6">
          <div className="text-center py-8">
            <div className="h-16 w-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary-navy" />
            </div>
            <h3 className="text-lg font-heading text-primary-navy mb-2">Redirecting to Companies...</h3>
            <p className="text-slate-600 font-subheading">You'll be taken to the companies directory shortly.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 