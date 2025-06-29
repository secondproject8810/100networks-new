"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Building, MapPin, DollarSign, CheckCircle, BookmarkIcon, Calendar, Clock, Users, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function InternshipDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Mock internship data - in real app, this would fetch based on params.id
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
      fullDescription: "Join GrowthBoost's marketing team for a comprehensive summer internship program. You'll work on real client campaigns, learn about digital marketing channels, and gain hands-on experience with marketing tools and analytics platforms.",
      skills: ["Marketing", "Social Media", "Analytics", "Student"],
      requirements: [
        "Currently pursuing degree in Marketing, Communications, or related field",
        "Basic understanding of digital marketing concepts",
        "Familiarity with social media platforms",
        "Strong written and verbal communication skills",
        "Creative thinking and attention to detail",
        "Interest in B2B marketing and client services"
      ],
      responsibilities: [
        "Assist in developing marketing campaigns for B2B clients",
        "Create content for social media and digital channels",
        "Analyze campaign performance and prepare reports",
        "Conduct market research and competitor analysis",
        "Support client presentations and meetings",
        "Learn about marketing automation tools and strategies"
      ],
      companyInfo: {
        name: "GrowthBoost",
        size: "20-50 employees",
        industry: "Marketing Agency",
        founded: "2019",
        description: "GrowthBoost is a digital marketing agency specializing in B2B growth strategies and lead generation.",
        benefits: ["Mentorship Program", "Portfolio Building", "Client Exposure", "Creative Freedom"],
        culture: "Creative, fast-paced environment with focus on client success and professional growth"
      },
      applicationDeadline: "2024-03-25",
      programStart: "June 2024",
      mentor: "Jennifer Kim, Senior Marketing Manager"
    }
  ]

  const internship = internships.find(i => i.id === parseInt(params.id))

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

  const handleApplyClick = () => {
    window.location.href = `/internships/${params.id}/apply`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/internships">
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

        {/* Content */}
        <div className="space-y-6">
          {/* Basic Info Card */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 self-center sm:self-start">
                  <div className="w-full h-full bg-primary-navy flex items-center justify-center">
                    <span className="text-white font-heading text-xl lg:text-2xl">{internship.company.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                    <h2 className="text-xl lg:text-2xl font-heading text-primary-navy">{internship.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-subheading self-center sm:self-start ${
                      internship.remote === "Remote" ? "bg-green-100 text-green-700" :
                      internship.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                      internship.remote === "On-site" ? "bg-red-100 text-red-700" :
                      "bg-slate-100 text-slate-700"
                    }`}>
                      {internship.remote}
                    </span>
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
                    <span>Posted {internship.posted}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="sm:inline block">Apply by {internship.applicationDeadline}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <Button 
              className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12"
              onClick={handleApplyClick}
            >
              Apply for this Internship
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
              onClick={(e) => {
                e.stopPropagation()
                console.log("Internship saved:", internship.title)
              }}
            >
              <BookmarkIcon className="h-4 w-4 mr-2" />
              Save Internship
            </Button>
          </div>

          {/* Description */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">About This Internship</h3>
              <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">
                {internship.fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* Skills Required */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill: string, index: number) => (
                  <Badge key={index} className={`font-subheading text-xs lg:text-sm ${
                    skill.includes('Student') 
                      ? 'bg-[#0056B3]/10 text-[#0056B3]' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Requirements</h3>
              <ul className="space-y-2">
                {internship.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 font-subheading text-sm lg:text-base">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">What You'll Do</h3>
              <ul className="space-y-2">
                {internship.responsibilities.map((responsibility: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                    <span className="text-slate-600 font-subheading text-sm lg:text-base">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">About the Company</h3>
              <Card className="border-slate-200">
                <CardContent className="p-3 lg:p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-heading text-primary-navy text-sm lg:text-base">{internship.companyInfo.name}</h4>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-xs lg:text-sm text-slate-500">
                        <span>{internship.companyInfo.size}</span>
                        <span>•</span>
                        <span>{internship.companyInfo.industry}</span>
                        <span>•</span>
                        <span>Founded {internship.companyInfo.founded}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 font-subheading text-sm lg:text-base">{internship.companyInfo.description}</p>
                    <div>
                      <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">Benefits</h5>
                      <div className="flex flex-wrap gap-2">
                        {internship.companyInfo.benefits.map((benefit: string, index: number) => (
                          <Badge key={index} className="bg-green-50 text-green-700 font-subheading text-xs">{benefit}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">Program Culture</h5>
                      <p className="text-slate-600 font-subheading text-sm lg:text-base">{internship.companyInfo.culture}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Mentor */}
          <Card className="border-slate-200">
            <CardContent className="p-4 lg:p-6">
              <h3 className="text-base lg:text-xl font-heading text-primary-navy mb-3">Program Mentor</h3>
              <p className="text-slate-600 font-subheading text-sm lg:text-base">{internship.mentor}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}