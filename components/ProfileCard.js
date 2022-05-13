import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Twemoji from './Twemoji'
import Link from 'next/link'

const ProfileCard = () => {
  // const { data } = useSWR('/api/spotify', fetcher)

  const ref = useRef(null)
  const [style, setStyle] = useState({})

  // const onMouseMove = useCallback((e) => {
  //   if (!ref.current || window.innerWidth < 1280) return

  //   const { clientX, clientY } = e
  //   const { width, height, x, y } = ref.current.getBoundingClientRect()
  //   const mouseX = Math.abs(clientX - x)
  //   const mouseY = Math.abs(clientY - y)
  //   const rotateMin = -15
  //   const rotateMax = 15
  //   const rotateRange = rotateMax - rotateMin

  //   const rotate = {
  //     x: rotateMax - (mouseY / height) * rotateRange,
  //     y: rotateMin + (mouseX / width) * rotateRange,
  //   }

  //   setStyle({
  //     transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
  //   })
  // }, [])

  // const onMouseLeave = useCallback(() => {
  //   setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  // }, [])

  // useEffect(() => {
  //   const { current } = ref
  //   if (!current) return
  //   current.addEventListener('mousemove', onMouseMove)
  //   current.addEventListener('mouseleave', onMouseLeave)
  //   return () => {
  //     if (!current) return
  //     current.removeEventListener('mousemove', onMouseMove)
  //     current.removeEventListener('mouseleave', onMouseLeave)
  //   }
  // }, [onMouseLeave, onMouseMove])

  return (
    <>
      <div
        className="scale-100  z-10 hover:z-50 transition-all duration-200 ease-out mb-8 xl:mb-0"
        style={{ perspective: '600px' }}
        ref={ref}
      >
        <div
          style={style}
          className="flex flex-col transition-all duration-200 ease-out xl:shadow-lg shadow-cyan-100/50 dark:shadow-cyan-700/50 xl:rounded-lg bg-white dark:bg-dark overflow-hidden"
        >
          <span className="h-1.5 bg-gradient-to-l from-green-300 via-blue-500 to-purple-600"></span>
          <Image
            src={'/static/images/logo.jpg'}
            alt="avatar"
            width="550px"
            height="350px"
            className="object-cover"
            objectPosition="50% 16%"
          />
          <ProfileInfo />
          <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        </div>
      </div>
    </>
  )
}

const ProfileInfo = () => (
  <div className="hidden xl:block xl:px-6 py-4">
    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dilip Kumar Maurya</h1>
    <p className="py-2 text-gray-700 dark:text-gray-400">Front End Web Developer | Learner </p>
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

      <p className="px-2 text-[15px]">Wordpress Developer - Taknik Bharti</p>
    </div>

    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <p className="px-2 text-[15px]">Delhi, India</p>
    </div>

    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <p className="px-2 text-[15px]">contact@dilipmaurya.in</p>
    </div>
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      <p className="px-2 text-[15px]">
        <a target="_blank" href="https://github.com/curiousdilip" rel="noreferrer">
          git.io/curiousdilip
        </a>
        ,{' '}
        <a target="_blank" href="https://twitter.com/curiousdilip" rel="noreferrer">
          t.co/curiousdilip
        </a>
      </p>
    </div>
  </div>
)

export default ProfileCard
