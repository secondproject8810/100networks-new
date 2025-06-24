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
  Circle,
  Clock,
  DollarSign,
  FileText,
  MapPin,
  MessageCircle,
  MoreVertical,
  Star,
  Users,
  XCircle,
  AlertCircle,
  Mail,
  Eye,
  GraduationCap,
  Award,
  TrendingUp,
  CheckSquare,
  X,
  Send
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AppliedInternshipsPage() {
  const [selectedInternshipDetails, setSelectedInternshipDetails] = useState<any>(null)
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
      internshipPosted: "5 days ago",
      totalApplicants: 45,
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
      internshipPosted: "10 days ago",
      totalApplicants: 32,
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
      coverLetter: "I'm a marketing student with hands-on experience in social media management and content creation. I've successfully managed campaigns for local businesses...",
      skills: ["Social Media", "Content Creation", "Analytics", "Marketing"],
      location: "New York, NY",
      internshipPosted: "3 weeks ago",
      totalApplicants: 28,
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
      coverLetter: "I'm a design student with proficiency in Figma and user research methods. My portfolio showcases mobile app designs and user experience projects...",
      skills: ["Figma", "User Research", "Prototyping", "UI/UX"],
      location: "Austin, TX",
      internshipPosted: "1 month ago",
      totalApplicants: 67,
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
      coverLetter: "As a business student interested in startups, I bring experience in market research and client outreach from previous internships...",
      skills: ["Business Analysis", "Market Research", "Communication", "Excel"],
      location: "Boston, MA",
      internshipPosted: "6 weeks ago",
      totalApplicants: 22,
      duration: "14 weeks",
      programStart: "May 2024",
      mentor: "David Park, VP of Business Development",
      startDate: "Started 2 weeks ago",
      internshipDetails: {
        weeklyHours: "40 hours/week",
        paymentSchedule: "Monthly",
        totalStipend: "$6,400",
        projects: [
          { name: "Market Research Analysis", status: "completed", dueDate: "Week 3" },
          { name: "Lead Generation Campaign", status: "in-progress", dueDate: "Week 6" },
          { name: "Client Presentation", status: "pending", dueDate: "Week 10" },
          { name: "Final Report & Recommendations", status: "pending", dueDate: "Week 14" }
        ],
        learningObjectives: [
          "Understand startup business development processes",
          "Learn customer acquisition strategies",
          "Develop analytical and presentation skills",
          "Gain exposure to venture capital and funding processes"
        ],
        evaluationCriteria: [
          "Quality of research and analysis",
          "Initiative and proactive communication",
          "Collaboration with team members",
          "Final presentation and recommendations"
        ]
      }
    }
  ]

  const handleViewInternshipDetails = (application: any) => {
    const internshipDetails = {
      title: application.internshipTitle,
      company: application.companyName,
      logo: "/placeholder-company-logo.png",
      location: application.location,
      stipend: application.stipend,
      type: "Internship",
      duration: application.duration,
      posted: application.internshipPosted,
      description: application.coverLetter,
      fullDescription: `${application.coverLetter} This is a ${application.duration} internship program starting in ${application.programStart}. The internship was posted ${application.internshipPosted} and has attracted ${application.totalApplicants} applicants.`,
      skills: application.skills,
      requirements: [
        "Currently enrolled in relevant degree program",
        "Strong academic performance",
        "Relevant coursework or project experience",
        "Excellent communication and teamwork skills",
        "Enthusiasm for learning and professional growth"
      ],
      responsibilities: [
        "Work on real projects under mentor guidance",
        "Participate in team meetings and training sessions",
        "Complete assigned tasks and deliverables",
        "Present learnings and project outcomes",
        "Network with professionals and other interns"
      ],
      companyInfo: {
        name: application.companyName,
        size: "100-500 employees",
        industry: "Technology",
        founded: "2018",
        description: `${application.companyName} offers comprehensive internship programs designed to provide hands-on experience and mentorship opportunities for students.`,
        benefits: ["Mentorship Program", "Learning Budget", "Networking Events", "Professional Development", "Conversion Opportunity"],
        culture: "Collaborative and learning-focused environment for interns"
      },
      applicationDeadline: "March 2024",
      programStart: application.programStart,
      mentor: application.mentor,
      applicationStatus: application.status,
      applicationStatusText: getStatusText(application.status),
      appliedDate: application.appliedDate,
      lastActivity: application.lastActivity,
      internshipDetails: application.status === "accepted" ? {
        weeklyHours: application.internshipDetails?.weeklyHours || "40 hours/week",
        paymentSchedule: application.internshipDetails?.paymentSchedule || "Monthly",
        totalStipend: application.internshipDetails?.totalStipend || application.stipend,
        projects: application.internshipDetails?.projects || [],
        learningObjectives: application.internshipDetails?.learningObjectives || [],
        evaluationCriteria: application.internshipDetails?.evaluationCriteria || []
      } : null
    }
    
    setSelectedInternshipDetails(internshipDetails)
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
        return "bg-yellow-50 text-yellow-600 border-yellow-200"
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
        return <Clock className="h-4 w-4" />
      case "under_review":
        return <Eye className="h-4 w-4" />
      case "shortlisted":
        return <Star className="h-4 w-4" />
      case "interview_scheduled":
        return <Calendar className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      case "accepted":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "applied":
        return "Application Submitted"
      case "under_review":
        return "Under Review"
      case "shortlisted":
        return "Shortlisted"
      case "interview_scheduled":
        return "Interview Scheduled"
      case "rejected":
        return "Not Selected"
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
    pending: applications.filter(app => ['applied', 'under_review', 'shortlisted', 'interview_scheduled'].includes(app.status)).length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
    interviews: applications.filter(app => app.status === 'interview_scheduled').length
  }

  return (
    <>
      <div className="w-[65%] mx-auto py-6">
        {/* Header */}
        <div className="mb-8">
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
          <h1 className="text-4xl font-heading text-primary-navy mb-3">Applied Internships</h1>
          <p className="text-slate-600 font-subheading text-xl">
            Track your internship applications and manage your opportunities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-subheading text-slate-500">Total Applications</p>
                  <p className="text-2xl font-heading text-primary-navy">{statusCounts.total}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-subheading text-slate-500">In Progress</p>
                  <p className="text-2xl font-heading text-orange-600">{statusCounts.pending}</p>
                  <p className="text-xs font-subheading text-slate-400">{getStatusPercentage(statusCounts.pending)}% of total</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-subheading text-slate-500">Interviews</p>
                  <p className="text-2xl font-heading text-green-600">{statusCounts.interviews}</p>
                  <p className="text-xs font-subheading text-slate-400">{getStatusPercentage(statusCounts.interviews)}% of total</p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-subheading text-slate-500">Accepted</p>
                  <p className="text-2xl font-heading text-emerald-600">{statusCounts.accepted}</p>
                  <p className="text-xs font-subheading text-slate-400">{getStatusPercentage(statusCounts.accepted)}% of total</p>
                </div>
                <CheckCircle className="h-8 w-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary-navy">My Internship Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications.map((application) => (
                <div
                  key={application.id}
                  className="border border-slate-200 rounded-lg p-4 hover:border-primary-navy transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary-navy text-white font-heading text-lg">
                          {application.companyAvatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-heading text-primary-navy hover:text-[#0056B3] transition-colors cursor-pointer">
                              {application.internshipTitle}
                            </h3>
                            <div className="flex items-center space-x-4 text-slate-600 font-subheading">
                              <div className="flex items-center space-x-1">
                                <Building className="h-4 w-4" />
                                <span>{application.companyName}</span>
                                <div className="flex items-center space-x-1 ml-2">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm">{application.companyRating}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{application.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <DollarSign className="h-4 w-4" />
                                <span className="font-semibold text-green-600">{application.stipend}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{application.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getStatusColor(application.status)} font-subheading flex items-center space-x-1`}>
                              {getStatusIcon(application.status)}
                              <span>{getStatusText(application.status)}</span>
                            </Badge>
                            
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-lg">
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
                        
                        {/* Application Details */}
                        <div className="bg-slate-50 rounded-lg p-3 mb-3">
                          <p className="text-sm font-body text-slate-600 mb-2 line-clamp-2">
                            {application.coverLetter}
                          </p>
                          <div className="flex items-center space-x-4 text-xs font-subheading text-slate-500">
                            <span>Applied {application.appliedDate}</span>
                            <span>•</span>
                            <span>Last activity: {application.lastActivity}</span>
                            <span>•</span>
                            <span>{application.totalApplicants} applicants</span>
                            {application.interviewDate && (
                              <>
                                <span>•</span>
                                <span className="text-green-600 font-medium">Interview: {application.interviewDate}</span>
                              </>
                            )}
                          </div>
                        </div>
                        
                        {/* Skills */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {application.skills.slice(0, 4).map((skill, index) => (
                              <Badge key={index} variant="outline" className="border-slate-200 text-slate-600 font-subheading text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {application.skills.length > 4 && (
                              <Badge variant="outline" className="border-slate-200 text-slate-600 font-subheading text-xs">
                                +{application.skills.length - 4}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewInternshipDetails(application)}
                              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading"
                            >
                              View Details
                            </Button>
                            {application.status === 'interview_scheduled' && (
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-subheading"
                              >
                                <Calendar className="h-4 w-4 mr-1" />
                                Prepare
                              </Button>
                            )}
                            {application.status === 'accepted' && (
                              <Button
                                size="sm"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-subheading"
                              >
                                <CheckSquare className="h-4 w-4 mr-1" />
                                Active
                              </Button>
                            )}
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
      </div>

      {/* Internship Details Modal */}
      {selectedInternshipDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedInternshipDetails(null)}
                    className="rounded-xl"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <h1 className="text-2xl font-heading text-primary-navy">Application Details</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedInternshipDetails(null)}
                  className="rounded-xl"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Application Status Banner */}
              <div className={`${getStatusColor(selectedInternshipDetails.applicationStatus)} rounded-lg p-4 mb-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(selectedInternshipDetails.applicationStatus)}
                    <div>
                      <h3 className="font-subheading font-medium">Application Status</h3>
                      <p className="text-sm">{selectedInternshipDetails.applicationStatusText}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p>Applied: {selectedInternshipDetails.appliedDate}</p>
                    <p>Last Activity: {selectedInternshipDetails.lastActivity}</p>
                  </div>
                </div>
              </div>

              {/* Internship Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-navy rounded-xl flex items-center justify-center">
                    <span className="text-white font-heading text-2xl">{selectedInternshipDetails.company.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading text-primary-navy mb-2">{selectedInternshipDetails.title}</h2>
                    <div className="flex items-center space-x-6 text-slate-600 font-subheading mb-4">
                      <div className="flex items-center space-x-2">
                        <Building className="h-5 w-5" />
                        <span className="text-lg">{selectedInternshipDetails.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5" />
                        <span>{selectedInternshipDetails.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5" />
                        <span className="font-semibold text-green-600">{selectedInternshipDetails.stipend}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5" />
                        <span>{selectedInternshipDetails.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show internship details for accepted applications */}
                {selectedInternshipDetails.internshipDetails && (
                  <>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h3 className="text-lg font-heading text-emerald-800 mb-3">🎉 Congratulations! You've been accepted</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-emerald-700">Weekly Hours:</span>
                          <span className="ml-2 text-emerald-600">{selectedInternshipDetails.internshipDetails.weeklyHours}</span>
                        </div>
                        <div>
                          <span className="font-medium text-emerald-700">Payment Schedule:</span>
                          <span className="ml-2 text-emerald-600">{selectedInternshipDetails.internshipDetails.paymentSchedule}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Progress */}
                    {selectedInternshipDetails.internshipDetails.projects.length > 0 && (
                      <div>
                        <h3 className="text-xl font-heading text-primary-navy mb-3">Project Progress</h3>
                        <div className="space-y-3">
                          {selectedInternshipDetails.internshipDetails.projects.map((project: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                              <div className="flex items-center space-x-3">
                                {project.status === 'completed' ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : project.status === 'in-progress' ? (
                                  <Clock className="h-5 w-5 text-orange-500" />
                                ) : (
                                  <Circle className="h-5 w-5 text-slate-400" />
                                )}
                                <div>
                                  <p className="font-subheading font-medium text-slate-800">{project.name}</p>
                                  <p className="text-sm text-slate-500">Due: {project.dueDate}</p>
                                </div>
                              </div>
                              <Badge 
                                className={
                                  project.status === 'completed' ? 'bg-green-50 text-green-600' :
                                  project.status === 'in-progress' ? 'bg-orange-50 text-orange-600' :
                                  'bg-slate-50 text-slate-600'
                                }
                              >
                                {project.status.replace('-', ' ')}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Learning Objectives */}
                    {selectedInternshipDetails.internshipDetails.learningObjectives.length > 0 && (
                      <div>
                        <h3 className="text-xl font-heading text-primary-navy mb-3">Learning Objectives</h3>
                        <ul className="space-y-2">
                          {selectedInternshipDetails.internshipDetails.learningObjectives.map((objective: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2 text-slate-600 font-body">
                              <GraduationCap className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* Standard internship information for all statuses */}
                <div>
                  <h3 className="text-xl font-heading text-primary-navy mb-3">About This Internship</h3>
                  <p className="text-slate-600 font-body leading-relaxed">
                    {selectedInternshipDetails.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-primary-navy mb-3">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternshipDetails.skills.map((skill: string, index: number) => (
                      <Badge key={index} variant="outline" className="border-primary-navy text-primary-navy font-subheading px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-primary-navy mb-3">Program Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-4 rounded-xl">
                    <div className="text-center">
                      <h4 className="font-subheading font-medium text-primary-navy mb-1">Program Start</h4>
                      <p className="text-slate-600 font-body">{selectedInternshipDetails.programStart}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-subheading font-medium text-primary-navy mb-1">Duration</h4>
                      <p className="text-slate-600 font-body">{selectedInternshipDetails.duration}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-subheading font-medium text-primary-navy mb-1">Mentor</h4>
                      <p className="text-slate-600 font-body">{selectedInternshipDetails.mentor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
          <DialogContent className="max-w-md">
            <DialogTitle className="text-xl font-heading text-primary-navy">
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
                  className="w-full p-3 border border-slate-200 rounded-lg focus:border-primary-navy focus:ring-primary-navy font-body"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowMessageModal(false)}
                  className="font-subheading"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary-navy hover:bg-primary-navy/90 text-white font-bold"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
} 