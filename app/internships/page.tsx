"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookmarkIcon, Filter, Search, Clock, CheckCircle, XCircle, Calendar, Briefcase, MapPin, DollarSign, Building, FileText, ChevronRight, Star, Users, Award, TrendingUp, Zap, Globe, ArrowLeft, X, Send, Upload, GraduationCap } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const appliedInternships = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "TechVision",
    logo: "/abstract-tech-logo.png",
    location: "San Francisco, CA",
    stipend: "$2,500/month",
    type: "Summer Internship",
    remote: "Hybrid",
    appliedDate: "3 days ago",
    status: "under_review",
    statusText: "Under Review",
    description: "Join our engineering team to work on real-world projects and gain hands-on experience.",
    skills: ["JavaScript", "React", "Python", "Student"],
    duration: "12 weeks"
  },
  {
    id: "2",
    title: "Marketing Intern",
    company: "GrowthBoost",
    logo: "/marketing-agency-logo.png",
    location: "New York, NY",
    stipend: "$1,800/month",
    type: "Summer Internship",
    remote: "On-site",
    appliedDate: "1 week ago",
    status: "interview_scheduled",
    statusText: "Interview Scheduled",
    description: "Help create marketing campaigns and learn digital marketing strategies.",
    skills: ["Marketing", "Social Media", "Analytics", "Student"],
    duration: "10 weeks"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "applied":
      return <Clock className="h-4 w-4 text-primary-navy" />
    case "under_review":
      return <Clock className="h-4 w-4 text-orange-500" />
    case "interview_scheduled":
      return <Calendar className="h-4 w-4 text-green-500" />
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    default:
      return <Clock className="h-4 w-4 text-slate-400" />
  }
}

const getStatusBadge = (status: string, statusText: string) => {
  const variants = {
    applied: "bg-primary-navy/10 text-primary-navy border-primary-navy/20",
    under_review: "bg-orange-50 text-orange-600 border-orange-200",
    interview_scheduled: "bg-green-50 text-green-600 border-green-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
    accepted: "bg-green-50 text-green-600 border-green-200",
  }

  return <Badge className={`${variants[status as keyof typeof variants]} font-subheading`}>{statusText}</Badge>
}

export default function InternshipsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [stipendRange, setStipendRange] = useState([1000, 5000])
  const [selectedInternship, setSelectedInternship] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    expectedStipend: "",
    availableStartDate: "",
    resume: null,
    transcript: null
  })
  
  const statusCounts = {
    total: appliedInternships.length,
    pending: appliedInternships.filter(internship => internship.status === "applied" || internship.status === "under_review").length,
    interviews: appliedInternships.filter(internship => internship.status === "interview_scheduled").length,
    accepted: appliedInternships.filter(internship => internship.status === "accepted").length,
  }

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechVision",
      logo: "/abstract-tech-logo.png",
      location: "San Francisco, CA",
      stipend: "$2,500/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "3 days ago",
      duration: "12 weeks",
      description: "Join our engineering team to work on real-world projects and gain hands-on experience with modern web technologies.",
      fullDescription: "This summer internship program at TechVision offers students the opportunity to work alongside experienced engineers on meaningful projects. You'll contribute to our web applications, learn about software development best practices, and gain exposure to the entire software development lifecycle.",
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
      applicationDeadline: "2024-03-15",
      programStart: "June 2024",
      mentor: "Sarah Chen, Senior Engineer"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flexbone",
      logo: "/flexbone-logo.png",
      location: "Atlanta, GA",
      stipend: "$2,200/month",
      type: "Summer Internship",
      remote: "On-site",
      posted: "1 week ago",
      duration: "10 weeks",
      description: "Work with our data science team to analyze healthcare data and develop machine learning models.",
      fullDescription: "Join Flexbone's data science team for an exciting summer internship where you'll work on healthcare analytics projects. You'll learn about machine learning applications in healthcare, data preprocessing techniques, and how to derive actionable insights from complex datasets.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Student"],
      requirements: [
        "Currently pursuing degree in Data Science, Statistics, or related field",
        "Proficiency in Python and data analysis libraries",
        "Basic understanding of machine learning concepts",
        "Experience with SQL and database queries",
        "Strong analytical and mathematical skills",
        "Interest in healthcare applications"
      ],
      responsibilities: [
        "Analyze healthcare datasets to identify trends and patterns",
        "Develop and test machine learning models",
        "Create data visualizations and reports",
        "Collaborate with data scientists on research projects",
        "Participate in team meetings and present findings",
        "Learn about healthcare data standards and regulations"
      ],
      companyInfo: {
        name: "Flexbone",
        size: "50-100 employees",
        industry: "Healthcare Technology",
        founded: "2020",
        description: "Flexbone develops AI-powered solutions for healthcare providers to improve patient care and operational efficiency.",
        benefits: ["Mentorship Program", "Professional Development", "Health Insurance", "Research Projects"],
        culture: "Mission-driven team focused on improving healthcare through technology and data"
      },
      applicationDeadline: "2024-03-20",
      programStart: "June 2024",
      mentor: "Dr. Michael Torres, Lead Data Scientist"
    },
    {
      id: 3,
      title: "Marketing Intern",
      company: "GrowthBoost",
      logo: "/marketing-agency-logo.png",
      location: "New York, NY",
      stipend: "$1,800/month",
      type: "Summer Internship",
      remote: "Hybrid",
      posted: "5 days ago",
      duration: "12 weeks",
      description: "Learn digital marketing strategies while helping create campaigns for our B2B clients.",
      fullDescription: "This marketing internship at GrowthBoost provides hands-on experience in digital marketing for B2B clients. You'll work on real campaigns, learn about various marketing channels, and gain insights into the marketing agency world.",
      skills: ["Marketing", "Social Media", "Analytics", "Student"],
      requirements: [
        "Currently pursuing degree in Marketing, Business, or related field",
        "Basic understanding of digital marketing concepts",
        "Familiarity with social media platforms",
        "Strong writing and communication skills",
        "Creative thinking and attention to detail",
        "Available for 12-week summer program"
      ],
      responsibilities: [
        "Assist in developing marketing campaigns for clients",
        "Create content for social media and marketing materials",
        "Conduct market research and competitive analysis",
        "Support SEO and content marketing initiatives",
        "Track and analyze campaign performance",
        "Participate in client meetings and presentations"
      ],
      companyInfo: {
        name: "GrowthBoost",
        size: "30-75 employees",
        industry: "Digital Marketing",
        founded: "2017",
        description: "GrowthBoost is a digital marketing agency specializing in B2B growth strategies and lead generation.",
        benefits: ["Mentorship Program", "Flexible Work", "Professional Development", "Portfolio Building"],
        culture: "Creative, data-driven team focused on delivering exceptional results for clients"
      },
      applicationDeadline: "2024-03-18",
      programStart: "June 2024",
      mentor: "Alex Rodriguez, Marketing Director"
    },
    {
      id: 4,
      title: "UX Design Intern",
      company: "DesignCorp",
      logo: "/design-agency-logo.png",
      location: "Austin, TX",
      stipend: "$2,000/month",
      type: "Summer Internship",
      remote: "Remote",
      posted: "2 weeks ago",
      duration: "10 weeks",
      description: "Work with our design team to create user-centered design solutions for mobile and web applications.",
      fullDescription: "Join DesignCorp's UX team for a comprehensive internship program where you'll learn the entire design process from user research to final implementation. Work on real client projects and build a strong portfolio.",
      skills: ["Figma", "UX Design", "User Research", "Student"],
      requirements: [
        "Currently pursuing degree in Design, HCI, or related field",
        "Basic knowledge of design tools (Figma, Sketch, Adobe Creative Suite)",
        "Understanding of UX design principles",
        "Strong visual design skills",
        "Excellent communication and presentation abilities",
        "Portfolio showcasing design work"
      ],
      responsibilities: [
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design mockups",
        "Collaborate with developers on design implementation",
        "Participate in design reviews and client presentations",
        "Learn about design systems and accessibility",
        "Build and refine design portfolio"
      ],
      companyInfo: {
        name: "DesignCorp",
        size: "20-50 employees",
        industry: "Design Agency",
        founded: "2015",
        description: "DesignCorp creates innovative digital experiences for startups and established companies.",
        benefits: ["Mentorship Program", "Design Tools License", "Portfolio Development", "Networking Events"],
        culture: "Creative and collaborative environment focused on design excellence and innovation"
      },
      applicationDeadline: "2024-03-25",
      programStart: "June 2024",
      mentor: "Jennifer Kim, Senior UX Designer"
    }
  ]

  const handleInternshipClick = (internship: any) => {
    setSelectedInternship(internship)
  }

  const handleApplyClick = () => {
    setShowApplicationModal(true)
  }

  const handleSubmitApplication = () => {
    console.log("Application submitted:", { internship: selectedInternship?.title, ...applicationData })
    setShowApplicationModal(false)
    setApplicationData({ 
      coverLetter: "", 
      expectedStipend: "", 
      availableStartDate: "", 
      resume: null, 
      transcript: null 
    })
  }
  
  return (
    <>
      <div className="w-[65%] mx-auto py-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-heading text-primary-navy mb-2">Internship Opportunities</h1>
        <p className="text-slate-600 font-subheading text-xl">Launch your career with hands-on experience at leading companies</p>
      </div>

      <div className="flex gap-6">
        {/* Enhanced Sidebar for Internships */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Applied Internships */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading text-primary-navy flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  My Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/internships/applied">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                  >
                    <span className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Applied Internships
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-500 font-subheading">
                  <div className="text-center">
                    <p className="font-semibold text-primary-navy">{statusCounts.total}</p>
                    <p className="text-xs">Total Applied</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-blue-600">{statusCounts.interviews}</p>
                    <p className="text-xs">Interviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Filters */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading text-primary-navy flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg"
                  >
                    {showFilters ? 'Hide' : 'Show'}
                  </Button>
                </CardTitle>
              </CardHeader>
              {showFilters && (
                <CardContent className="space-y-6">
                  {/* Internship Type */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3">Program Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="summer" />
                        <label htmlFor="summer" className="text-sm font-subheading text-slate-600">Summer Internship</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fall" />
                        <label htmlFor="fall" className="text-sm font-subheading text-slate-600">Fall Internship</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="spring" />
                        <label htmlFor="spring" className="text-sm font-subheading text-slate-600">Spring Internship</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="year-round" />
                        <label htmlFor="year-round" className="text-sm font-subheading text-slate-600">Year-round</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Education Level */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3">Education Level</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="high-school" />
                        <label htmlFor="high-school" className="text-sm font-subheading text-slate-600">High School</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="undergraduate" />
                        <label htmlFor="undergraduate" className="text-sm font-subheading text-slate-600">Undergraduate</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="graduate" />
                        <label htmlFor="graduate" className="text-sm font-subheading text-slate-600">Graduate</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Stipend Range */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3">Monthly Stipend</h4>
                    <div className="px-2">
                      <Slider
                        value={stipendRange}
                        onValueChange={setStipendRange}
                        max={5000}
                        min={500}
                        step={100}
                        className="mb-3"
                      />
                      <div className="flex justify-between text-sm font-subheading text-slate-500">
                        <span>${stipendRange[0]}</span>
                        <span>${stipendRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Duration */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3">Duration</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="8-weeks" />
                        <label htmlFor="8-weeks" className="text-sm font-subheading text-slate-600">8 weeks</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="10-weeks" />
                        <label htmlFor="10-weeks" className="text-sm font-subheading text-slate-600">10 weeks</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="12-weeks" />
                        <label htmlFor="12-weeks" className="text-sm font-subheading text-slate-600">12 weeks</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="6-months" />
                        <label htmlFor="6-months" className="text-sm font-subheading text-slate-600">6 months</label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Remote Options */}
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-3">Work Location</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="on-site" />
                        <label htmlFor="on-site" className="text-sm font-subheading text-slate-600">On-site</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote" />
                        <label htmlFor="remote" className="text-sm font-subheading text-slate-600">Remote</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hybrid" />
                        <label htmlFor="hybrid" className="text-sm font-subheading text-slate-600">Hybrid</label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input 
                  placeholder="Search internships, companies, or skills..." 
                  className="pl-10 pr-4 py-3 text-sm border-slate-200 focus:border-primary-navy focus:ring-primary-navy rounded-xl font-body"
                />
              </div>
              <Select>
                <SelectTrigger className="w-48 border-slate-200 focus:border-primary-navy rounded-xl font-subheading">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="on-site">On-site</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl px-6 font-bold">
                Search
              </Button>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-heading text-primary-navy mb-1">Available Internships</h2>
              <p className="text-slate-500 font-subheading">Showing {internships.length} opportunities</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-subheading text-slate-500">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-36 border-slate-200 rounded-lg font-subheading">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="stipend-high">Highest Stipend</SelectItem>
                  <SelectItem value="stipend-low">Lowest Stipend</SelectItem>
                  <SelectItem value="company">Company A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Internship Cards */}
          <div className="space-y-4">
            {internships.map((internship) => {
              const getRemoteColor = (remote: string) => {
                switch (remote) {
                  case "Remote":
                    return "bg-green-50 text-green-600 border-green-200"
                  case "Hybrid":
                    return "bg-blue-50 text-blue-600 border-blue-200"
                  case "On-site":
                    return "bg-slate-50 text-slate-600 border-slate-200"
                  default:
                    return "bg-slate-50 text-slate-600 border-slate-200"
                }
              }

              return (
                <Card 
                  key={internship.id} 
                  className="border border-slate-200 hover:border-primary-navy hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleInternshipClick(internship)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-primary-navy rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-heading text-lg">{internship.company.charAt(0)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-heading text-primary-navy mb-1 hover:text-[#0056B3] transition-colors">
                            {internship.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-slate-600 font-subheading mb-2">
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span>{internship.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{internship.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{internship.stipend}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{internship.duration}</span>
                            </div>
                          </div>
                          <p className="text-slate-600 font-body mb-3 text-sm leading-relaxed">
                            {internship.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge className={`${getRemoteColor(internship.remote)} font-subheading text-xs`}>
                                {internship.remote}
                              </Badge>
                              <Badge className="bg-primary-navy/10 text-primary-navy border-primary-navy/20 font-subheading text-xs">
                                {internship.type}
                              </Badge>
                              <span className="text-slate-400 text-sm font-subheading">•</span>
                              <span className="text-slate-500 text-sm font-subheading">{internship.posted}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {internship.skills.slice(0, 3).map((skill, index) => (
                                <Badge key={index} variant="outline" className="border-slate-200 text-slate-600 font-subheading text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {internship.skills.length > 3 && (
                                <Badge variant="outline" className="border-slate-200 text-slate-600 font-subheading text-xs">
                                  +{internship.skills.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-slate-200 text-slate-400 hover:border-primary-navy hover:text-primary-navy rounded-lg"
                        >
                          <BookmarkIcon className="h-4 w-4" />
                        </Button>
                        <Button 
                          className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg px-4 font-bold"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleInternshipClick(internship)
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-slate-200 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading px-8"
            >
              Load More Internships
            </Button>
            <p className="text-slate-500 font-subheading text-sm mt-3">
              Showing {internships.length} of 124 internships
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Internship Details Modal */}
    {selectedInternship && !showApplicationModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedInternship(null)}
                  className="rounded-xl"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-2xl font-heading text-primary-navy">Internship Details</h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedInternship(null)}
                className="rounded-xl"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Internship Content */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading text-2xl">{selectedInternship.company.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading text-primary-navy mb-2">{selectedInternship.title}</h2>
                  <div className="flex items-center space-x-6 text-slate-600 font-subheading mb-4">
                    <div className="flex items-center space-x-2">
                      <Building className="h-5 w-5" />
                      <span className="text-lg">{selectedInternship.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>{selectedInternship.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5" />
                      <span className="font-semibold text-green-600">{selectedInternship.stipend}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{selectedInternship.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className="bg-primary-navy text-white font-subheading">
                      {selectedInternship.type}
                    </Badge>
                    <Badge className="bg-green-50 text-green-600 border-green-200 font-subheading">
                      {selectedInternship.remote}
                    </Badge>
                    <span className="text-slate-500 font-subheading">Posted {selectedInternship.posted}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-bold"
                  >
                    <BookmarkIcon className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button 
                    className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl px-6 font-bold"
                    onClick={handleApplyClick}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="text-xl font-heading text-primary-navy mb-3">About This Internship</h3>
                <p className="text-slate-600 font-body leading-relaxed mb-4">
                  {selectedInternship.fullDescription}
                </p>
              </div>

              <Separator />

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-heading text-primary-navy mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedInternship.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-slate-600 font-body">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-heading text-primary-navy mb-3">What You'll Do</h3>
                <ul className="space-y-2">
                  {selectedInternship.responsibilities.map((resp: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-slate-600 font-body">
                      <Star className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Skills */}
              <div>
                <h3 className="text-xl font-heading text-primary-navy mb-3">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInternship.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="outline" className="border-primary-navy text-primary-navy font-subheading px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Company Info */}
              <div>
                <h3 className="text-xl font-heading text-primary-navy mb-3">About {selectedInternship.companyInfo.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-600 font-body mb-4">{selectedInternship.companyInfo.description}</p>
                    <div className="space-y-2 text-sm font-subheading">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">{selectedInternship.companyInfo.size}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">{selectedInternship.companyInfo.industry}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">Founded {selectedInternship.companyInfo.founded}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-subheading font-medium text-primary-navy mb-2">Program Benefits</h4>
                    <div className="space-y-1">
                      {selectedInternship.companyInfo.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-slate-600 font-body text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Program Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-4 rounded-xl">
                <div className="text-center">
                  <h4 className="font-subheading font-medium text-primary-navy mb-1">Application Deadline</h4>
                  <p className="text-slate-600 font-body">{selectedInternship.applicationDeadline}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-subheading font-medium text-primary-navy mb-1">Program Start</h4>
                  <p className="text-slate-600 font-body">{selectedInternship.programStart}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-subheading font-medium text-primary-navy mb-1">Mentor</h4>
                  <p className="text-slate-600 font-body">{selectedInternship.mentor}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-4">
                <Button 
                  className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl px-8 font-bold flex-1"
                  onClick={handleApplyClick}
                >
                  Apply for This Internship
                </Button>
                <Button
                  variant="outline"
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl px-6 font-bold"
                >
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Application Modal */}
    {showApplicationModal && (
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading text-primary-navy">
              Apply for {selectedInternship?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cover-letter" className="font-subheading text-primary-navy">Cover Letter</Label>
              <Textarea
                id="cover-letter"
                placeholder="Tell us why you're interested in this internship and what makes you a great candidate..."
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                className="mt-2 font-body"
                rows={6}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expected-stipend" className="font-subheading text-primary-navy">Expected Stipend (optional)</Label>
                <Input
                  id="expected-stipend"
                  placeholder="e.g., $2000/month"
                  value={applicationData.expectedStipend}
                  onChange={(e) => setApplicationData({...applicationData, expectedStipend: e.target.value})}
                  className="mt-2 font-body"
                />
              </div>
              <div>
                <Label htmlFor="start-date" className="font-subheading text-primary-navy">Available Start Date</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={applicationData.availableStartDate}
                  onChange={(e) => setApplicationData({...applicationData, availableStartDate: e.target.value})}
                  className="mt-2 font-body"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="font-subheading text-primary-navy">Resume</Label>
                <div className="mt-2 border-2 border-dashed border-slate-200 rounded-lg p-4 text-center">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-body text-slate-600">Upload your resume</p>
                  <Button variant="outline" className="mt-2 font-subheading">Browse Files</Button>
                </div>
              </div>
              <div>
                <Label className="font-subheading text-primary-navy">Transcript (optional)</Label>
                <div className="mt-2 border-2 border-dashed border-slate-200 rounded-lg p-4 text-center">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-body text-slate-600">Upload your transcript</p>
                  <Button variant="outline" className="mt-2 font-subheading">Browse Files</Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowApplicationModal(false)}
                className="font-subheading"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitApplication}
                className="bg-primary-navy hover:bg-primary-navy/90 text-white font-bold"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  )
} 