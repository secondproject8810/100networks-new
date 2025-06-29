"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Users,
  Clock,
  Star,
  MapPin,
  Building,
  BookmarkIcon,
  Share2,
  CheckCircle,
  XCircle,
  AlertCircle,
  MessageCircle,
  FileText,
  Eye,
  Briefcase
} from "lucide-react"
import Link from "next/link"

export default function AppliedProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const [project, setProject] = useState<any>(null)
  const [application, setApplication] = useState<any>(null)

  // Sample projects data (same as in the main freelance page)
  const projects = [
    {
      id: 1,
      title: "React Native Developer for Fitness App",
      category: "Mobile Development",
      description: "We're looking for an experienced React Native developer to build a comprehensive fitness tracking application. The app will include workout tracking, meal planning, progress visualization, and social features.",
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
      },
      requirements: [
        "5+ years of React Native development experience",
        "Experience with fitness/health apps preferred",
        "Strong knowledge of mobile UI/UX principles",
        "Experience with real-time data synchronization",
        "Portfolio demonstrating similar projects"
      ],
      responsibilities: [
        "Develop cross-platform mobile application using React Native",
        "Integrate with fitness tracking APIs and wearable devices",
        "Implement secure user authentication and data storage",
        "Create responsive and intuitive user interfaces",
        "Collaborate with design team and product managers",
        "Perform testing and debugging across iOS and Android platforms"
      ]
    },
    {
      id: 2,
      title: "E-commerce Website Development",
      category: "Web Development",
      description: "Looking for an experienced developer to build a modern e-commerce platform with React and Node.js. The project includes user authentication, payment integration, and admin dashboard.",
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
      },
      requirements: [
        "Strong experience with React and Node.js",
        "Experience building e-commerce platforms", 
        "Knowledge of payment gateway integration",
        "Understanding of security best practices",
        "Experience with cloud deployment (AWS preferred)"
      ],
      responsibilities: [
        "Build responsive e-commerce website using React",
        "Develop RESTful APIs with Node.js and Express",
        "Integrate payment processing with Stripe",
        "Implement user authentication and authorization",
        "Create admin dashboard for inventory management",
        "Deploy and maintain application on AWS"
      ]
    },
    {
      id: 3,
      title: "Mobile App UI/UX Design",
      category: "Design",
      description: "We need a talented UI/UX designer to create beautiful, user-friendly mobile app designs. This includes wireframes, prototypes, and final design assets.",
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
      },
      requirements: [
        "3+ years of mobile app design experience",
        "Proficiency in Figma and design systems",
        "Strong portfolio of mobile applications",
        "Understanding of iOS and Android design guidelines",
        "Experience with user research and testing"
      ],
      responsibilities: [
        "Conduct user research and create user personas",
        "Design wireframes and user flow diagrams",
        "Create high-fidelity mockups and prototypes",
        "Develop comprehensive design system",
        "Collaborate with development team on implementation",
        "Conduct usability testing and iterate designs"
      ]
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
    const loadData = async () => {
      const resolvedParams = await params
      // Find the project and application by ID
      const foundProject = projects.find(p => p.id === parseInt(resolvedParams.id))
      const foundApplication = applications.find(a => a.projectId === parseInt(resolvedParams.id))
      setProject(foundProject)
      setApplication(foundApplication)
    }
    loadData()
  }, [params])

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
            <h1 className="text-2xl font-heading text-primary-navy mb-4">Project Not Found</h1>
            <p className="text-slate-600 font-subheading mb-6">The applied project you're looking for could not be found.</p>
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
            <Link href="/jobs/freelance/my-applications">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-heading text-primary-navy truncate">Applied Project Details</h1>
              <p className="text-xs sm:text-sm text-slate-600 font-subheading mt-1 truncate">{project.title}</p>
            </div>
          </div>
        </div>

        {/* Application Status Banner */}
        <div className={`${getStatusColor(application.status)} border rounded-xl p-3 sm:p-4 mb-6`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {getStatusIcon(application.status)}
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-medium text-sm sm:text-base">Application Status: {getStatusText(application.status)}</h3>
                <p className="text-xs sm:text-sm font-subheading mt-1">
                  Applied {application.appliedDate} • Last activity: {application.lastActivity}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href={`/jobs/freelance/applied/${project.id}/proposal`}>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-current text-current hover:bg-current hover:text-white rounded-xl font-subheading w-full sm:w-auto text-xs sm:text-sm"
                >
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  View Proposal
                </Button>
              </Link>
            </div>
          </div>
          
          {application.status === "interviewed" && application.interviewDate && (
            <div className="mt-3 pt-3 border-t border-current/20">
              <p className="font-subheading font-medium text-sm sm:text-base">Interview Scheduled: {application.interviewDate}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Project Overview */}
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-heading text-primary-navy mb-3 sm:mb-4">{project.title}</h2>
            <p className="text-slate-600 font-subheading text-sm sm:text-base leading-relaxed mb-4">
              {project.description}
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
              {project.skills.map((skill: string) => (
                <Badge key={skill} className="bg-slate-100 text-slate-700 font-subheading text-xs sm:text-sm">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
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
              <div className="flex items-center">
                <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="font-subheading text-slate-600 truncate">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div>
            <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">About the Client</h3>
            <div className="p-3 sm:p-4 bg-slate-50 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                    <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-heading text-sm sm:text-base">
                      {project.client.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-heading text-primary-navy text-sm sm:text-base truncate">{project.client.name}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-slate-600">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400 flex-shrink-0" />
                        <span className="font-subheading">{project.client.rating} ({project.client.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="font-subheading">{project.client.jobsPosted} jobs posted</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-slate-200 text-slate-700 font-subheading text-xs sm:text-sm self-start sm:self-center">
                  Member since {project.client.memberSince}
                </Badge>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Requirements</h3>
            <div className="p-3 sm:p-4 bg-slate-50 rounded-xl">
              <ul className="space-y-2 sm:space-y-3">
                {project.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary-navy font-bold mt-0.5 sm:mt-1 text-sm">•</span>
                    <span className="font-subheading text-slate-700 text-sm sm:text-base leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-3">Key Responsibilities</h3>
            <div className="p-3 sm:p-4 bg-slate-50 rounded-xl">
              <ul className="space-y-2 sm:space-y-3">
                {project.responsibilities.map((resp: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary-navy font-bold mt-0.5 sm:mt-1 text-sm">•</span>
                    <span className="font-subheading text-slate-700 text-sm sm:text-base leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 