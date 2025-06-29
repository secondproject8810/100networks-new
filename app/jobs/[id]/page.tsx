"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Building, MapPin, DollarSign, CheckCircle, BookmarkIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()


  // Mock job data - in a real app, this would be fetched based on the ID
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechVision",
      logo: "/abstract-tech-logo.png",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      type: "Full-time",
      remote: "Remote",
      posted: "3 days ago",
      description: "We're looking for a senior frontend developer to lead our web application development team and architect scalable solutions for our growing platform.",
      fullDescription: "We are seeking a highly skilled Senior Frontend Developer to join our dynamic team at TechVision. You will be responsible for architecting and developing scalable web applications using modern frontend technologies. This role offers the opportunity to work on cutting-edge projects that impact millions of users worldwide. You'll collaborate closely with our product, design, and backend teams to create exceptional user experiences.",
      skills: ["React", "TypeScript", "Redux", "5+ years"],
      requirements: [
        "5+ years of experience in frontend development",
        "Expert knowledge of React and TypeScript",
        "Experience with state management libraries (Redux, MobX)",
        "Strong understanding of modern JavaScript (ES6+)",
        "Experience with testing frameworks (Jest, React Testing Library)",
        "Familiarity with modern build tools (Webpack, Vite)",
        "Experience with CSS-in-JS libraries or CSS modules"
      ],
      responsibilities: [
        "Lead frontend architecture decisions and technical direction",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with design team to implement pixel-perfect UIs",
        "Optimize application performance and ensure scalability",
        "Participate in agile development processes and sprint planning",
        "Stay up-to-date with latest frontend technologies and best practices"
      ],
      companyInfo: {
        name: "TechVision",
        size: "100-500 employees",
        industry: "Technology",
        founded: "2018",
        description: "TechVision is a fast-growing technology company that develops innovative software solutions for businesses worldwide.",
        benefits: ["Health Insurance", "401(k) Matching", "Unlimited PTO", "Remote Work", "Learning Budget"],
        culture: "Innovation-driven, collaborative, and growth-focused environment"
      },
      applicationDeadline: "2024-02-15",
      hiringManager: "Sarah Chen, Engineering Manager"
    },
    {
      id: 2,
      title: "Python AI Engineer",
      company: "Flexbone",
      logo: "/flexbone-logo.png",
      location: "Atlanta, GA",
      salary: "$90K - $110K",
      type: "Contract",
      remote: "Hybrid",
      posted: "1 week ago",
      description: "Join our AI team to develop cutting-edge machine learning solutions for healthcare applications and make a real impact on patient outcomes.",
      fullDescription: "Flexbone is looking for a talented Python AI Engineer to join our healthcare AI division. You will be working on revolutionary machine learning models that help healthcare providers make better decisions and improve patient outcomes. This role involves working with large healthcare datasets, developing predictive models, and deploying AI solutions in production environments.",
      skills: ["Python", "TensorFlow", "Machine Learning", "3+ years"],
      requirements: [
        "3+ years of experience in machine learning and AI",
        "Strong proficiency in Python and ML libraries (TensorFlow, PyTorch, scikit-learn)",
        "Experience with data preprocessing and feature engineering",
        "Knowledge of deep learning architectures and techniques",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Understanding of healthcare data standards (HL7, FHIR) is a plus",
        "Master's degree in Computer Science, Data Science, or related field"
      ],
      responsibilities: [
        "Develop and train machine learning models for healthcare applications",
        "Work with healthcare data to extract meaningful insights",
        "Collaborate with data scientists and healthcare professionals",
        "Deploy and maintain AI models in production environments",
        "Conduct research on new AI techniques and methodologies",
        "Ensure compliance with healthcare data privacy regulations"
      ],
      companyInfo: {
        name: "Flexbone",
        size: "50-200 employees",
        industry: "Healthcare Technology",
        founded: "2019",
        description: "Flexbone develops AI-powered healthcare solutions that improve patient outcomes and reduce costs for healthcare providers.",
        benefits: ["Health Insurance", "Stock Options", "Flexible Hours", "Professional Development", "Health Stipend"],
        culture: "Mission-driven, innovative, and collaborative team focused on making healthcare better"
      },
      applicationDeadline: "2024-02-22",
      hiringManager: "David Park, VP of Product"
    }
  ]

  const job = jobs.find(j => j.id === parseInt(params.id))

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Job Not Found</h1>
          <p className="text-slate-600 font-subheading mb-6">The job you're looking for doesn't exist or has been removed.</p>
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

  const handleApplyClick = () => {
    router.push(`/jobs/${params.id}/apply`)
  }



  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push('/jobs')}
                className="rounded-xl"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg lg:text-2xl font-heading text-primary-navy">Job Details</h1>
            </div>
          </div>

          {/* Job Content */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                  <h2 className="text-xl lg:text-2xl font-heading text-primary-navy">{job.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-subheading self-start ${
                    job.remote === "Remote" ? "bg-green-100 text-green-700" :
                    job.remote === "Hybrid" ? "bg-blue-100 text-blue-700" :
                    job.remote === "On-site" ? "bg-red-100 text-red-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {job.remote}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-600 font-subheading mb-3 space-y-2 sm:space-y-0 text-sm lg:text-base">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-heading text-primary-navy">{job.salary}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-slate-500 font-subheading text-sm">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>Posted {job.posted}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="sm:inline block">Apply by {job.applicationDeadline}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Job Description */}
            <div>
              <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Job Description</h3>
              <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">{job.fullDescription}</p>
            </div>

            {/* Skills Required */}
            <div>
              <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string, index: number) => (
                  <Badge key={index} className={`font-subheading text-xs lg:text-sm ${
                    skill.includes('+') || skill.includes('years') 
                      ? 'bg-[#0056B3]/10 text-[#0056B3]' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>{skill}</Badge>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 font-subheading text-sm lg:text-base">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-navy mt-1 flex-shrink-0" />
                    <span className="text-slate-600 font-subheading text-sm lg:text-base">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">About the Company</h3>
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-heading text-primary-navy text-sm lg:text-base">{job.companyInfo.name}</h4>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-xs lg:text-sm text-slate-500">
                        <span>{job.companyInfo.size}</span>
                        <span>•</span>
                        <span>{job.companyInfo.industry}</span>
                        <span>•</span>
                        <span>Founded {job.companyInfo.founded}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 font-subheading text-sm lg:text-base">{job.companyInfo.description}</p>
                    <div>
                      <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">Benefits</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.companyInfo.benefits.map((benefit: string, index: number) => (
                          <Badge key={index} className="bg-green-50 text-green-700 font-subheading text-xs">{benefit}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-subheading font-medium text-primary-navy mb-2 text-sm lg:text-base">Company Culture</h5>
                      <p className="text-slate-600 font-subheading text-sm lg:text-base">{job.companyInfo.culture}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hiring Manager */}
            <div>
              <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Hiring Manager</h3>
              <p className="text-slate-600 font-subheading text-sm lg:text-base">{job.hiringManager}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-slate-200">
              <Button 
                className="flex-1 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl font-subheading h-12"
                onClick={handleApplyClick}
              >
                Apply for this Position
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 sm:flex-none sm:min-w-[140px] border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-12"
                onClick={(e) => {
                  e.stopPropagation()
                  // Handle save job functionality here
                  console.log("Job saved:", job.title)
                }}
              >
                <BookmarkIcon className="h-4 w-4 mr-2" />
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal - Removed (now redirects to dedicated apply page) */}
    </>
  )
}
