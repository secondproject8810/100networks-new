"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Upload, Send, Building, MapPin, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function JobApplyPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedSalary: "",
    availableStartDate: "",
    resume: null,
    portfolio: null
  })

  // Mock job data - same as in job details page
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechVision",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      remote: "Remote",
      posted: "3 days ago",
      applicationDeadline: "2024-02-15",
      logo: "/abstract-tech-logo.png"
    },
    {
      id: 2,
      title: "Python AI Engineer",
      company: "Flexbone",
      location: "Atlanta, GA", 
      salary: "$90K - $110K",
      type: "Contract",
      remote: "Hybrid",
      posted: "1 week ago",
      applicationDeadline: "2024-02-22",
      logo: "/flexbone-logo.png"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Source",
      location: "Chicago, IL",
      salary: "$85K - $105K", 
      type: "Full-time",
      remote: "On-site",
      posted: "2 weeks ago",
      applicationDeadline: "2024-02-28",
      logo: "/generic-company-logo.png"
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      company: "GrowthBoost",
      location: "New York, NY",
      salary: "$75K - $95K",
      type: "Full-time", 
      remote: "Hybrid",
      posted: "5 days ago",
      applicationDeadline: "2024-02-20",
      logo: "/marketing-agency-logo.png"
    },
    {
      id: 5,
      title: "Product Manager - Fintech",
      company: "FinTech Solutions",
      location: "Boston, MA",
      salary: "$110K - $140K",
      type: "Full-time",
      remote: "Hybrid", 
      posted: "1 week ago",
      applicationDeadline: "2024-02-25",
      logo: "/finance-company-logo.png"
    }
  ]

  const job = jobs.find(j => j.id === parseInt(params.id))

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Job Not Found</h1>
          <p className="text-slate-600 font-subheading mb-6">The job you're looking for doesn't exist.</p>
          <Button 
            onClick={() => router.push('/jobs')}
            className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>
        </div>
      </div>
    )
  }

  const handleSubmitApplication = () => {
    // Handle application submission here
    console.log("Application submitted:", { job: job.title, ...applicationData })
    // Show success message and redirect
    alert("Application submitted successfully!")
    router.push(`/jobs/${params.id}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg lg:text-2xl font-heading text-primary-navy">Apply for Position</h1>
          </div>
        </div>

        {/* Job Summary Card */}
        <Card className="border-slate-200 mb-6">
          <CardContent className="p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0 self-center sm:self-start">
                <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <h2 className="text-lg lg:text-xl font-heading text-primary-navy mb-2">{job.title}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-subheading text-sm lg:text-base space-y-1 sm:space-y-0">
                  <div className="flex items-center space-x-1 justify-center sm:justify-start">
                    <Building className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center space-x-1 justify-center sm:justify-start">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 justify-center sm:justify-start">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-heading text-primary-navy">{job.salary}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-slate-500 font-subheading text-sm mt-2">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    job.remote === "Remote" ? "bg-green-100 text-green-700" :
                    job.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                    job.remote === "On-site" ? "bg-red-100 text-red-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {job.remote}
                  </span>
                  <span>•</span>
                  <span>Apply by {job.applicationDeadline}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="border-slate-200">
          <CardContent className="p-4 lg:p-6">
            <h3 className="text-lg font-heading text-primary-navy mb-6">Application Details</h3>
            
            <div className="space-y-6">
              {/* Cover Letter */}
              <div>
                <Label htmlFor="cover-letter" className="text-sm font-subheading font-medium text-primary-navy">Cover Letter</Label>
                <Textarea
                  id="cover-letter"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                  className="mt-2 min-h-[120px] font-subheading rounded-xl"
                />
              </div>
              
              {/* Expected Salary and Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <Label htmlFor="expected-salary" className="text-sm font-subheading font-medium text-primary-navy">Expected Salary</Label>
                  <Input
                    id="expected-salary"
                    placeholder="e.g., $80,000"
                    value={applicationData.expectedSalary}
                    onChange={(e) => setApplicationData({ ...applicationData, expectedSalary: e.target.value })}
                    className="mt-2 font-subheading rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="start-date" className="text-sm font-subheading font-medium text-primary-navy">Available Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={applicationData.availableStartDate}
                    onChange={(e) => setApplicationData({ ...applicationData, availableStartDate: e.target.value })}
                    className="mt-2 font-subheading rounded-xl"
                  />
                </div>
              </div>
              
              {/* Resume and Portfolio Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <Label htmlFor="resume" className="text-sm font-subheading font-medium text-primary-navy">Resume</Label>
                  <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-6 lg:p-8 text-center hover:border-primary-navy transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm font-subheading text-slate-600">Click to upload resume</p>
                    <p className="text-xs font-subheading text-slate-400 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="portfolio" className="text-sm font-subheading font-medium text-primary-navy">Portfolio (Optional)</Label>
                  <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-6 lg:p-8 text-center hover:border-primary-navy transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm font-subheading text-slate-600">Click to upload portfolio</p>
                    <p className="text-xs font-subheading text-slate-400 mt-1">PDF or link to online portfolio</p>
                  </div>
                </div>
              </div>
              
              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-slate-200">
                <Button 
                  onClick={handleSubmitApplication}
                  className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => router.back()}
                  className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Tips */}
        <Card className="border-slate-200 mt-6">
          <CardContent className="p-4 lg:p-6">
            <h4 className="text-base lg:text-lg font-heading text-primary-navy mb-4">Application Tips</h4>
            <ul className="space-y-3 text-sm lg:text-base font-subheading text-slate-600">
              <li className="flex items-start space-x-2">
                <span className="text-primary-navy mt-1">•</span>
                <span>Tailor your cover letter to highlight relevant experience for this specific role</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-navy mt-1">•</span>
                <span>Ensure your resume is up-to-date and includes your most recent accomplishments</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-navy mt-1">•</span>
                <span>Research the company culture and values to align your application</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary-navy mt-1">•</span>
                <span>Double-check all information before submitting your application</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 