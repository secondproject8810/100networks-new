"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Building,
  MapPin,
  DollarSign,
  Bookmark,
  CircleCheckBig,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  Calendar
} from "lucide-react"

// Mock data for applied internships
const appliedInternships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechVision",
    location: "San Francisco, CA",
    stipend: "$2,500/month",
    duration: "12 weeks",
    workType: "Hybrid",
    postedDate: "3 days ago",
    applicationDeadline: "2024-03-15",
    applicationStatus: "under_review",
    applicationStatusText: "Under Review",
    appliedDate: "3 days ago",
    lastActivity: "1 day ago",
    description: "This summer internship program at TechVision offers students the opportunity to work alongside experienced engineers on meaningful projects. You'll contribute to our web applications, learn about software development best practices, and gain exposure to the entire software development lifecycle.",
    skills: ["JavaScript", "React", "Python", "Student"],
    requirements: [
      "Currently pursuing Computer Science or related degree",
      "Basic knowledge of JavaScript and web development", 
      "Familiarity with React or similar frameworks",
      "Strong problem-solving skills",
      "Excellent communication and teamwork abilities",
      "Available for 12-week summer program"
    ],
    responsibilities: [
      "Develop features for web applications under mentor guidance",
      "Participate in code reviews and team meetings",
      "Learn and apply software development best practices",
      "Collaborate with cross-functional teams",
      "Complete assigned projects and present results",
      "Attend technical workshops and training sessions"
    ],
    companyInfo: {
      name: "TechVision",
      size: "100-500 employees",
      industry: "Technology",
      founded: "2018",
      description: "TechVision is a fast-growing technology company that develops innovative software solutions for businesses worldwide.",
      benefits: ["Mentorship Program", "Learning Budget", "Free Lunch", "Networking Events", "Conversion Opportunity"],
      culture: "Innovation-driven, collaborative, and learning-focused environment for interns"
    },
    mentor: "Sarah Chen, Senior Engineer"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Flexbone",
    location: "Atlanta, GA", 
    stipend: "$2,200/month",
    duration: "10 weeks",
    workType: "Remote",
    postedDate: "1 week ago",
    applicationDeadline: "2024-03-20",
    applicationStatus: "interview_scheduled",
    applicationStatusText: "Interview Scheduled",
    appliedDate: "1 week ago",
    lastActivity: "2 hours ago",
    description: "Join our data science team to work on cutting-edge healthcare analytics projects. You'll gain hands-on experience with machine learning algorithms, data visualization, and statistical analysis while contributing to meaningful healthcare solutions.",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"],
    requirements: [
      "Currently pursuing Statistics, Data Science, or related degree",
      "Proficiency in Python and data analysis libraries",
      "Understanding of statistical concepts and methods",
      "Experience with SQL databases",
      "Strong analytical and problem-solving skills",
      "Interest in healthcare applications"
    ],
    responsibilities: [
      "Analyze healthcare datasets to identify trends and patterns",
      "Develop and implement machine learning models",
      "Create data visualizations and reports",
      "Collaborate with healthcare professionals and engineers",
      "Present findings to stakeholders",
      "Contribute to research publications"
    ],
    companyInfo: {
      name: "Flexbone",
      size: "50-200 employees",
      industry: "Healthcare Technology",
      founded: "2020",
      description: "Flexbone develops AI-powered healthcare solutions to improve patient outcomes and streamline medical processes.",
      benefits: ["Health Insurance", "Professional Development", "Flexible Hours", "Research Opportunities", "Conference Attendance"],
      culture: "Research-focused, collaborative, and mission-driven environment"
    },
    mentor: "Dr. Michael Torres, Lead Data Scientist"
  }
]

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

export default function AppliedInternshipDetailsPage() {
  const params = useParams()
  const internshipId = parseInt(params.id as string)
  
  const internship = appliedInternships.find(i => i.id === internshipId)
  
  if (!internship) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Internship Not Found</h1>
          <Link href="/internships/applied">
            <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white">
              Back to Applied Internships
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/internships/applied">
              <Button
                variant="ghost"
                className="rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-heading text-primary-navy mb-2">Internship Details</h1>
              <p className="text-slate-600 font-subheading text-sm lg:text-base">
                {internship.title} at {internship.company}
              </p>
            </div>
          </div>
        </div>

        {/* Application Status Banner */}
        <div className={`${getStatusColor(internship.applicationStatus)} rounded-lg p-4 lg:p-6 mb-6 lg:mb-8`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              {getStatusIcon(internship.applicationStatus)}
              <div>
                <h3 className="font-subheading font-medium text-base lg:text-lg">Application Status</h3>
                <p className="text-sm lg:text-base">{internship.applicationStatusText}</p>
              </div>
            </div>
            <div className="text-left sm:text-right text-sm lg:text-base">
              <p>Applied: {internship.appliedDate}</p>
              <p>Last Activity: {internship.lastActivity}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Main Internship Card */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 self-center sm:self-start">
                  <div className="w-full h-full bg-primary-navy flex items-center justify-center">
                    <span className="text-white font-heading text-xl lg:text-2xl">
                      {internship.company.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                    <h2 className="text-xl lg:text-2xl font-heading text-primary-navy">
                      {internship.title}
                    </h2>
                    <Badge className="px-3 py-1 rounded-full text-sm font-subheading self-center sm:self-start bg-blue-100 text-blue-700">
                      {internship.workType}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-subheading mb-3 space-y-2 sm:space-y-0 text-sm lg:text-base">
                    <div className="flex items-center space-x-1 justify-center sm:justify-start">
                      <Building className="h-4 w-4" />
                      <span>{internship.company}</span>
                    </div>
                    <div className="flex items-center space-x-1 justify-center sm:justify-start">
                      <MapPin className="h-4 w-4" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 justify-center sm:justify-start">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-heading text-primary-navy">{internship.stipend}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 lg:gap-4 text-slate-500 font-subheading text-sm">
                    <span>{internship.duration}</span>
                    <span>•</span>
                    <span>Posted {internship.postedDate}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="sm:inline block">Apply by {internship.applicationDeadline}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <Link href={`/internships/applied/${internship.id}/application`} className="flex-1">
              <Button className="w-full flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12">
                <Eye className="h-4 w-4 mr-2" />
                View Application
              </Button>
            </Link>
            <Button className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12">
              <Bookmark className="h-4 w-4 mr-2" />
              Save Internship
            </Button>
          </div>

          {/* About This Internship */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">About This Internship</h3>
              <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">
                {internship.description}
              </p>
            </div>
          </Card>

          {/* Skills Required */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className={`font-subheading text-xs lg:text-sm ${
                      skill === "Student" ? "bg-[#0056B3]/10 text-[#0056B3]" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Requirements */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Requirements</h3>
              <ul className="space-y-2">
                {internship.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CircleCheckBig className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 font-subheading text-sm lg:text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* What You'll Do */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">What You'll Do</h3>
              <ul className="space-y-2">
                {internship.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CircleCheckBig className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                    <span className="text-slate-600 font-subheading text-sm lg:text-base">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* About the Company */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">About the Company</h3>
              <Card className="border-slate-200">
                <div className="p-3 lg:p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-heading text-primary-navy text-sm lg:text-base">
                        {internship.companyInfo.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-xs lg:text-sm text-slate-500">
                        <span>{internship.companyInfo.size}</span>
                        <span>•</span>
                        <span>{internship.companyInfo.industry}</span>
                        <span>•</span>
                        <span>Founded {internship.companyInfo.founded}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 font-subheading text-sm lg:text-base">
                      {internship.companyInfo.description}
                    </p>
                    
                    <div>
                      <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">
                        Benefits
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {internship.companyInfo.benefits.map((benefit, index) => (
                          <Badge 
                            key={index} 
                            className="bg-green-50 text-green-700 font-subheading text-xs"
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">
                        Program Culture
                      </h5>
                      <p className="text-slate-600 font-subheading text-sm lg:text-base">
                        {internship.companyInfo.culture}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          {/* Program Mentor */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Program Mentor</h3>
              <p className="text-slate-600 font-subheading text-sm lg:text-base">
                {internship.mentor}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 