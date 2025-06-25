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
  Briefcase,
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

export default function AppliedJobsPage() {
  const [selectedJobDetails, setSelectedJobDetails] = useState<any>(null)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedClientForMessage, setSelectedClientForMessage] = useState<any>(null)
  const [messageText, setMessageText] = useState("")

  const applications = [
    {
      id: 1,
      jobTitle: "Senior React Native Developer",
      companyName: "TechCorp Solutions",
      companyAvatar: "TC",
      companyRating: 4.8,
      salary: "$80,000-120,000",
      salaryType: "Annual",
      appliedDate: "2 days ago",
      status: "pending",
      lastActivity: "1 day ago",
      coverLetter: "I have 5+ years of experience building mobile applications with React Native. I've developed over 20 fitness and health apps...",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      jobType: "Full-time",
      location: "San Francisco, CA",
      jobPosted: "3 days ago",
      totalApplicants: 12
    },
    {
      id: 2,
      jobTitle: "Full Stack Developer",
      companyName: "ShopSmart Inc",
      companyAvatar: "SS",
      companyRating: 4.9,
      salary: "$90,000-130,000",
      salaryType: "Annual",
      appliedDate: "5 days ago",
      status: "interviewed",
      lastActivity: "3 hours ago",
      coverLetter: "Your e-commerce position caught my attention because it aligns perfectly with my expertise in building scalable online stores...",
      skills: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      jobType: "Full-time",
      location: "New York, NY",
      jobPosted: "1 week ago",
      totalApplicants: 24,
      interviewDate: "Tomorrow at 3:00 PM"
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer",
      companyName: "DesignStudio Pro",
      companyAvatar: "DP",
      companyRating: 4.7,
      salary: "$70,000-95,000",
      salaryType: "Annual",
      appliedDate: "1 week ago",
      status: "shortlisted",
      lastActivity: "2 days ago",
      coverLetter: "I specialize in creating beautiful, user-friendly mobile app designs. My portfolio includes 50+ successful app designs...",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Mobile Design"],
      jobType: "Full-time",
      location: "Austin, TX",
      jobPosted: "10 days ago",
      totalApplicants: 18
    },
    {
      id: 4,
      jobTitle: "Content Writer",
      companyName: "TechBlog Writers",
      companyAvatar: "TB",
      companyRating: 4.6,
      salary: "$50,000-65,000",
      salaryType: "Annual",
      appliedDate: "2 weeks ago",
      status: "rejected",
      lastActivity: "1 week ago",
      coverLetter: "I have extensive experience writing technical content for SaaS companies. I can help you create engaging blog posts...",
      skills: ["SEO", "Content Writing", "SaaS", "Technical Writing"],
      jobType: "Full-time",
      location: "Remote",
      jobPosted: "3 weeks ago",
      totalApplicants: 32
    },
    {
      id: 5,
      projectTitle: "Data Visualization Dashboard",
      clientName: "Analytics Corp",
      clientAvatar: "AC",
      clientRating: 4.9,
      budget: "$100-150/hr",
      budgetType: "Hourly",
      appliedDate: "3 weeks ago",
      status: "hired",
      lastActivity: "Today",
      proposal: "I'm excited to work on your data visualization project. I have experience with Tableau, Power BI, and custom D3.js solutions...",
      skills: ["Tableau", "Power BI", "D3.js", "Data Analysis", "Python"],
      estimatedDuration: "12 weeks",
      clientLocation: "Seattle, WA",
      projectPosted: "1 month ago",
      totalApplicants: 15,
      startDate: "Started 2 weeks ago",
      contractDetails: {
        agreedRate: "$125/hr",
        paymentStructure: "Milestone-based",
        totalProjectValue: "$15,000",
        milestones: [
          { name: "Data Analysis & Requirements", amount: "$3,750", status: "completed", dueDate: "Feb 15, 2024" },
          { name: "Dashboard Design & Prototype", amount: "$3,750", status: "in-progress", dueDate: "Mar 1, 2024" },
          { name: "Data Integration & Backend", amount: "$3,750", status: "pending", dueDate: "Mar 15, 2024" },
          { name: "Testing & Final Delivery", amount: "$3,750", status: "pending", dueDate: "Mar 30, 2024" }
        ],
        paymentTerms: "Net 7 days after milestone completion",
        workSchedule: "Full-time (40 hrs/week)",
        communicationMethod: "Slack + Weekly video calls",
        contractStartDate: "January 20, 2024",
        contractEndDate: "March 30, 2024",
        termsAndConditions: [
          "All work must be completed according to the project specifications outlined in the SOW",
          "Regular progress updates required every 3 business days",
          "All code and documentation must be delivered through GitHub repository",
          "Client retains full ownership of all deliverables and intellectual property",
          "30-day warranty period for bug fixes after final delivery",
          "Confidentiality agreement covers all client data and business information",
          "Remote work arrangement with flexible hours within PST business hours",
          "Payment processing through 100Networks escrow system with 3% platform fee"
        ],
        clientRequirements: [
          "Must use Tableau for primary dashboard creation",
          "Dashboard should support real-time data updates",
          "Mobile-responsive design required",
          "Integration with existing SQL Server database",
          "Performance optimization for datasets up to 1M records",
          "User authentication and role-based access control"
        ],
        deliverables: [
          "Interactive Tableau dashboard with 15+ visualizations",
          "Technical documentation and user manual",
          "Data integration scripts and API connections",
          "Performance testing reports",
          "Training session for client team (2 hours)",
          "Source code and deployment guide"
        ]
      }
    }
  ]

  const handleViewJobDetails = (application: any) => {
    // Determine if this is a freelance project or job application
    const isFreelanceProject = application.projectTitle && application.clientName;
    const budgetType = application.budgetType || application.salaryType || "project";
    
    // Convert application data to job details format
    const jobDetails = {
      title: isFreelanceProject ? application.projectTitle : application.jobTitle,
      company: isFreelanceProject ? application.clientName : application.companyName,
      logo: "/placeholder-company-logo.png",
      location: isFreelanceProject ? application.clientLocation : application.location,
      salary: isFreelanceProject ? application.budget : application.salary,
      type: budgetType,
      remote: "Remote", // Default for freelance projects
      posted: isFreelanceProject ? application.projectPosted : application.jobPosted,
      description: isFreelanceProject ? application.proposal : application.coverLetter,
      fullDescription: `${isFreelanceProject ? application.proposal : application.coverLetter} This is a ${budgetType.toLowerCase()} ${isFreelanceProject ? 'project' : 'position'}${application.estimatedDuration ? ` with an estimated duration of ${application.estimatedDuration}` : ''}. ${isFreelanceProject ? 'The project' : 'The job'} was posted ${isFreelanceProject ? application.projectPosted : application.jobPosted} and has attracted ${application.totalApplicants} applicants.`,
      skills: application.skills,
      requirements: [
        "Strong experience with the required technologies",
        "Ability to work independently and meet deadlines",
        "Excellent communication skills",
        "Portfolio showcasing relevant projects"
      ],
      responsibilities: [
        "Deliver high-quality work according to specifications",
        "Communicate progress regularly with the client",
        "Meet all project milestones and deadlines",
        "Provide documentation and support as needed"
      ],
      companyInfo: {
        name: isFreelanceProject ? application.clientName : application.companyName,
        size: "Small Business",
        industry: "Technology",
        founded: "2020",
        description: `${isFreelanceProject ? application.clientName : application.companyName} is a growing company looking for talented ${isFreelanceProject ? 'freelancers' : 'employees'} to help with their ${isFreelanceProject ? 'projects' : 'business goals'}.`,
        benefits: ["Remote Work", "Flexible Hours", "Direct Communication", "Quick Payments"],
        culture: "Collaborative and results-focused environment"
      },
      applicationDeadline: "Open",
      hiringManager: isFreelanceProject ? application.clientName : application.companyName,
      // Add application status
      applicationStatus: application.status,
      applicationStatusText: getStatusText(application.status),
      appliedDate: application.appliedDate,
      lastActivity: application.lastActivity,
      // Add contract details for hired positions
      contractDetails: application.status === "hired" ? {
        agreedRate: application.contractDetails?.agreedRate || application.salary,
        paymentStructure: application.contractDetails?.paymentStructure || "Monthly",
        totalProjectValue: application.contractDetails?.totalProjectValue || application.salary,
        milestones: application.contractDetails?.milestones || [],
        paymentTerms: application.contractDetails?.paymentTerms || "Net 30",
        workSchedule: application.contractDetails?.workSchedule || "Full-time",
        communicationMethod: application.contractDetails?.communicationMethod || "Email + Weekly calls",
        contractStartDate: application.contractDetails?.contractStartDate || application.startDate,
        contractEndDate: application.contractDetails?.contractEndDate || "Ongoing",
        termsAndConditions: application.contractDetails?.termsAndConditions || [
          "Standard employment terms apply",
          "Confidentiality agreement required",
          "Non-compete clause for 12 months",
          "Intellectual property rights assigned to company"
        ],
        clientRequirements: application.contractDetails?.clientRequirements || [],
        deliverables: application.contractDetails?.deliverables || []
      } : null
    }
    setSelectedJobDetails(jobDetails)
  }

  const handleMessageClient = (application: any) => {
    setSelectedClientForMessage(application)
    setShowMessageModal(true)
  }

  const handleSendMessage = () => {
    console.log("Sending message to:", selectedClientForMessage?.clientName, "Message:", messageText)
    // Here you would typically send the message through your messaging system
    setShowMessageModal(false)
    setMessageText("")
    setSelectedClientForMessage(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "interviewed":
        return "bg-blue-100 text-blue-800"
      case "shortlisted":
        return "bg-purple-100 text-purple-800"
      case "hired":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "interviewed":
        return <MessageCircle className="h-4 w-4" />
      case "shortlisted":
        return <Star className="h-4 w-4" />
      case "hired":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending Review"
      case "interviewed":
        return "Interview Scheduled"
      case "shortlisted":
        return "Shortlisted"
      case "hired":
        return "Hired"
      case "rejected":
        return "Not Selected"
      default:
        return status
    }
  }

  const statusCounts = {
    total: applications.length,
    pending: applications.filter(app => app.status === "pending").length,
    interviewed: applications.filter(app => app.status === "interviewed").length,
    hired: applications.filter(app => app.status === "hired").length,
    rejected: applications.filter(app => app.status === "rejected").length,
    shortlisted: applications.filter(app => app.status === "shortlisted").length
  }

  const getStatusPercentage = (count: number) => {
    return Math.round((count / statusCounts.total) * 100)
  }

  return (
    <div className="min-h-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center mb-4">
            <Link href="/jobs">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-3">Applied Jobs</h1>
              <p className="text-slate-600 font-subheading text-base sm:text-lg lg:text-xl">Track your job applications and career opportunities</p>
            </div>
            <Link href="/jobs">
              <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl px-6 font-subheading w-full sm:w-auto">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>

        {/* Application Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-subheading text-slate-500">Total</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-heading text-primary-navy">{statusCounts.total}</p>
                </div>
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-[#0056B3]" />
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
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-subheading text-slate-500">Interviews</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-heading text-blue-600">{statusCounts.interviewed}</p>
                  <p className="text-xs font-subheading text-slate-400 hidden sm:block">{getStatusPercentage(statusCounts.interviewed)}%</p>
                </div>
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-subheading text-slate-500">Hired</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-heading text-green-600">{statusCounts.hired}</p>
                  <p className="text-xs font-subheading text-slate-400 hidden sm:block">{getStatusPercentage(statusCounts.hired)}%</p>
                </div>
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <div className="space-y-4 sm:space-y-6">
          {applications.map((application) => (
            <Card 
              key={application.id} 
              className="border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewJobDetails(application)}
            >
              <CardHeader className="border-b border-slate-100 p-4 sm:p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mb-2">
                        <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy truncate">
                          {application.jobTitle || application.projectTitle}
                        </CardTitle>
                        <Badge className={`${getStatusColor(application.status)} font-subheading flex items-center space-x-1 text-xs w-fit`}>
                          {getStatusIcon(application.status)}
                          <span>{getStatusText(application.status)}</span>
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                          <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading text-sm">
                            {(application.companyAvatar || application.clientAvatar || "C")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <p className="font-subheading font-medium text-primary-navy truncate">
                            {application.companyName || application.clientName}
                          </p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-subheading text-slate-500">
                              {application.companyRating || application.clientRating}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {application.skills.slice(0, 4).map((skill: string) => (
                          <Badge key={skill} className="bg-slate-100 text-slate-700 font-subheading text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {application.skills.length > 4 && (
                          <Badge className="bg-slate-100 text-slate-700 font-subheading text-xs">
                            +{application.skills.length - 4}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-500">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="font-subheading truncate">
                            {application.salary || application.budget}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="font-subheading">Applied {application.appliedDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="font-subheading">{application.totalApplicants} applicants</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="font-subheading truncate">
                            {application.location || application.clientLocation}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-slate-400 hover:text-primary-navy hover:bg-slate-50 rounded-full flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => handleViewJobDetails(application)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Job
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleMessageClient(application)}>
                          <Mail className="h-4 w-4 mr-2" />
                          Message Client
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Job Details Modal */}
        <Dialog open={!!selectedJobDetails} onOpenChange={() => setSelectedJobDetails(null)}>
          <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-4xl max-h-[95vh] lg:max-h-[90vh] overflow-y-auto mx-2">
            {selectedJobDetails && (
              <div className="space-y-4 lg:space-y-6">
                {/* Header */}
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-xl lg:text-2xl font-heading text-primary-navy pr-4">{selectedJobDetails.title}</DialogTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedJobDetails(null)}
                      className="rounded-xl flex-shrink-0"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading text-sm">
                          {selectedJobDetails.company.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-subheading font-medium text-primary-navy">{selectedJobDetails.company}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-subheading text-slate-500">4.8</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(selectedJobDetails.applicationStatus)} font-subheading flex items-center space-x-1 text-xs w-fit`}>
                      {getStatusIcon(selectedJobDetails.applicationStatus)}
                      <span>{selectedJobDetails.applicationStatusText}</span>
                    </Badge>
                  </div>
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-500">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="font-subheading">{selectedJobDetails.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="font-subheading">Applied {selectedJobDetails.appliedDate}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="font-subheading">{selectedJobDetails.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="font-subheading">{selectedJobDetails.type}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-2">Description</h3>
                  <p className="text-slate-600 font-subheading text-sm lg:text-base leading-relaxed">{selectedJobDetails.fullDescription}</p>
                </div>

                {/* Contract Details for Hired Positions */}
                {selectedJobDetails.applicationStatus === "hired" && selectedJobDetails.contractDetails && (
                  <div className="space-y-4 lg:space-y-6 border-t border-slate-100 pt-4 lg:pt-6">
                    <h3 className="text-base lg:text-lg font-heading text-primary-navy">Employment Details</h3>
                    
                    {/* Contract Overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                      <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                        <p className="text-xs lg:text-sm text-slate-500 font-subheading">Salary</p>
                        <p className="text-base lg:text-lg font-heading text-primary-navy">{selectedJobDetails.contractDetails.agreedRate}</p>
                      </div>
                      <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                        <p className="text-xs lg:text-sm text-slate-500 font-subheading">Payment Schedule</p>
                        <p className="text-base lg:text-lg font-heading text-primary-navy">{selectedJobDetails.contractDetails.paymentStructure}</p>
                      </div>
                      <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                        <p className="text-xs lg:text-sm text-slate-500 font-subheading">Start Date</p>
                        <p className="text-base lg:text-lg font-heading text-primary-navy">{selectedJobDetails.contractDetails.contractStartDate}</p>
                      </div>
                      <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                        <p className="text-xs lg:text-sm text-slate-500 font-subheading">Work Schedule</p>
                        <p className="text-base lg:text-lg font-heading text-primary-navy">{selectedJobDetails.contractDetails.workSchedule}</p>
                      </div>
                    </div>

                    {/* Employment Terms */}
                    <div>
                      <h4 className="text-sm lg:text-md font-heading text-primary-navy mb-3">Employment Terms</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                        <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                          <h5 className="font-subheading text-primary-navy mb-2 text-sm lg:text-base">Benefits</h5>
                          <ul className="list-disc list-inside space-y-1 lg:space-y-2 text-slate-600 text-sm">
                            <li className="font-subheading">Health Insurance</li>
                            <li className="font-subheading">Dental & Vision Coverage</li>
                            <li className="font-subheading">401(k) with Company Match</li>
                            <li className="font-subheading">Paid Time Off</li>
                            <li className="font-subheading">Professional Development</li>
                          </ul>
                        </div>
                        <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                          <h5 className="font-subheading text-primary-navy mb-2 text-sm lg:text-base">Terms & Conditions</h5>
                          <ul className="list-disc list-inside space-y-1 lg:space-y-2 text-slate-600 text-sm">
                            {selectedJobDetails.contractDetails.termsAndConditions.slice(0, 5).map((term: string, index: number) => (
                              <li key={index} className="font-subheading">{term}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Job Requirements */}
                    {selectedJobDetails.contractDetails.clientRequirements.length > 0 && (
                      <div>
                        <h4 className="text-sm lg:text-md font-heading text-primary-navy mb-3">Job Requirements</h4>
                        <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                          <ul className="list-disc list-inside space-y-1 lg:space-y-2 text-slate-600 text-sm">
                            {selectedJobDetails.contractDetails.clientRequirements.slice(0, 6).map((req: string, index: number) => (
                              <li key={index} className="font-subheading">{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Responsibilities */}
                    {selectedJobDetails.contractDetails.deliverables.length > 0 && (
                      <div>
                        <h4 className="text-sm lg:text-md font-heading text-primary-navy mb-3">Responsibilities</h4>
                        <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                          <ul className="list-disc list-inside space-y-1 lg:space-y-2 text-slate-600 text-sm">
                            {selectedJobDetails.contractDetails.deliverables.slice(0, 6).map((del: string, index: number) => (
                              <li key={index} className="font-subheading">{del}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJobDetails.skills.map((skill: string) => (
                      <Badge key={skill} className="bg-slate-100 text-slate-700 font-subheading text-xs lg:text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Company Info */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-2">Company Information</h3>
                  <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-slate-600 font-subheading text-sm lg:text-base">{selectedJobDetails.companyInfo.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm lg:text-md font-heading text-primary-navy mb-2">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedJobDetails.companyInfo.benefits.map((benefit: string) => (
                          <Badge key={benefit} className="bg-slate-100 text-slate-700 font-subheading text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Message Client Modal */}
        <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
          <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-2xl mx-2">
            <DialogTitle className="text-lg lg:text-xl font-heading text-primary-navy mb-4">
              Message {selectedClientForMessage?.clientName || selectedClientForMessage?.companyName}
            </DialogTitle>
            <div className="space-y-4">
              <div className="bg-slate-50 p-3 lg:p-4 rounded-lg">
                <p className="text-xs lg:text-sm text-slate-500 mb-2">Your message will be sent to the client's inbox</p>
                <textarea
                  className="w-full h-24 lg:h-32 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy text-sm lg:text-base resize-none"
                  placeholder="Type your message here..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowMessageModal(false)}
                  className="border-slate-200 text-slate-600 hover:bg-slate-50 font-subheading text-sm lg:text-base h-10 w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="bg-primary-navy hover:bg-slate-800 text-white font-subheading text-sm lg:text-base h-10 w-full sm:w-auto"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}