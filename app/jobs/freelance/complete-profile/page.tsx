"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Plus, 
  X, 
  Save, 
  User, 
  Briefcase, 
  Award,
  Star,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

export default function CompleteProfilePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  
  // Professional Summary
  const [professionalSummary, setProfessionalSummary] = useState("")
  

  
  // Recent Work/Portfolio
  const [recentWork, setRecentWork] = useState([
    {
      id: 1,
      projectTitle: "",
      client: "",
      projectUrl: "",
      description: "",
      technologies: "",
      completedDate: ""
    }
  ])
  
  // Languages
  const [languages, setLanguages] = useState<string[]>([])
  const [currentLanguage, setCurrentLanguage] = useState("")
  
  // Pricing & Preferences
  const [hourlyRate, setHourlyRate] = useState("")
  const [currency, setCurrency] = useState("USD")
  const [paymentType, setPaymentType] = useState("hourly") // hourly or fixed
  const [availability, setAvailability] = useState("full-time")
  const [responseTime, setResponseTime] = useState("within-24-hours")
  
  // Work Preferences
  const [workPreferences, setWorkPreferences] = useState({
    projectTypes: [] as string[],
    industries: [] as string[],
    workingHours: "",
    timezone: ""
  })
  
  // Awards & Certifications
  const [awards, setAwards] = useState([
    {
      id: 1,
      title: "",
      organization: "",
      dateReceived: "",
      credentialId: "",
      credentialUrl: "",
      description: ""
    }
  ])
  
  // Skills
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState("")



  const addRecentWork = () => {
    setRecentWork([...recentWork, {
      id: Date.now(),
      projectTitle: "",
      client: "",
      projectUrl: "",
      description: "",
      technologies: "",
      completedDate: ""
    }])
  }

  const removeRecentWork = (id: number) => {
    setRecentWork(recentWork.filter(work => work.id !== id))
  }

  const updateRecentWork = (id: number, field: string, value: any) => {
    setRecentWork(recentWork.map(work => 
      work.id === id ? { ...work, [field]: value } : work
    ))
  }

  const addLanguage = () => {
    if (currentLanguage.trim() && !languages.includes(currentLanguage.trim())) {
      setLanguages([...languages, currentLanguage.trim()])
      setCurrentLanguage("")
    }
  }

  const removeLanguage = (languageToRemove: string) => {
    setLanguages(languages.filter(lang => lang !== languageToRemove))
  }

  const updateWorkPreferences = (field: string, value: any) => {
    setWorkPreferences(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addAward = () => {
    setAwards([...awards, {
      id: Date.now(),
      title: "",
      organization: "",
      dateReceived: "",
      credentialId: "",
      credentialUrl: "",
      description: ""
    }])
  }

  const removeAward = (id: number) => {
    setAwards(awards.filter(award => award.id !== id))
  }

  const updateAward = (id: number, field: string, value: any) => {
    setAwards(awards.map(award => 
      award.id === id ? { ...award, [field]: value } : award
    ))
  }

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()])
      setCurrentSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setShowSuccessMessage(true)
    setTimeout(() => setShowSuccessMessage(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="w-[65%] mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/jobs/freelance">
              <Button variant="ghost" size="icon" className="p-2 hover:bg-slate-100 rounded-xl">
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-heading text-primary-navy">Complete Your Profile</h1>
              <p className="text-xl text-slate-600 font-subheading">
                Enhance your profile to attract more opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-green-800 font-subheading">Profile updated successfully!</p>
          </div>
        )}

        <div className="space-y-8">
          {/* Professional Summary */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center">
                <User className="h-5 w-5 mr-2" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="summary" className="text-sm font-subheading text-slate-700 mb-2 block">
                  Summary About Yourself (500 characters max)
                </Label>
                <Textarea
                  id="summary"
                  placeholder="Write a compelling summary that highlights your expertise, experience, and what makes you unique as a freelancer..."
                  value={professionalSummary}
                  onChange={(e) => setProfessionalSummary(e.target.value)}
                  maxLength={500}
                  className="min-h-[120px] font-subheading"
                />
                <p className="text-xs text-slate-500 mt-1 font-subheading">
                  {professionalSummary.length}/500 characters
                </p>
              </div>
            </CardContent>
          </Card>



          {/* Recent Work/Portfolio */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center justify-between">
                <span className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Recent Work & Portfolio
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addRecentWork}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Project
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentWork.map((work, index) => (
                <div key={work.id} className="border border-slate-200 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-subheading font-medium text-slate-900">Project {index + 1}</h4>
                    {recentWork.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRecentWork(work.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Project Title *
                      </Label>
                      <Input
                        placeholder="e.g., E-commerce Website"
                        value={work.projectTitle}
                        onChange={(e) => updateRecentWork(work.id, 'projectTitle', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Client Name
                      </Label>
                      <Input
                        placeholder="e.g., ABC Company"
                        value={work.client}
                        onChange={(e) => updateRecentWork(work.id, 'client', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Project URL
                      </Label>
                      <Input
                        placeholder="https://example.com"
                        value={work.projectUrl}
                        onChange={(e) => updateRecentWork(work.id, 'projectUrl', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Completion Date
                      </Label>
                      <Input
                        type="month"
                        value={work.completedDate}
                        onChange={(e) => updateRecentWork(work.id, 'completedDate', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Technologies Used
                      </Label>
                      <Input
                        placeholder="e.g., React, Node.js, MongoDB"
                        value={work.technologies}
                        onChange={(e) => updateRecentWork(work.id, 'technologies', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                      Project Description
                    </Label>
                    <Textarea
                      placeholder="Describe the project, your role, and key achievements..."
                      value={work.description}
                      onChange={(e) => updateRecentWork(work.id, 'description', e.target.value)}
                      className="font-subheading"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                  Add Languages (Press Enter or click Add)
                </Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="e.g., English (Native), Spanish (Fluent)"
                    value={currentLanguage}
                    onChange={(e) => setCurrentLanguage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                    className="font-subheading"
                  />
                  <Button
                    type="button"
                    onClick={addLanguage}
                    className="bg-primary-navy hover:bg-primary-navy/90 text-white font-subheading"
                  >
                    Add
                  </Button>
                </div>
              </div>
              
              {languages.length > 0 && (
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Your Languages
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-subheading"
                      >
                        {language}
                        <button
                          onClick={() => removeLanguage(language)}
                          className="ml-2 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pricing & Availability */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Pricing & Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Hourly Rate
                  </Label>
                  <div className="flex space-x-2">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="px-3 py-2 border border-slate-200 rounded-lg font-subheading"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="INR">INR</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                    </select>
                    <Input
                      placeholder="50"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="font-subheading"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Payment Preference
                  </Label>
                  <select
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-subheading"
                  >
                    <option value="hourly">Hourly Payments</option>
                    <option value="fixed">Fixed-Price Contracts</option>
                    <option value="both">Both Hourly & Fixed</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Availability
                  </Label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-subheading"
                  >
                    <option value="full-time">Full-time (40+ hours/week)</option>
                    <option value="part-time">Part-time (20-40 hours/week)</option>
                    <option value="project-based">Project-based</option>
                    <option value="weekends-only">Weekends only</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Response Time
                  </Label>
                  <select
                    value={responseTime}
                    onChange={(e) => setResponseTime(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-subheading"
                  >
                    <option value="within-1-hour">Within 1 hour</option>
                    <option value="within-4-hours">Within 4 hours</option>
                    <option value="within-24-hours">Within 24 hours</option>
                    <option value="within-48-hours">Within 48 hours</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Preferences */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center">
                <User className="h-5 w-5 mr-2" />
                Work Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Preferred Working Hours
                  </Label>
                  <Input
                    placeholder="e.g., 9 AM - 5 PM EST"
                    value={workPreferences.workingHours}
                    onChange={(e) => updateWorkPreferences('workingHours', e.target.value)}
                    className="font-subheading"
                  />
                </div>
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Timezone
                  </Label>
                  <Input
                    placeholder="e.g., Eastern Standard Time (EST)"
                    value={workPreferences.timezone}
                    onChange={(e) => updateWorkPreferences('timezone', e.target.value)}
                    className="font-subheading"
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                  Preferred Project Types
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Logo Design', 'Content Writing', 'SEO', 'Data Analysis', 'E-commerce', 'SaaS', 'Consulting'].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={workPreferences.projectTypes.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateWorkPreferences('projectTypes', [...workPreferences.projectTypes, type])
                          } else {
                            updateWorkPreferences('projectTypes', workPreferences.projectTypes.filter(t => t !== type))
                          }
                        }}
                        className="rounded border-slate-300"
                      />
                      <span className="text-sm font-subheading text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                  Preferred Industries
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Technology', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Real Estate', 'Marketing', 'Non-profit', 'Gaming', 'Travel'].map((industry) => (
                    <label key={industry} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={workPreferences.industries.includes(industry)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateWorkPreferences('industries', [...workPreferences.industries, industry])
                          } else {
                            updateWorkPreferences('industries', workPreferences.industries.filter(i => i !== industry))
                          }
                        }}
                        className="rounded border-slate-300"
                      />
                      <span className="text-sm font-subheading text-slate-700">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Certifications */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center justify-between">
                <span className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Awards & Certifications
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addAward}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-subheading"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Award
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {awards.map((award, index) => (
                <div key={award.id} className="border border-slate-200 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-subheading font-medium text-slate-900">Award/Certification {index + 1}</h4>
                    {awards.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAward(award.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Award/Certification Title *
                      </Label>
                      <Input
                        placeholder="e.g., AWS Solutions Architect"
                        value={award.title}
                        onChange={(e) => updateAward(award.id, 'title', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Issuing Organization *
                      </Label>
                      <Input
                        placeholder="e.g., Amazon Web Services"
                        value={award.organization}
                        onChange={(e) => updateAward(award.id, 'organization', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Date Received
                      </Label>
                      <Input
                        type="month"
                        value={award.dateReceived}
                        onChange={(e) => updateAward(award.id, 'dateReceived', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Credential ID
                      </Label>
                      <Input
                        placeholder="e.g., AWS-123456"
                        value={award.credentialId}
                        onChange={(e) => updateAward(award.id, 'credentialId', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                        Credential URL
                      </Label>
                      <Input
                        placeholder="https://aws.amazon.com/verification/123456"
                        value={award.credentialUrl}
                        onChange={(e) => updateAward(award.id, 'credentialUrl', e.target.value)}
                        className="font-subheading"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                      Description
                    </Label>
                    <Textarea
                      placeholder="Describe what this award/certification represents..."
                      value={award.description}
                      onChange={(e) => updateAward(award.id, 'description', e.target.value)}
                      className="font-subheading"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills & Tools */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-heading text-primary-navy flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Skills & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                  Add Skills (Press Enter or click Add to add each skill)
                </Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="e.g., React, Node.js, Python"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    className="font-subheading"
                  />
                  <Button
                    type="button"
                    onClick={addSkill}
                    className="bg-primary-navy hover:bg-primary-navy/90 text-white font-subheading"
                  >
                    Add
                  </Button>
                </div>
              </div>
              
              {skills.length > 0 && (
                <div>
                  <Label className="text-sm font-subheading text-slate-700 mb-2 block">
                    Your Skills
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-subheading"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Link href="/jobs/freelance">
              <Button variant="outline" className="font-subheading">
                Cancel
              </Button>
            </Link>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-primary-navy hover:bg-primary-navy/90 text-white font-bold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
 