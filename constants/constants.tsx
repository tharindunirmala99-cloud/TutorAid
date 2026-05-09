
import { Tutor, Testimonial, BlogPost, PricingPlan } from '../types';

export const TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Suhani',
    subject: 'Mathematics Specialist',
    rating: 5.0,
    bio: 'Maths Tutor with over 10 years of experience. I help students master the UK National Curriculum, Edexcel, and Cambridge syllabuses with a professional, student-centered approach.',
    tags: ['Mathematics', 'Edexcel', 'Cambridge'],
    imageUrl: './media/images/tutor_photos/Suhani Wijetilake.png',
    gradient: 'from-blue-200 to-indigo-200'
  },
  {
    id: '2',
    name: 'Needra',
    subject: 'Maths & Science Specialist',
    rating: 5.0,
    bio: 'Civil Engineer and tutor with 5+ years of experience. I specialize in making complex GCSE and IGCSE concepts simple and engaging for all learning styles.',
    tags: ['Mathematics', 'Science'],
    imageUrl: './media/images/tutor_photos/Needra Rosary.jpg',
    gradient: 'from-primary/30 to-secondary/30'
  },
  {
    id: '3',
    name: 'Khadija',
    subject: 'English Language Teacher',
    rating: 4.0,
    bio: 'I focus on building confidence in reading, writing, speaking, and listening through meaningful activities and discussions in a supportive classroom environment.',
    tags: ['English'],
    imageUrl: './media/images/tutor_photos/Khadija Shiraz.jpg',
    gradient: 'from-green-200 to-emerald-200'
  },
  {
    id: '4',
    name: 'Saman',
    subject: 'English Language Expert (ELT)',
    rating: 3.0,
    bio: 'Highly qualified ELT professional (MA in TESOL) providing simple and interesting lessons tailored to the student’s level. Expert in Grammar and the four language skills.',
    tags: ['English', 'TESOL'],
    imageUrl: './media/images/tutor_photos/saman pitawala.jpg',
    gradient: 'from-purple-200 to-pink-200'
  },
  {
    id: '5',
    name: 'Azka',
    subject: 'Mathematics & Computer Science',
    rating: 5.0,
    bio: 'Master’s graduate in Computer Science with 8 years of tutoring experience. I simplify complex Mathematics for primary and GCSE students while incorporating Child Psychology insights.',
    tags: ['Mathematics', 'Computer Science', 'Science'],
    imageUrl: './media/images/tutor_photos/Azka Shereen.jpeg',
    gradient: 'from-orange-200 to-yellow-200'
  },
  {
    id: '6',
    name: 'Janani',
    subject: 'Mathematics Tutor',
    rating: 5.0,
    bio: 'Undergraduate at University of Moratuwa. I provide interactive one-on-one Mathematics lessons for primary and secondary students, focusing on bridging learning gaps.',
    tags: ['Mathematics'],
    imageUrl: './media/images/tutor_photos/C Pitawala.jpg',
    gradient: 'from-cyan-200 to-blue-200'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Devmi',
    role: 'Parent of 10th Grader',
    content: '"My daughter was struggling with Algebra, but after just 3 sessions with TutorAid, her confidence has skyrocketed. Her grades have improved significantly!"',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpxQCQKgVgIH5Q1FTmmT4PSpiLPrpkIFoPcrh3H2h_S8pvLouHM0Y-W0QVYLZrnExFfq3Tk2JC_J8JcdfVR1q6-xV0yoHsHzRtFXmrslBiF5YwbpxRoJm1fNQTUYoQEcoYhojNcpwj-qabN8QvbgiSyV_GWtZ43Qu_HCPaefN014-NP4xKgvLsc5Opq5BbHIx5lq0ZyblhlLQc-GTojlWsy8lsJToGLsCDBqfMiMfulmuNu97suvPkKN0yhKUXESSaalQc13GLLNe3'
  },
  {
    id: '2',
    name: 'Thushan',
    role: 'Student, Grade 10',
    content: '"The tutors here are amazing. They explain things in a way that actually makes sense. I used to hate science, but now it\'s my favorite subject."',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE0GYwkMTyeApl5_0NgX33catibZX0t8OdiMq0N3_tSfcMK8c0TzsL7zhDezXBzvNXz4ujunEIbB3axYE91-vKZ3yFYblePdGpaKi5UXdNJPSX_LAPi3kiDE0_vNcLfklprO7XbO5NfAvdz-XK7s38Y_NraTf4u0gRWg2B9of-bO6u_WneBPjJ-Wn9oaLD4-JoVm-Ci6dvzWxWDn-aTCZmR8-tqbSjaGEg0lkTBVZdCB8M82Q3W6WNyYgVjZqOuRcDW2-6RoXM-ceq'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Study Tips',
    title: '5 Proven Techniques to Improve Memory',
    description: 'Discover how spaced repetition and active recall can boost your exam performance.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3_uLX2wnxCdGRJqQXeWf5QS2cK6SuQE_zrSgHJ8ZYY2BcOEeQ__jtXXuD79tsEtpjSgB2mULyMT66TTElSkzPS0KqFPJ1LAzZLZsZLKPZnGK0V8Z6pZd6UNktyUkN3u2RVMKcHJGSfimTbq18d_Ej4JWlTpuzX6wdVMf0BfTn4fas49aqeo00ap-vlWBn6FfUbA5RDfhJLxKORc-Df3TUmpY1q1iw2eQYmZbBxRVMmaifLgpUOvAxt9G1m2lMy5RLwkB-42X2OfBF'
  },
  {
    id: '2',
    category: 'EdTech',
    title: 'The Future of Online Learning',
    description: 'How virtual classrooms are changing the way students interact with tutors globally.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkbaIspwoKjPN4rXM5x0gVjC1POemyvb16Yxt-IhMogiUG2OrpQGr2PW1FHxV6wC0sVJ7QpGiaYTG75MCy_Ct5AGVE5qW1XqUqwFwojPPPhz6rL_63Wov_iHTc1a5GAWaNJ88SlA_pkCS-IrJMa3KlnkHIlHe8CfKMly0XNxziueAVNiOwNeoKIVwYBz2QSluWQfpZcSSkzN164ZptYFEsBrU_QI89Mnv_8JmQ9e5gMpEN_DJXTB7ITD12ZEiTyspRv4vJK2tZqOG'
  },
  {
    id: '3',
    category: 'Exam Prep',
    title: 'How to Manage Exam Stress',
    description: 'Practical mindfulness exercises and scheduling tips to keep calm during finals week.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDznEJQcF6kiBBefnng9dyMRbhIYr6w13kHc_PksBgVV7KFxNkJ1mZfo5__nHSwcasKFwp604Ckq1MsE5v3vTWU2xGDrm89K4l9_VkHeXpUbDN_n4bxNRS6_Qj6hwAS0mWOSR6K-TpeBJKfO72byOudKg5pw6PSDyK6hiLZfTqw42c0ySwBA8bfn57DlV4MhHOxJ-KT2Qp3mE-TFoIud6sj1wYd4iIffgA600xLrD1hPfn2vOXjOAnOSZJq16gCWQwbn6iNisN6JTt'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    name: 'Single Session',
    price: '$25',
    period: '/ hour',
    description: 'Perfect for last-minute exam prep or specific topic help.',
    features: ['Pay as you go', 'Any subject', '24/7 Support']
  },
  {
    id: '2',
    name: 'Monthly Bundle',
    price: '$99',
    period: '/ month',
    description: '5 hours of tutoring. Save 20% on every session.',
    features: ['5 hours included', 'Priority booking', 'Progress reports', 'Cancel anytime'],
    isPopular: true
  },
  {
    id: '3',
    name: 'Group Sessions',
    price: '$15',
    period: '/ hour',
    description: 'Learn with peers in small groups of 3-5 students.',
    features: ['Collaborative learning', 'Structured curriculum', 'Recorded sessions']
  }
];
