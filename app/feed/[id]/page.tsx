"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Heart,
  BookmarkIcon,
  MoreHorizontal,
  Share,
  Trash2,
  Flag,
  CornerUpRight
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
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Mock posts data - same as feed page
const posts = [
  {
    id: 'post-1',
    author: 'Emily Rodriguez',
    title: 'UX Designer at Apple',
    timeAgo: '2 hours ago',
    avatar: '/placeholder.svg?height=40&width=40',
    content: `🚀 Just wrapped up an incredible design sprint with my team at Apple! 

We've been working on reimagining how users interact with accessibility features in iOS. It's amazing how small design changes can have such a massive impact on people's daily lives.

Key takeaways from this week:
✨ Always design with empathy first
🎯 Test early, test often with real users  
🤝 Collaboration beats perfection every time
💡 Sometimes the simplest solution is the most powerful

Shoutout to my amazing team for pushing boundaries and thinking differently. This is why I love what we do! 

#UXDesign #Accessibility #Apple #DesignThinking #TeamWork`,
    likes: 127,
    commentsCount: 23,
    image: '/campus-walk.png',
    imageTitle: 'iOS Accessibility Design Sprint',
    imageDescription: 'Our team collaborating on new accessibility features that will impact millions of users worldwide.',
    imageSource: 'Apple Design Team',
    comments: [
      {
        id: 1,
        author: 'Sarah Johnson',
        avatar: '/placeholder-user.jpg',
        content: 'This is incredible Emily! Accessibility in design is so important and often overlooked. Can\'t wait to see what you all come up with!',
        timeAgo: '1 hour ago',
        likes: 12
      },
      {
        id: 2,
        author: 'Mike Chen',
        avatar: '/placeholder-user.jpg',
        content: 'Love seeing the behind-the-scenes of how these features come to life. The impact on users with disabilities will be huge!',
        timeAgo: '45 minutes ago',
        likes: 8
      },
      {
        id: 3,
        author: 'Jessica Williams',
        avatar: '/placeholder-user.jpg',
        content: 'Your approach to user-centered design is inspiring. Would love to hear more about your testing methodology!',
        timeAgo: '30 minutes ago',
        likes: 5
      }
    ]
  },
  {
    id: 'post-2',
    author: 'Ian Arruda, MPM, CAPM',
    title: 'Arizona State University · Project Management',
    timeAgo: '1 day ago',
    avatar: '/placeholder.svg?height=40&width=40',
    content: `🎓 I finally did it! After two years of balancing work, studies, and life, I've earned my Master of Project Management degree from Arizona State University.

This journey taught me that persistence pays off. Thank you to everyone who supported me along the way – mentors, classmates, and the incredible 100 Networks community! 

Next chapter: Leading impactful projects and helping others achieve their goals. 🚀`,
    likes: 89,
    commentsCount: 12,
    comments: [
      {
        id: 1,
        author: 'Jessica Williams',
        avatar: '/placeholder-user.jpg',
        content: 'Amazing achievement Ian! Your dedication really paid off. Excited to see what projects you lead next!',
        timeAgo: '20 hours ago',
        likes: 6
      },
      {
        id: 2,
        author: 'David Park',
        avatar: '/placeholder-user.jpg',
        content: 'Congratulations! Project management is such a valuable skill. Any advice for someone just starting their PM journey?',
        timeAgo: '18 hours ago',
        likes: 4
      }
    ]
  },
  {
    id: 'post-3',
    author: 'David Park',
    title: 'Data Scientist at Netflix',
    timeAgo: '3 days ago',
    avatar: '/placeholder.svg?height=40&width=40',
    content: `📊 Just published my latest research on machine learning algorithms for content recommendation systems!

After months of research and testing, we've developed a new approach that improves user engagement by 23% while reducing computational costs by 15%.

The key insights:
🧠 Context matters more than we thought
📈 Hybrid models outperform single approaches
⚡ Efficiency and accuracy can coexist
🎯 User feedback loops are crucial

Thanks to my incredible team at Netflix for making this possible. Research like this is what drives innovation in the streaming industry!

Link to full paper in comments 👇

#MachineLearning #DataScience #Netflix #AI #Research`,
    likes: 156,
    commentsCount: 31,
    comments: [
      {
        id: 1,
        author: 'Emily Rodriguez',
        avatar: '/placeholder-user.jpg',
        content: 'Fascinating research David! The efficiency gains are particularly impressive. How did you balance accuracy vs performance?',
        timeAgo: '2 days ago',
        likes: 15
      },
      {
        id: 2,
        author: 'Mike Chen',
        avatar: '/placeholder-user.jpg',
        content: 'This could have huge implications for the industry. Are you planning to open-source any of the methodology?',
        timeAgo: '2 days ago',
        likes: 12
      }
    ]
  }
]

export default function PostDetailsPage() {
  const params = useParams()
  const postId = params.id as string
  
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set())
  const [newComment, setNewComment] = useState("")
  const [shareModalPost, setShareModalPost] = useState<any>(null)
  const [deleteModalPost, setDeleteModalPost] = useState<any>(null)
  const [reportModalPost, setReportModalPost] = useState<any>(null)
  const [reportReason, setReportReason] = useState("")
  const [selectedMutualFollowers, setSelectedMutualFollowers] = useState<string[]>([])
  const [shareMessage, setShareMessage] = useState("")

  // Find the post by ID
  const selectedPost = posts.find(post => post.id === postId)

  if (!selectedPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-primary-navy mb-4">Post Not Found</h1>
          <p className="text-slate-600 font-subheading mb-6">The post you're looking for doesn't exist.</p>
          <Link href="/feed">
            <Button className="bg-primary-navy hover:bg-primary-navy/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Feed
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev)
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId)
      } else {
        newLikedPosts.add(postId)
      }
      return newLikedPosts
    })
  }

  const toggleSave = (postId: string) => {
    setSavedPosts(prev => {
      const newSavedPosts = new Set(prev)
      if (newSavedPosts.has(postId)) {
        newSavedPosts.delete(postId)
      } else {
        newSavedPosts.add(postId)
      }
      return newSavedPosts
    })
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log('Adding comment:', newComment)
      setNewComment("")
    }
  }

  const handleShare = (post: any) => {
    setShareModalPost(post)
    setSelectedMutualFollowers([])
    setShareMessage("")
  }

  const handleDelete = (post: any) => {
    setDeleteModalPost(post)
  }

  const handleReport = (post: any) => {
    setReportModalPost(post)
  }

  const confirmDelete = () => {
    console.log('Deleting post:', deleteModalPost?.id)
    setDeleteModalPost(null)
  }

  const submitReport = () => {
    console.log('Reporting post:', reportModalPost?.id, 'Reason:', reportReason)
    setReportModalPost(null)
    setReportReason("")
  }

  // Sample mutual followers data
  const mutualFollowers = [
    {
      id: 'user-1',
      name: 'Sarah Johnson',
      avatar: '/placeholder-user.jpg',
      title: 'Software Engineer at Meta',
      isOnline: true
    },
    {
      id: 'user-2', 
      name: 'Mike Chen',
      avatar: '/placeholder-user.jpg',
      title: 'Product Manager at Google',
      isOnline: false
    },
    {
      id: 'user-3',
      name: 'Emily Rodriguez',
      avatar: '/placeholder-user.jpg',
      title: 'UX Designer at Apple',
      isOnline: true
    },
    {
      id: 'user-4',
      name: 'David Park',
      avatar: '/placeholder-user.jpg',
      title: 'Data Scientist at Netflix',
      isOnline: false
    },
    {
      id: 'user-5',
      name: 'Jessica Williams',
      avatar: '/placeholder-user.jpg',
      title: 'Marketing Director at Spotify',
      isOnline: true
    }
  ]

  const toggleMutualFollower = (userId: string) => {
    setSelectedMutualFollowers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const shareWithFollowers = () => {
    if (selectedMutualFollowers.length > 0) {
      console.log('Sharing post with:', selectedMutualFollowers, 'Message:', shareMessage)
      setShareModalPost(null)
      setSelectedMutualFollowers([])
      setShareMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-sm border-0 rounded-none sm:rounded-2xl sm:m-4">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/feed">
                <Button
                  variant="ghost"
                  className="rounded-xl"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Feed
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <AvatarImage src={selectedPost.avatar} alt="User" />
                  <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium">
                    {selectedPost.author.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <h1 className="font-heading text-lg sm:text-xl text-primary-navy truncate">{selectedPost.author}</h1>
                  <p className="text-sm sm:text-base text-slate-500 font-subheading line-clamp-2">{selectedPost.title}</p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">{selectedPost.timeAgo}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-[#0056B3] transition-all duration-200 h-8 w-8 sm:h-10 sm:w-10" 
                  onClick={() => handleShare(selectedPost)}
                >
                  <CornerUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-8 w-8 sm:h-10 sm:w-10">
                      <MoreHorizontal className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 sm:w-52">
                    <DropdownMenuItem onClick={() => handleShare(selectedPost)} className="cursor-pointer">
                      <Share className="h-4 w-4 mr-2" />
                      Share post
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(selectedPost)} className="cursor-pointer text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete post
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleReport(selectedPost)} className="cursor-pointer">
                      <Flag className="h-4 w-4 mr-2" />
                      Report post
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Post Content */}
            <div className="mb-6">
              <p className="text-slate-700 font-subheading leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {selectedPost.content}
              </p>
            </div>

            {/* Post Image */}
            {selectedPost.image && (
              <div className="rounded-xl overflow-hidden border border-slate-100 mb-6">
                <img src={selectedPost.image} alt="Post content" className="w-full h-48 sm:h-64 md:h-72 object-cover" />
                {selectedPost.imageTitle && (
                  <div className="p-4 bg-slate-50">
                    <h3 className="font-heading text-lg sm:text-xl text-primary-navy mb-2">{selectedPost.imageTitle}</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-subheading">{selectedPost.imageDescription}</p>
                    <p className="text-sm text-[#0056B3] mt-2 font-medium">{selectedPost.imageSource}</p>
                  </div>
                )}
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <span className="text-slate-500 font-subheading text-sm sm:text-base">{selectedPost.likes} likes • {selectedPost.commentsCount} comments</span>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className={`hover:bg-transparent transition-all duration-200 p-2 sm:p-3 ${
                    likedPosts.has(selectedPost.id) 
                      ? 'text-red-500' 
                      : 'text-slate-600 hover:text-red-500'
                  }`}
                  onClick={() => toggleLike(selectedPost.id)}
                >
                  <Heart className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-200 stroke-[2.5] ${
                    likedPosts.has(selectedPost.id) ? 'fill-red-500' : ''
                  }`} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className={`hover:bg-transparent transition-all duration-200 p-2 sm:p-3 ${
                    savedPosts.has(selectedPost.id) 
                      ? 'text-[#0056B3]' 
                      : 'text-slate-600 hover:text-[#0056B3]'
                  }`}
                  onClick={() => toggleSave(selectedPost.id)}
                >
                  <BookmarkIcon className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-200 stroke-[2.5] ${
                    savedPosts.has(selectedPost.id) ? 'fill-[#0056B3]' : ''
                  }`} />
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="font-heading text-lg sm:text-xl text-primary-navy mb-4">Comments</h3>
              
              {/* Add Comment */}
              <div className="flex space-x-3 mb-6">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" alt="You" />
                  <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">YU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[60px] sm:min-h-[80px] resize-none border-slate-200 !outline-none !ring-0 !shadow-none focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-slate-300 text-sm sm:text-base font-subheading rounded-xl"
                  />
                  <div className="flex justify-end mt-2">
                    <Button
                      onClick={handleAddComment}
                      disabled={!newComment.trim()}
                      size="sm"
                      className="bg-primary-navy hover:bg-primary-navy/90 text-white rounded-full px-4 py-2 text-xs sm:text-sm"
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {selectedPost.comments.map((comment: any) => (
                  <div key={comment.id} className="flex space-x-3">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">
                        {comment.author.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 bg-slate-50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-primary-navy text-sm sm:text-base">{comment.author}</div>
                        <div className="text-xs sm:text-sm text-slate-400">{comment.timeAgo}</div>
                      </div>
                      <p className="text-slate-700 font-subheading text-sm sm:text-base leading-relaxed mb-2">
                        {comment.content}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-500 hover:bg-transparent p-1">
                          <Heart className="h-4 w-4 mr-1" />
                          <span className="text-xs">{comment.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-primary-navy hover:bg-transparent p-1 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Share Modal */}
      {shareModalPost && (
        <Dialog open={!!shareModalPost} onOpenChange={() => setShareModalPost(null)}>
          <DialogContent className="max-w-[92%] sm:max-w-[85%] md:max-w-[500px] max-h-[80vh] sm:max-h-[85vh] p-0 bg-white rounded-xl sm:rounded-2xl shadow-2xl border-0 overflow-hidden mx-auto">
            <DialogHeader className="p-3 sm:p-4 border-b border-slate-100 flex-shrink-0">
              <DialogTitle className="font-heading text-sm sm:text-base md:text-lg text-primary-navy">Share Post</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {/* Post Preview */}
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                    <AvatarImage src={shareModalPost.avatar} alt={shareModalPost.author} />
                    <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">
                      {shareModalPost.author.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-primary-navy text-sm sm:text-base truncate">{shareModalPost.author}</p>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">{shareModalPost.content.substring(0, 60)}...</p>
                  </div>
                </div>
                
                {/* Share with Mutual Followers */}
                <div>
                  <h4 className="font-medium text-primary-navy mb-2 text-sm sm:text-base">Share with mutual followers</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {mutualFollowers.map((follower) => (
                      <div
                        key={follower.id}
                        className={`flex items-center space-x-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedMutualFollowers.includes(follower.id)
                            ? 'bg-[#0056B3]/10 border border-[#0056B3]/20'
                            : 'hover:bg-slate-50'
                        }`}
                        onClick={() => toggleMutualFollower(follower.id)}
                      >
                        <div className="relative">
                          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                            <AvatarImage src={follower.avatar} alt={follower.name} />
                            <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-xs sm:text-sm">
                              {follower.name.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {follower.isOnline && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-primary-navy text-sm sm:text-base truncate">{follower.name}</p>
                          <p className="text-xs sm:text-sm text-slate-500 truncate">{follower.title}</p>
                        </div>
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center ${
                          selectedMutualFollowers.includes(follower.id)
                            ? 'bg-[#0056B3] border-[#0056B3]'
                            : 'border-slate-300'
                        }`}>
                          {selectedMutualFollowers.includes(follower.id) && (
                            <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Message */}
                <div>
                  <label className="block font-medium text-primary-navy mb-2 text-sm sm:text-base">Add a message (optional)</label>
                  <Textarea
                    placeholder="Write something about this post..."
                    value={shareMessage}
                    onChange={(e) => setShareMessage(e.target.value)}
                    className="min-h-[60px] sm:min-h-[80px] resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => setShareModalPost(null)}
                    className="flex-1 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={shareWithFollowers}
                    disabled={selectedMutualFollowers.length === 0}
                    className="flex-1 h-10 sm:h-11 bg-[#0056B3] hover:bg-[#0056B3]/90 text-sm sm:text-base"
                  >
                    Share ({selectedMutualFollowers.length})
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Modal */}
      {deleteModalPost && (
        <Dialog open={!!deleteModalPost} onOpenChange={() => setDeleteModalPost(null)}>
          <DialogContent className="max-w-[95%] sm:max-w-[400px] p-0 bg-white rounded-2xl shadow-2xl border-0">
            <DialogHeader className="p-4 sm:p-6 border-b border-slate-100">
              <DialogTitle className="font-heading text-lg sm:text-xl text-red-600">Delete Post</DialogTitle>
            </DialogHeader>
            <div className="p-4 sm:p-6">
              <p className="text-slate-700 mb-6 text-sm sm:text-base">
                Are you sure you want to delete this post? This action cannot be undone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  onClick={() => setDeleteModalPost(null)}
                  className="flex-1 h-11"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={confirmDelete}
                  className="flex-1 h-11"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Report Modal */}
      {reportModalPost && (
        <Dialog open={!!reportModalPost} onOpenChange={() => setReportModalPost(null)}>
          <DialogContent className="max-w-[95%] sm:max-w-[500px] p-0 bg-white rounded-2xl shadow-2xl border-0">
            <DialogHeader className="p-4 sm:p-6 border-b border-slate-100">
              <DialogTitle className="font-heading text-lg sm:text-xl text-primary-navy">Report Post</DialogTitle>
            </DialogHeader>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarImage src={reportModalPost.avatar} alt={reportModalPost.author} />
                    <AvatarFallback className="bg-[#0056B3]/10 text-[#0056B3] font-medium text-sm">
                      {reportModalPost.author.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-primary-navy text-sm sm:text-base truncate">{reportModalPost.author}</p>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">{reportModalPost.content.substring(0, 80)}...</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-primary-navy mb-3 text-sm sm:text-base">Why are you reporting this post?</p>
                  <div className="space-y-2">
                    {[
                      'Inappropriate content',
                      'Spam or misleading',
                      'Harassment or bullying',
                      'False information',
                      'Intellectual property violation',
                      'Other'
                    ].map((reason) => (
                      <label key={reason} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50">
                        <input
                          type="radio"
                          name="reportReason"
                          value={reason}
                          checked={reportReason === reason}
                          onChange={(e) => setReportReason(e.target.value)}
                          className="text-[#0056B3] focus:ring-[#0056B3]"
                        />
                        <span className="text-sm sm:text-base text-slate-700">{reason}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setReportModalPost(null)}
                    className="flex-1 h-11"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={submitReport}
                    disabled={!reportReason}
                    className="flex-1 h-11 bg-[#0056B3] hover:bg-[#0056B3]/90"
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}