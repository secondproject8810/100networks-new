"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MapPin, Users, Building2, Star, TrendingUp, Award, ArrowLeft, Heart, Eye, EyeOff, Bookmark, Calendar, Globe, Bell, BellOff, UserMinus, Briefcase } from "lucide-react"
import Link from "next/link"

const followingCompanies = [
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
    followedDate: "2024-01-15",
    hasNotifications: true,
    lastUpdate: "Posted 5 new jobs",
    updateTime: "2 hours ago"
  },
  {
    id: 2,
    name: "Amazon",
    industry: "Internet & Software",
    followers: "145K",
    location: "Seattle, WA",
    employees: "25,000+",
    type: "Public",
    logo: "/placeholder.svg?height=48&width=48&query=amazon logo",
    isFollowing: true,
    isVerified: true,
    description: "Leading e-commerce and cloud computing company",
    openJobs: 235,
    rating: 4.2,
    followedDate: "2024-01-10",
    hasNotifications: true,
    lastUpdate: "Updated company culture page",
    updateTime: "1 day ago"
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
    isFollowing: true,
    isVerified: true,
    description: "Empowering every person and organization on the planet to achieve more",
    openJobs: 198,
    rating: 4.4,
    followedDate: "2024-02-01",
    hasNotifications: false,
    lastUpdate: "Shared quarterly results",
    updateTime: "3 days ago"
  }
]

const recentActivity = [
  {
    id: 1,
    companyName: "100Networks",
    companyLogo: null,
    companyLogoFallback: "1N",
    activity: "Posted 5 new software engineering positions",
    time: "2 hours ago",
    type: "job_posting"
  },
  {
    id: 2,
    companyName: "Amazon",
    companyLogo: "/placeholder.svg?height=32&width=32&query=amazon logo",
    activity: "Updated their company culture and values page",
    time: "1 day ago",
    type: "company_update"
  },
  {
    id: 3,
    companyName: "Microsoft",
    companyLogo: "/placeholder.svg?height=32&width=32&query=microsoft logo",
    activity: "Shared Q4 2024 earnings report",
    time: "3 days ago",
    type: "announcement"
  },
  {
    id: 4,
    companyName: "100Networks",
    companyLogo: null,
    companyLogoFallback: "1N",
    activity: "Won 'Best Workplace 2024' award",
    time: "1 week ago",
    type: "achievement"
  }
]

export default function FollowingCompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recently-followed")
  const [activeTab, setActiveTab] = useState("companies")

  const filteredCompanies = followingCompanies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleUnfollow = (companyId: number) => {
    // Handle unfollowing logic here
    console.log(`Unfollowed company ${companyId}`)
  }

  const toggleNotifications = (companyId: number) => {
    // Handle notification toggle logic here
    console.log(`Toggled notifications for company ${companyId}`)
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'job_posting':
        return <Briefcase className="h-4 w-4 text-blue-500" />
      case 'company_update':
        return <Building2 className="h-4 w-4 text-green-500" />
      case 'announcement':
        return <Bell className="h-4 w-4 text-purple-500" />
      case 'achievement':
        return <Award className="h-4 w-4 text-yellow-500" />
      default:
        return <Globe className="h-4 w-4 text-slate-500" />
    }
  }

  return (
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-3">Following Companies</h1>
        <p className="text-slate-600 font-subheading text-base sm:text-lg lg:text-xl">Companies you're following and their latest updates</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 mb-6 lg:mb-8">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-2 sm:p-3 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-subheading text-slate-500">Total Following</p>
                <p className="text-sm sm:text-lg lg:text-2xl font-heading text-primary-navy">{followingCompanies.length}</p>
              </div>
              <Eye className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-2 sm:p-3 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-subheading text-slate-500">With Notifications</p>
                <p className="text-sm sm:text-lg lg:text-2xl font-heading text-green-600">{followingCompanies.filter(c => c.hasNotifications).length}</p>
              </div>
              <Bell className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-2 sm:p-3 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-subheading text-slate-500">Open Positions</p>
                <p className="text-sm sm:text-lg lg:text-2xl font-heading text-orange-600">{followingCompanies.reduce((sum, c) => sum + c.openJobs, 0)}</p>
              </div>
              <Briefcase className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-2 sm:p-3 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-subheading text-slate-500">Recent Updates</p>
                <p className="text-sm sm:text-lg lg:text-2xl font-heading text-purple-600">{recentActivity.length}</p>
              </div>
              <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Companies and Activity */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6 lg:space-y-8">
        <TabsList className="grid w-full grid-cols-2 h-9 sm:h-10 lg:h-12">
          <TabsTrigger value="companies" className="font-subheading text-xs sm:text-sm lg:text-base">Companies ({followingCompanies.length})</TabsTrigger>
          <TabsTrigger value="activity" className="font-subheading text-xs sm:text-sm lg:text-base">Recent Activity ({recentActivity.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="companies" className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Search and Filters */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-slate-400" />
                  <Input 
                    placeholder="Search following companies..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 lg:pl-12 h-9 sm:h-10 lg:h-12 border-slate-200 focus:border-primary-navy focus:ring-primary-navy/10 font-subheading rounded-xl text-sm lg:text-base"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40 lg:w-[200px] h-9 sm:h-10 lg:h-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm lg:text-base">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="recently-followed" className="font-subheading text-sm lg:text-base">Recently Followed</SelectItem>
                    <SelectItem value="name" className="font-subheading text-sm lg:text-base">Company Name</SelectItem>
                    <SelectItem value="rating" className="font-subheading text-sm lg:text-base">Highest Rated</SelectItem>
                    <SelectItem value="jobs" className="font-subheading text-sm lg:text-base">Most Jobs</SelectItem>
                    <SelectItem value="activity" className="font-subheading text-sm lg:text-base">Most Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Companies List */}
          <div className="space-y-3 lg:space-y-4">
            {filteredCompanies.length === 0 ? (
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
                  <Eye className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto text-slate-300 mb-4" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading text-slate-600 mb-2">No companies found</h3>
                  <p className="text-slate-500 font-subheading mb-4 lg:mb-6 text-sm lg:text-base">
                    {searchQuery ? "Try adjusting your search terms" : "Start following companies to see them here"}
                  </p>
                  <Link href="/employers">
                    <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-sm lg:text-base">
                      Browse Companies
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) :
              filteredCompanies.map((company) => (
                <Card key={company.id} className="border-slate-200 hover:shadow-lg hover:border-primary-navy/30 transition-all duration-200 group">
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                          <div className="relative mx-auto sm:mx-0 flex-shrink-0">
                            {company.logo ? (
                              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                                <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-primary-navy to-[#0056B3] flex items-center justify-center text-white font-heading text-sm sm:text-base lg:text-lg">
                                {company.logoFallback}
                              </div>
                            )}
                            {company.isVerified && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Award className="h-2 w-2 sm:h-2 sm:w-2 lg:h-3 lg:w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                              <h2 className="text-base sm:text-lg lg:text-xl font-heading text-primary-navy group-hover:text-primary-navy transition-colors">
                                {company.name}
                              </h2>
                              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
                                {company.isVerified && (
                                  <Badge className="bg-green-50 text-green-700 border-green-200 font-subheading text-xs">
                                    Verified
                                  </Badge>
                                )}
                                <Eye className="h-3 w-3 lg:h-4 lg:w-4 text-blue-500" />
                                {company.hasNotifications && (
                                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-subheading text-xs">
                                    <Bell className="h-2 w-2 lg:h-3 lg:w-3 mr-1" />
                                    Notifications On
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-slate-600 font-subheading leading-relaxed mb-2 sm:mb-3 text-sm lg:text-base">
                              {company.description}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs lg:text-sm text-slate-500 mb-2">
                              <div className="flex items-center justify-center sm:justify-start space-x-1">
                                <Building2 className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                                <span className="font-subheading">{company.industry}</span>
                              </div>
                              <div className="flex items-center justify-center sm:justify-start space-x-1">
                                <MapPin className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                                <span className="font-subheading">{company.location}</span>
                              </div>
                              <div className="flex items-center justify-center sm:justify-start space-x-1">
                                <Users className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                                <span className="font-subheading">{company.employees}</span>
                              </div>
                              <div className="flex items-center justify-center sm:justify-start space-x-1">
                                <Calendar className="h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                                <span className="font-subheading">Following since {new Date(company.followedDate).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs lg:text-sm justify-center sm:justify-start">
                              <div className="flex items-center space-x-1 text-green-600">
                                <TrendingUp className="h-3 w-3 flex-shrink-0" />
                                <span className="font-subheading">{company.lastUpdate}</span>
                              </div>
                              <span className="text-slate-400 hidden sm:inline">•</span>
                              <span className="text-slate-500 font-subheading">{company.updateTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2 flex-shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto border-slate-200 hover:border-blue-300 hover:text-blue-600 rounded-lg font-subheading text-xs lg:text-sm px-3 h-8 lg:h-9"
                          onClick={() => toggleNotifications(company.id)}
                        >
                          {company.hasNotifications ? (
                            <>
                              <BellOff className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                              <span className="hidden sm:inline">Mute</span>
                            </>
                          ) : (
                            <>
                              <Bell className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                              <span className="hidden sm:inline">Notify</span>
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto border-slate-200 hover:border-red-300 hover:text-red-600 rounded-lg font-subheading text-xs lg:text-sm px-3 h-8 lg:h-9"
                          onClick={() => handleUnfollow(company.id)}
                        >
                          <UserMinus className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                          <span className="hidden sm:inline">Unfollow</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4 sm:space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-heading text-primary-navy">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="flex-shrink-0">
                    {activity.companyLogo ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-slate-200">
                        <img src={activity.companyLogo} alt={activity.companyName} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary-navy to-[#0056B3] flex items-center justify-center text-white font-heading text-xs sm:text-sm">
                        {activity.companyLogoFallback}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-subheading font-medium text-primary-navy text-sm sm:text-base">{activity.companyName}</span>
                      {getActivityIcon(activity.type)}
                    </div>
                    <p className="text-slate-600 font-subheading text-sm mb-1">{activity.activity}</p>
                    <p className="text-slate-400 font-subheading text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="mt-8 sm:mt-12 text-center">
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link href="/employers">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading px-6 sm:px-8 text-sm sm:text-base"
            >
              <Bookmark className="h-4 w-4 mr-2" />
              Find More Companies
            </Button>
          </Link>
          <Link href="/companies/starred">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading px-6 sm:px-8 text-sm sm:text-base"
            >
              <Heart className="h-4 w-4 mr-2" />
              View Starred
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 