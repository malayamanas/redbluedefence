import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Training Courses',
  description: 'Microsoft security certifications, DevSecOps, cloud security, and more.',
}

const categories = [
  { value: 'all', label: 'All Courses' },
  { value: 'microsoft-security', label: 'Microsoft Security' },
  { value: 'microsoft-azure', label: 'Microsoft Azure' },
  { value: 'devsecops', label: 'DevSecOps' },
  { value: 'linux-containers', label: 'Linux & Containers' },
  { value: 'scripting-automation', label: 'Scripting & Automation' },
  { value: 'data-ml-ai', label: 'Data, ML & AI' },
]

const featuredCourses = [
  {
    code: 'SC-200',
    title: 'Microsoft Security Operations Analyst',
    category: 'microsoft-security',
    level: 'intermediate',
    duration: '40 hours',
    price: 0,
    slug: 'sc-200-security-operations-analyst',
  },
  {
    code: 'SC-300',
    title: 'Microsoft Identity & Access Administrator',
    category: 'microsoft-security',
    level: 'intermediate',
    duration: '35 hours',
    price: 0,
    slug: 'sc-300-identity-access-administrator',
  },
  {
    code: 'AZ-500',
    title: 'Microsoft Azure Security Engineer',
    category: 'microsoft-azure',
    level: 'advanced',
    duration: '45 hours',
    price: 0,
    slug: 'az-500-azure-security-engineer',
  },
  {
    code: 'SC-100',
    title: 'Microsoft Cybersecurity Architect',
    category: 'microsoft-security',
    level: 'advanced',
    duration: '50 hours',
    price: 0,
    slug: 'sc-100-cybersecurity-architect',
  },
  {
    code: 'DevSecOps',
    title: 'DevSecOps Practitioner',
    category: 'devsecops',
    level: 'intermediate',
    duration: '30 hours',
    price: 0,
    slug: 'devsecops-practitioner',
  },
  {
    code: 'K8s',
    title: 'Kubernetes Security Fundamentals',
    category: 'linux-containers',
    level: 'intermediate',
    duration: '25 hours',
    price: 0,
    slug: 'kubernetes-security-fundamentals',
  },
]

const levelColors: Record<string, string> = {
  beginner: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  intermediate: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  advanced: 'text-red-400 bg-red-400/10 border-red-400/20',
}

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center" data-aos="fade-up">
        <Badge variant="purple" className="mb-4">Training</Badge>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Build Your Security Expertise
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          From Microsoft security certifications to DevSecOps and AI security — hands-on training
          designed by practitioners, for practitioners.
        </p>
      </div>

      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2 justify-center" data-aos="fade-up">
        {categories.map((cat) => (
          <a
            key={cat.value}
            href={cat.value === 'all' ? '/training' : `/training?category=${cat.value}`}
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all hover:border-[#7c43ff]/40 hover:text-white"
          >
            {cat.label}
          </a>
        ))}
      </div>

      {/* Course grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course, i) => (
          <Card key={course.slug} data-aos="fade-up" data-aos-delay={i * 50} className="flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <span className="rounded-lg bg-[#7c43ff]/20 px-3 py-1 text-sm font-bold text-[#a855f7]">
                {course.code}
              </span>
              <span className={`rounded-full border px-3 py-1 text-xs font-medium ${levelColors[course.level]}`}>
                {course.level}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white flex-1">{course.title}</h3>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>⏱ {course.duration}</span>
              <span className="font-semibold text-emerald-400">
                {course.price === 0 ? 'Free' : `£${course.price}`}
              </span>
            </div>
            <Button href={`/training/${course.slug}`} size="sm" className="mt-4 w-full">
              View Course
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center" data-aos="fade-up">
        <p className="text-gray-400 mb-4">Looking for bespoke training for your team?</p>
        <Button href="/contact" variant="secondary" size="lg">
          Request Corporate Training
        </Button>
      </div>
    </div>
  )
}
