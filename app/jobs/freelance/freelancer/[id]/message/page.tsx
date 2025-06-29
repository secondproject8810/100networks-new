'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Send, Paperclip, Star, MapPin, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'

export default function MessageFreelancerPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [freelancer, setFreelancer] = useState<any>(null)
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    projectBudget: "",
    timeline: "",
    projectType: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  // Mock freelancers data - in real app, this would come from an API
  const freelancers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      initials: "AR",
      title: "Full-Stack React Developer",
      shortBio: "Passionate full-stack developer with 5+ years building scalable web applications using React, Node.js, and modern technologies.",
      rating: 4.9,
      reviews: 127,
      rate: 85,
      location: "San Francisco, CA",
      availability: "Available now",
      responseTime: "2 hours",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL", "Redux"],
    },
    {
      id: 2,
      name: "Sarah Chen",
      initials: "SC",
      title: "UI/UX Designer & Frontend Developer",
      shortBio: "Creative designer and frontend developer specializing in user-centered design and modern web interfaces.",
      rating: 4.8,
      reviews: 94,
      rate: 75,
      location: "New York, NY",
      availability: "Available in 2 weeks",
      responseTime: "1 hour",
      skills: ["UI/UX Design", "React", "Vue.js", "Figma", "Adobe Creative Suite", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 3,
      name: "Michael Thompson",
      initials: "MT",
      title: "Content Marketing Strategist",
      shortBio: "Strategic content marketer with expertise in B2B SaaS, helping companies build authority and drive organic growth.",
      rating: 4.9,
      reviews: 156,
      rate: 65,
      location: "Austin, TX",
      availability: "Available now",
      responseTime: "30 minutes",
      skills: ["Content Strategy", "SEO", "Copywriting", "Marketing Automation", "Analytics", "Social Media", "Email Marketing"],
    }
  ]

  useEffect(() => {
    const loadFreelancer = async () => {
      const resolvedParams = await params
      const foundFreelancer = freelancers.find(f => f.id === parseInt(resolvedParams.id))
      if (foundFreelancer) {
        setFreelancer(foundFreelancer)
      }
    }
    loadFreelancer()
  }, [params])

  const handleSendMessage = async () => {
    if (!messageData.subject || !messageData.message) {
      alert("Please fill in subject and message fields")
      return
    }

    const resolvedParams = await params
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log("Sending message to:", freelancer.name, messageData)
      setIsLoading(false)
      
      // Show success message and redirect
      alert(`Message sent to ${freelancer.name} successfully!`)
      router.push(`/jobs/freelance/freelancer/${resolvedParams.id}`)
    }, 1500)
  }

  const useTemplate = (templateType: string) => {
    const templates = {
      webdev: {
        subject: "Web Development Project Inquiry",
        message: `Hi ${freelancer?.name}, I came across your profile and I'm impressed by your expertise in ${freelancer?.skills.slice(0, 3).join(', ')}. I have a web development project that I'd like to discuss with you. Would you be available for a quick call to go over the details?`,
        projectType: "Web Development"
      },
      design: {
        subject: "Design Project Collaboration",
        message: `Hello ${freelancer?.name}, I'm looking for a talented designer to help with my project. Your portfolio looks amazing and I think you'd be a great fit. I'd love to discuss the project details with you.`,
        projectType: "Design"
      },
      longterm: {
        subject: "Long-term Partnership Opportunity",
        message: `Hi ${freelancer?.name}, I'm looking for a reliable freelancer for ongoing projects. Based on your experience and excellent reviews, I think we could have a great working relationship. Let's connect!`,
        projectType: "Long-term Partnership"
      },
      consultation: {
        subject: "Expert Consultation Request",
        message: `Dear ${freelancer?.name}, I need expert advice on a project in your area of expertise. Your background in ${freelancer?.skills.slice(0, 2).join(' and ')} makes you the perfect person to consult with. Would you be interested in a consultation call?`,
        projectType: "Consultation"
      }
    }

    const template = templates[templateType as keyof typeof templates]
    if (template) {
      setMessageData({
        ...messageData,
        ...template
      })
    }
  }

  if (!freelancer) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-slate-700 mb-4">Freelancer not found</h1>
          <Button onClick={() => router.back()} className="bg-primary-navy hover:bg-slate-800 text-white">
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 sm:space-x-3 w-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <div className="min-w-0 flex-1">
              <h1 className="text-base sm:text-lg lg:text-2xl font-heading text-primary-navy truncate">Message {freelancer.name}</h1>
              <p className="text-xs sm:text-sm font-subheading text-slate-600 hidden sm:block">Send a message about your project</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Freelancer Info Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="bg-white rounded-xl border-slate-200 shadow-sm lg:sticky lg:top-6">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-xl bg-gradient-to-br from-primary-navy to-slate-700 flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-heading mx-auto mb-2 sm:mb-3">
                    {freelancer.initials}
                  </div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-1">{freelancer.name}</h3>
                  <p className="text-xs sm:text-sm font-subheading text-slate-600 mb-2">{freelancer.title}</p>
                  <div className="flex items-center justify-center space-x-1 mb-2 sm:mb-3">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                    <span className="font-subheading font-medium text-primary-navy text-xs sm:text-sm">{freelancer.rating}</span>
                    <span className="text-slate-500 font-subheading text-xs">({freelancer.reviews})</span>
                  </div>
                </div>

                <Separator className="my-3 sm:my-4" />

                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center text-slate-600">
                    <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary-navy flex-shrink-0" />
                    <span className="font-subheading truncate">${freelancer.rate}/hr</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary-navy flex-shrink-0" />
                    <span className="font-subheading truncate">{freelancer.availability}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary-navy flex-shrink-0" />
                    <span className="font-subheading truncate">{freelancer.location}</span>
                  </div>
                </div>

                <Separator className="my-3 sm:my-4" />

                <div>
                  <h4 className="font-heading text-primary-navy text-xs sm:text-sm mb-2">Top Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {freelancer.skills.slice(0, 6).map((skill: string, index: number) => (
                      <span key={index} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full font-medium">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100">
                  <p className="text-xs font-subheading text-slate-500 text-center">
                    Typically responds in {freelancer.responseTime}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-white rounded-xl border-slate-200 shadow-sm">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="space-y-4 sm:space-y-6">
                  {/* Quick Templates */}
                  <div>
                    <h3 className="text-sm sm:text-base font-heading text-primary-navy mb-2 sm:mb-3">Quick Templates</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm font-subheading border-slate-200 hover:border-primary-navy hover:text-primary-navy h-8 sm:h-9"
                        onClick={() => useTemplate('webdev')}
                      >
                        Web Dev
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm font-subheading border-slate-200 hover:border-primary-navy hover:text-primary-navy h-8 sm:h-9"
                        onClick={() => useTemplate('design')}
                      >
                        Design
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm font-subheading border-slate-200 hover:border-primary-navy hover:text-primary-navy h-8 sm:h-9"
                        onClick={() => useTemplate('longterm')}
                      >
                        Long-term
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm font-subheading border-slate-200 hover:border-primary-navy hover:text-primary-navy h-8 sm:h-9"
                        onClick={() => useTemplate('consultation')}
                      >
                        Consulting
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs sm:text-sm font-heading text-primary-navy mb-1 sm:mb-2">Project Type</label>
                    <Input
                      placeholder="e.g., Web Development, Design, Consultation"
                      value={messageData.projectType}
                      onChange={(e) => setMessageData({ ...messageData, projectType: e.target.value })}
                      className="rounded-xl font-subheading text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs sm:text-sm font-heading text-primary-navy mb-1 sm:mb-2">Subject *</label>
                    <Input
                      placeholder="Brief description of your project"
                      value={messageData.subject}
                      onChange={(e) => setMessageData({ ...messageData, subject: e.target.value })}
                      className="rounded-xl font-subheading text-sm sm:text-base h-10 sm:h-11"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-heading text-primary-navy mb-1 sm:mb-2">Message *</label>
                    <Textarea
                      placeholder={`Hi ${freelancer.name}, I'm interested in working with you on a project. Here's what I need help with...`}
                      value={messageData.message}
                      onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                      rows={6}
                      className="rounded-xl font-subheading resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[160px]"
                      required
                    />
                    <p className="text-xs text-slate-500 font-subheading mt-1">
                      Be specific about your project requirements, timeline, and budget.
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-heading text-primary-navy mb-1 sm:mb-2">Budget Range (Optional)</label>
                      <Input
                        placeholder="e.g., $5,000 - $10,000"
                        value={messageData.projectBudget}
                        onChange={(e) => setMessageData({ ...messageData, projectBudget: e.target.value })}
                        className="rounded-xl font-subheading text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-heading text-primary-navy mb-1 sm:mb-2">Timeline (Optional)</label>
                      <Input
                        placeholder="e.g., 2-4 weeks"
                        value={messageData.timeline}
                        onChange={(e) => setMessageData({ ...messageData, timeline: e.target.value })}
                        className="rounded-xl font-subheading text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  {/* Attachment Section */}
                  <div>
                    <label className="block text-xs sm:text-sm font-heading text-primary-navy mb-1 sm:mb-2">Attachments (Optional)</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 sm:p-6 text-center">
                      <Paperclip className="h-6 w-6 sm:h-8 sm:w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs sm:text-sm text-slate-600 font-subheading">
                        Drag & drop files here or click to browse
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        PDF, DOC, images up to 10MB each
                      </p>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
                    <h4 className="font-heading text-primary-navy text-xs sm:text-sm mb-2">💡 Tips for a great message:</h4>
                    <ul className="text-xs font-subheading text-slate-600 space-y-1">
                      <li>• Be specific about your project scope and requirements</li>
                      <li>• Mention why you chose this freelancer specifically</li>
                      <li>• Include your timeline and budget expectations</li>
                      <li>• Ask about their availability and next steps</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <Button 
                      className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading h-11 sm:h-12 text-sm sm:text-base"
                      onClick={handleSendMessage}
                      disabled={isLoading || !messageData.subject || !messageData.message}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          <span className="text-sm sm:text-base">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          <span className="text-sm sm:text-base">Send Message</span>
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-11 sm:h-12 text-sm sm:text-base sm:min-w-[120px]"
                      onClick={() => router.back()}
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 