
import { Tutor, Testimonial, BlogPost, PricingPlan } from '../types';

export const TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    subject: 'Mathematics Expert',
    rating: 4.9,
    bio: 'Passionate about making Math easy to understand. 5 years of experience teaching high school algebra and calculus.',
    tags: ['Algebra', 'Calculus'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqR-G0cF6KCcQ2Vff8QKurStKSqq5-y5ex49UdKbl3fycYcAQQ4G9C1QpEfgIqMT3DUr6d_mjr5QOOdnAnblEb46Ev7pYEbclidp5zI6g300h-6BTV8Yi-RlDRTrPxielceCHWlRDeV-S2R9OWmrbh7d0DrkzZiyoWJ2CI25UvHUwTUMJJjM2eIUi6u2lL59WhScm4YOw_xrZ-LW3oxjddMbN_LwVLdgHiqZVC5dL3wdUcWTH16QzyoxxrXqQQ1o-BxVxJsmp_7GBR',
    gradient: 'from-primary/30 to-secondary/30'
  },
  {
    id: '2',
    name: 'David Chen',
    subject: 'Physics & Chemistry',
    rating: 5.0,
    bio: 'PhD student offering in-depth science tutoring. I focus on practical examples to explain complex theories.',
    tags: ['Physics', 'Chemistry'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLAgyGUtYrSys2MFsH0lvhTuJINLmn7YtKTz9gmlv1x7-OmA8OI6g0YshmnjpUOERQepXoMLRB0tameqXFFprqtds5siSNkczpJ0D3JiSzhfWi8IvQly9NBKVJZuGp_EO8xoQxpkxQ2Km5_kQbhGkd_qNo-BFTYVrP1Ioz8HMcz1SkpI1Kr_j4URYAN7TiGHuUSUmB2PYzDFoOE0tdm7ZYWbwNg92HHoSdfv2b8MiXRuLqzotYzTmCLBuGHu0vchctbhJ8F8PzUIuI',
    gradient: 'from-blue-200 to-indigo-200'
  },
  {
    id: '3',
    name: 'Emily Rose',
    subject: 'English Literature',
    rating: 4.8,
    bio: 'Helping students find their voice in writing. Specializing in essay composition and literature analysis.',
    tags: ['Essay Writing', 'Literature'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaOgjw9eLft7HzD3H2W2ddL8i6BTXgSBkg4EtAcv0e6h55ck0d4wljXCd5_WFXmC7DB8EC0bL532G-VgLHZraP0OIsNybvEWZh1X8GHqh8St-0I7kvEm-qdPGXN02LVk8gQHgCNPxGE8yFfg5K5P3Ki_VqEHMHH66m1Ni1_eqmiC9Y27LnQ0-dUKoB3a3Oz1M8JzSckgW10snIFXbUIaxLCX7-VsMT3SEm-OQM1eZKVoRXVlmiYleRWkPiLaiYbtvlmb7P7HlM68CB',
    gradient: 'from-green-200 to-emerald-200'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer M.',
    role: 'Parent of 10th Grader',
    content: '"My daughter was struggling with Algebra, but after just 3 sessions with tutorAID, her confidence has skyrocketed. Her grades have improved significantly!"',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpxQCQKgVgIH5Q1FTmmT4PSpiLPrpkIFoPcrh3H2h_S8pvLouHM0Y-W0QVYLZrnExFfq3Tk2JC_J8JcdfVR1q6-xV0yoHsHzRtFXmrslBiF5YwbpxRoJm1fNQTUYoQEcoYhojNcpwj-qabN8QvbgiSyV_GWtZ43Qu_HCPaefN014-NP4xKgvLsc5Opq5BbHIx5lq0ZyblhlLQc-GTojlWsy8lsJToGLsCDBqfMiMfulmuNu97suvPkKN0yhKUXESSaalQc13GLLNe3'
  },
  {
    id: '2',
    name: 'Michael T.',
    role: 'Student, Grade 12',
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
