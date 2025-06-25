"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, MapPin, Users, Building2, Star, TrendingUp, Award, ArrowLeft, Heart, HeartOff, Eye, Bookmark, Calendar, Globe } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const starredCompanies = [
  {
    id: 1,
    name: "100Networks",
    industry: "Internet & Software",
    followers: "2.08M",
    location: "San Francisco, CA",
    employees: "250 - 1,000",
    type: "Private",
    logo: null,
    logoFallback: "1N",
    isFollowing: true,
    isVerified: true,
    description: "Professional networking platform following talent with opportunities",
    openJobs: 47,
    rating: 4.8,
    starredDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Google",
    industry: "Internet & Software",
    followers: "71.6K",
    location: "Mountain View, CA",
    employees: "25,000+",
    type: "Public",
    logo: "/placeholder.svg?height=48&width=48&query=google logo",
    isFollowing: false,
    isVerified: true,
    description: "Organizing the world's information and making it universally accessible",
    openJobs: 156,
    rating: 4.5,
    starredDate: "2024-01-20"
  },
  {
    id: 3,
    name: "Microsoft",
    industry: "Internet & Software",
    followers: "89.3K",
    location: "Redmond, WA",
    employees: "25,000+",
    type: "Public",
    logo: "/placeholder.svg?height=48&width=48&query=microsoft logo",
    isFollowing: false,
    isVerified: true,
    description: "Empowering every person and organization on the planet to achieve more",
    openJobs: 198,
    rating: 4.4,
    starredDate: "2024-02-01"
  },
  {
    id: 4,
    name: "FactSet",
    industry: "Financial Services",
    followers: "5.35K",
    location: "Norwalk, CT",
    employees: "10,000 - 25,000",
    type: "Public",
    logo: "/placeholder.svg?height=48&width=48&query=factset logo",
    isFollowing: false,
    isVerified: true,
    description: "Financial data and software solutions for investment professionals",
    openJobs: 32,
    rating: 4.1,
    starredDate: "2024-02-10"
  }
]

export default function StarredCompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recently-starred")
  const [activeTab, setActiveTab] = useState('starred')

  const filteredCompanies = starredCompanies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleUnstar = (companyId: number) => {
    // Handle unstarring logic here
    console.log(`Unstarred company ${companyId}`)
  }

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center mb-4">
            <Link href="/employers">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 lg:h-10 lg:w-10"
              >
                <ArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-3">Starred Companies</h1>
          <p className="text-slate-600 font-subheading text-base sm:text-lg lg:text-xl">
            Manage your starred companies and follow their updates
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2 sm:pb-3 lg:pb-4 p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-sm sm:text-lg lg:text-xl font-heading text-primary-navy flex items-center">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-1 sm:mr-2" />
                <span className="truncate">Starred Companies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="text-xs lg:text-sm text-slate-500 font-subheading text-center py-1 sm:py-2 lg:py-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-primary-navy">24</p>
                <p className="text-xs sm:text-sm">Companies you've starred</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2 sm:pb-3 lg:pb-4 p-3 sm:p-4 lg:p-6">
              <CardTitle className="text-sm sm:text-lg lg:text-xl font-heading text-primary-navy flex items-center">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-1 sm:mr-2" />
                <span className="truncate">Following</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <div className="text-xs lg:text-sm text-slate-500 font-subheading text-center py-1 sm:py-2 lg:py-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-primary-navy">12</p>
                <p className="text-xs sm:text-sm">Companies you follow</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 max-w-lg mx-auto">
            <Button
              variant="outline"
              className="w-full sm:flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white focus:ring-0 focus:outline-none text-sm sm:text-base h-9 sm:h-10"
              onClick={() => setActiveTab('starred')}
            >
              Starred Companies
            </Button>
            <Button
              variant="outline"
              className="w-full sm:flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white focus:ring-0 focus:outline-none text-sm sm:text-base h-9 sm:h-10"
              onClick={() => setActiveTab('following')}
            >
              Following
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 sm:mt-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <Badge variant="outline" className="px-2 sm:px-3 py-1 border-primary-navy text-primary-navy bg-primary-navy/5 rounded-lg font-subheading text-xs sm:text-sm">
                All
              </Badge>
              <Badge variant="outline" className="px-2 sm:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs sm:text-sm">
                Technology
              </Badge>
              <Badge variant="outline" className="px-2 sm:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs sm:text-sm">
                Finance
              </Badge>
              <Badge variant="outline" className="px-2 sm:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs sm:text-sm">
                Healthcare
              </Badge>
              <Badge variant="outline" className="px-2 sm:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs sm:text-sm hidden sm:inline-flex">
                Education
              </Badge>
              <Badge variant="outline" className="px-2 sm:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs sm:text-sm hidden sm:inline-flex">
                Retail
              </Badge>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-32 lg:w-40 h-9 sm:h-10 border-slate-200 focus:border-primary-navy rounded-lg font-subheading focus:ring-0 focus:outline-none text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-primary-navy">
                <SelectItem value="recently-starred" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Recently Starred</SelectItem>
                <SelectItem value="name" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Company Name</SelectItem>
                <SelectItem value="rating" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Highest Rated</SelectItem>
                <SelectItem value="jobs" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Most Jobs</SelectItem>
                <SelectItem value="followers" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Most Followers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {starredCompanies.map((company) => (
              <Card key={company.id} className="border-slate-200 hover:border-primary-navy transition-colors duration-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 flex-1">
                      <Avatar className="h-12 w-12 sm:h-16 sm:w-16 mx-auto sm:mx-0 flex-shrink-0">
                        <AvatarImage src={company.logo} alt={company.name} />
                        <AvatarFallback className="bg-primary-navy text-white font-heading text-sm sm:text-xl">
                          {company.logoFallback}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-heading text-primary-navy mb-1">{company.name}</h3>
                        <p className="text-slate-600 font-subheading mb-2 sm:mb-3 text-sm sm:text-base">{company.industry}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-slate-500 font-subheading text-sm">
                          <div className="flex items-center justify-center sm:justify-start space-x-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{company.location}</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start space-x-1">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{company.employees}</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start space-x-1">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{company.rating} rating</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end space-x-3 pt-3 sm:pt-0">
                      <Button
                        variant="outline"
                        className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading text-sm px-4 h-8 sm:h-9"
                        onClick={() => handleUnstar(company.id)}
                      >
                        <HeartOff className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Unstar</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 