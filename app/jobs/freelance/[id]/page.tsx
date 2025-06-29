"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { BookmarkIcon, ArrowLeft, Star, Briefcase, Users, Search } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

export default function ProjectDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)


  // Mock projects data (in a real app, this would come from an API)
  const projects = [
    {
      id: 1,
      title: "React Native Developer for Fitness App",
      category: "Mobile Development",
      description: "Looking for an experienced React Native developer to build a fitness tracking app with workout plans, progress tracking, and social features.",
      fullDescription: "We are developing a comprehensive fitness tracking application that will revolutionize how users approach their workout routines. The app needs to include workout plans, progress tracking, social features for community engagement, and integration with wearable devices. The ideal candidate should have extensive experience with React Native, Firebase backend integration, and mobile UI/UX best practices.",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      budgetType: "Fixed Price",
      minBudget: 2000,
      maxBudget: 3000,
      budget: "$2,000-3,000 fixed price",
      duration: "2-4 weeks",
      postedDate: "2 days ago",
      icon: Briefcase,
      attachments: [
        { name: "App_Wireframes.pdf", size: "2.5 MB", type: "PDF" },
        { name: "Brand_Guidelines.docx", size: "1.8 MB", type: "DOCX" }
      ],
      requirements: "• 3+ years of React Native development experience\n• Experience with Firebase and real-time databases\n• Portfolio of published mobile applications\n• Understanding of fitness/health app requirements\n• Ability to work in US timezone",
      responsibilities: "• Develop cross-platform mobile application using React Native\n• Implement user authentication and profile management\n• Create workout tracking and progress visualization features\n• Integrate with wearable devices and health APIs\n• Collaborate with design team for UI/UX implementation\n• Conduct testing and debugging across iOS and Android platforms\n• Provide regular progress updates and technical documentation",
      client: {
        name: "FitTech Solutions",
        rating: 4.8,
        reviews: 23,
        jobsPosted: 15,
        memberSince: "2022"
      }
    },
    {
      id: 2,
      title: "Content Writer for SaaS Blog Articles",
      category: "Content Writing",
      description: "We need a skilled content writer to create engaging, SEO-optimized blog articles for our SaaS clients in the marketing technology space.",
      fullDescription: "Our content marketing agency is seeking a talented writer who can create compelling, SEO-optimized blog articles for our SaaS clients. You'll be responsible for researching industry trends, creating outlines, and writing high-quality articles that drive engagement and conversions. This is an ongoing opportunity with potential for 8-12 articles per month.",
      skills: ["SEO", "B2B", "SaaS", "Marketing"],
      budgetType: "Hourly Rate",
      minBudget: 50,
      maxBudget: 75,
      budget: "$50-75 per article",
      duration: "Ongoing project",
      postedDate: "1 week ago",
      icon: Users,
      attachments: [
        { name: "Content_Strategy.pdf", size: "3.2 MB", type: "PDF" }
      ],
      requirements: "• Proven experience in SaaS/B2B content writing\n• Strong SEO knowledge and keyword research skills\n• Ability to write in different tones and styles\n• Experience with content management systems\n• Native English speaker preferred",
      responsibilities: "• Research and write 8-12 high-quality blog articles per month\n• Conduct keyword research and implement SEO best practices\n• Collaborate with marketing team on content strategy\n• Edit and proofread content for accuracy and engagement\n• Track content performance and suggest improvements\n• Meet deadlines consistently and maintain editorial calendar",
      client: {
        name: "ContentPro Agency",
        rating: 4.9,
        reviews: 67,
        jobsPosted: 45,
        memberSince: "2020"
      }
    },
    {
      id: 3,
      title: "Data Visualization Expert for Financial Dashboard",
      category: "Data Analysis",
      description: "We are seeking a skilled data visualization expert to create an interactive financial dashboard using tools like Tableau or Power BI.",
      fullDescription: "Our financial services company needs a data visualization expert to create a comprehensive dashboard that will help our clients make informed investment decisions. The dashboard should integrate multiple data sources, provide real-time updates, and offer interactive features for data exploration. You'll work closely with our data science team to ensure accurate representation of complex financial data.",
      skills: ["Tableau", "Power BI", "Data Visualization", "Financial Analysis"],
      budgetType: "Hourly Rate",
      minBudget: 100,
      maxBudget: 200,
      budget: "$100 - $200/hr",
      duration: "1-3 months",
      postedDate: "3 days ago",
      icon: Search,
      attachments: [],
      requirements: "",
      responsibilities: "",
      client: {
        name: "InvestWise Analytics",
        rating: 4.7,
        reviews: 34,
        jobsPosted: 12,
        memberSince: "2021"
      }
    }
  ]

  useEffect(() => {
    const projectId = parseInt(params.id as string)
    const foundProject = projects.find(p => p.id === projectId)
    setProject(foundProject)
  }, [params.id])



  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Project Not Found</h1>
          <Link href="/jobs/freelance">
            <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center space-x-3">
            <Link href="/jobs/freelance">
              <Button
                variant="ghost"
                size="icon"
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-10 w-10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl sm:text-2xl font-heading text-primary-navy">Project Details</h1>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-4 sm:space-y-6">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-slate-100 flex items-center justify-center mx-auto sm:mx-0">
                  <project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-navy" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl font-heading text-primary-navy mb-1 sm:mb-2">{project.title}</h2>
                  <p className="text-slate-500 font-subheading text-sm sm:text-base">Posted {project.postedDate}</p>
                </div>
              </div>

              <Separator />

              {/* Project Details Form Layout */}
              <div className="space-y-4 sm:space-y-6">
                {/* Project Title */}
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Title</Label>
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-subheading text-slate-900 text-sm sm:text-base">{project.title}</p>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Category</Label>
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-subheading text-slate-900 text-sm sm:text-base">{project.category}</p>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Description</Label>
                  <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-subheading text-slate-700 leading-relaxed text-sm sm:text-base">{project.fullDescription}</p>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Required Skills</Label>
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-subheading text-slate-900 text-sm sm:text-base">{project.skills.join(", ")}</p>
                  </div>
                </div>

                {/* Project Budget */}
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Project Budget</Label>
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                      <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-primary-navy bg-primary-navy"></div>
                      <span className="font-subheading text-slate-700 text-sm sm:text-base">{project.budgetType}</span>
                    </div>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Minimum Budget</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900 text-sm sm:text-base">${project.minBudget.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Maximum Budget</Label>
                    <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="font-subheading text-slate-900 text-sm sm:text-base">${project.maxBudget.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Estimated Duration */}
                <div className="space-y-2">
                  <Label className="text-xs sm:text-sm font-subheading font-medium text-primary-navy">Estimated Duration</Label>
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-subheading text-slate-900 text-sm sm:text-base">{project.duration}</p>
                  </div>
                </div>

                {/* Attachments */}
                <div className="space-y-2">
                  <Label className="text-sm font-subheading font-medium text-primary-navy">Attachments {project.attachments.length === 0 && "(Optional)"}</Label>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    {project.attachments.length > 0 ? (
                      <div className="space-y-2">
                        {project.attachments.map((attachment: any, index: number) => (
                          <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-lg border border-slate-200">
                            <div className="h-8 w-8 bg-primary-navy/10 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-bold text-primary-navy">{attachment.type}</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-subheading text-sm text-slate-900">{attachment.name}</p>
                              <p className="text-xs text-slate-500">{attachment.size}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="font-subheading text-slate-500 text-center py-2">No attachments provided</p>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                {project.requirements && project.requirements.trim() !== "" && (
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Requirements</Label>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="space-y-2">
                        {project.requirements.split('\n').map((requirement: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="font-subheading text-slate-700">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Responsibilities */}
                {project.responsibilities && project.responsibilities.trim() !== "" && (
                  <div className="space-y-2">
                    <Label className="text-sm font-subheading font-medium text-primary-navy">Responsibilities</Label>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="space-y-2">
                        {project.responsibilities.split('\n').map((responsibility: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="font-subheading text-slate-700">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Client Information */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">About the Client</h3>
                <Card className="border-slate-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading text-primary-navy">{project.client.name}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="font-subheading text-sm">{project.client.rating}/5</span>
                            <span className="text-xs text-slate-500">({project.client.reviews} reviews)</span>
                          </div>
                          <span className="text-xs text-slate-500">{project.client.jobsPosted} jobs posted</span>
                          <span className="text-xs text-slate-500">Member since {project.client.memberSince}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Link href={`/jobs/freelance/${project.id}/apply`}>
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading w-full"
                  >
                    Apply to Project
                  </Button>
                </Link>
                <Button variant="outline" className="rounded-xl font-subheading">
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Save Project
                </Button>
              </div>
        </div>
      </div>


    </div>
  )
} 