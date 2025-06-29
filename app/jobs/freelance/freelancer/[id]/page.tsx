'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Star, MapPin, Clock, DollarSign, MessageCircle, BookmarkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'

export default function FreelancerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [freelancer, setFreelancer] = useState<any>(null)

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
      currency: "USD",
      paymentType: "both",
      location: "San Francisco, CA",
      availability: "Available now",
      completedProjects: 89,
      clientRetention: "95%",
      experience: "5+ years",
      responseTime: "2 hours",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL", "Redux"],
      languages: ["English (Native)", "Spanish (Fluent)"],
      professionalSummary: "I'm a passionate full-stack developer with over 5 years of experience building scalable web applications. I specialize in React and Node.js ecosystems, with expertise in modern development practices including TypeScript, testing, and cloud deployment. I've successfully delivered 80+ projects ranging from startups to enterprise solutions.",
      recentWork: [
        {
          projectTitle: "E-commerce Platform Redesign",
          client: "TechCorp Inc.",
          completedDate: "Dec 2023",
          description: "Led the complete redesign and development of a multi-vendor e-commerce platform serving 50k+ users. Implemented real-time inventory management, payment processing, and advanced search functionality.",
          technologies: "React, Node.js, PostgreSQL, Redis, Stripe API",
          projectUrl: "https://example.com"
        },
        {
          projectTitle: "Real-time Analytics Dashboard",
          client: "DataFlow Solutions",
          completedDate: "Nov 2023", 
          description: "Built a comprehensive analytics dashboard with real-time data visualization, custom reporting, and automated insights for business intelligence.",
          technologies: "React, D3.js, WebSocket, Express.js, MongoDB",
          projectUrl: "https://example.com"
        }
      ],
      workPreferences: {
        workingHours: "9 AM - 6 PM PST (flexible)",
        timezone: "Pacific Standard Time (PST)",
        projectTypes: ["Web Development", "Full-Stack", "API Development"],
        industries: ["Technology", "E-commerce", "SaaS", "Fintech"]
      },
      awards: [
        {
          title: "Top Rated Plus Freelancer",
          organization: "Upwork",
          dateReceived: "2023",
          description: "Achieved top 3% status with 100% job success score",
          credentialId: "UP-2023-TR-001",
          credentialUrl: "https://example.com"
        }
      ],
      portfolio: [
        { name: "SaaS Dashboard", description: "Modern analytics platform" },
        { name: "E-commerce Mobile App", description: "React Native shopping app" }
      ],
      testimonials: [
        { client: "TechCorp Inc.", text: "Alex delivered exceptional work on our e-commerce platform. His technical expertise and communication skills made the project a huge success." },
        { client: "StartupXYZ", text: "Outstanding developer who goes above and beyond. Alex's solutions are always clean, scalable, and well-documented." }
      ]
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
      currency: "USD",
      paymentType: "both",
      location: "New York, NY",
      availability: "Available in 2 weeks",
      completedProjects: 67,
      clientRetention: "92%",
      experience: "4+ years",
      responseTime: "1 hour",
      skills: ["UI/UX Design", "React", "Vue.js", "Figma", "Adobe Creative Suite", "Tailwind CSS", "JavaScript"],
      languages: ["English (Native)", "Mandarin (Native)"],
      professionalSummary: "I'm a passionate UI/UX designer and frontend developer with 4+ years of experience creating beautiful, user-friendly digital experiences. I specialize in translating complex user needs into intuitive designs and bringing them to life with clean, performant code.",
      recentWork: [
        {
          projectTitle: "SaaS Platform Redesign",
          client: "CloudTech Solutions",
          completedDate: "Jan 2024",
          description: "Complete redesign of a B2B SaaS platform, improving user engagement by 40% and reducing bounce rate by 25%.",
          technologies: "Figma, React, TypeScript, Tailwind CSS",
          projectUrl: "https://example.com"
        }
      ],
      workPreferences: {
        workingHours: "10 AM - 7 PM EST (flexible)",
        timezone: "Eastern Standard Time (EST)",
        projectTypes: ["UI/UX Design", "Frontend Development", "Design Systems"],
        industries: ["SaaS", "Technology", "Healthcare", "Education"]
      },
      awards: [
        {
          title: "Design Excellence Award",
          organization: "Dribbble",
          dateReceived: "2023",
          description: "Recognized for outstanding design work and community contribution",
          credentialId: "DR-2023-DE-002",
          credentialUrl: "https://example.com"
        }
      ],
      portfolio: [
        { name: "Mobile Banking App", description: "Intuitive financial management interface" },
        { name: "Healthcare Dashboard", description: "Patient management system design" }
      ],
      testimonials: [
        { client: "CloudTech Solutions", text: "Sarah's design work transformed our platform. Her attention to detail and user-focused approach resulted in a 40% increase in user engagement." },
        { client: "HealthTech Inc.", text: "Exceptional designer who truly understands user needs. Sarah delivered beyond our expectations." }
      ]
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
      currency: "USD",
      paymentType: "both",
      location: "Austin, TX",
      availability: "Available now",
      completedProjects: 134,
      clientRetention: "96%",
      experience: "6+ years",
      responseTime: "30 minutes",
      skills: ["Content Strategy", "SEO", "Copywriting", "Marketing Automation", "Analytics", "Social Media", "Email Marketing"],
      languages: ["English (Native)"],
      professionalSummary: "I'm a strategic content marketer with 6+ years of experience helping B2B SaaS companies build authority, drive organic growth, and convert leads into customers. I specialize in creating comprehensive content strategies that align with business goals and deliver measurable results.",
      recentWork: [
        {
          projectTitle: "SaaS Content Strategy Overhaul",
          client: "GrowthSaaS",
          completedDate: "Dec 2023",
          description: "Developed and executed a comprehensive content strategy that increased organic traffic by 300% and generated 500+ qualified leads in 6 months.",
          technologies: "HubSpot, SEMrush, Google Analytics, Ahrefs",
          projectUrl: "https://example.com"
        }
      ],
      workPreferences: {
        workingHours: "8 AM - 5 PM CST (flexible)",
        timezone: "Central Standard Time (CST)",
        projectTypes: ["Content Strategy", "SEO", "Lead Generation"],
        industries: ["SaaS", "Technology", "B2B Services", "Fintech"]
      },
      awards: [
        {
          title: "Content Marketing Excellence",
          organization: "Content Marketing Institute",
          dateReceived: "2023",
          description: "Recognized for innovative B2B content strategies",
          credentialId: "CMI-2023-EX-003",
          credentialUrl: "https://example.com"
        }
      ],
      portfolio: [
        { name: "SaaS Content Strategy", description: "300% organic traffic growth for B2B SaaS platform" },
        { name: "Technical Blog Series", description: "Developer-focused content driving 100k+ monthly visits" }
      ],
      testimonials: [
        { client: "GrowthSaaS", text: "Michael's content strategy transformed our inbound marketing. ROI exceeded expectations." },
        { client: "TechTools Pro", text: "Exceptional writer who understands both technical concepts and marketing strategy." }
      ]
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
            <h1 className="text-base sm:text-lg lg:text-2xl font-heading text-primary-navy">Freelancer Profile</h1>
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-white rounded-xl sm:rounded-2xl border-slate-200 shadow-sm">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="space-y-4 sm:space-y-6">
              {/* Basic Info */}
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-navy to-slate-700 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-heading mx-auto sm:mx-0">
                  {freelancer.initials}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 space-y-2 sm:space-y-0">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-heading text-primary-navy">{freelancer.name}</h2>
                    <div className="flex items-center space-x-1 justify-center sm:justify-start">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-amber-400 text-amber-400" />
                      <span className="font-subheading font-medium text-primary-navy text-sm sm:text-base lg:text-lg">{freelancer.rating}</span>
                      <span className="text-slate-500 font-subheading text-xs sm:text-sm lg:text-base">/5 ({freelancer.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-subheading text-slate-600 mb-3">{freelancer.title}</p>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-500 font-subheading text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="truncate">{freelancer.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="truncate">{freelancer.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="font-heading text-primary-navy">${freelancer.rate}/hr</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="text-lg sm:text-2xl font-heading text-primary-navy">{freelancer.completedProjects}</div>
                  <div className="text-xs sm:text-sm font-subheading text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="text-lg sm:text-2xl font-heading text-primary-navy">{freelancer.clientRetention}</div>
                  <div className="text-xs sm:text-sm font-subheading text-slate-600">Client Retention</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="text-lg sm:text-2xl font-heading text-primary-navy">{freelancer.experience}</div>
                  <div className="text-xs sm:text-sm font-subheading text-slate-600">Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                  <div className="text-lg sm:text-2xl font-heading text-primary-navy">{freelancer.responseTime}</div>
                  <div className="text-xs sm:text-sm font-subheading text-slate-600">Response Time</div>
                </div>
              </div>

              {/* Professional Summary */}
              {freelancer.professionalSummary && (
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Professional Summary</h3>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm sm:text-base">{freelancer.professionalSummary}</p>
                </div>
              )}

              {/* Recent Work & Portfolio */}
              {freelancer.recentWork && freelancer.recentWork.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Recent Work & Portfolio</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {freelancer.recentWork.map((work: any, index: number) => (
                      <Card key={index} className="border-slate-200">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 space-y-2 sm:space-y-0">
                            <div className="flex-1">
                              <h4 className="font-heading text-primary-navy text-base sm:text-lg mb-1">{work.projectTitle}</h4>
                              <p className="text-xs sm:text-sm font-subheading text-slate-500">{work.client} • Completed: {work.completedDate}</p>
                            </div>
                            {work.projectUrl && (
                              <a 
                                href={work.projectUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary-navy hover:underline text-xs sm:text-sm font-subheading"
                              >
                                View Project
                              </a>
                            )}
                          </div>
                          <p className="text-slate-600 font-subheading mb-3 text-sm sm:text-base">{work.description}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {work.technologies.split(', ').map((tech: string, techIndex: number) => (
                              <Badge key={techIndex} className="bg-slate-100 text-slate-700 font-subheading text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills & Tools */}
              <div>
                <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Skills & Tools</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {freelancer.skills.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading px-2 sm:px-3 py-1 text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Languages</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {freelancer.languages.map((language: string, index: number) => (
                    <Badge key={index} className="bg-slate-100 text-slate-700 font-subheading text-xs sm:text-sm">{language}</Badge>
                  ))}
                </div>
              </div>

              {/* Pricing & Availability */}
              <div>
                <h3 className="text-base sm:text-lg font-heading text-primary-navy mb-2 sm:mb-3">Pricing & Availability</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                    <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Hourly Rate</div>
                    <div className="font-heading text-primary-navy text-sm sm:text-base">{freelancer.currency} ${freelancer.rate}/hr</div>
                  </div>
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                    <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Payment Type</div>
                    <div className="font-subheading text-slate-700 capitalize text-sm sm:text-base">
                      {freelancer.paymentType === 'both' ? 'Hourly & Fixed' : freelancer.paymentType}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                    <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Availability</div>
                    <div className="font-subheading text-slate-700 text-sm sm:text-base">{freelancer.availability}</div>
                  </div>
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl">
                    <div className="text-xs sm:text-sm font-subheading text-slate-500 mb-1">Response Time</div>
                    <div className="font-subheading text-slate-700 text-sm sm:text-base">
                      {freelancer.responseTime.replace('within-', '').replace('-', ' ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Preferences */}
              {freelancer.workPreferences && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Work Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-subheading font-medium text-slate-700 mb-2">Working Hours & Timezone</h4>
                      <p className="text-slate-600 font-subheading">{freelancer.workPreferences.workingHours}</p>
                      <p className="text-slate-600 font-subheading">{freelancer.workPreferences.timezone}</p>
                    </div>
                    <div>
                      <h4 className="font-subheading font-medium text-slate-700 mb-2">Preferred Project Types</h4>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.workPreferences.projectTypes.map((type: string, index: number) => (
                          <Badge key={index} className="bg-blue-50 text-blue-700 font-subheading text-xs">{type}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-subheading font-medium text-slate-700 mb-2">Preferred Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.workPreferences.industries.map((industry: string, index: number) => (
                          <Badge key={index} className="bg-green-50 text-green-700 font-subheading text-xs">{industry}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Awards & Certifications */}
              {freelancer.awards && freelancer.awards.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Awards & Certifications</h3>
                  <div className="space-y-4">
                    {freelancer.awards.map((award: any, index: number) => (
                      <Card key={index} className="border-slate-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-heading text-primary-navy mb-1">{award.title}</h4>
                              <p className="text-sm font-subheading text-slate-500">{award.organization} • {award.dateReceived}</p>
                            </div>
                            {award.credentialUrl && (
                              <a 
                                href={award.credentialUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary-navy hover:underline text-sm font-subheading"
                              >
                                Verify
                              </a>
                            )}
                          </div>
                          {award.description && (
                            <p className="text-slate-600 font-subheading text-sm">{award.description}</p>
                          )}
                          {award.credentialId && (
                            <p className="text-xs font-subheading text-slate-400 mt-2">ID: {award.credentialId}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Legacy Portfolio */}
              {freelancer.portfolio && freelancer.portfolio.length > 0 && (
                <div>
                  <h3 className="text-lg font-heading text-primary-navy mb-3">Additional Portfolio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {freelancer.portfolio.map((project: any, index: number) => (
                      <Card key={index} className="border-slate-200">
                        <CardContent className="p-4">
                          <h4 className="font-heading text-primary-navy mb-2">{project.name}</h4>
                          <p className="text-sm font-subheading text-slate-600">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              <div>
                <h3 className="text-lg font-heading text-primary-navy mb-3">Client Testimonials</h3>
                <div className="space-y-4">
                  {freelancer.testimonials.map((testimonial: any, index: number) => (
                    <Card key={index} className="border-slate-200">
                      <CardContent className="p-4">
                        <p className="font-subheading text-slate-600 mb-2">"{testimonial.text}"</p>
                        <p className="text-sm font-subheading text-primary-navy">— {testimonial.client}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button 
                  className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading h-11 sm:h-12 text-sm sm:text-base"
                  onClick={async () => {
                    const resolvedParams = await params
                    router.push(`/jobs/freelance/freelancer/${resolvedParams.id}/message`)
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm sm:text-base">Contact & Message</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading h-11 sm:h-12 text-sm sm:text-base sm:min-w-[140px]"
                >
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm sm:text-base">Save Profile</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  )
} 