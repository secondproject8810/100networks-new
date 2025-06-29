"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Building, MapPin, DollarSign, CheckCircle, BookmarkIcon, Calendar, Clock, Users, Star, Eye, FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AppliedJobDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  // Mock applications data (in real app, this would be fetched based on ID)
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
    }
  ]

  const application = applications.find(app => app.id === parseInt(params.id))

  if (!application) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Application Not Found</h1>
          <Link href="/jobs/freelance/applied-jobs">
            <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl">
              Back to Applied Jobs
            </Button>
          </Link>
        </div>
      </div>
    )
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
        return <CheckCircle className="h-4 w-4" />
      case "shortlisted":
        return <Star className="h-4 w-4" />
      case "hired":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
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

  // Convert application data to job details format (same as the original modal logic)
  const jobDetails = {
    title: application.jobTitle,
    company: application.companyName,
    logo: "/placeholder-company-logo.png",
    location: application.location,
    salary: application.salary,
    type: application.jobType,
    remote: "Full-time",
    posted: application.jobPosted,
    applicationDeadline: "Open",
    fullDescription: `We are seeking a highly skilled ${application.jobTitle} to join our dynamic team at ${application.companyName}. This is a ${application.jobType.toLowerCase()} position that offers excellent opportunities for growth and development. The role was posted ${application.jobPosted} and has attracted ${application.totalApplicants} qualified applicants.

${application.coverLetter}

This position offers competitive compensation and the opportunity to work with cutting-edge technologies in a collaborative environment. You'll be working closely with our team to deliver high-quality solutions that impact our users directly.`,
    skills: application.skills,
    requirements: [
      "Strong experience with the required technologies",
      "Ability to work independently and meet deadlines", 
      "Excellent communication and collaboration skills",
      "Portfolio showcasing relevant projects and experience",
      "Bachelor's degree in Computer Science or related field",
      "3+ years of professional experience in the field"
    ],
    responsibilities: [
      "Develop and maintain high-quality applications",
      "Collaborate with cross-functional teams to define and implement features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and provide constructive feedback",
      "Stay up-to-date with industry trends and best practices",
      "Contribute to technical documentation and knowledge sharing"
    ],
    companyInfo: {
      name: application.companyName,
      size: "100-500 employees",
      industry: "Technology",
      founded: "2018",
      description: `${application.companyName} is a fast-growing technology company that develops innovative software solutions for businesses worldwide. We're committed to creating products that make a real difference in people's lives.`,
      benefits: ["Health Insurance", "401(k) Matching", "Unlimited PTO", "Remote Work", "Learning Budget"],
      culture: "Innovation-driven, collaborative, and growth-focused environment where every team member's contribution is valued."
    },
    hiringManager: `${application.companyName} Hiring Team`
  }

  return (
    <div className="min-h-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <Link href="/jobs/freelance/applied-jobs">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Application Status Banner */}
          <div className="mb-6">
            <Badge className={`${getStatusColor(application.status)} font-subheading flex items-center space-x-2 text-sm px-4 py-2 w-fit`}>
              {getStatusIcon(application.status)}
              <span>Application Status: {getStatusText(application.status)}</span>
            </Badge>
          </div>

          {/* Job Header */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                <span className="text-white font-heading text-lg lg:text-xl">
                  {application.companyAvatar}
                </span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                <h1 className="text-2xl lg:text-3xl font-heading text-primary-navy">{jobDetails.title}</h1>
                <span className="px-3 py-1 rounded-full text-sm font-subheading self-start bg-blue-100 text-blue-700">
                  {jobDetails.remote}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-subheading mb-3 space-y-2 sm:space-y-0 text-sm lg:text-base">
                <div className="flex items-center space-x-1">
                  <Building className="h-4 w-4" />
                  <span>{jobDetails.company}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{jobDetails.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-heading text-primary-navy">{jobDetails.salary}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-slate-500 font-subheading text-sm">
                <span>{jobDetails.type}</span>
                <span>•</span>
                <span>Posted {jobDetails.posted}</span>
                <span className="hidden sm:inline">•</span>
                <span className="sm:inline block">Applied {application.appliedDate}</span>
                <span className="hidden sm:inline">•</span>
                <span className="sm:inline block">{application.totalApplicants} applicants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
          <Link href={`/jobs/freelance/applied-jobs/${params.id}/application`} className="flex-1">
            <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12">
              <FileText className="h-4 w-4 mr-2" />
              View Application
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="flex-1 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
          >
            <BookmarkIcon className="h-4 w-4 mr-2" />
            Save Job
          </Button>
        </div>

        {/* Job Content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Job Description */}
          <div>
            <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-4">Job Description</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base whitespace-pre-line">
                {jobDetails.fullDescription}
              </p>
            </div>
          </div>

          <Separator />

          {/* Skills Required */}
          <div>
            <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-4">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {jobDetails.skills.map((skill: string, index: number) => (
                <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-4">Requirements</h2>
            <ul className="space-y-3">
              {jobDetails.requirements.map((requirement: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 font-subheading text-sm lg:text-base">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Responsibilities */}
          <div>
            <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {jobDetails.responsibilities.map((responsibility: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-navy mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 font-subheading text-sm lg:text-base">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Company Information */}
          <div>
            <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-4">About the Company</h2>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-primary-navy text-lg">{jobDetails.companyInfo.name}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                      <span>{jobDetails.companyInfo.size}</span>
                      <span>•</span>
                      <span>{jobDetails.companyInfo.industry}</span>
                      <span>•</span>
                      <span>Founded {jobDetails.companyInfo.founded}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-subheading text-sm lg:text-base">{jobDetails.companyInfo.description}</p>
                  <div>
                    <h4 className="font-subheading font-semibold text-primary-navy mb-3 text-base">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {jobDetails.companyInfo.benefits.map((benefit: string, index: number) => (
                        <Badge key={index} className="bg-green-50 text-green-700 font-subheading text-sm">{benefit}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold text-primary-navy mb-3 text-base">Company Culture</h4>
                    <p className="text-slate-600 font-subheading text-sm lg:text-base">{jobDetails.companyInfo.culture}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Hiring Manager */}
          <div>
            <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-4">Hiring Manager</h2>
            <p className="text-slate-600 font-subheading text-sm lg:text-base">{jobDetails.hiringManager}</p>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href={`/jobs/freelance/applied-jobs/${params.id}/application`} className="flex-1">
              <Button className="w-full bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12">
                <FileText className="h-4 w-4 mr-2" />
                View My Application
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
            >
              <BookmarkIcon className="h-4 w-4 mr-2" />
              Save Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 