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
  Upload,
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  Calendar,
  Eye
} from "lucide-react"

// Mock application data
const applications = [
  {
    id: 1,
    internshipTitle: "Software Engineering Intern",
    companyName: "TechVision",
    location: "San Francisco, CA",
    stipend: "$2,500/month",
    duration: "12 weeks",
    applicationStatus: "under_review",
    applicationStatusText: "Under Review",
    appliedDate: "3 days ago",
    lastActivity: "1 day ago",
    applicationData: {
      coverLetter: "I am writing to express my strong interest in the Software Engineering Intern position at TechVision. As a computer science student with hands-on experience in JavaScript, React, and Python, I am excited about the opportunity to contribute to your innovative projects while learning from your experienced engineering team.\n\nThroughout my academic journey, I have developed a solid foundation in software development principles and have worked on several projects that demonstrate my technical skills and problem-solving abilities. My recent project involved building a full-stack web application using React and Node.js, where I implemented user authentication, database integration, and responsive design principles.\n\nWhat particularly attracts me to TechVision is your commitment to mentorship and professional development. I am eager to work alongside experienced engineers, participate in code reviews, and contribute to meaningful projects that make a real impact. I believe this internship would provide the perfect environment for me to grow as a developer while adding value to your team.\n\nI am available for the full 12-week program and am committed to making the most of this learning opportunity. Thank you for considering my application.",
      expectedStipend: "$2,500/month",
      availableStartDate: "2024-06-01",
      resumeUploaded: true,
      resumeFileName: "John_Doe_Resume.pdf",
      transcriptUploaded: true,
      transcriptFileName: "Academic_Transcript.pdf"
    }
  },
  {
    id: 2,
    internshipTitle: "Data Science Intern",
    companyName: "Flexbone",
    location: "Atlanta, GA",
    stipend: "$2,200/month",
    duration: "10 weeks",
    applicationStatus: "interview_scheduled",
    applicationStatusText: "Interview Scheduled",
    appliedDate: "1 week ago",
    lastActivity: "2 hours ago",
    applicationData: {
      coverLetter: "I am excited to apply for the Data Science Intern position at Flexbone. As a statistics major with experience in Python, machine learning, and healthcare data analysis, I am passionate about using data science to improve patient outcomes and healthcare delivery.\n\nMy academic background has provided me with a strong foundation in statistical analysis, machine learning algorithms, and data visualization. I have completed coursework in biostatistics and have worked on projects involving healthcare datasets, including a recent analysis of patient readmission rates using logistic regression and random forest models.\n\nWhat draws me to Flexbone is your mission to develop AI-powered healthcare solutions that make a real difference in people's lives. I am particularly interested in your work on predictive analytics for patient care and would love to contribute to these meaningful projects while learning from your team of experts.\n\nI am available for the 10-week program and am eager to apply my analytical skills to real-world healthcare challenges. Thank you for your consideration.",
      expectedStipend: "$2,200/month",
      availableStartDate: "2024-06-15",
      resumeUploaded: true,
      resumeFileName: "Jane_Smith_Resume.pdf",
      transcriptUploaded: false,
      transcriptFileName: null
    }
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

export default function ApplicationDetailsPage() {
  const params = useParams()
  const applicationId = parseInt(params.id as string)
  
  const application = applications.find(app => app.id === applicationId)
  
  if (!application) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Application Not Found</h1>
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
            <Link href={`/internships/applied/${application.id}`}>
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
              <h1 className="text-2xl lg:text-3xl font-heading text-primary-navy mb-2">Application Details</h1>
              <p className="text-slate-600 font-subheading text-sm lg:text-base">
                Your application for {application.internshipTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Application Status Banner */}
        <div className={`${getStatusColor(application.applicationStatus)} rounded-lg p-4 lg:p-6 mb-6 lg:mb-8`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3">
              {getStatusIcon(application.applicationStatus)}
              <div>
                <h3 className="font-subheading font-medium text-base lg:text-lg">Application Status</h3>
                <p className="text-sm lg:text-base">{application.applicationStatusText}</p>
              </div>
            </div>
            <div className="text-left sm:text-right text-sm lg:text-base">
              <p>Applied: {application.appliedDate}</p>
              <p>Last Activity: {application.lastActivity}</p>
            </div>
          </div>
        </div>

        {/* Internship Summary */}
        <Card className="border-slate-200 mb-6 lg:mb-8">
          <div className="p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 self-center sm:self-start">
                <div className="w-full h-full bg-primary-navy flex items-center justify-center">
                  <span className="text-white font-heading text-lg lg:text-2xl">
                    {application.companyName.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 w-full text-center sm:text-left">
                <h2 className="text-xl lg:text-2xl font-heading text-primary-navy mb-2">
                  {application.internshipTitle}
                </h2>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-subheading mb-3 space-y-2 sm:space-y-0 text-sm lg:text-base">
                  <div className="flex items-center space-x-1 justify-center sm:justify-start">
                    <Building className="h-4 w-4" />
                    <span>{application.companyName}</span>
                  </div>
                  <div className="flex items-center space-x-1 justify-center sm:justify-start">
                    <MapPin className="h-4 w-4" />
                    <span>{application.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 justify-center sm:justify-start">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-heading text-primary-navy">{application.stipend}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 lg:gap-4 text-slate-500 font-subheading text-sm">
                  <span>{application.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {/* Cover Letter */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Cover Letter</h3>
              <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base whitespace-pre-line">
                  {application.applicationData.coverLetter}
                </p>
              </div>
            </div>
          </Card>

          {/* Expected Stipend */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Expected Stipend (optional)</h3>
              <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                <p className="text-slate-600 font-subheading text-sm lg:text-base">
                  {application.applicationData.expectedStipend || "Not specified"}
                </p>
              </div>
            </div>
          </Card>

          {/* Available Start Date */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Available Start Date</h3>
              <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                <p className="text-slate-600 font-subheading text-sm lg:text-base">
                  {new Date(application.applicationData.availableStartDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </Card>

          {/* Resume */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Resume</h3>
              <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                {application.applicationData.resumeUploaded ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-700 font-subheading text-sm lg:text-base font-medium truncate">
                        {application.applicationData.resumeFileName}
                      </p>
                      <p className="text-slate-500 font-subheading text-xs lg:text-sm">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <Upload className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                ) : (
                  <p className="text-slate-500 font-subheading text-sm lg:text-base">
                    No resume uploaded
                  </p>
                )}
              </div>
            </div>
          </Card>

          {/* Transcript */}
          <Card className="border-slate-200">
            <div className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Transcript (Optional)</h3>
              <div className="bg-slate-50 rounded-lg p-4 lg:p-6">
                {application.applicationData.transcriptUploaded ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-700 font-subheading text-sm lg:text-base font-medium truncate">
                        {application.applicationData.transcriptFileName}
                      </p>
                      <p className="text-slate-500 font-subheading text-xs lg:text-sm">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm"
                    >
                      <Upload className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                ) : (
                  <p className="text-slate-500 font-subheading text-sm lg:text-base">
                    No transcript uploaded
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 