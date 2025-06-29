"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, FileText, Download, Calendar, DollarSign, User, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ApplicationDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Mock application data - in real app, this would come from API
  const applications = [
    {
      id: "1",
      jobTitle: "Senior React Native Developer",
      companyName: "TechCorp Solutions",
      appliedDate: "2024-01-15",
      status: "pending",
      coverLetter: "I am excited to apply for the Senior React Native Developer position at TechCorp Solutions. With over 6 years of experience in mobile development and a proven track record of delivering high-quality applications, I believe I would be a valuable addition to your team.\n\nMy expertise in React Native, combined with my experience in TypeScript and Redux, aligns perfectly with your requirements. I have successfully led mobile development projects from conception to deployment, working closely with cross-functional teams to deliver exceptional user experiences.\n\nI am particularly drawn to TechCorp Solutions because of your commitment to innovation and your focus on creating products that make a real difference. I would love the opportunity to contribute to your mission and help build the next generation of mobile applications.",
      expectedSalary: "$95,000",
      availableStartDate: "2024-03-01",
      resume: "john_doe_resume.pdf",
      portfolio: "https://johndoe-portfolio.com"
    },
    {
      id: "2", 
      jobTitle: "Senior Frontend Developer",
      companyName: "TechVision",
      appliedDate: "2024-01-18",
      status: "under_review",
      coverLetter: "I am writing to express my strong interest in the Senior Frontend Developer position at TechVision. With 8+ years of experience in frontend development and expertise in React, TypeScript, and modern web technologies, I am confident I can contribute significantly to your team.\n\nThroughout my career, I have architected and developed scalable web applications that serve millions of users. My experience includes leading technical decisions, mentoring junior developers, and collaborating with design teams to create pixel-perfect user interfaces.\n\nI am particularly excited about TechVision's innovative approach to software development and your commitment to using cutting-edge technologies. I would welcome the opportunity to discuss how my skills and experience can help drive your frontend initiatives forward.",
      expectedSalary: "$135,000",
      availableStartDate: "2024-02-15",
      resume: "jane_smith_resume.pdf",
      portfolio: "Portfolio_Jane_Smith.pdf"
    },
    {
      id: "3",
      jobTitle: "Full Stack Developer",
      companyName: "StartupXYZ",
      appliedDate: "2024-01-20",
      status: "rejected",
      coverLetter: "I am excited to apply for the Full Stack Developer position at StartupXYZ. As a versatile developer with experience in both frontend and backend technologies, I thrive in dynamic startup environments where I can wear multiple hats and contribute to various aspects of product development.\n\nMy technical skills span across React, Node.js, Python, and cloud technologies, allowing me to build end-to-end solutions. I have experience working in agile environments and am comfortable with rapid iteration and continuous deployment practices.\n\nStartupXYZ's mission to revolutionize the industry resonates with me, and I would love to be part of a team that's building something truly innovative from the ground up.",
      expectedSalary: "$85,000",
      availableStartDate: "2024-02-01",
      resume: "alex_johnson_resume.pdf",
      portfolio: null
    }
  ]

  const application = applications.find(app => app.id === params.id)
  
  if (!application) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
                     <h1 className="text-2xl font-heading text-primary-navy mb-4">Application Not Found</h1>
           <p className="text-slate-600 font-subheading text-sm lg:text-base mb-6">The application you're looking for doesn't exist.</p>
          <Link href="/jobs/freelance/applied-jobs">
            <Button className="bg-primary-navy hover:bg-primary-navy/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Applied Jobs
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'under_review': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'accepted': return 'bg-green-100 text-green-800 border-green-200'
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'under_review': return <AlertCircle className="w-4 h-4" />
      case 'accepted': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <AlertCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pending Review'
      case 'under_review': return 'Under Review'
      case 'accepted': return 'Accepted'
      case 'rejected': return 'Rejected'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
              className="rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                             <h1 className="text-2xl lg:text-3xl font-heading text-primary-navy mb-2">
                 My Application
               </h1>
               <p className="text-slate-600 font-subheading text-sm lg:text-base">
                 {application.jobTitle} at {application.companyName}
               </p>
            </div>
            
            {/* Application Status */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(application.status)}`}>
              {getStatusIcon(application.status)}
              <span className="font-medium">{getStatusText(application.status)}</span>
            </div>
          </div>
        </div>

        {/* Application Details */}
        <div className="space-y-6">
          {/* Application Info */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-primary-navy">Application Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 <div>
                   <p className="text-sm text-slate-500 font-subheading mb-1">Applied Date</p>
                   <p className="font-subheading text-sm lg:text-base">{new Date(application.appliedDate).toLocaleDateString()}</p>
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 font-subheading mb-1">Status</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${getStatusColor(application.status)}`}>
                    {getStatusIcon(application.status)}
                    <span className="font-medium">{getStatusText(application.status)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cover Letter */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-primary-navy">Cover Letter</CardTitle>
            </CardHeader>
            <CardContent>
                             <div className="bg-gray-50 p-4 rounded-lg">
                 <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base whitespace-pre-wrap">
                   {application.coverLetter}
                 </p>
               </div>
            </CardContent>
          </Card>

          {/* Expected Salary */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-primary-navy">Expected Salary</CardTitle>
            </CardHeader>
            <CardContent>
                             <div className="flex items-center gap-2">
                 <DollarSign className="w-5 h-5 text-green-600" />
                 <span className="text-sm lg:text-base font-subheading">{application.expectedSalary}</span>
               </div>
            </CardContent>
          </Card>

          {/* Available Start Date */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-primary-navy">Available Start Date</CardTitle>
            </CardHeader>
            <CardContent>
                             <div className="flex items-center gap-2">
                 <Calendar className="w-5 h-5 text-blue-600" />
                 <span className="text-sm lg:text-base font-subheading">{new Date(application.availableStartDate).toLocaleDateString()}</span>
               </div>
            </CardContent>
          </Card>

          {/* Resume */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-primary-navy">Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-subheading text-sm lg:text-base truncate">{application.resume}</p>
                    <p className="text-sm text-slate-500 font-subheading">PDF Document</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio (Optional) */}
          {application.portfolio && (
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-primary-navy">Portfolio (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-subheading text-sm lg:text-base truncate">
                        {application.portfolio.startsWith('http') ? 'Online Portfolio' : application.portfolio}
                      </p>
                      <p className="text-sm text-slate-500 font-subheading">
                        {application.portfolio.startsWith('http') ? 'Website Link' : 'PDF Document'}
                      </p>
                    </div>
                  </div>
                  {application.portfolio.startsWith('http') ? (
                    <Button variant="outline" size="sm" className="rounded-xl w-full sm:w-auto" asChild>
                      <a href={application.portfolio} target="_blank" rel="noopener noreferrer">
                        <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
                        View
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="rounded-xl w-full sm:w-auto">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}