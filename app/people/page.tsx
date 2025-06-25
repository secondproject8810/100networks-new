"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, Users, MapPin, Briefcase, Award, Calendar, Star, ArrowLeft, X, Send, MessageCircle, UserPlus, ExternalLink, CheckCircle, Building, Globe, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function PeoplePage() {
  const [showFilters, setShowFilters] = useState(false)
  const [experienceRange, setExperienceRange] = useState([0, 20])
  const [selectedPerson, setSelectedPerson] = useState<any>(null)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [showFollowersModal, setShowFollowersModal] = useState(false)
  const [showFollowingModal, setShowFollowingModal] = useState(false)
  const [selectedPersonForFollowers, setSelectedPersonForFollowers] = useState<any>(null)
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    priority: "normal"
  })
  const [followedUsers, setFollowedUsers] = useState<number[]>([])

  // Mock data for followers/following - in real app this would come from API
  const mockFollowers = [
    {
      id: 101,
      name: "Alex Thompson",
      title: "Product Manager",
      company: "TechStart",
      avatar: "/professional-man-3.png",
      initials: "AT",
      isFollowing: true
    },
    {
      id: 102,
      name: "Emma Wilson",
      title: "UX Designer",
      company: "DesignCorp",
      avatar: "/professional-woman-3.png",
      initials: "EW",
      isFollowing: false
    },
    {
      id: 103,
      name: "James Rodriguez",
      title: "Software Engineer",
      company: "CodeLabs",
      avatar: "/professional-man-4.png",
      initials: "JR",
      isFollowing: true
    },
    {
      id: 104,
      name: "Lisa Chang",
      title: "Marketing Manager",
      company: "BrandFlow",
      avatar: "/professional-woman-4.png",
      initials: "LC",
      isFollowing: false
    },
    {
      id: 105,
      name: "Ryan Mitchell",
      title: "Data Analyst",
      company: "DataTech",
      avatar: "/professional-man-5.png",
      initials: "RM",
      isFollowing: true
    }
  ]

  const mockFollowing = [
    {
      id: 201,
      name: "Sofia Martinez",
      title: "Frontend Developer",
      company: "WebStudio",
      avatar: "/professional-woman-5.png",
      initials: "SM",
      isFollowing: true
    },
    {
      id: 202,
      name: "Kevin Park",
      title: "DevOps Engineer",
      company: "CloudTech",
      avatar: "/professional-man-6.png",
      initials: "KP",
      isFollowing: true
    },
    {
      id: 203,
      name: "Rachel Green",
      title: "Business Analyst",
      company: "ConsultPro",
      avatar: "/professional-woman-6.png",
      initials: "RG",
      isFollowing: true
    }
  ]

  const people = [
    {
      id: 1,
      name: "David Chen",
      title: "Senior Software Engineer",
      company: "TechVision",
      location: "San Francisco, CA",
      avatar: "/professional-man-1.png",
      initials: "DC",
      experience: 7,
      skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
      industry: "Technology",
      availability: "Open to freelance",
      followers: 892,
      following: 456,
      connections: 1200,
      aboutMe: "Passionate software engineer with 7+ years of experience building scalable web applications. I specialize in full-stack development with React and Node.js, and I'm always eager to learn new technologies and share knowledge with the developer community.",
      experience_details: [
        {
          role: "Senior Software Engineer",
          company: "TechVision",
          duration: "2021 - Present",
          description: "Lead development of microservices architecture, mentoring junior developers"
        },
        {
          role: "Software Engineer",
          company: "StartupFlow",
          duration: "2019 - 2021",
          description: "Built full-stack applications using React, Node.js, and MongoDB"
        }
      ],
      education: [
        {
          degree: "B.S. Computer Science",
          school: "UC Berkeley",
          year: "2017"
        }
      ],
      certifications: ["AWS Solutions Architect", "React Advanced Certification"],
      languages: ["English (Native)", "Mandarin (Fluent)", "Spanish (Conversational)"],
      contact: {
        email: "david.chen@techvision.com",
        phone: "+1 (555) 123-4567",
        linkedin: "linkedin.com/in/davidchen",
        website: "davidchen.dev"
      },
      interests: ["Open Source", "Machine Learning", "Rock Climbing", "Photography"],
      openToOpportunities: true,
      responseRate: 95,
      responseTime: "Within 2 hours"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "GlobalBrands",
      location: "New York, NY",
      avatar: "/professional-woman-1.png",
      initials: "SJ",
      experience: 10,
      skills: ["Brand Strategy", "Content Marketing", "SEO", "Social Media", "Analytics"],
      industry: "Marketing",
      availability: "Looking to mentor new marketers",
      followers: 1240,
      following: 680,
      connections: 2100,
      aboutMe: "Results-driven marketing professional with over 10 years of experience in digital marketing and brand management. I'm passionate about creating data-driven campaigns that deliver measurable results and love mentoring the next generation of marketers.",
      experience_details: [
        {
          role: "Marketing Director",
          company: "GlobalBrands",
          duration: "2020 - Present",
          description: "Leading global marketing initiatives, managing $2M+ budget, 40% increase in brand awareness"
        },
        {
          role: "Senior Marketing Manager",
          company: "BrandWorks",
          duration: "2018 - 2020",
          description: "Developed integrated marketing campaigns, managed cross-functional teams"
        }
      ],
      education: [
        {
          degree: "MBA Marketing",
          school: "NYU Stern",
          year: "2018"
        },
        {
          degree: "B.A. Communications",
          school: "Columbia University",
          year: "2014"
        }
      ],
      certifications: ["Google Analytics Certified", "HubSpot Marketing Certification", "Facebook Blueprint"],
      languages: ["English (Native)", "French (Professional)", "German (Basic)"],
      contact: {
        email: "sarah.johnson@globalbrands.com",
        linkedin: "linkedin.com/in/sarahjohnson",
        website: "sarahjmarketing.com"
      },
      interests: ["Sustainable Marketing", "Women in Leadership", "Yoga", "Travel"],
      openToOpportunities: false,
      responseRate: 88,
      responseTime: "Within 4 hours"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "UX/UI Designer",
      company: "DesignLabs",
      location: "Austin, TX",
      avatar: "/professional-man-2.png",
      initials: "MR",
      experience: 5,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      industry: "Design",
      availability: "Available for freelance projects",
      followers: 567,
      following: 234,
      connections: 789,
      aboutMe: "Creative UX/UI designer with 5 years of experience crafting beautiful and intuitive digital experiences. I believe in user-centered design and love collaborating with teams to solve complex problems through thoughtful design solutions.",
      experience_details: [
        {
          role: "Senior UX/UI Designer",
          company: "DesignLabs",
          duration: "2022 - Present",
          description: "Leading design for enterprise SaaS products, conducting user research"
        },
        {
          role: "UX Designer",
          company: "CreativeStudio",
          duration: "2020 - 2022",
          description: "Designed mobile apps and web platforms for startup clients"
        }
      ],
      education: [
        {
          degree: "B.F.A. Graphic Design",
          school: "Art Institute of Austin",
          year: "2019"
        }
      ],
      certifications: ["Google UX Design Certificate", "Adobe Certified Expert"],
      languages: ["English (Native)", "Spanish (Native)"],
      contact: {
        email: "michael@designlabs.co",
        linkedin: "linkedin.com/in/michaelrodriguez",
        website: "michaeluiux.com"
      },
      interests: ["Design Systems", "Accessibility", "Skateboarding", "Coffee"],
      openToOpportunities: true,
      responseRate: 92,
      responseTime: "Within 1 hour"
    },
    {
      id: 4,
      name: "Jennifer Lee",
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Seattle, WA",
      avatar: "/professional-woman-2.png",
      initials: "JL",
      experience: 4,
      skills: ["Python", "R", "Machine Learning", "SQL", "Tableau"],
      industry: "Technology",
      availability: "Open to consulting opportunities",
      followers: 445,
      following: 189,
      connections: 612,
      aboutMe: "Data scientist passionate about extracting insights from complex datasets to drive business decisions. With 4 years of experience in machine learning and statistical analysis, I enjoy tackling challenging problems and communicating findings to stakeholders.",
      experience_details: [
        {
          role: "Senior Data Scientist",
          company: "AnalyticsPro",
          duration: "2023 - Present",
          description: "Building ML models for predictive analytics, leading data science initiatives"
        },
        {
          role: "Data Analyst",
          company: "DataCorp",
          duration: "2021 - 2023",
          description: "Performed statistical analysis, created dashboards and reports"
        }
      ],
      education: [
        {
          degree: "M.S. Data Science",
          school: "University of Washington",
          year: "2021"
        },
        {
          degree: "B.S. Statistics",
          school: "UC San Diego",
          year: "2019"
        }
      ],
      certifications: ["AWS Machine Learning Specialty", "Tableau Desktop Certified"],
      languages: ["English (Native)", "Korean (Fluent)"],
      contact: {
        email: "jennifer.lee@analyticspro.com",
        linkedin: "linkedin.com/in/jenniferlee",
        website: "jenniferleedata.com"
      },
      interests: ["AI Ethics", "Data Visualization", "Hiking", "Board Games"],
      openToOpportunities: true,
      responseRate: 85,
      responseTime: "Within 6 hours"
    }
  ]

  const handlePersonClick = (person: any) => {
    setSelectedPerson(person)
  }

  const handleContactClick = () => {
    setShowMessageModal(true)
  }

  const handleFollowClick = (personId: number) => {
    setFollowedUsers(prev => 
      prev.includes(personId) 
        ? prev.filter(id => id !== personId)
        : [...prev, personId]
    )
  }

  const handleSendMessage = () => {
    // Handle message sending here
    console.log("Message sent:", { person: selectedPerson?.name, ...messageData })
    setShowMessageModal(false)
    setMessageData({ subject: "", message: "", priority: "normal" })
  }

  const handleShowFollowers = (person: any) => {
    console.log("Showing followers for:", person?.name)
    setSelectedPersonForFollowers(person)
    setShowFollowersModal(true)
  }

  const handleShowFollowing = (person: any) => {
    console.log("Showing following for:", person?.name)
    setSelectedPersonForFollowers(person)
    setShowFollowingModal(true)
  }

  const handleFollowFromModal = (personId: number) => {
    // In real app, this would update the follow status via API
    console.log("Follow/Unfollow person:", personId)
  }

  const isFollowed = (personId: number) => followedUsers.includes(personId)

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary-navy mb-3">Professional Network</h1>
          <p className="text-slate-600 font-subheading text-base sm:text-lg lg:text-xl">
            Follow professionals from various industries to expand your opportunities and grow your career
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar with Filters - Mobile/Tablet Responsive */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="space-y-4 lg:space-y-6">
              {/* My Network */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
                  <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center">
                    <Users className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    My Network
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-4 lg:p-6 pt-0">
                  <div className="flex lg:flex-col gap-4 lg:gap-3">
                    <div className="text-sm text-slate-500 font-subheading text-center py-2 lg:py-3 flex-1 lg:flex-none">
                      <p className="text-xl lg:text-2xl font-heading text-primary-navy">1,247</p>
                      <p>Followers</p>
                    </div>
                    <div className="text-sm text-slate-500 font-subheading text-center py-2 lg:py-3 flex-1 lg:flex-none">
                      <p className="text-xl lg:text-2xl font-heading text-primary-navy">892</p>
                      <p>Following</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Filters */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-3 lg:pb-4 p-4 lg:p-6">
                  <CardTitle className="text-lg lg:text-xl font-heading text-primary-navy flex items-center justify-between">
                    <span className="flex items-center">
                      <Filter className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                      Advanced Filters
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowFilters(!showFilters)}
                      className="text-[#0056B3] hover:text-primary-navy hover:bg-primary-navy/5 rounded-lg text-sm"
                    >
                      {showFilters ? 'Hide' : 'Show'}
                    </Button>
                  </CardTitle>
                </CardHeader>
                {showFilters && (
                  <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6 pt-0">
                    {/* Location */}
                    <div>
                      <h4 className="font-subheading font-medium text-primary-navy mb-3 flex items-center text-sm lg:text-base">
                        <MapPin className="h-4 w-4 mr-2" />
                        Location
                      </h4>
                      <Select>
                        <SelectTrigger className="h-9 lg:h-10 border-slate-200 focus:border-primary-navy rounded-lg font-subheading text-sm">
                          <SelectValue placeholder="Any location" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg">
                          <SelectItem value="any" className="font-subheading text-sm">Any location</SelectItem>
                          <SelectItem value="sf" className="font-subheading text-sm">San Francisco, CA</SelectItem>
                          <SelectItem value="ny" className="font-subheading text-sm">New York, NY</SelectItem>
                          <SelectItem value="la" className="font-subheading text-sm">Los Angeles, CA</SelectItem>
                          <SelectItem value="chicago" className="font-subheading text-sm">Chicago, IL</SelectItem>
                          <SelectItem value="austin" className="font-subheading text-sm">Austin, TX</SelectItem>
                          <SelectItem value="seattle" className="font-subheading text-sm">Seattle, WA</SelectItem>
                          <SelectItem value="remote" className="font-subheading text-sm">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    {/* Industry */}
                    <div>
                      <h4 className="font-subheading font-medium text-primary-navy mb-3 flex items-center text-sm lg:text-base">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Industry
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="tech" className="border-slate-300" />
                          <label htmlFor="tech" className="text-xs lg:text-sm font-subheading text-slate-600">Technology</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="finance" className="border-slate-300" />
                          <label htmlFor="finance" className="text-xs lg:text-sm font-subheading text-slate-600">Finance</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="marketing" className="border-slate-300" />
                          <label htmlFor="marketing" className="text-xs lg:text-sm font-subheading text-slate-600">Marketing</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="design" className="border-slate-300" />
                          <label htmlFor="design" className="text-xs lg:text-sm font-subheading text-slate-600">Design</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="healthcare" className="border-slate-300" />
                          <label htmlFor="healthcare" className="text-xs lg:text-sm font-subheading text-slate-600">Healthcare</label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Experience Level */}
                    <div>
                      <h4 className="font-subheading font-medium text-primary-navy mb-3 flex items-center text-sm lg:text-base">
                        <Award className="h-4 w-4 mr-2" />
                        Experience Level
                      </h4>
                      <div className="px-2">
                        <Slider
                          value={experienceRange}
                          onValueChange={setExperienceRange}
                          max={20}
                          min={0}
                          step={1}
                          className="mb-3"
                        />
                        <div className="flex justify-between text-xs lg:text-sm font-subheading text-slate-500">
                          <span>{experienceRange[0]} years</span>
                          <span>{experienceRange[1]}+ years</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Availability */}
                    <div>
                      <h4 className="font-subheading font-medium text-primary-navy mb-3 text-sm lg:text-base">Availability</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="open-opportunities" className="border-slate-300" />
                          <label htmlFor="open-opportunities" className="text-xs lg:text-sm font-subheading text-slate-600">Open to opportunities</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="freelance" className="border-slate-300" />
                          <label htmlFor="freelance" className="text-xs lg:text-sm font-subheading text-slate-600">Available for freelance</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mentoring" className="border-slate-300" />
                          <label htmlFor="mentoring" className="text-xs lg:text-sm font-subheading text-slate-600">Open to mentoring</label>
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
            <div className="mb-4 lg:mb-6">
              <div className="relative mb-4 lg:mb-6">
                <Search className="absolute left-3 lg:left-4 top-3 lg:top-4 h-4 w-4 lg:h-5 lg:w-5 text-slate-400" />
                <Input 
                  placeholder="Search by name, company, industry, or skills" 
                  className="h-10 lg:h-12 pl-10 lg:pl-12 border-slate-200 focus:border-primary-navy rounded-xl font-subheading text-sm lg:text-base" 
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-4 lg:mb-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="px-2 lg:px-3 py-1 border-primary-navy text-primary-navy bg-primary-navy/5 rounded-lg font-subheading text-xs lg:text-sm">
                    All
                  </Badge>
                  <Badge variant="outline" className="px-2 lg:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs lg:text-sm">
                    Technology
                  </Badge>
                  <Badge variant="outline" className="px-2 lg:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs lg:text-sm">
                    Finance
                  </Badge>
                  <Badge variant="outline" className="px-2 lg:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs lg:text-sm">
                    Marketing
                  </Badge>
                  <Badge variant="outline" className="px-2 lg:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs lg:text-sm">
                    Design
                  </Badge>
                  <Badge variant="outline" className="px-2 lg:px-3 py-1 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-lg font-subheading cursor-pointer transition-all duration-200 text-xs lg:text-sm">
                    Healthcare
                  </Badge>
                </div>
                <Select onValueChange={(value) => console.log(value)}>
                  <SelectTrigger className="w-full sm:w-40 h-9 lg:h-10 border-slate-200 focus:border-primary-navy rounded-lg font-subheading focus:ring-0 focus:outline-none text-sm">
                    <SelectValue defaultValue="sort-by" placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-primary-navy">
                    <SelectItem value="sort-by" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Sort by</SelectItem>
                    <SelectItem value="relevance" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Relevance</SelectItem>
                    <SelectItem value="recent" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Recently joined</SelectItem>
                    <SelectItem value="connections" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Most followers</SelectItem>
                    <SelectItem value="location" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading focus:bg-primary-navy focus:text-white text-sm">Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {people.map((person) => {
                const followed = isFollowed(person.id)
                
                return (
                  <Card 
                    key={person.id} 
                    className="border-slate-200 hover:shadow-lg hover:border-primary-navy/30 transition-all duration-200 group cursor-pointer overflow-hidden"
                    onClick={() => handlePersonClick(person)}
                  >
                    <CardContent className="p-0">
                      {/* Profile Info */}
                      <div className="p-4 relative">
                        {/* Follow Button - Top Right */}
                        <div className="absolute top-2 right-2">
                          <Button
                            variant={followed ? "outline" : "default"}
                            size="sm"
                            className={followed 
                              ? "border-slate-200 hover:border-red-300 hover:text-red-600 rounded-lg font-subheading text-xs px-3 h-7" 
                              : "bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-subheading text-xs px-3 h-7"
                            }
                            onClick={(e) => {
                              e.stopPropagation()
                              handleFollowClick(person.id)
                            }}
                          >
                            {followed ? "Following" : "Follow"}
                          </Button>
                        </div>

                        {/* Profile Avatar */}
                        <div className="flex justify-center mb-4">
                          <Avatar className="h-16 w-16 flex-shrink-0 border-4 border-slate-200 shadow-md">
                            <AvatarImage src={person.avatar} alt={person.name} />
                            <AvatarFallback className="bg-primary-navy text-white font-heading text-lg">
                              {person.initials}
                            </AvatarFallback>
                          </Avatar>
                        </div>

                        {/* Person Details */}
                        <div className="text-center">
                          <h3 className="font-heading text-lg text-primary-navy group-hover:text-primary-navy transition-colors mb-1">
                            {person.name}
                          </h3>
                          <p className="text-slate-600 font-subheading text-sm mb-1 line-clamp-2">
                            {person.title} at {person.company}
                          </p>
                          
                          <div className="flex items-center justify-center text-xs text-slate-500 mb-3">
                            <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="font-subheading truncate">{person.location}</span>
                          </div>

                          {/* Skills */}
                          <div className="flex flex-wrap justify-center gap-1 mb-3">
                            {person.skills.slice(0, 2).map((skill: string, index: number) => (
                              <Badge key={index} className="bg-slate-100 text-slate-700 border-slate-200 font-subheading text-xs px-2 py-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Experience & Connections */}
                          <div className="flex items-center justify-center space-x-3 text-xs text-slate-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span className="font-subheading">{person.experience}y exp</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3" />
                              <span className="font-subheading">{person.connections}</span>
                            </div>
                          </div>
                          
                          {/* Availability */}
                          <div className="flex justify-center">
                            <Badge className={`font-subheading text-xs px-2 py-1 ${
                              person.availability.includes('freelance') ? 'bg-green-100 text-green-700 border-green-200' :
                              person.availability.includes('mentor') ? 'bg-blue-100 text-blue-700 border-blue-200' :
                              person.availability.includes('consulting') ? 'bg-purple-100 text-purple-700 border-purple-200' :
                              'bg-orange-100 text-orange-700 border-orange-200'
                            }`}>
                              {person.availability}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-6 lg:mt-8 flex justify-center">
              <Button 
                variant="outline"
                className="px-6 lg:px-8 py-2 lg:py-3 border-slate-200 text-slate-600 hover:border-primary-navy hover:text-primary-navy rounded-xl font-subheading text-sm lg:text-base"
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Person Details Modal */}
      {selectedPerson && !showMessageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 lg:p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] lg:max-h-[90vh] overflow-y-auto">
            <div className="p-4 lg:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedPerson(null)}
                    className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                  >
                    <ArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                  <h1 className="text-lg lg:text-2xl font-heading text-primary-navy">Professional Profile</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPerson(null)}
                  className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-xl font-subheading"
                >
                  <X className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>

              {/* Profile Content */}
              <div className="space-y-4 lg:space-y-6">
                {/* Basic Info */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <Avatar className="h-20 w-20 lg:h-24 lg:w-24 mx-auto sm:mx-0 flex-shrink-0">
                    <AvatarImage src={selectedPerson.avatar} alt={selectedPerson.name} />
                    <AvatarFallback className="bg-primary-navy text-white font-heading text-xl lg:text-2xl">
                      {selectedPerson.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
                      <h2 className="text-xl lg:text-2xl font-heading text-primary-navy">{selectedPerson.name}</h2>
                      <div className="flex items-center justify-center sm:justify-end space-x-2">
                        <Badge className={`font-subheading text-xs lg:text-sm ${
                          selectedPerson.openToOpportunities 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {selectedPerson.openToOpportunities ? 'Open to opportunities' : 'Not looking'}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-base lg:text-lg text-slate-600 font-subheading mb-2">{selectedPerson.title}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-slate-600 font-subheading mb-3 text-sm lg:text-base">
                      <div className="flex items-center justify-center sm:justify-start space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{selectedPerson.company}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedPerson.location}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{selectedPerson.connections} connections</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-4 text-slate-500 font-subheading text-xs lg:text-sm justify-center sm:justify-start">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShowFollowers(selectedPerson)
                        }}
                        className="hover:text-primary-navy cursor-pointer transition-colors"
                      >
                        <span className="font-medium text-primary-navy">{selectedPerson.followers}</span> followers
                      </button>
                      <span className="hidden sm:inline">•</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShowFollowing(selectedPerson)
                        }}
                        className="hover:text-primary-navy cursor-pointer transition-colors"
                      >
                        <span className="font-medium text-primary-navy">{selectedPerson.following}</span> following
                      </button>
                      <span className="hidden sm:inline">•</span>
                      <span>Response rate: {selectedPerson.responseRate}%</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{selectedPerson.responseTime}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* About */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">About</h3>
                  <p className="text-slate-600 font-subheading leading-relaxed text-sm lg:text-base">{selectedPerson.aboutMe}</p>
                </div>

                {/* Skills & Expertise */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.skills.map((skill: string, index: number) => (
                      <Badge key={index} className="bg-slate-100 text-slate-700 font-subheading text-xs lg:text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Experience</h3>
                  <div className="space-y-4">
                    {selectedPerson.experience_details.map((exp: any, index: number) => (
                      <Card key={index} className="border-slate-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-heading text-primary-navy">{exp.role}</h4>
                            <span className="text-sm text-slate-500 font-subheading">{exp.duration}</span>
                          </div>
                          <p className="text-slate-600 font-subheading mb-2">{exp.company}</p>
                          <p className="text-slate-500 font-subheading text-sm">{exp.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Education</h3>
                  <div className="space-y-3">
                    {selectedPerson.education.map((edu: any, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#0056B3] rounded-full"></div>
                        <div>
                          <p className="font-subheading text-primary-navy">{edu.degree}</p>
                          <p className="text-slate-600 font-subheading text-sm">{edu.school} • {edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.certifications.map((cert: string, index: number) => (
                      <Badge key={index} className="bg-[#0056B3]/10 text-[#0056B3] font-subheading">
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.languages.map((lang: string, index: number) => (
                      <Badge key={index} className="bg-slate-100 text-slate-700 font-subheading">
                        <Globe className="h-3 w-3 mr-1" />
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedPerson.contact.email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading">{selectedPerson.contact.email}</span>
                      </div>
                    )}
                    {selectedPerson.contact.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading">{selectedPerson.contact.phone}</span>
                      </div>
                    )}
                    {selectedPerson.contact.linkedin && (
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading">{selectedPerson.contact.linkedin}</span>
                      </div>
                    )}
                    {selectedPerson.contact.website && (
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600 font-subheading">{selectedPerson.contact.website}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-base lg:text-lg font-heading text-primary-navy mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.interests.map((interest: string, index: number) => (
                      <Badge key={index} className="bg-blue-50 text-blue-700 font-subheading">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                    onClick={handleContactClick}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button 
                    className={`flex-1 rounded-xl font-subheading ${
                      isFollowed(selectedPerson.id)
                        ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        : 'bg-[#0056B3] hover:bg-primary-navy text-white'
                    }`}
                    onClick={() => handleFollowClick(selectedPerson.id)}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    {isFollowed(selectedPerson.id) ? 'Following' : 'Follow'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      <Dialog open={showMessageModal} onOpenChange={setShowMessageModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-primary-navy">
              Send Message to {selectedPerson?.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Recipient Info */}
            {selectedPerson && (
              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedPerson.avatar} alt={selectedPerson.name} />
                      <AvatarFallback className="bg-primary-navy text-white font-heading">
                        {selectedPerson.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-heading text-primary-navy">{selectedPerson.name}</h4>
                      <p className="text-slate-600 font-subheading text-sm">{selectedPerson.title} at {selectedPerson.company}</p>
                      <p className="text-slate-500 font-subheading text-xs">Response time: {selectedPerson.responseTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Subject */}
            <div>
              <Label htmlFor="subject" className="font-subheading text-primary-navy">Subject</Label>
              <Input
                id="subject"
                placeholder="What's this message about?"
                value={messageData.subject}
                onChange={(e) => setMessageData({...messageData, subject: e.target.value})}
                className="mt-2 rounded-xl font-subheading"
              />
            </div>

            {/* Priority */}
            <div>
              <Label htmlFor="priority" className="font-subheading text-primary-navy">Priority</Label>
              <Select value={messageData.priority} onValueChange={(value) => setMessageData({...messageData, priority: value})}>
                <SelectTrigger className="mt-2 rounded-xl font-subheading">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="low" className="font-subheading">Low</SelectItem>
                  <SelectItem value="normal" className="font-subheading">Normal</SelectItem>
                  <SelectItem value="high" className="font-subheading">High</SelectItem>
                  <SelectItem value="urgent" className="font-subheading">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="font-subheading text-primary-navy">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                value={messageData.message}
                onChange={(e) => setMessageData({...messageData, message: e.target.value})}
                className="mt-2 min-h-[120px] rounded-xl font-subheading"
              />
            </div>

            {/* Message Tips */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <h5 className="font-subheading font-medium text-blue-900 mb-2">💡 Message Tips</h5>
                <ul className="text-blue-800 font-subheading text-sm space-y-1">
                  <li>• Be clear and specific about your purpose</li>
                  <li>• Mention any mutual connections or interests</li>
                  <li>• Keep it professional and concise</li>
                  <li>• Include a clear call-to-action if needed</li>
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                className="flex-1 rounded-xl font-subheading"
                onClick={() => setShowMessageModal(false)}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 bg-primary-navy hover:bg-slate-800 text-white rounded-xl font-subheading"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Followers Modal */}
      <Dialog open={showFollowersModal} onOpenChange={setShowFollowersModal}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md max-h-[80vh] mx-2">
          <DialogHeader className="border-b border-slate-100 pb-4">
            <DialogTitle className="font-heading text-primary-navy text-center">
              Followers ({mockFollowers.length})
            </DialogTitle>
          </DialogHeader>
          
          <div className="max-h-[60vh] overflow-y-auto">
            <div className="space-y-3 py-4">
              {mockFollowers.length > 0 ? mockFollowers.map((follower) => (
                <div key={follower.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3 flex-1">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={follower.avatar} alt={follower.name} />
                      <AvatarFallback className="bg-primary-navy text-white font-heading text-sm">
                        {follower.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-primary-navy text-sm truncate">{follower.name}</h4>
                      <p className="text-slate-600 font-subheading text-xs truncate">{follower.title}</p>
                      <p className="text-slate-500 font-subheading text-xs truncate">{follower.company}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className={`${
                      follower.isFollowing
                        ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        : 'bg-primary-navy hover:bg-primary-navy/90 text-white'
                    } rounded-lg font-subheading text-xs px-4 flex-shrink-0`}
                    onClick={() => handleFollowFromModal(follower.id)}
                  >
                    {follower.isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </div>
              )) : (
                <div className="text-center py-8 text-slate-500">
                  <p>No followers found</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Following Modal */}
      <Dialog open={showFollowingModal} onOpenChange={setShowFollowingModal}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md max-h-[80vh] mx-2">
          <DialogHeader className="border-b border-slate-100 pb-4">
            <DialogTitle className="font-heading text-primary-navy text-center">
              Following ({mockFollowing.length})
            </DialogTitle>
          </DialogHeader>
          
          <div className="max-h-[60vh] overflow-y-auto">
            <div className="space-y-3 py-4">
              {mockFollowing.length > 0 ? mockFollowing.map((following) => (
                <div key={following.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3 flex-1">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={following.avatar} alt={following.name} />
                      <AvatarFallback className="bg-primary-navy text-white font-heading text-sm">
                        {following.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-primary-navy text-sm truncate">{following.name}</h4>
                      <p className="text-slate-600 font-subheading text-xs truncate">{following.title}</p>
                      <p className="text-slate-500 font-subheading text-xs truncate">{following.company}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-200 text-slate-700 hover:bg-slate-300 rounded-lg font-subheading text-xs px-4 flex-shrink-0"
                    onClick={() => handleFollowFromModal(following.id)}
                  >
                    Following
                  </Button>
                </div>
              )) : (
                <div className="text-center py-8 text-slate-500">
                  <p>Not following anyone</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
