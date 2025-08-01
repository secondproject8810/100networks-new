"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Eye,
  Users,
  Clock,
  Star,
  MapPin,
  Mail,
  MessageCircle,
  ChevronRight,
  MoreVertical,
  ExternalLink,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Briefcase,
  PlayCircle,
  PauseCircle,
  Download,
  Send,
  CreditCard,
  Shield,
  TrendingUp,
  X,
  Building
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function MyApplicationsPage() {
  const [activeTab, setActiveTab] = useState("applications")
  const [updateMessage, setUpdateMessage] = useState("")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedJobDetails, setSelectedJobDetails] = useState<any>(null)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedClientForMessage, setSelectedClientForMessage] = useState<any>(null)
  const [messageText, setMessageText] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const [showMessagesSection, setShowMessagesSection] = useState(false)
  const [selectedConversation, setSelectedConversation] = useState<any>(null)
  const [selectedProjectDetails, setSelectedProjectDetails] = useState<any>(null)

  const applications = [
    {
      id: 1,
      projectTitle: "React Native Developer for Fitness App",
      clientName: "FitTech Solutions",
      clientAvatar: "FS",
      clientRating: 4.8,
      budget: "$2,000-3,000",
      budgetType: "Fixed Price",
      appliedDate: "2 days ago",
      status: "applied",
      lastActivity: "1 day ago",
      proposal: "I have 5+ years of experience building mobile applications with React Native. I've developed over 20 fitness and health apps...",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      estimatedDuration: "4-6 weeks",
      clientLocation: "San Francisco, CA",
      projectPosted: "3 days ago",
      totalApplicants: 12
    },
    {
      id: 2,
      projectTitle: "E-commerce Website Development",
      clientName: "ShopSmart Inc",
      clientAvatar: "SS",
      clientRating: 4.9,
      budget: "$5,000-8,000",
      budgetType: "Fixed Price",
      appliedDate: "5 days ago",
      status: "applied",
      lastActivity: "3 hours ago",
      proposal: "Your e-commerce project caught my attention because it aligns perfectly with my expertise in building scalable online stores...",
      skills: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      estimatedDuration: "8-10 weeks",
      clientLocation: "New York, NY",
      projectPosted: "1 week ago",
      totalApplicants: 24
    },
    {
      id: 3,
      projectTitle: "Mobile App UI/UX Design",
      clientName: "DesignStudio Pro",
      clientAvatar: "DP",
      clientRating: 4.7,
      budget: "$3,000-4,500",
      budgetType: "Fixed Price",
      appliedDate: "1 week ago",
      status: "applied",
      lastActivity: "2 days ago",
      proposal: "I specialize in creating beautiful, user-friendly mobile app designs. My portfolio includes 50+ successful app designs...",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Mobile Design"],
      estimatedDuration: "6-8 weeks",
      clientLocation: "Austin, TX",
      projectPosted: "10 days ago",
      totalApplicants: 18
    },
    {
      id: 4,
      projectTitle: "Content Writing for SaaS Blog",
      clientName: "TechBlog Writers",
      clientAvatar: "TB",
      clientRating: 4.6,
      budget: "$50-75 per article",
      budgetType: "Per Article",
      appliedDate: "2 weeks ago",
      status: "rejected",
      lastActivity: "1 week ago",
      proposal: "I have extensive experience writing technical content for SaaS companies. I can help you create engaging blog posts...",
      skills: ["SEO", "Content Writing", "SaaS", "Technical Writing"],
      estimatedDuration: "Ongoing",
      clientLocation: "Remote",
      projectPosted: "3 weeks ago",
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
    },
    {
      id: 6,
      projectTitle: "E-commerce Mobile App Development", 
      clientName: "RetailTech Solutions",
      clientAvatar: "RT",
      clientRating: 4.8,
      budget: "$8,000-12,000",
      budgetType: "Fixed Price",
      appliedDate: "1 month ago",
      status: "hired",
      lastActivity: "Today",
      proposal: "I have 5+ years of experience in React Native development and have built 20+ e-commerce apps...",
      skills: ["React Native", "Node.js", "MongoDB", "Payment Integration", "Redux"],
      estimatedDuration: "16 weeks",
      clientLocation: "New York, NY", 
      projectPosted: "6 weeks ago",
      totalApplicants: 42,
      startDate: "Started 3 weeks ago",
      contractDetails: {
        agreedRate: "$10,500",
        paymentStructure: "Fixed Price with Milestones",
        totalProjectValue: "$10,500",
        milestones: [
          { name: "UI/UX Design & Wireframes", amount: "$2,100", status: "completed", dueDate: "Jan 30, 2024" },
          { name: "Core App Development", amount: "$4,200", status: "completed", dueDate: "Feb 20, 2024" },
          { name: "Payment Integration & Testing", amount: "$2,100", status: "in-progress", dueDate: "Mar 10, 2024" },
          { name: "Final Testing & App Store Submission", amount: "$2,100", status: "pending", dueDate: "Mar 25, 2024" }
        ],
        paymentTerms: "Net 5 days after milestone approval",
        workSchedule: "Part-time (25 hrs/week)",
        communicationMethod: "Discord + Bi-weekly video calls",
        contractStartDate: "January 15, 2024",
        contractEndDate: "March 25, 2024",
        termsAndConditions: [
          "All development must follow React Native best practices and coding standards",
          "Weekly progress reports required every Friday by 5 PM EST",
          "Source code must be committed to client's private GitHub repository daily",
          "Client has unlimited revisions during development phase",
          "60-day post-launch support included for bug fixes and minor adjustments",
          "NDA covers all client business logic, user data, and proprietary algorithms",
          "Flexible working hours with core overlap from 10 AM - 2 PM EST",
          "All payments processed through 100Networks with buyer protection"
        ],
        clientRequirements: [
          "Must support both iOS and Android platforms",
          "Integration with Stripe and PayPal payment gateways",
          "Real-time inventory management system",
          "Push notifications for order updates",
          "Offline mode for product browsing",
          "Admin panel for product and order management",
          "Multi-language support (English, Spanish, French)"
        ],
        deliverables: [
          "Complete React Native mobile application",
          "Admin web dashboard for inventory management",
          "API documentation and integration guide", 
          "App Store and Google Play Store submissions",
          "User manual and technical documentation",
          "Source code with detailed comments",
          "Testing reports and performance analysis"
        ]
      }
    }
  ]

  // Ongoing Projects Data (projects where I've been hired and am currently working)
  const ongoingProjects = [
    {
      id: 1,
      title: "Data Visualization Dashboard",
      client: "Analytics Corp",
      clientAvatar: "AC", 
      clientRating: 4.9,
      totalValue: "$15,000",
      earnedAmount: "$9,750",
      pendingAmount: "$5,250",
      progress: 65,
      status: "in-progress",
      startDate: "January 20, 2024",
      endDate: "March 30, 2024",
      skills: ["Tableau", "Power BI", "D3.js", "Data Analysis", "Python"],
      paymentStructure: "Milestone-based",
      workSchedule: "Full-time (40 hrs/week)",
      communicationMethod: "Slack + Weekly video calls",
      milestones: [
        { 
          id: 1, 
          name: "Data Analysis & Requirements", 
          amount: "$3,750", 
          status: "completed", 
          dueDate: "Feb 15, 2024",
          completedDate: "Feb 14, 2024"
        },
        { 
          id: 2, 
          name: "Dashboard Design & Prototype", 
          amount: "$3,750", 
          status: "in-progress", 
          dueDate: "Mar 1, 2024",
          progress: 75
        },
        { 
          id: 3, 
          name: "Data Integration & Backend", 
          amount: "$3,750", 
          status: "pending", 
          dueDate: "Mar 15, 2024"
        },
        { 
          id: 4, 
          name: "Testing & Final Delivery", 
          amount: "$3,750", 
          status: "pending", 
          dueDate: "Mar 30, 2024"
        }
      ],
      recentUpdates: [
        {
          date: "March 2, 2024",
          message: "Dashboard prototype completed. Implemented real-time data visualization with interactive charts. Ready for client review.",
          attachments: ["dashboard-prototype.pdf"]
        },
        {
          date: "February 28, 2024", 
          message: "Working on data integration layer. Connected to SQL Server database and optimized queries for large datasets.",
          attachments: ["integration-progress.md"]
        },
        {
          date: "February 25, 2024",
          message: "Completed user authentication system with role-based access control. All security requirements met.",
          attachments: ["auth-documentation.pdf"]
        }
      ]
    },
    {
      id: 2,
      title: "E-commerce Mobile App Development",
      client: "RetailTech Solutions", 
      clientAvatar: "RT",
      clientRating: 4.8,
      totalValue: "$10,500",
      earnedAmount: "$6,300",
      pendingAmount: "$4,200", 
      progress: 90,
      status: "review-required",
      startDate: "January 15, 2024",
      endDate: "March 25, 2024",
      skills: ["React Native", "Node.js", "MongoDB", "Payment Integration", "Redux"],
      paymentStructure: "Fixed Price with Milestones",
      workSchedule: "Part-time (25 hrs/week)",
      communicationMethod: "Discord + Bi-weekly video calls",
      milestones: [
        { 
          id: 1, 
          name: "UI/UX Design & Wireframes", 
          amount: "$2,100", 
          status: "completed", 
          dueDate: "Jan 30, 2024",
          completedDate: "Jan 29, 2024"
        },
        { 
          id: 2, 
          name: "Core App Development", 
          amount: "$4,200", 
          status: "completed", 
          dueDate: "Feb 20, 2024",
          completedDate: "Feb 18, 2024"
        },
        { 
          id: 3, 
          name: "Payment Integration & Testing", 
          amount: "$2,100", 
          status: "review-required", 
          dueDate: "Mar 10, 2024",
          completedDate: "Mar 8, 2024"
        },
        { 
          id: 4, 
          name: "Final Testing & App Store Submission", 
          amount: "$2,100", 
          status: "in-progress", 
          dueDate: "Mar 25, 2024",
          progress: 60
        }
      ],
      recentUpdates: [
        {
          date: "March 8, 2024",
          message: "Payment integration completed with Stripe and PayPal. Submitted for client review and testing approval.",
          attachments: ["payment-integration-demo.mp4", "test-results.pdf"]
        },
        {
          date: "March 5, 2024",
          message: "Core app development finished. All features implemented including real-time inventory, push notifications, and offline mode.",
          attachments: ["app-screenshots.zip", "feature-list.md"]
        },
        {
          date: "March 1, 2024",
          message: "Multi-language support completed for English, Spanish, and French. Testing across all supported languages.",
          attachments: ["localization-guide.pdf"]
        }
      ]
    },
    {
      id: 3,
      title: "Brand Identity & Website Redesign",
      client: "Creative Studio Inc",
      clientAvatar: "CS",
      clientRating: 4.7,
      totalValue: "$8,500",
      earnedAmount: "$3,400",
      pendingAmount: "$5,100",
      progress: 40,
      status: "on-hold",
      startDate: "February 10, 2024",
      endDate: "April 15, 2024",
      skills: ["Brand Design", "Web Design", "Figma", "WordPress", "SEO"],
      paymentStructure: "Milestone-based",
      workSchedule: "Part-time (20 hrs/week)",
      communicationMethod: "Email + Weekly calls",
      milestones: [
        { 
          id: 1, 
          name: "Brand Research & Strategy", 
          amount: "$1,700", 
          status: "completed", 
          dueDate: "Feb 25, 2024",
          completedDate: "Feb 24, 2024"
        },
        { 
          id: 2, 
          name: "Logo Design & Brand Identity", 
          amount: "$1,700", 
          status: "completed", 
          dueDate: "Mar 10, 2024",
          completedDate: "Mar 8, 2024"
        },
        { 
          id: 3, 
          name: "Website Design & Prototyping", 
          amount: "$2,550", 
          status: "on-hold", 
          dueDate: "Mar 25, 2024"
        },
        { 
          id: 4, 
          name: "Development & Launch", 
          amount: "$2,550", 
          status: "pending", 
          dueDate: "Apr 15, 2024"
        }
      ],
      recentUpdates: [
        {
          date: "March 12, 2024",
          message: "Project temporarily paused per client request due to internal restructuring. Will resume in 2 weeks.",
          attachments: []
        },
        {
          date: "March 8, 2024",
          message: "Brand identity package completed and approved. Logo, color palette, typography guidelines all finalized.",
          attachments: ["brand-identity-package.zip", "brand-guidelines.pdf"]
        },
        {
          date: "March 5, 2024",
          message: "Final logo variations presented to client. Positive feedback received, minor revisions requested.",
          attachments: ["logo-variations.pdf"]
        }
      ]
    }
  ]

  // Helper functions for ongoing projects
  const getOngoingStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "review-required":
        return "bg-blue-100 text-blue-800"
      case "on-hold":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getMilestoneStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "in-progress":
        return "text-blue-600"
      case "review-required":
        return "text-purple-600"
      case "on-hold":
        return "text-yellow-600"
      case "pending":
        return "text-slate-400"
      default:
        return "text-slate-400"
    }
  }

  const getMilestoneStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "review-required":
        return "Review Required"
      case "on-hold":
        return "On Hold"
      case "pending":
        return "Pending"
      default:
        return status
    }
  }

  const getMilestoneIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      case "in-progress":
        return <PlayCircle className="h-4 w-4 text-blue-600" />
      case "review-required":
        return <AlertCircle className="h-4 w-4 text-blue-600" />
      case "on-hold":
        return <PauseCircle className="h-4 w-4 text-blue-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-blue-600" />
    }
  }

  const sendUpdateRequest = () => {
    // Handle sending update request
    console.log(`Sending update request for project ${selectedProject}: ${updateMessage}`)
    setUpdateMessage("")
    setSelectedProject(null)
  }

  const handleViewJobDetails = (application: any) => {
    // Convert application data to job details format
    const jobDetails = {
      title: application.projectTitle,
      company: application.clientName,
      logo: "/placeholder-company-logo.png",
      location: application.clientLocation,
      salary: application.budget,
      type: application.budgetType,
      remote: "Remote", // Default for freelance projects
      posted: application.projectPosted,
      description: application.proposal,
      fullDescription: `${application.proposal} This is a ${application.budgetType.toLowerCase()} project with an estimated duration of ${application.estimatedDuration}. The project was posted ${application.projectPosted} and has attracted ${application.totalApplicants} applicants.`,
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
        name: application.clientName,
        size: "Small Business",
        industry: "Technology",
        founded: "2020",
        description: `${application.clientName} is a growing company looking for talented freelancers to help with their projects.`,
        benefits: ["Remote Work", "Flexible Hours", "Direct Communication", "Quick Payments"],
        culture: "Collaborative and results-focused environment"
      },
      applicationDeadline: "Open",
      hiringManager: application.clientName,
      // Add application status
      applicationStatus: application.status,
      applicationStatusText: getStatusText(application.status),
      appliedDate: application.appliedDate,
      lastActivity: application.lastActivity
    }
    setSelectedJobDetails(jobDetails)
  }

  const handleMessageClient = (application: any) => {
    setSelectedClientForMessage(application)
    setShowMessageModal(true)
  }

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedClientForMessage) return
    
    const newMessage = {
      id: Date.now(),
      clientName: selectedClientForMessage.clientName,
      clientAvatar: selectedClientForMessage.clientAvatar,
      clientRating: selectedClientForMessage.clientRating,
      projectTitle: selectedClientForMessage.projectTitle,
      projectId: selectedClientForMessage.id,
      message: messageText.trim(),
      timestamp: new Date().toISOString(),
      status: 'sent'
    }
    
    setMessages(prev => [newMessage, ...prev])
    console.log("Message sent to:", selectedClientForMessage?.clientName, "Message:", messageText)
    
    setShowMessageModal(false)
    setMessageText("")
    setSelectedClientForMessage(null)
  }

  const handleProjectClick = (application: any) => {
    // Navigate to applied project details page
    window.location.href = `/jobs/freelance/applied/${application.id}`
  }

  const getProjectCategory = (skills: string[]) => {
    if (skills.some(skill => skill.toLowerCase().includes('react') || skill.toLowerCase().includes('mobile'))) {
      return "Mobile Development"
    }
    if (skills.some(skill => skill.toLowerCase().includes('ui') || skill.toLowerCase().includes('design'))) {
      return "Design"
    }
    if (skills.some(skill => skill.toLowerCase().includes('content') || skill.toLowerCase().includes('writing'))) {
      return "Content Writing"
    }
    if (skills.some(skill => skill.toLowerCase().includes('data') || skill.toLowerCase().includes('tableau'))) {
      return "Data Analysis"
    }
    return "Web Development"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-800"
      case "hired":
        return "bg-blue-100 text-blue-800"
      case "rejected":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "applied":
        return <Send className="h-4 w-4" />
      case "hired":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <Send className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "applied":
        return "Applied"
      case "hired":
        return "Won"
      case "rejected":
        return "Not Selected"
      default:
        return "Applied"
    }
  }

  const statusCounts = {
    total: applications.length,
    hired: applications.filter(app => app.status === "hired").length,
  }

  const ongoingStats = {
    activeProjects: ongoingProjects.length,
    totalEarned: ongoingProjects.reduce((sum, project) => sum + parseFloat(project.earnedAmount.replace(/[$,]/g, "")), 0),
    pendingPayments: ongoingProjects.reduce((sum, project) => sum + parseFloat(project.pendingAmount.replace(/[$,]/g, "")), 0),
    avgProgress: Math.round(ongoingProjects.reduce((sum, project) => sum + project.progress, 0) / ongoingProjects.length)
  }

  return (
    <div className="min-h-full pb-20 md:pb-6">
      <div className="w-full sm:w-[95%] md:w-[80%] lg:w-[65%] mx-auto py-4 md:py-6 px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6 md:mb-8">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link href="/jobs/freelance">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-navy hover:bg-slate-50 rounded-full p-2 sm:p-3">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading text-primary-navy">My Work</h1>
              <p className="text-slate-600 font-subheading text-sm sm:text-base">Track your applied projects and manage ongoing work</p>
            </div>
          </div>
          <Link href="/jobs/freelance">
            <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 font-subheading text-sm sm:text-base w-full sm:w-auto">
              Browse Projects
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-xl mb-6 md:mb-8">
            <TabsTrigger 
              value="applications" 
              className="rounded-lg font-subheading data-[state=active]:bg-white data-[state=active]:text-primary-navy text-xs sm:text-sm px-2 sm:px-4"
            >
              <span className="hidden sm:inline">My Applied Projects</span>
              <span className="sm:hidden">Applied</span>
              <span className="ml-1">({statusCounts.total})</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ongoing" 
              className="rounded-lg font-subheading data-[state=active]:bg-white data-[state=active]:text-primary-navy text-xs sm:text-sm px-2 sm:px-4"
            >
              <span className="hidden sm:inline">Ongoing Projects</span>
              <span className="sm:hidden">Ongoing</span>
              <span className="ml-1">({ongoingStats.activeProjects})</span>
            </TabsTrigger>
            <TabsTrigger 
              value="messages" 
              className="rounded-lg font-subheading data-[state=active]:bg-white data-[state=active]:text-primary-navy text-xs sm:text-sm px-2 sm:px-4"
            >
              <span className="hidden sm:inline">Messages</span>
              <span className="sm:hidden">Messages</span>
              <span className="ml-1">({messages.length})</span>
            </TabsTrigger>
          </TabsList>

          {/* Applications Tab */}
          <TabsContent value="applications">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-[#0056B3]/10 rounded-xl flex items-center justify-center">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0056B3]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">{statusCounts.total}</p>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Total Applied Projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">{statusCounts.hired}</p>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Projects Won</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

        {/* Applications List */}
        <div className="space-y-4 md:space-y-6">
          {applications.map((application) => (
            <Card 
              key={application.id} 
              className="border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleProjectClick(application)}
            >
              <CardHeader className="border-b border-slate-100 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col space-y-2 mb-3 sm:mb-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 space-y-2 sm:space-y-0">
                        <CardTitle className="text-lg sm:text-xl font-heading text-primary-navy flex-1 min-w-0 break-words leading-tight">{application.projectTitle}</CardTitle>
                        <Badge className={`${getStatusColor(application.status)} font-subheading flex items-center space-x-1 w-fit flex-shrink-0`}>
                        {getStatusIcon(application.status)}
                          <span className="text-xs">{getStatusText(application.status)}</span>
                      </Badge>
                    </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                          <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading text-xs sm:text-sm">
                            {application.clientAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-subheading font-medium text-primary-navy text-sm sm:text-base">{application.clientName}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-subheading text-slate-500">{application.clientRating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 max-w-full">
                      {application.skills.map((skill) => (
                        <Badge key={skill} className="bg-slate-100 text-slate-700 font-subheading text-xs break-words max-w-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-slate-500">
                      <div className="flex items-center min-w-0">
                        <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                        <span className="font-subheading truncate min-w-0">{application.budget} • {application.budgetType}</span>
                      </div>
                      <div className="flex items-center min-w-0">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                        <span className="font-subheading truncate">Applied {application.appliedDate}</span>
                      </div>
                      <div className="flex items-center min-w-0">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                        <span className="font-subheading truncate">{application.totalApplicants} total applicants</span>
                      </div>
                      <div className="flex items-center min-w-0">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                        <span className="font-subheading truncate">{application.clientLocation}</span>
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-slate-400 hover:text-primary-navy hover:bg-slate-50 rounded-full p-1 sm:p-2 self-start sm:self-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 sm:w-48">
                      <DropdownMenuItem onClick={() => handleViewJobDetails(application)} className="text-xs sm:text-sm">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        View Job
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleMessageClient(application)} className="text-xs sm:text-sm">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Message Client
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs sm:text-sm">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Edit Proposal
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {/* Proposal Preview */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-2 text-sm sm:text-base">Your Proposal</h4>
                    <p className="text-slate-600 font-subheading text-xs sm:text-sm leading-relaxed">
                      {application.proposal.substring(0, 150)}...
                    </p>
                  </div>

                  {/* Status-specific Information */}

                  {application.status === "hired" && application.contractDetails && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <h4 className="font-subheading font-medium text-blue-900">Contract Active - {application.startDate}</h4>
                      </div>
                      
                      {/* Payment Terms */}
                      <div className="mb-6">
                        <h5 className="font-subheading font-semibold text-blue-900 mb-3">Payment Terms</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">Agreed Rate</p>
                            <p className="text-blue-900 font-semibold">{application.contractDetails.agreedRate}</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">Total Value</p>
                            <p className="text-blue-900 font-semibold">{application.contractDetails.totalProjectValue}</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">Payment Structure</p>
                            <p className="text-blue-900 font-semibold">{application.contractDetails.paymentStructure}</p>
                          </div>
                        </div>
                        <p className="text-blue-800 text-sm mt-2">
                          <span className="font-medium">Payment Terms:</span> {application.contractDetails.paymentTerms}
                        </p>
                      </div>

                      {/* Milestones */}
                      <div className="mb-6">
                        <h5 className="font-subheading font-semibold text-blue-900 mb-3">Project Milestones</h5>
                        <div className="space-y-3">
                          {application.contractDetails.milestones.map((milestone, index) => (
                            <div key={index} className="bg-white/60 rounded-lg p-3 flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h6 className="font-medium text-blue-900">{milestone.name}</h6>
                                  <Badge className={`text-xs ${
                                    milestone.status === 'completed' ? 'bg-blue-600 text-white' :
                                    milestone.status === 'in-progress' ? 'bg-blue-600 text-white' :
                                    'bg-blue-400 text-white'
                                  }`}>
                                    {milestone.status === 'in-progress' ? 'In Progress' : milestone.status}
                                  </Badge>
                                </div>
                                <p className="text-blue-700 text-sm">Due: {milestone.dueDate}</p>
                              </div>
                              <p className="text-blue-900 font-semibold">{milestone.amount}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contract Details */}
                      <div className="mb-6">
                        <h5 className="font-subheading font-semibold text-blue-900 mb-3">Contract Details</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">Work Schedule</p>
                            <p className="text-blue-900">{application.contractDetails.workSchedule}</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">Communication</p>
                            <p className="text-blue-900">{application.contractDetails.communicationMethod}</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">Start Date</p>
                            <p className="text-blue-900">{application.contractDetails.contractStartDate}</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3">
                            <p className="text-blue-700 font-medium">End Date</p>
                            <p className="text-blue-900">{application.contractDetails.contractEndDate}</p>
                          </div>
                        </div>
                      </div>

                      {/* Client Requirements */}
                      <div className="mb-6">
                        <h5 className="font-subheading font-semibold text-blue-900 mb-3">Client Requirements</h5>
                        <div className="bg-white/60 rounded-lg p-3">
                          <ul className="space-y-1 text-sm text-blue-800">
                            {application.contractDetails.clientRequirements.map((req, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-6">
                        <h5 className="font-subheading font-semibold text-blue-900 mb-3">Project Deliverables</h5>
                        <div className="bg-white/60 rounded-lg p-3">
                          <ul className="space-y-1 text-sm text-blue-800">
                            {application.contractDetails.deliverables.map((deliverable, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold">•</span>
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div>
                                                  <h5 className="font-subheading font-semibold text-blue-900 mb-3">Terms & Conditions</h5>
                        <div className="bg-white/60 rounded-lg p-3">
                          <ul className="space-y-2 text-sm text-blue-800">
                            {application.contractDetails.termsAndConditions.map((term, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-600 font-bold text-xs mt-1">•</span>
                                <span className="leading-relaxed">{term}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {application.status === "shortlisted" && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-5 w-5 text-purple-600" />
                        <h4 className="font-subheading font-medium text-purple-900">You're Shortlisted!</h4>
                      </div>
                      <p className="text-purple-800 font-subheading text-sm">Client is reviewing final candidates. Expect to hear back soon.</p>
                    </div>
                  )}

                  {application.status === "rejected" && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <XCircle className="h-5 w-5 text-blue-600" />
                        <h4 className="font-subheading font-medium text-blue-900">Application Not Selected</h4>
                      </div>
                      <p className="text-blue-800 font-subheading text-sm">Thank you for your interest. Keep applying to find the right match!</p>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="font-subheading">Duration: {application.estimatedDuration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-subheading">Last activity: {application.lastActivity}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.location.href = `/jobs/freelance/applied/${application.id}/proposal`
                        }}
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        View Proposal
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-subheading"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleViewJobDetails(application)
                        }}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Job
                      </Button>
                      {application.status === "pending" || application.status === "interviewed" ? (
                        <Button 
                          size="sm"
                          className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMessageClient(application)
                          }}
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Message Client
                        </Button>
                      ) : application.status === "hired" ? (
                        <Button 
                          size="sm"
                          className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMessageClient(application)
                          }}
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      ) : (
                        <Button 
                          size="sm"
                          className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMessageClient(application)
                          }}
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

            {/* Empty State (if no applications) */}
            {applications.length === 0 && (
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-12 text-center">
                  <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-heading text-slate-700 mb-2">No applications yet</h3>
                  <p className="text-slate-500 font-subheading mb-6">Start applying to projects that match your skills and interests.</p>
                  <Link href="/jobs/freelance">
                    <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg px-6 font-subheading">
                      Browse Projects
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Ongoing Projects Tab */}
          <TabsContent value="ongoing">
            {/* Stats Overview for Ongoing Projects */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">{ongoingStats.activeProjects}</p>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Active Projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">${ongoingStats.totalEarned.toLocaleString()}</p>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Total Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">${ongoingStats.pendingPayments.toLocaleString()}</p>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Pending Payments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy">{ongoingStats.avgProgress}%</p>
                      <p className="text-xs sm:text-sm font-subheading text-slate-600">Avg Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ongoing Projects List */}
            <div className="space-y-6">
              {ongoingProjects.map((project) => (
                <Card key={project.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="border-b border-slate-100">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <CardTitle className="text-xl font-heading text-primary-navy">{project.title}</CardTitle>
                          <Badge className={`${getOngoingStatusColor(project.status)} font-subheading flex items-center space-x-1`}>
                            {project.status === "in-progress" && <PlayCircle className="h-4 w-4" />}
                            {project.status === "review-required" && <AlertCircle className="h-4 w-4" />}
                            {project.status === "on-hold" && <PauseCircle className="h-4 w-4" />}
                            <span>{project.status === "in-progress" ? "In Progress" : 
                                   project.status === "review-required" ? "Review Required" : 
                                   project.status === "on-hold" ? "On Hold" : project.status}</span>
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading text-sm">
                                {project.clientAvatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-subheading font-medium text-primary-navy">{project.client}</p>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                <span className="text-xs font-subheading text-slate-500">{project.clientRating}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-subheading text-slate-600">Project Progress</span>
                            <span className="text-sm font-subheading font-medium text-primary-navy">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill) => (
                            <Badge key={skill} className="bg-slate-100 text-slate-700 font-subheading">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Payment Summary */}
                      <div>
                        <h4 className="font-subheading font-medium text-primary-navy mb-3">Payment Summary</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-green-700 font-medium">Earned Amount</span>
                              <span className="text-green-900 font-semibold">{project.earnedAmount}</span>
                            </div>
                          </div>
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-yellow-700 font-medium">Pending Payment</span>
                              <span className="text-yellow-900 font-semibold">{project.pendingAmount}</span>
                            </div>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-blue-700 font-medium">Total Contract Value</span>
                              <span className="text-blue-900 font-semibold">{project.totalValue}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div>
                        <h4 className="font-subheading font-medium text-primary-navy mb-3">Project Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Start Date:</span>
                            <span className="font-medium text-slate-900">{project.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">End Date:</span>
                            <span className="font-medium text-slate-900">{project.endDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Payment:</span>
                            <span className="font-medium text-slate-900">{project.paymentStructure}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Schedule:</span>
                            <span className="font-medium text-slate-900">{project.workSchedule}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Communication:</span>
                            <span className="font-medium text-slate-900">{project.communicationMethod}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-subheading font-medium text-primary-navy">Milestones</h4>
                        <Badge className="bg-slate-100 text-slate-700 font-subheading">
                          {project.milestones.filter(m => m.status === "completed").length} of {project.milestones.length} completed
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        {project.milestones.map((milestone) => (
                          <div key={milestone.id} className="border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <div className={getMilestoneStatusColor(milestone.status)}>
                                  {getMilestoneIcon(milestone.status)}
                                </div>
                                <h5 className="font-medium text-slate-900">{milestone.name}</h5>
                                <Badge className={`text-xs ${getMilestoneStatusColor(milestone.status)}`}>
                                  {getMilestoneStatusText(milestone.status)}
                                </Badge>
                              </div>
                              <span className="font-semibold text-primary-navy">{milestone.amount}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-slate-600">
                              <span>Due: {milestone.dueDate}</span>
                              {milestone.completedDate && (
                                <span className="text-green-600">Completed: {milestone.completedDate}</span>
                              )}
                              {milestone.progress && (
                                <span className="text-blue-600">{milestone.progress}% complete</span>
                              )}
                            </div>
                            {milestone.status === "in-progress" && milestone.progress && (
                              <div className="mt-2">
                                <Progress value={milestone.progress} className="h-1" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Updates */}
                    <div className="mt-6">
                      <h4 className="font-subheading font-medium text-primary-navy mb-4">Recent Updates</h4>
                      <div className="space-y-4">
                        {project.recentUpdates.slice(0, 3).map((update, index) => (
                          <div key={index} className="border-l-4 border-blue-200 bg-blue-50 p-4 rounded-r-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-blue-900">{update.date}</span>
                              {update.attachments.length > 0 && (
                                <Badge className="bg-blue-100 text-blue-800 text-xs">
                                  {update.attachments.length} file{update.attachments.length > 1 ? 's' : ''}
                                </Badge>
                              )}
                            </div>
                            <p className="text-blue-800 text-sm leading-relaxed">{update.message}</p>
                            {update.attachments.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {update.attachments.map((attachment, i) => (
                                  <div key={i} className="flex items-center space-x-1 bg-blue-100 rounded px-2 py-1">
                                    <FileText className="h-3 w-3 text-blue-600" />
                                    <span className="text-xs text-blue-700">{attachment}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message Client
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading"
                            onClick={() => setSelectedProject(project.id)}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Request Update
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="font-heading text-primary-navy">Request Project Update</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-subheading font-medium text-slate-700 mb-2 block">
                                Message to Client
                              </label>
                              <Textarea
                                placeholder="Hi [Client], I wanted to provide you with an update on the project progress..."
                                value={updateMessage}
                                onChange={(e) => setUpdateMessage(e.target.value)}
                                className="min-h-[100px]"
                              />
                            </div>
                            <div className="flex space-x-2">
                              <Button 
                                onClick={sendUpdateRequest}
                                className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg font-subheading flex-1"
                              >
                                Send Update
                              </Button>
                              <Button 
                                variant="outline" 
                                onClick={() => {setSelectedProject(null); setUpdateMessage("")}}
                                className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button 
                        variant="outline" 
                        className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Contract
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State for Ongoing Projects */}
            {ongoingProjects.length === 0 && (
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-12 text-center">
                  <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-heading text-slate-700 mb-2">No ongoing projects yet</h3>
                  <p className="text-slate-500 font-subheading mb-6">Once you get hired for projects, they'll appear here for easy management.</p>
                  <Link href="/jobs/freelance">
                    <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-lg px-6 font-subheading">
                      Browse Projects
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages">
            {/* Messages List */}
            <div className="space-y-4">
              {messages.length === 0 ? (
                <Card className="border-slate-200 shadow-sm">
                  <CardContent className="p-12 text-center">
                    <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-heading text-slate-700 mb-2">No messages yet</h3>
                    <p className="text-slate-500 font-subheading mb-6">Messages you send to clients will appear here.</p>
                  </CardContent>
                </Card>
              ) : (
                messages.map((message) => (
                  <Card key={message.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedConversation(message)}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading">
                            {message.clientAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-subheading font-medium text-primary-navy">{message.clientName}</h3>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                <span className="text-xs font-subheading text-slate-500">{message.clientRating}</span>
                              </div>
                            </div>
                            <span className="text-xs text-slate-500">
                              {new Date(message.timestamp).toLocaleDateString()} {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </span>
                          </div>
                          <p className="text-sm font-subheading text-slate-600 mb-2">Project: {message.projectTitle}</p>
                          <p className="text-slate-700 font-subheading line-clamp-2">{message.message}</p>
                          <div className="flex items-center justify-between mt-3">
                            <Badge className="bg-blue-100 text-blue-800 text-xs">
                              <Send className="h-3 w-3 mr-1" />
                              {message.status}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-primary-navy hover:bg-primary-navy hover:text-white text-xs"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedConversation(message)
                              }}
                            >
                              View Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Job Details Modal */}
      {selectedJobDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedJobDetails(null)}
                    className="rounded-xl"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <h1 className="text-2xl font-heading text-primary-navy">Job Details</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedJobDetails(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Job Content */}
              <div className="space-y-6">
                {/* Application Status Section */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-heading text-primary-navy">Application Status</h3>
                    <Badge className={`${getStatusColor(selectedJobDetails.applicationStatus)} font-subheading flex items-center space-x-1`}>
                      {getStatusIcon(selectedJobDetails.applicationStatus)}
                      <span>{selectedJobDetails.applicationStatusText}</span>
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600">Applied:</span>
                      <span className="ml-2 font-medium text-slate-900">{selectedJobDetails.appliedDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Last Activity:</span>
                      <span className="ml-2 font-medium text-slate-900">{selectedJobDetails.lastActivity}</span>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                    <img src={selectedJobDetails.logo} alt={selectedJobDetails.company} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-heading text-primary-navy">{selectedJobDetails.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-subheading ${
                        selectedJobDetails.remote === "Remote" ? "bg-green-100 text-green-700" :
                        selectedJobDetails.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                        selectedJobDetails.remote === "On-site" ? "bg-red-100 text-red-700" :
                        "bg-slate-100 text-slate-700"
                      }`}>
                        {selectedJobDetails.remote}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-slate-600 font-subheading mb-3">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{selectedJobDetails.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedJobDetails.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-heading text-primary-navy">{selectedJobDetails.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-slate-500 font-subheading">
                      <span>{selectedJobDetails.type}</span>
                      <span>•</span>
                      <span>Posted {selectedJobDetails.posted}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Job Description */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Job Description</h3>
                  <p className="text-slate-600 font-subheading leading-relaxed">{selectedJobDetails.fullDescription}</p>
                </div>

                {/* Skills Required */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJobDetails.skills.map((skill: string, index: number) => (
                      <Badge key={index} className={`font-subheading ${
                        skill.includes('+') || skill.includes('years') 
                          ? 'bg-[#0056B3]/10 text-[#0056B3]' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>{skill}</Badge>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJobDetails.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-subheading">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJobDetails.responsibilities.map((responsibility: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                        <span className="text-slate-600 font-subheading">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">About the Company</h3>
                  <Card className="border-slate-200">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-heading text-primary-navy">{selectedJobDetails.companyInfo.name}</h4>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-500">
                            <span>{selectedJobDetails.companyInfo.size}</span>
                            <span>•</span>
                            <span>{selectedJobDetails.companyInfo.industry}</span>
                            <span>•</span>
                            <span>Founded {selectedJobDetails.companyInfo.founded}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 font-subheading">{selectedJobDetails.companyInfo.description}</p>
                        <div>
                          <h5 className="font-subheading font-medium text-primary-navy mb-2">Benefits</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedJobDetails.companyInfo.benefits.map((benefit: string, index: number) => (
                              <Badge key={index} className="bg-green-50 text-green-700 font-subheading">{benefit}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-subheading font-medium text-primary-navy mb-2">Company Culture</h5>
                          <p className="text-slate-600 font-subheading">{selectedJobDetails.companyInfo.culture}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading"
                    onClick={() => {
                      setSelectedJobDetails(null)
                      const application = applications.find(app => app.projectTitle === selectedJobDetails.title)
                      if (application) handleMessageClient(application)
                    }}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Message Client
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                    onClick={() => setSelectedJobDetails(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProjectDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProjectDetails(null)}
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  <h1 className="text-2xl font-heading text-primary-navy">Project Details</h1>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                {/* Project Header */}
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 rounded-xl bg-slate-100 flex items-center justify-center">
                    <selectedProjectDetails.icon className="h-8 w-8 text-primary-navy" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-heading text-primary-navy mb-2">{selectedProjectDetails.title}</h2>
                    <p className="text-slate-500 font-subheading">Posted {selectedProjectDetails.postedDate}</p>
                  </div>
                </div>

                <Separator />

                {/* Project Details Form Layout */}
                <div className="space-y-6">
                  {/* Project Title */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Project Title</Label>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900">{selectedProjectDetails.title}</p>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Category</Label>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900">{selectedProjectDetails.category}</p>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Project Description</Label>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-700 leading-relaxed">{selectedProjectDetails.fullDescription}</p>
                    </div>
                  </div>

                  {/* Required Skills */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Required Skills</Label>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900">{selectedProjectDetails.skills.join(", ")}</p>
                    </div>
                  </div>

                  {/* Project Budget */}
                  <div className="space-y-3">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Project Budget</Label>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="h-4 w-4 rounded-full border-2 border-primary-navy bg-primary-navy"></div>
                        <span className="font-subheading text-slate-700">{selectedProjectDetails.budgetType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-subheading font-medium text-primary-navy">Minimum Budget</Label>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-subheading text-slate-900">${selectedProjectDetails.minBudget.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-subheading font-medium text-primary-navy">Maximum Budget</Label>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-subheading text-slate-900">${selectedProjectDetails.maxBudget.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Duration */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Estimated Duration</Label>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900">{selectedProjectDetails.duration}</p>
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Attachments {selectedProjectDetails.attachments.length === 0 && "(Optional)"}</Label>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      {selectedProjectDetails.attachments.length > 0 ? (
                        <div className="space-y-2">
                          {selectedProjectDetails.attachments.map((attachment: any, index: number) => (
                            <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-lg border border-slate-200">
                              <div className="h-8 w-8 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-bold text-primary-navy">{attachment.type}</span>
                              </div>
                              <div className="flex-1">
                                <p className="font-subheading text-sm text-slate-900">{attachment.name}</p>
                                <p className="text-xs text-slate-500">{attachment.size}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="font-subheading text-slate-500 text-center py-2">No attachments provided</p>
                      )}
                    </div>
                  </div>

                  {/* Requirements */}
                  {selectedProjectDetails.requirements && selectedProjectDetails.requirements.trim() !== "" && (
                    <div className="space-y-2">
                      <Label className="text-sm font-subheading font-medium text-primary-navy">Requirements</Label>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="space-y-2">
                          {selectedProjectDetails.requirements.split('\n').map((requirement: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="font-subheading text-slate-700">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {selectedProjectDetails.responsibilities && selectedProjectDetails.responsibilities.trim() !== "" && (
                    <div className="space-y-2">
                      <Label className="text-sm font-subheading font-medium text-primary-navy">Responsibilities</Label>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="space-y-2">
                          {selectedProjectDetails.responsibilities.split('\n').map((responsibility: string, index: number) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="font-subheading text-slate-700">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Client Information */}
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">About the Client</h3>
                  <Card className="border-slate-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading text-primary-navy">{selectedProjectDetails.client.name}</h4>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              <span className="font-subheading text-sm">{selectedProjectDetails.client.rating}/5</span>
                              <span className="text-xs text-slate-500">({selectedProjectDetails.client.reviews} reviews)</span>
                            </div>
                            <span className="text-xs text-slate-500">{selectedProjectDetails.client.jobsPosted} jobs posted</span>
                            <span className="text-xs text-slate-500">Member since {selectedProjectDetails.client.memberSince}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                    onClick={() => {
                      setSelectedProjectDetails(null)
                      const application = applications.find(app => app.id === selectedProjectDetails.id)
                      if (application) handleMessageClient(application)
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Client
                  </Button>
                  <Button 
                    variant="outline" 
                    className="rounded-xl font-subheading"
                    onClick={() => setSelectedProjectDetails(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Individual Message Conversation Modal */}
      {selectedConversation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedConversation(null)}
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <h1 className="text-xl font-heading text-primary-navy">Message Details</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedConversation(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Conversation Content */}
              <div className="space-y-6">
                {/* Client Info */}
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading">
                      {selectedConversation.clientAvatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-subheading font-medium text-primary-navy">{selectedConversation.clientName}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-subheading text-slate-500">{selectedConversation.clientRating}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Project: {selectedConversation.projectTitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">
                      {new Date(selectedConversation.timestamp).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-slate-500">
                      {new Date(selectedConversation.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-primary-navy text-white p-4 rounded-2xl rounded-br-md">
                      <p className="font-subheading leading-relaxed">{selectedConversation.message}</p>
                      <div className="flex items-center justify-end space-x-2 mt-2">
                        <Badge className="bg-white/20 text-white text-xs">
                          <Send className="h-3 w-3 mr-1" />
                          {selectedConversation.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                    onClick={() => {
                      setSelectedConversation(null)
                      // Find the application and open message modal
                      const application = applications.find(app => app.id === selectedConversation.projectId)
                      if (application) handleMessageClient(application)
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                    onClick={() => setSelectedConversation(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Client Modal */}
      <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
        <DialogContent className="max-w-md [&_button]:focus:outline-none [&_button]:focus:ring-0 [&_button]:focus-visible:ring-0 [&_button]:focus-visible:ring-offset-0 [&_button]:active:outline-none [&_*]:focus:outline-none [&_*]:focus:ring-0 [&_*]:focus-visible:ring-0 [&_*]:focus-visible:ring-offset-0 [&>button:not(.custom-close)]:hidden">
          <button
            onClick={() => setShowMessageModal(false)}
            className="custom-close absolute right-4 top-4 p-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
          >
            <X size={16} />
          </button>
          <DialogHeader>
            <DialogTitle className="font-heading text-primary-navy">
              Message {selectedClientForMessage?.clientName}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading">
                  {selectedClientForMessage?.clientAvatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-subheading font-medium text-primary-navy">{selectedClientForMessage?.clientName}</p>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-subheading text-slate-500">{selectedClientForMessage?.clientRating}</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-subheading font-medium text-slate-700 mb-2 block">
                Subject: {selectedClientForMessage?.projectTitle}
              </label>
                             <Textarea
                 placeholder="Type your message here..."
                 value={messageText}
                 onChange={(e) => setMessageText(e.target.value)}
                 className="min-h-[120px] resize-none border-slate-200 focus:border-slate-300 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
               />
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleSendMessage}
                className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading flex-1"
                disabled={!messageText.trim()}
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowMessageModal(false)
                  setMessageText("")
                }}
                className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}