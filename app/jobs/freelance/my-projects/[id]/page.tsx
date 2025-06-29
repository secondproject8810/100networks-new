"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Users,
  Star,
  MapPin,
  MessageCircle,
  MoreVertical,
  Edit,
  Archive,
  Share2,
  CheckCircle,
  FileText,
  Download,
  Send,
  Eye,
  Briefcase,
  Target,
  ThumbsUp
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("details")
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [messageText, setMessageText] = useState("")

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "React Native Developer for Fitness App",
      category: "Mobile Development",
      description: "Looking for an experienced React Native developer to build a comprehensive fitness tracking app with workout plans, progress tracking, and social features.",
      skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
      budgetType: "Fixed Price",
      budget: "$2,000-3,000 fixed price",
      duration: "2-4 weeks",
      postedDate: "2 days ago",
      status: "Active",
      applicants: 3,
      views: 47,
      attachments: [
        { name: "App_Wireframes.pdf", size: "2.5 MB" },
        { name: "Brand_Guidelines.docx", size: "1.8 MB" }
      ],
      requirements: [
        "3+ years of React Native development experience",
        "Experience with Firebase and real-time databases",
        "Portfolio of published mobile applications"
      ],
      responsibilities: [
        "Develop cross-platform mobile application using React Native",
        "Implement user authentication and profile management",
        "Create workout tracking and progress visualization features"
      ],
      client: {
        name: "FitTech Solutions",
        rating: 4.8,
        reviews: 23,
        jobsPosted: 15,
        memberSince: "2022"
      },
      applications: [
        {
          id: 1,
          name: "David Chen",
          avatar: "DC",
          rating: 4.9,
          reviews: 42,
          hourlyRate: 65,
          location: "San Francisco, CA",
          experience: "8+ years",
          responseTime: "within 1 hour",
          completedProjects: 127,
          appliedAt: "1 day ago",
          status: "pending",
          coverLetter: "Dear client, I am excited to apply for your React Native fitness app project. With over 8 years of experience in mobile development and a specialization in React Native, I have successfully delivered 50+ mobile applications for startups and enterprise companies. I have extensive experience with Firebase integration, real-time databases, and health/fitness app development. My recent project involved building a fitness tracking app for a startup that now has 100k+ active users. I understand the importance of user experience in fitness apps and have worked with wearable device integrations including Apple HealthKit and Google Fit. I'm confident I can deliver a high-quality, scalable solution that meets your requirements and timeline.",
          proposedRate: "$2,500 fixed price",
          timeline: "3-4 weeks",
          portfolio: [
            { name: "FitTracker_Portfolio.pdf", size: "3.2 MB" },
            { name: "React_Native_Projects.pdf", size: "2.8 MB" }
          ],
          skills: ["React Native", "Firebase", "Redux", "TypeScript", "API Integration", "UI/UX Design"],
          previousWork: "Built 15+ fitness and health apps including FitTracker Pro (100k+ users), HealthSync, and WorkoutPlanner",
          whyGoodFit: "I specialize in React Native development with a focus on fitness applications. My experience with Firebase real-time databases and health API integrations makes me perfect for this project."
        },
        {
          id: 2,
          name: "Sarah Johnson",
          avatar: "SJ",
          rating: 4.8,
          reviews: 36,
          hourlyRate: 75,
          location: "Austin, TX",
          experience: "6+ years",
          responseTime: "within 2 hours",
          completedProjects: 89,
          appliedAt: "2 days ago",
          status: "pending",
          coverLetter: "Hi there! Your fitness app project caught my attention because it aligns perfectly with my expertise in React Native and passion for health tech. I have 6+ years of experience building mobile applications, with a focus on fitness and wellness apps. I've worked on similar projects including a workout planning app that reached 50k downloads and a nutrition tracking app with real-time sync capabilities. I'm well-versed in Firebase, have experience with wearable integrations, and understand the unique UX challenges in fitness applications. I'm excited about the opportunity to help bring your vision to life.",
          proposedRate: "$2,800 fixed price", 
          timeline: "4-5 weeks",
          portfolio: [
            { name: "Mobile_Portfolio_2024.pdf", size: "4.7 MB" },
            { name: "Fitness_App_Demo.mp4", size: "8.3 MB" }
          ],
          skills: ["React Native", "Firebase", "Node.js", "MongoDB", "Stripe API", "Push Notifications"],
          previousWork: "Developed WorkoutBuddy (50k downloads), NutriTrack, and FitnessPal clone with real-time features",
          whyGoodFit: "My passion for fitness combined with technical expertise makes me ideal for creating engaging, user-friendly fitness applications."
        },
        {
          id: 3,
          name: "Michael Rodriguez",
          avatar: "MR",
          rating: 4.7,
          reviews: 29,
          hourlyRate: 70,
          location: "Remote",
          experience: "5+ years",
          responseTime: "within 4 hours",
          completedProjects: 156,
          appliedAt: "3 days ago",
          status: "pending",
          coverLetter: "Hello! I'm a React Native specialist with 5+ years of experience building cross-platform mobile applications. I have particular expertise in fitness and health applications, having developed apps for personal trainers, gyms, and wellness companies. My technical skills include React Native, Firebase, Redux, TypeScript, and various health API integrations. I've successfully integrated with Apple HealthKit, Google Fit, and Fitbit APIs in previous projects. I'm detail-oriented, communicate regularly, and always deliver projects on time. I would love to discuss your project requirements in more detail.",
          proposedRate: "$2,400 fixed price",
          timeline: "3 weeks",
          portfolio: [
            { name: "React_Native_Showcase.pdf", size: "2.8 MB" },
            { name: "Health_Apps_Portfolio.pdf", size: "3.1 MB" }
          ],
          skills: ["React Native", "Firebase", "Redux", "TypeScript", "HealthKit", "Google Fit API"],
          previousWork: "Created GymTracker Pro, HealthMetrics Dashboard, and PersonalTrainer App for fitness professionals",
          whyGoodFit: "I have specific experience with health data APIs and fitness app development, ensuring seamless integration with wearable devices."
        }
      ]
    }
  ]

  useEffect(() => {
    const loadProject = async () => {
      const resolvedParams = await params
      const projectId = parseInt(resolvedParams.id as string)
      const foundProject = projects.find(p => p.id === projectId)
      setProject(foundProject)
    }
    loadProject()
  }, [params])

  if (!project) {
    return (
      <div className="w-full max-w-6xl mx-auto py-6 px-4">
        <div className="text-center py-12">
          <p className="text-slate-600 font-subheading">Project not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-4 md:py-6 px-4 md:px-6 pb-20 md:pb-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 mb-6 md:mb-8">
        <Link href="/jobs/freelance/my-projects" className="sm:mr-6 self-start">
          <Button 
            variant="ghost"
            className="flex items-center text-slate-600 hover:text-primary-navy hover:bg-slate-50 rounded-xl p-2 sm:p-3"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-1 sm:mb-2">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 font-subheading">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Posted {project.postedDate}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {project.applicants} applicants
            </span>
            <Badge className="bg-green-100 text-green-800">
              {project.status}
            </Badge>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="details" className="font-subheading rounded-lg data-[state=active]:bg-primary-navy data-[state=active]:text-white">
            <FileText className="h-4 w-4 mr-2" />
            Project Details
          </TabsTrigger>
          <TabsTrigger value="applicants" className="font-subheading rounded-lg data-[state=active]:bg-primary-navy data-[state=active]:text-white">
            <Users className="h-4 w-4 mr-2" />
            Applicants ({project.applicants})
          </TabsTrigger>
        </TabsList>

        {/* Project Details Tab */}
        <TabsContent value="details" className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-primary-navy">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-subheading font-medium text-primary-navy mb-2">Description</h4>
                <p className="text-slate-700 font-subheading leading-relaxed">{project.description}</p>
              </div>
              
              <div>
                <h4 className="font-subheading font-medium text-primary-navy mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 font-subheading">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-subheading font-medium text-primary-navy mb-2">Budget</h4>
                <p className="text-slate-700 font-subheading">{project.budget}</p>
              </div>

              <div>
                <h4 className="font-subheading font-medium text-primary-navy mb-2">Duration</h4>
                <p className="text-slate-700 font-subheading">{project.duration}</p>
              </div>

              <div>
                <h4 className="font-subheading font-medium text-primary-navy mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {project.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2 text-slate-700 font-subheading">
                      <span className="text-primary-navy mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-subheading font-medium text-primary-navy mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-2 text-slate-700 font-subheading">
                      <span className="text-primary-navy mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Applicants Tab */}
        <TabsContent value="applicants" className="space-y-6">
          <div className="grid gap-4 md:gap-6">
            {project.applications.map((applicant: any) => (
              <Card 
                key={applicant.id} 
                className="border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedApplicant(applicant)
                  setShowApplicationModal(true)
                }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-4 flex-1">
                      <Avatar className="h-12 w-12 md:h-16 md:w-16">
                        <AvatarFallback className="bg-primary-navy text-white font-subheading text-sm md:text-base">
                          {applicant.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-subheading font-semibold text-primary-navy text-lg mb-1">{applicant.name}</h3>
                        <p className="text-slate-600 font-subheading text-sm mb-2 line-clamp-2">
                          {applicant.experience} • {applicant.completedProjects} projects completed
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 font-subheading">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{applicant.rating}</span>
                            <span className="text-slate-400">({applicant.reviews})</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{applicant.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>${applicant.hourlyRate}/hr</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-2">
                      <Badge className="bg-blue-100 text-blue-800 w-fit">
                        Applied {applicant.appliedAt}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-primary-navy border-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedApplicant(applicant)
                            setShowMessageModal(true)
                          }}
                        >
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Message
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading"
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/hire-freelancer?project=${project.id}&applicant=${applicant.id}`)
                          }}
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Hire
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Detailed Application Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-primary-navy text-xl">
              Application Details - {selectedApplicant?.name}
            </DialogTitle>
            <DialogDescription className="font-subheading">
              Review the complete application and proposal submitted for this project.
            </DialogDescription>
          </DialogHeader>
          
          {selectedApplicant && (
            <div className="space-y-6">
              {/* Freelancer Info */}
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary-navy text-white font-subheading text-lg">
                    {selectedApplicant.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-subheading font-semibold text-primary-navy text-lg mb-2">{selectedApplicant.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-subheading">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{selectedApplicant.rating} ({selectedApplicant.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span>{selectedApplicant.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-slate-500" />
                      <span>${selectedApplicant.hourlyRate}/hr</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-slate-500" />
                      <span>{selectedApplicant.completedProjects} projects completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <h4 className="font-subheading font-semibold text-primary-navy mb-3">Cover Letter</h4>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <p className="text-slate-700 font-subheading leading-relaxed">
                    {selectedApplicant.coverLetter}
                  </p>
                </div>
              </div>

              {/* Proposal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-subheading font-semibold text-primary-navy mb-3">Proposed Rate</h4>
                  <div className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-slate-700 font-subheading font-medium text-lg">{selectedApplicant.proposedRate}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-subheading font-semibold text-primary-navy mb-3">Timeline</h4>
                  <div className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-slate-700 font-subheading font-medium text-lg">{selectedApplicant.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-subheading font-semibold text-primary-navy mb-3">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedApplicant.skills?.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 font-subheading">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Previous Work */}
              <div>
                <h4 className="font-subheading font-semibold text-primary-navy mb-3">Relevant Experience</h4>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <p className="text-slate-700 font-subheading leading-relaxed">
                    {selectedApplicant.previousWork}
                  </p>
                </div>
              </div>

              {/* Why Good Fit */}
              <div>
                <h4 className="font-subheading font-semibold text-primary-navy mb-3">Why I'm a Good Fit</h4>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <p className="text-slate-700 font-subheading leading-relaxed">
                    {selectedApplicant.whyGoodFit}
                  </p>
                </div>
              </div>

              {/* Portfolio */}
              {selectedApplicant.portfolio && selectedApplicant.portfolio.length > 0 && (
                <div>
                  <h4 className="font-subheading font-semibold text-primary-navy mb-3">Portfolio & Work Samples</h4>
                  <div className="space-y-2">
                    {selectedApplicant.portfolio.map((file: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-slate-500" />
                          <div>
                            <p className="font-subheading font-medium text-slate-700">{file.name}</p>
                            <p className="text-sm text-slate-500">{file.size}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary-navy hover:text-primary-navy/80">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Application Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-sm text-slate-500 font-subheading">Applied {selectedApplicant.appliedAt}</span>
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    className="text-primary-navy border-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-subheading"
                    onClick={() => {
                      setShowApplicationModal(false)
                      setShowMessageModal(true)
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading"
                    onClick={() => {
                      router.push(`/hire-freelancer?project=${project.id}&applicant=${selectedApplicant.id}`)
                    }}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Hire Freelancer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Message Modal */}
      <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-primary-navy">
              Message {selectedApplicant?.name}
            </DialogTitle>
            <DialogDescription className="font-subheading">
              Send a message to discuss the project details or ask questions.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <Textarea
              placeholder="Type your message here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              rows={6}
              className="rounded-xl font-subheading"
            />
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowMessageModal(false)}
              className="font-subheading"
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                console.log("Sending message to:", selectedApplicant?.name, messageText)
                setShowMessageModal(false)
                setMessageText("")
              }}
              className="bg-primary-navy hover:bg-primary-navy/90 font-subheading"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
 