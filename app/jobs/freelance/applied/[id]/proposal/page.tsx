"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Clock,
  Star,
  FileText,
  Download,
  Edit,
  CheckCircle,
  XCircle,
  AlertCircle,
  MessageCircle,
  Briefcase
} from "lucide-react"
import Link from "next/link"

export default function ProposalViewPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null)
  const [application, setApplication] = useState<any>(null)

  // Sample projects data (same as in the main freelance page)
  const projects = [
    {
      id: 1,
      title: "React Native Developer for Fitness App",
      category: "Mobile Development",
      description: "We're looking for an experienced React Native developer to build a comprehensive fitness tracking application.",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      budget: "$2,000-3,000",
      duration: "4-6 weeks",
      postedDate: "3 days ago",
      client: {
        name: "FitTech Solutions",
        rating: 4.8,
        reviews: 42,
        jobsPosted: 15,
        memberSince: "2022"
      }
    },
    {
      id: 2,
      title: "E-commerce Website Development",
      category: "Web Development",
      description: "Looking for an experienced developer to build a modern e-commerce platform with React and Node.js.",
      skills: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      budget: "$3,000-5,000",
      duration: "2-3 months",
      postedDate: "1 week ago",
      client: {
        name: "ShopSmart Inc",
        rating: 4.9,
        reviews: 28,
        jobsPosted: 8,
        memberSince: "2023"
      }
    },
    {
      id: 3,
      title: "Mobile App UI/UX Design",
      category: "Design",
      description: "We need a talented UI/UX designer to create beautiful, user-friendly mobile app designs.",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Mobile Design"],
      budget: "$3,000-4,500",
      duration: "6-8 weeks",
      postedDate: "10 days ago",
      client: {
        name: "DesignStudio Pro",
        rating: 4.7,
        reviews: 35,
        jobsPosted: 12,
        memberSince: "2021"
      }
    }
  ]

  // Sample applications data
  const applications = [
    {
      id: 1,
      projectId: 1,
      status: "pending",
      appliedDate: "2 days ago",
      lastActivity: "1 day ago",
      coverLetter: "Dear FitTech Solutions team,\n\nI am excited to apply for your React Native Developer position for the fitness app project. With over 6 years of experience in mobile development and a particular passion for health and fitness applications, I believe I am the perfect fit for this role.\n\nThroughout my career, I have successfully developed and launched 15+ mobile applications, with 8 of them being fitness and health-related apps. My experience includes:\n\n• Built a comprehensive workout tracking app with 50K+ downloads\n• Integrated with popular fitness APIs like MyFitnessPal and Fitbit\n• Expertise in real-time data synchronization and offline functionality\n• Strong background in React Native, Firebase, and mobile UI/UX\n\nI am particularly drawn to this project because of the social features component. In my previous role at HealthTech Innovations, I led the development of a social fitness platform that increased user engagement by 300%.\n\nI am available to start immediately and can commit full-time to this project. I would love to discuss how my experience and passion for fitness technology can help bring your vision to life.\n\nBest regards,\nAlex Johnson",
      proposedRate: "$2,500 fixed price",
      timeline: "5 weeks",
      portfolioFiles: ["fitness-app-portfolio.pdf", "mobile-designs-showcase.zip"]
    },
    {
      id: 2,
      projectId: 2,
      status: "interviewed",
      appliedDate: "5 days ago",
      lastActivity: "3 hours ago",
      coverLetter: "Dear ShopSmart Inc team,\n\nI am writing to express my strong interest in your e-commerce website development project. With 7 years of full-stack development experience and having built 12+ e-commerce platforms, I am confident I can deliver exactly what you're looking for.\n\nMy expertise includes:\n\n• Advanced React development with modern hooks and context API\n• Robust Node.js backend development with Express and MongoDB\n• Seamless Stripe payment integration with secure handling\n• AWS deployment and DevOps best practices\n• Performance optimization and security implementations\n\nRecently, I completed a similar project for RetailMax, where I built a multi-vendor e-commerce platform that handles 10K+ daily transactions. The project was delivered 2 weeks ahead of schedule and has maintained 99.9% uptime.\n\nWhat sets me apart is my attention to detail in both functionality and user experience. I always implement comprehensive testing, detailed documentation, and provide ongoing support.\n\nI am excited about the opportunity to work with your team and would be happy to share more details about my approach and timeline.\n\nLooking forward to hearing from you,\nSarah Chen",
      proposedRate: "$85/hour",
      timeline: "10-12 weeks", 
      portfolioFiles: ["ecommerce-case-studies.pdf", "previous-work-samples.zip"],
      interviewDate: "Tomorrow at 3:00 PM"
    },
    {
      id: 3,
      projectId: 3,
      status: "shortlisted",
      appliedDate: "1 week ago",
      lastActivity: "2 days ago",
      coverLetter: "Hello DesignStudio Pro,\n\nI'm thrilled to apply for your mobile app UI/UX design project. As a product designer with 5 years of experience specializing in mobile applications, I have a proven track record of creating intuitive and visually appealing designs that users love.\n\nMy approach to this project would include:\n\n• Comprehensive user research and persona development\n• Detailed wireframing and user journey mapping\n• High-fidelity designs following iOS and Android guidelines\n• Interactive prototypes for user testing\n• Complete design system with components and guidelines\n\nI recently designed a meditation app that won the 2024 Mobile Design Awards and has been featured in the App Store. The app achieved a 4.8-star rating with users specifically praising the intuitive interface.\n\nI work exclusively in Figma and believe in collaborative design processes. I would provide regular updates and incorporate your feedback throughout the project.\n\nMy portfolio showcases 20+ mobile apps across various industries including fintech, healthcare, and lifestyle. I would love to show you how my design philosophy can enhance your project.\n\nBest regards,\nMike Rodriguez",
      proposedRate: "$3,500 fixed price",
      timeline: "7 weeks",
      portfolioFiles: ["mobile-design-portfolio.pdf", "case-study-meditation-app.pdf"]
    }
  ]

  useEffect(() => {
    // Find the project and application by ID
    const foundProject = projects.find(p => p.id === parseInt(params.id))
    const foundApplication = applications.find(a => a.projectId === parseInt(params.id))
    setProject(foundProject)
    setApplication(foundApplication)
  }, [params.id])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "interviewed":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "shortlisted":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "hired":
        return "bg-green-100 text-green-800 border-green-200"
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
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
        return "Under Review"
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

  if (!project || !application) {
    return (
      <div className="min-h-full">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-2xl font-heading text-primary-navy mb-4">Proposal Not Found</h1>
            <p className="text-slate-600 font-subheading mb-6">The proposal you're looking for could not be found.</p>
            <Link href="/jobs/freelance/my-applications">
              <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to My Applications
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href={`/jobs/freelance/applied/${params.id}`}>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-heading text-primary-navy truncate">Your Proposal</h1>
              <p className="text-xs sm:text-sm text-slate-600 font-subheading mt-1 truncate">{project.title}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading w-full sm:w-auto text-xs sm:text-sm"
            >
              <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Edit Proposal
            </Button>
          </div>
        </div>

        {/* Application Status */}
        <div className={`${getStatusColor(application.status)} border rounded-xl p-3 sm:p-4 mb-6`}>
          <div className="flex items-center space-x-2 sm:space-x-3">
            {getStatusIcon(application.status)}
            <div className="min-w-0 flex-1">
              <h3 className="font-heading font-medium text-sm sm:text-base">Application Status: {getStatusText(application.status)}</h3>
              <p className="text-xs sm:text-sm font-subheading mt-1">
                Applied {application.appliedDate} • Last activity: {application.lastActivity}
              </p>
            </div>
          </div>
          
          {application.status === "interviewed" && application.interviewDate && (
            <div className="mt-3 pt-3 border-t border-current/20">
              <p className="font-subheading font-medium text-sm sm:text-base">Interview Scheduled: {application.interviewDate}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Project Summary */}
          <div className="p-3 sm:p-4 bg-slate-50 rounded-xl">
            <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Project Summary</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading text-sm sm:text-base">
                    {project.client.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <h4 className="font-heading text-primary-navy text-sm sm:text-base truncate">{project.client.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-subheading text-slate-500">{project.client.rating}</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-slate-200 text-slate-700 font-subheading text-xs sm:text-sm self-start sm:self-center">
                {project.category}
              </Badge>
            </div>
            <h4 className="font-heading text-primary-navy mb-2 text-sm sm:text-base">{project.title}</h4>
            <p className="text-slate-600 font-subheading text-xs sm:text-sm mb-3 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
              {project.skills.map((skill: string) => (
                <Badge key={skill} className="bg-slate-200 text-slate-700 font-subheading text-xs">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="font-subheading text-slate-600 truncate">{project.budget}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="font-subheading text-slate-600 truncate">{project.duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="font-subheading text-slate-600 truncate">Posted {project.postedDate}</span>
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Cover Letter</h3>
            <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-xl">
              <div className="whitespace-pre-wrap font-subheading text-slate-700 leading-relaxed text-sm sm:text-base">
                {application.coverLetter}
              </div>
            </div>
          </div>

          {/* Proposed Rate & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Proposed Rate</h3>
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-base sm:text-lg font-heading text-primary-navy truncate">{application.proposedRate}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Timeline</h3>
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-base sm:text-lg font-heading text-primary-navy truncate">{application.timeline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Files */}
          {application.portfolioFiles && application.portfolioFiles.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Attached Files</h3>
              <div className="space-y-3">
                {application.portfolioFiles.map((file: string, index: number) => (
                  <div key={index} className="p-3 sm:p-4 bg-white border border-slate-200 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-subheading font-medium text-primary-navy text-sm sm:text-base truncate">{file}</p>
                          <p className="text-xs text-slate-500 font-subheading">Uploaded {application.appliedDate}</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-slate-300 text-slate-600 hover:bg-slate-50 rounded-xl font-subheading w-full sm:w-auto text-xs sm:text-sm"
                      >
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Application Tips (Read-only version) */}
          <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="text-base sm:text-lg font-heading text-blue-900 mb-3">Proposal Submitted Successfully</h3>
            <div className="space-y-2 text-xs sm:text-sm font-subheading text-blue-800">
              <p>• Your proposal has been submitted and is under review by the client</p>
              <p>• You will be notified of any updates or responses from the client</p>
              <p>• You can edit your proposal anytime before the client makes a decision</p>
              <p>• Keep your profile updated and respond promptly to any client messages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 