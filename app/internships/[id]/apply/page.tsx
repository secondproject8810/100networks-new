"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload, Send, Building, MapPin, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function InternshipApplicationPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Mock internship data - in real app, this would fetch based on params.id
  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechVision",
      location: "San Francisco, CA",
      stipend: "$2,500/month",
      duration: "12 weeks",
      remote: "Hybrid"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flexbone",
      location: "Atlanta, GA",
      stipend: "$2,200/month",
      duration: "10 weeks",
      remote: "On-site"
    },
    {
      id: 3,
      title: "Marketing Intern",
      company: "GrowthBoost",
      location: "New York, NY",
      stipend: "$1,800/month",
      duration: "12 weeks",
      remote: "Hybrid"
    }
  ]

  const internship = internships.find(i => i.id === parseInt(params.id))

  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedStipend: "",
    availableStartDate: "",
    resume: null,
    transcript: null
  })

  const handleSubmitApplication = () => {
    console.log("Application submitted:", applicationData)
    // Here you would typically send the data to your backend
    alert("Application submitted successfully!")
    router.push(`/internships/${params.id}`)
  }

  if (!internship) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Internship Not Found</h1>
          <p className="text-slate-600 font-subheading text-sm lg:text-base mb-6">The internship you're looking for doesn't exist.</p>
          <Link href="/internships">
            <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Internships
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
            <Link href={`/internships/${params.id}`}>
              <Button variant="ghost" className="rounded-xl">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-heading text-primary-navy mb-2">Apply for Internship</h1>
              <p className="text-slate-600 font-subheading text-sm lg:text-base">
                {internship.title} at {internship.company}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Application Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-primary-navy text-lg lg:text-xl">Application Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Cover Letter */}
                <div>
                  <Label htmlFor="cover-letter" className="font-subheading text-primary-navy text-sm lg:text-base font-medium">
                    Cover Letter
                  </Label>
                  <Textarea
                    id="cover-letter"
                    placeholder="Tell us why you're interested in this internship and what makes you a great candidate..."
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                    className="mt-2 font-subheading text-sm lg:text-base min-h-[150px] resize-none border-slate-200 focus:border-primary-navy rounded-xl"
                    rows={8}
                  />
                </div>
                
                {/* Expected Stipend and Start Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <Label htmlFor="expected-stipend" className="font-subheading text-primary-navy text-sm lg:text-base font-medium">
                      Expected Stipend (optional)
                    </Label>
                    <Input
                      id="expected-stipend"
                      placeholder="e.g., $2000/month"
                      value={applicationData.expectedStipend}
                      onChange={(e) => setApplicationData({...applicationData, expectedStipend: e.target.value})}
                      className="mt-2 font-subheading text-sm lg:text-base h-12 border-slate-200 focus:border-primary-navy rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="start-date" className="font-subheading text-primary-navy text-sm lg:text-base font-medium">
                      Available Start Date
                    </Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={applicationData.availableStartDate}
                      onChange={(e) => setApplicationData({...applicationData, availableStartDate: e.target.value})}
                      className="mt-2 font-subheading text-sm lg:text-base h-12 border-slate-200 focus:border-primary-navy rounded-xl"
                    />
                  </div>
                </div>
                
                {/* File Uploads */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <Label className="font-subheading text-primary-navy text-sm lg:text-base font-medium">
                      Resume
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-4 lg:p-6 text-center hover:border-primary-navy transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm font-subheading text-slate-600">Click to upload resume</p>
                      <p className="text-xs font-subheading text-slate-400 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                    </div>
                  </div>
                  <div>
                    <Label className="font-subheading text-primary-navy text-sm lg:text-base font-medium">
                      Transcript (Optional)
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-4 lg:p-6 text-center hover:border-primary-navy transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm font-subheading text-slate-600">Click to upload transcript</p>
                      <p className="text-xs font-subheading text-slate-400 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href={`/internships/${params.id}`}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12 px-8"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                onClick={handleSubmitApplication}
                className="w-full sm:w-auto bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12 px-8"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </div>

          {/* Internship Summary Card */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200 sticky top-6">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0">
                    <div className="w-full h-full bg-primary-navy flex items-center justify-center">
                      <span className="text-white font-heading text-lg lg:text-xl">{internship.company.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-heading text-primary-navy mb-2 line-clamp-2">{internship.title}</h3>
                    <div className="flex flex-col space-y-2 text-slate-600 font-subheading text-sm">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{internship.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{internship.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 flex-shrink-0" />
                        <span className="font-heading text-primary-navy">{internship.stipend}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-slate-500 font-subheading">
                  <span className={`px-3 py-1 rounded-full text-xs lg:text-sm font-subheading ${
                    internship.remote === "Remote" ? "bg-green-100 text-green-700" :
                    internship.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                    internship.remote === "On-site" ? "bg-red-100 text-red-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {internship.remote}
                  </span>
                  <p className="mt-2">{internship.duration} program</p>
                </div>
              </CardContent>
            </Card>

            {/* Application Tips */}
            <Card className="border-slate-200 mt-6">
              <CardContent className="p-4 lg:p-6">
                <h4 className="text-base font-heading text-primary-navy mb-3">Application Tips</h4>
                <ul className="space-y-2 text-sm font-subheading text-slate-600">
                  <li>• Highlight relevant coursework and projects in your cover letter</li>
                  <li>• Ensure your resume is up-to-date and tailored to the internship</li>
                  <li>• Research the company culture and values</li>
                  <li>• Double-check all information before submitting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}