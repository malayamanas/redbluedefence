import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

const sampleCurriculum = [
  {
    moduleTitle: 'Introduction & Environment Setup',
    topics: ['Course overview', 'Lab environment', 'Prerequisites review'],
    duration: '2 hours',
  },
  {
    moduleTitle: 'Core Concepts',
    topics: ['Fundamentals', 'Key technologies', 'Architecture patterns'],
    duration: '8 hours',
  },
  {
    moduleTitle: 'Hands-on Labs',
    topics: ['Practical exercises', 'Real-world scenarios', 'Capture the flag'],
    duration: '15 hours',
  },
  {
    moduleTitle: 'Exam Preparation',
    topics: ['Practice questions', 'Study strategies', 'Mock exam'],
    duration: '5 hours',
  },
]

export default async function TrainingCoursePage({ params }: Props) {
  const { slug } = await params
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <Badge variant="purple" className="mb-4">Training Course</Badge>
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400 mb-8">
            Comprehensive hands-on training designed to prepare you for real-world security challenges
            and industry certifications.
          </p>

          {/* Curriculum */}
          <h2 className="text-2xl font-bold text-white mb-6">Curriculum</h2>
          <div className="space-y-4">
            {sampleCurriculum.map((module, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4">
                  <div>
                    <span className="text-sm text-[#a855f7] mr-2">Module {i + 1}</span>
                    <span className="font-medium text-white">{module.moduleTitle}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-4 flex-shrink-0">{module.duration}</span>
                </summary>
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7c43ff]" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-1">Free</div>
            <p className="text-sm text-gray-500 mb-6">Full course access</p>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Duration</span>
                <span className="text-white">30 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Level</span>
                <span className="text-white">Intermediate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Format</span>
                <span className="text-white">Online, self-paced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Certificate</span>
                <span className="text-white">Yes</span>
              </div>
            </div>

            <Button href="/contact" size="lg" className="w-full">
              Enrol Now
            </Button>
            <Button href="/contact" variant="secondary" size="md" className="w-full mt-3">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
