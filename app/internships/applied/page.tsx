"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  ArrowLeft,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  MessageCircle,
  MoreVertical,
  Star,
  XCircle,
  Eye,
  GraduationCap,
  Send
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AppliedInternshipsPage() {
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedCompanyForMessage, setSelectedCompanyForMessage] = useState<any>(null)
  const [messageText, setMessageText] = useState("")

  const applications = [
    {
      id: 1,
      internshipTitle: "Software Engineering Intern",
      companyName: "TechVision",
      companyAvatar: "TV",
      companyRating: 4.8,
      stipend: "$2,500/month",
      appliedDate: "3 days ago",
      status: "under_review",
      lastActivity: "1 day ago",
      coverLetter: "I am a computer science student with experience in React and Python. I'm passionate about learning and contributing to real-world projects...",
      skills: ["JavaScript", "React", "Python", "Git"],
      location: "San Francisco, CA",
      duration: "12 weeks",
      programStart: "June 2024",
      mentor: "Sarah Chen, Senior Engineer"
    },
    {
      id: 2,
      internshipTitle: "Data Science Intern",
      companyName: "Flexbone",
      companyAvatar: "FB",
      companyRating: 4.9,
      stipend: "$2,200/month",
      appliedDate: "1 week ago",
      status: "interview_scheduled",
      lastActivity: "2 hours ago",
      coverLetter: "As a statistics major with experience in Python and machine learning, I'm excited about the opportunity to work on healthcare data analytics...",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      location: "Atlanta, GA",
      duration: "10 weeks",
      programStart: "June 2024",
      mentor: "Dr. Michael Torres, Lead Data Scientist",
      interviewDate: "Friday at 2:00 PM"
    },
    {
      id: 3,
      internshipTitle: "Marketing Intern",
      companyName: "GrowthBoost",
      companyAvatar: "GB",
      companyRating: 4.7,
      stipend: "$1,800/month",
      appliedDate: "2 weeks ago",
      status: "shortlisted",
      lastActivity: "3 days ago",
      coverLetter: "I'm a marketing student with hands-on experience in social media management and content creation.",
      skills: ["Social Media", "Content Creation", "Analytics", "Marketing"],
      location: "New York, NY",
      duration: "12 weeks",
      programStart: "June 2024",
      mentor: "Alex Rodriguez, Marketing Director"
    },
    {
      id: 4,
      internshipTitle: "UX Design Intern",
      companyName: "DesignCorp",
      companyAvatar: "DC",
      companyRating: 4.6,
      stipend: "$2,000/month",
      appliedDate: "3 weeks ago",
      status: "rejected",
      lastActivity: "1 week ago",
      coverLetter: "I'm a design student with proficiency in Figma and user research methods.",
      skills: ["Figma", "User Research", "Prototyping", "UI/UX"],
      location: "Austin, TX",
      duration: "10 weeks",
      programStart: "June 2024",
      mentor: "Jennifer Kim, Senior UX Designer"
    },
    {
      id: 5,
      internshipTitle: "Business Development Intern",
      companyName: "StartupHub",
      companyAvatar: "SH",
      companyRating: 4.8,
      stipend: "$1,600/month",
      appliedDate: "1 month ago",
      status: "accepted",
      lastActivity: "Today",
      coverLetter: "As a business student interested in startups, I bring experience in market research and client outreach.",
      skills: ["Business Analysis", "Market Research", "Communication", "Excel"],
      location: "Boston, MA",
      duration: "14 weeks",
      programStart: "May 2024",
      mentor: "David Park, VP of Business Development",
      internshipDetails: {
        weeklyHours: "40 hours/week",
        paymentSchedule: "Monthly"
      }
    }
  ]

  const handleViewInternshipDetails = (application: any) => {
    window.location.href = `/internships/applied/${application.id}`
  }

  const handleMessageCompany = (application: any) => {
    setSelectedCompanyForMessage(application)
    setShowMessageModal(true)
  }

  const handleSendMessage = () => {
    console.log("Sending message to:", selectedCompanyForMessage?.companyName, messageText)
    setShowMessageModal(false)
    setMessageText("")
    setSelectedCompanyForMessage(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "under_review":
        return "bg-orange-50 text-orange-600 border-orange-200"
      case "shortlisted":
        return "bg-purple-50 text-purple-600 border-purple-200"
      case "interview_scheduled":
        return "bg-green-50 text-green-600 border-green-200"
      case "rejected":
        return "bg-red-50 text-red-600 border-red-200"
      case "accepted":
        return "bg-emerald-50 text-emerald-600 border-emerald-200"
      default:
        return "bg-slate-50 text-slate-600 border-slate-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "applied":
        return <Clock className="h-3 w-3" />
      case "under_review":
        return <Eye className="h-3 w-3" />
      case "shortlisted":
        return <Star className="h-3 w-3" />
      case "interview_scheduled":
        return <Calendar className="h-3 w-3" />
      case "rejected":
        return <XCircle className="h-3 w-3" />
      case "accepted":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "applied":
        return "Applied"
      case "under_review":
        return "Under Review"
      case "shortlisted":
        return "Shortlisted"
      case "interview_scheduled":
        return "Interview Scheduled"
      case "rejected":
        return "Rejected"
      case "accepted":
        return "Accepted"
      default:
        return "Unknown"
    }
  }

  const getStatusPercentage = (count: number) => {
    return ((count / applications.length) * 100).toFixed(0)
  }

  const statusCounts = {
    total: applications.length,
    pending: applications.filter(app => ["applied", "under_review", "shortlisted", "interview_scheduled"].includes(app.status)).length,
    accepted: applications.filter(app => app.status === "accepted").length,
    rejected: applications.filter(app => app.status === "rejected").length,
    interviews: applications.filter(app => app.status === "interview_scheduled").length
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <div className="flex items-center mb-4">
          <Link href="/internships">
            <Button
              variant="outline"
              size="icon"
              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-3">Applied Internships</h1>
        <p className="text-slate-600 font-subheading text-base sm:text-lg lg:text-xl">
          Track your internship applications and manage your opportunities
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-subheading text-slate-500">Total</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-primary-navy">{statusCounts.total}</p>
              </div>
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-subheading text-slate-500">Pending</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-orange-600">{statusCounts.pending}</p>
                <p className="text-xs font-subheading text-slate-400 hidden sm:block">{getStatusPercentage(statusCounts.pending)}%</p>
              </div>
              <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-subheading text-slate-500">Interviews</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-green-600">{statusCounts.interviews}</p>
                <p className="text-xs font-subheading text-slate-400 hidden sm:block">{getStatusPercentage(statusCounts.interviews)}%</p>
              </div>
              <Calendar className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-subheading text-slate-500">Accepted</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-emerald-600">{statusCounts.accepted}</p>
                <p className="text-xs font-subheading text-slate-400 hidden sm:block">{getStatusPercentage(statusCounts.accepted)}%</p>
              </div>
              <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-heading text-primary-navy">My Internship Applications</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="border border-slate-200 rounded-lg p-3 sm:p-4 hover:border-primary-navy transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-3 lg:space-y-0">
                  <div className="flex items-start space-x-3 flex-1">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <AvatarFallback className="bg-primary-navy text-white font-heading text-sm sm:text-lg">
                        {application.companyAvatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-heading text-primary-navy hover:text-[#0056B3] transition-colors cursor-pointer truncate">
                            {application.internshipTitle}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600 font-subheading text-sm space-y-1 sm:space-y-0">
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{application.companyName}</span>
                              <div className="flex items-center space-x-1 ml-2">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm">{application.companyRating}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{application.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-end space-x-2 flex-shrink-0">
                          <Badge className={`${getStatusColor(application.status)} font-subheading flex items-center space-x-1 text-xs`}>
                            {getStatusIcon(application.status)}
                            <span>{getStatusText(application.status)}</span>
                          </Badge>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleViewInternshipDetails(application)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleMessageCompany(application)}>
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Message Company
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <p className="text-sm font-body text-slate-600 mb-2 line-clamp-2">
                          {application.coverLetter}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-subheading text-slate-500">
                          <span>Applied {application.appliedDate}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline">Last activity: {application.lastActivity}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="flex flex-wrap gap-2">
                          {application.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-slate-200 text-slate-600 font-subheading text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {application.skills.length > 3 && (
                            <Badge variant="outline" className="border-slate-200 text-slate-600 font-subheading text-xs">
                              +{application.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewInternshipDetails(application)}
                            className="text-xs sm:text-sm h-8 px-3"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMessageCompany(application)}
                            className="text-xs sm:text-sm h-8 px-3"
                          >
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-4">
          <Link href="/internships">
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading px-8"
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Find More Internships
            </Button>
          </Link>
        </div>
      </div>



      {/* Message Modal */}
      {showMessageModal && (
        <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
          <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md mx-2">
            <DialogTitle className="text-lg lg:text-xl font-heading text-primary-navy">
              Message {selectedCompanyForMessage?.companyName}
            </DialogTitle>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-subheading text-slate-600 mb-2 block">Your Message</label>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message here..."
                  rows={4}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:border-primary-navy focus:ring-primary-navy font-body text-sm lg:text-base resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowMessageModal(false)}
                  className="font-subheading text-sm lg:text-base h-10 w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary-navy hover:bg-primary-navy/90 text-white font-subheading text-sm lg:text-base h-10 w-full sm:w-auto"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
} 