import Link from '@/components/Link'
import ProfileCard from '@/components/ProfileCard'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import Twemoji from '@/components/Twemoji.js'
import TypedBios from '@/components/TypedBios'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600'
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
        <div className="my-4 pt-6 pb-8 space-y-2 md:space-y-5 xl:grid xl:grid-cols-3">
          <div className="xl:col-span-2 pr-2">
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
                Dilip Kumar <i className="twa twa-waving-hand"></i>
              </h1>
              <p className="mt-4 mb-2 text-justify">
                Good day! I'm glad you're here. I'm Dilip Kumar - Frontend Web Developer at{' '}
                <a href="http://www.taknikbharti.com" rel="noopener">
                  Taknik Bharti
                </a>
                .
              </p>



              <p className="mt-4 mb-4">
                I work at Taknik Bharti as a Frontend Web Developer on various projects for their Clients alongside the Designers and Backend Developers Team. I've previously done freelance work. I have a strong interest in computers and technology. I can learn new things quickly, I can be relied upon, and my interests are in frontend web development.
              </p>
              <div className="flex flex-col">
                <Link href="/projects" className="hover:underline">
                  <Twemoji emoji="hammer-and-wrench" /> What have I built?
                </Link>
                <Link href="/snippets" className="hover:underline">
                  <Twemoji emoji="dna" /> Useful snippets collected by me
                </Link>
                <Link href="/about" className="hover:underline">
                  <Twemoji emoji="face-with-monocle" /> More about myself
                </Link>
                <Link href="/resume" className="hover:underline">
                  <Twemoji emoji="briefcase" /> My resume
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>

    </>
  )
}
