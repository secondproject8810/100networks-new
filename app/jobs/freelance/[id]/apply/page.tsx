"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowLeft, Upload, Send, Brain, Wand, Sparkles, Loader, Check, RefreshCw, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

export default function ApplyProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  // Application form state
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    proposedRate: "",
    timeline: "",
    portfolio: null as File | null
  })

  // AI Assistant state
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [dialogJustOpened, setDialogJustOpened] = useState(false)

  // Detect if user is on mobile device
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Reset dialog state when it opens
  useEffect(() => {
    if (showAIAssistant) {
      setDialogJustOpened(true)
      // Allow manual focus after a short delay
      const timer = setTimeout(() => {
        setDialogJustOpened(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [showAIAssistant])

  // Sample projects data (same as in the main freelance page)
  const projects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      description: "Looking for an experienced developer to build a modern e-commerce platform with React and Node.js. The project includes user authentication, payment integration, and admin dashboard.",
      budget: "$3,000 - $5,000",
      minBudget: 3000,
      maxBudget: 5000,
      duration: "2-3 months",
      skills: ["React", "Node.js", "MongoDB", "Payment Integration"],
      postedTime: "2 hours ago",
      proposals: 12,
      client: {
        name: "TechStart Solutions",
        rating: 4.8,
        reviews: 127,
        jobsPosted: 45,
        memberSince: "2019"
      },
      attachments: [],
      requirements: "5+ years experience with React\nExperience with payment gateways\nStrong portfolio of e-commerce projects",
      responsibilities: "Frontend and backend development\nDatabase design\nPayment integration\nTesting and deployment"
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      description: "Need a creative designer to create modern UI/UX for our fitness tracking mobile app. Looking for someone with experience in health/fitness app design.",
      budget: "$1,500 - $2,500",
      minBudget: 1500,
      maxBudget: 2500,
      duration: "4-6 weeks",
      skills: ["UI/UX Design", "Figma", "Mobile Design", "Prototyping"],
      postedTime: "5 hours ago",
      proposals: 8,
      client: {
        name: "FitLife Inc",
        rating: 4.9,
        reviews: 89,
        jobsPosted: 23,
        memberSince: "2020"
      },
      attachments: [
        { name: "App_Requirements.pdf", type: "PDF", size: "2.1 MB" },
        { name: "Brand_Guidelines.pdf", type: "PDF", size: "1.8 MB" }
      ],
      requirements: "3+ years mobile app design experience\nExperience with fitness/health apps\nProficiency in Figma",
      responsibilities: "User research and personas\nWireframing and prototyping\nHigh-fidelity UI design\nDesign system creation"
    },
    {
      id: 3,
      title: "Content Writing for Tech Blog",
      description: "Seeking a skilled content writer to create engaging blog posts about emerging technologies, AI, and software development trends.",
      budget: "$500 - $1,000",
      minBudget: 500,
      maxBudget: 1000,
      duration: "1-2 months",
      skills: ["Content Writing", "Technical Writing", "SEO", "Research"],
      postedTime: "1 day ago",
      proposals: 15,
      client: {
        name: "Digital Innovation Hub",
        rating: 4.7,
        reviews: 156,
        jobsPosted: 67,
        memberSince: "2018"
      },
      attachments: [],
      requirements: "Strong technical writing background\nSEO knowledge\nAI and tech industry knowledge",
      responsibilities: "Research trending topics\nWrite 8-10 blog posts\nOptimize content for SEO\nCollaborate with marketing team"
    }
  ]

  // Project data - find the project by ID immediately
  const project = projects.find(p => p.id === parseInt(projectId))

  const handleSubmitApplication = () => {
    // Handle application submission logic here
    console.log("Application submitted:", applicationData)
    
    // Navigate back to project details page
    router.push(`/jobs/freelance/${projectId}`)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setApplicationData({...applicationData, portfolio: file})
    }
  }

  // AI Assistant functions
  const getFieldPrompt = () => {
    return "Explain your interest in the project, highlight relevant experience, and mention why you're the right fit. Keep it personal and genuine."
  }

  const generateAIContent = async () => {
    if (!userInput.trim()) return
    
    setIsGenerating(true)
    
    // Simulate AI generation (replace with actual AI API call)
    setTimeout(() => {
      const mockSuggestions = [
        `Dear ${project?.client?.name || 'Client'},

I'm excited to apply for your "${project?.title}" project. With ${Math.floor(Math.random() * 5) + 3} years of experience in ${project?.skills?.[0] || 'development'}, I've successfully delivered similar projects for clients worldwide.

${userInput}

I'm confident I can deliver high-quality results within your timeline and budget. I'd love to discuss your project requirements in detail and show you some relevant samples from my portfolio.

Looking forward to working with you!

Best regards`,
        
        `Hello,

I was thrilled to come across your "${project?.title}" project posting. Your requirements perfectly align with my expertise in ${project?.skills?.slice(0, 2).join(' and ') || 'this field'}.

${userInput}

I believe in clear communication and timely delivery. I'm available to start immediately and can complete this project within the specified timeframe.

Thank you for considering my application. I'm excited about the opportunity to contribute to your project's success!

Best wishes`,

        `Hi ${project?.client?.name || 'there'},

Your "${project?.title}" project caught my attention because it aligns perfectly with my professional background. I have extensive experience in ${project?.skills?.[0] || 'the required technologies'} and have completed numerous similar projects.

${userInput}

I'm committed to delivering exceptional work that exceeds your expectations. I'd be happy to provide additional samples of my work and discuss your project in more detail.

Looking forward to your response!

Sincerely`
      ]
      
      setSuggestions(mockSuggestions)
      setIsGenerating(false)
    }, 2000)
  }

  const handleTryAgain = () => {
    setSuggestions([])
    setSelectedSuggestion("")
    generateAIContent()
  }

  const handleApplyAI = () => {
    if (selectedSuggestion) {
      setApplicationData({...applicationData, coverLetter: selectedSuggestion})
      setShowAIAssistant(false)
      // Reset AI state
      setUserInput("")
      setSuggestions([])
      setSelectedSuggestion("")
    }
  }

  const handleCloseAI = () => {
    setShowAIAssistant(false)
    setUserInput("")
    setSuggestions([])
    setSelectedSuggestion("")
    setIsGenerating(false)
  }



  if (!project) {
    return (
      <div className="min-h-full">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-2xl font-heading text-primary-navy mb-4">Project Not Found</h1>
            <p className="text-slate-600 font-subheading mb-6">The project you're trying to apply to could not be found.</p>
            <Link href="/jobs/freelance">
              <Button className="bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Freelance Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full">
      <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href={`/jobs/freelance/${projectId}`}>
              <Button
                variant="ghost"
                size="icon"
                className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading text-primary-navy">Apply to Project</h1>
              <p className="text-xs sm:text-sm text-slate-600 font-subheading mt-1">{project.title}</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="space-y-6">
          {/* Project Summary */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-heading text-primary-navy mb-2">{project.title}</h3>
            <p className="text-sm text-slate-600 font-subheading mb-3">{project.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-subheading text-primary-navy">Budget: {project.budget}</span>
              <span className="font-subheading text-slate-600">Duration: {project.duration}</span>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
              <Label htmlFor="coverLetter" className="text-sm font-subheading font-medium text-primary-navy">
                Cover Letter *
              </Label>
              <Button
                type="button"
                onClick={() => setShowAIAssistant(true)}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #1e3a8a',
                  color: '#1e3a8a'
                }}
                className="rounded-xl font-subheading hover:bg-primary-navy hover:text-white h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center"
              >
                <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                <Wand className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>AI Assistant</span>
              </Button>
            </div>
            <p className="text-xs text-slate-500 font-subheading mb-2">
              Explain why you're the perfect fit for this project
            </p>
            <Textarea
              id="coverLetter"
              placeholder="Dear client,

I am excited to apply for your project. I have extensive experience in..."
              value={applicationData.coverLetter}
              onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
              className="min-h-[120px] sm:min-h-[150px] rounded-xl font-subheading text-sm sm:text-base"
              required
            />
          </div>

          {/* Proposed Rate */}
          <div>
            <Label htmlFor="proposedRate" className="text-sm font-subheading font-medium text-primary-navy">
              Your Proposed Rate *
            </Label>
            <p className="text-xs text-slate-500 font-subheading mb-2">
              Enter your rate (e.g., $50/hour or $2000 fixed) - make sure it aligns with the project budget
            </p>
            <Input
              id="proposedRate"
              placeholder="e.g., $50/hour or $2000 fixed price"
              value={applicationData.proposedRate}
              onChange={(e) => setApplicationData({...applicationData, proposedRate: e.target.value})}
              className="rounded-xl font-subheading text-sm sm:text-base"
              required
            />
          </div>

          {/* Timeline */}
          <div>
            <Label htmlFor="timeline" className="text-sm font-subheading font-medium text-primary-navy">
              Estimated Timeline *
            </Label>
            <p className="text-xs text-slate-500 font-subheading mb-2">
              How long will this project take you to complete?
            </p>
            <Input
              id="timeline"
              placeholder="e.g., 6-8 weeks, 2 months, etc."
              value={applicationData.timeline}
              onChange={(e) => setApplicationData({...applicationData, timeline: e.target.value})}
              className="rounded-xl font-subheading text-sm sm:text-base"
              required
            />
          </div>

          {/* Portfolio Upload */}
          <div>
            <Label className="text-sm font-subheading font-medium text-primary-navy">
              Portfolio/Work Samples (Optional)
            </Label>
            <p className="text-xs text-slate-500 font-subheading mb-2">
              Upload relevant work samples or portfolio (Max 10MB per file)
            </p>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 sm:p-6 text-center hover:border-primary-navy transition-colors">
              <input
                type="file"
                id="portfolio"
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.zip,.jpg,.png,.gif"
              />
              <label htmlFor="portfolio" className="cursor-pointer">
                <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-subheading text-slate-600">
                  {applicationData.portfolio ? applicationData.portfolio.name : "Click to upload files"}
                </p>
                <p className="text-xs text-slate-400 mt-1">PDF, DOC, ZIP, Images accepted</p>
              </label>
            </div>
          </div>

          {/* Tips Section */}
          <div className="p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-heading text-blue-900 mb-2 text-xs sm:text-sm">💡 Application Tips</h4>
            <ul className="text-xs text-blue-800 font-subheading space-y-1">
              <li>• Personalize your cover letter for this specific project</li>
              <li>• Highlight relevant experience and skills mentioned in the job description</li>
              <li>• Be realistic with your timeline and budget proposals</li>
              <li>• Include portfolio samples that directly relate to this project</li>
            </ul>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
            <Button 
              onClick={handleSubmitApplication}
              className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading py-3"
              disabled={!applicationData.coverLetter || !applicationData.proposedRate || !applicationData.timeline}
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Application
            </Button>
            <Link href={`/jobs/freelance/${projectId}`}>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto rounded-xl font-subheading py-3 px-6"
              >
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* AI Assistant Dialog */}
      <Dialog open={showAIAssistant} onOpenChange={handleCloseAI}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[80vh] sm:max-h-[75vh] overflow-y-auto mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary-navy" />
              AI Writing Assistant
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Tell me what you want to write in your own words, and I'll help you create professional content for your <span className="font-medium text-primary-navy">cover letter</span>.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            {/* Step 1: User Input */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-navy text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">1</div>
                <Label className="text-sm sm:text-base font-medium">What do you want to say?</Label>
              </div>
              
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <p className="text-xs sm:text-sm text-blue-700 mb-3">
                  <strong>💡 Tip:</strong> {getFieldPrompt()}
                </p>
                <Textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                      e.preventDefault()
                      if (userInput.trim() && !isGenerating) {
                        generateAIContent()
                      }
                    }
                  }}
                  onFocus={(e) => {
                    // Prevent auto-focus only when dialog just opened on mobile
                    if (isMobile && dialogJustOpened) {
                      e.preventDefault()
                      ;(e.target as HTMLTextAreaElement).blur()
                    }
                  }}
                  onBlur={() => {
                    // Force zoom out on mobile when keyboard closes
                    if (isMobile) {
                      // Force page to scroll slightly to trigger zoom reset
                      setTimeout(() => {
                        window.scrollBy(0, 1)
                        setTimeout(() => {
                          window.scrollBy(0, -1)
                          // Force viewport meta tag reset
                          const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
                          if (viewport) {
                            const original = viewport.content
                            viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
                            setTimeout(() => {
                              viewport.content = original
                            }, 50)
                          }
                        }, 50)
                      }, 100)
                    }
                  }}
                  placeholder="Type your thoughts here in simple words..."
                  className="min-h-[80px] sm:min-h-[100px] bg-white border-blue-200 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 text-sm"
                  autoFocus={!isMobile}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                {/* Generate Button */}
                <Button
                  onClick={generateAIContent}
                  disabled={!userInput.trim() || isGenerating}
                  style={{
                    backgroundColor: !userInput.trim() || isGenerating ? '#d1d5db' : '#1e3a8a',
                    color: !userInput.trim() || isGenerating ? '#6b7280' : '#ffffff',
                    border: 'none'
                  }}
                  className="flex-1 font-medium transition-colors duration-200 text-sm sm:text-base py-2 sm:py-3"
                >
                  {isGenerating ? (
                    <>
                      <Loader className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
                      <span className="hidden sm:inline">AI is refining your content...</span>
                      <span className="sm:hidden">Refining...</span>
                    </>
                  ) : (
                    <>
                      <Wand className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span className="hidden sm:inline">Refine with AI</span>
                      <span className="sm:hidden">Refine</span>
                    </>
                  )}
                </Button>
                
                {/* Clear Button */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setUserInput("")
                    setSuggestions([])
                    setSelectedSuggestion("")
                  }}
                  disabled={isGenerating}
                  className="px-3 sm:px-4 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base py-2 sm:py-3"
                >
                  Clear
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                💡 Tip: Press Ctrl+Enter (Cmd+Enter on Mac) to quickly submit
              </p>
            </div>

            {/* Step 2: AI Suggestions */}
            {(suggestions.length > 0 || isGenerating) && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">2</div>
                  <Label className="text-sm sm:text-base font-medium">Choose your refined content</Label>
                </div>
                
                {isGenerating ? (
                  // Loading State
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                    <Loader className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 animate-spin text-primary-navy" />
                    <p className="text-gray-600 text-sm sm:text-base">AI is crafting professional content for you...</p>
                  </div>
                ) : (
                  // Suggestions List
                  <div className="space-y-2 sm:space-y-3">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className={`p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedSuggestion === suggestion
                            ? "border-primary-navy bg-blue-50"
                            : "border-gray-200 hover:border-primary-navy/50 hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedSuggestion(suggestion)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-2">
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                              {suggestion}
                            </p>
                          </div>
                          <div className="ml-2 sm:ml-3 flex-shrink-0">
                            {selectedSuggestion === suggestion ? (
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-navy rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-300 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Try Again Button */}
                    <div className="flex gap-2 sm:gap-3 pt-2">
                      <Button
                        variant="outline"
                        onClick={handleTryAgain}
                        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base py-2 sm:py-3"
                      >
                        <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span className="hidden sm:inline">Try Different Suggestions</span>
                        <span className="sm:hidden">Try Again</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Apply */}
            {selectedSuggestion && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">3</div>
                  <Label className="text-sm sm:text-base font-medium">Apply to your form</Label>
                </div>
                
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                  <p className="text-xs sm:text-sm text-purple-700 mb-3">
                    <strong>✨ Ready to apply:</strong> Your refined content will be added to the cover letter field.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      onClick={handleApplyAI}
                      className="bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base py-2 sm:py-3 flex-1"
                    >
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span className="hidden sm:inline">Apply This Content</span>
                      <span className="sm:hidden">Apply</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCloseAI}
                      className="border-gray-300 text-gray-700 text-sm sm:text-base py-2 sm:py-3"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 