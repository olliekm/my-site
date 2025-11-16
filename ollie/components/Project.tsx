import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({title, technologies, description, year, logo, link}: {title: string, technologies: string, description: string, year: string, logo: string, link: string}) {
  return (
    <div className="flex justify-between space-x-2">
        <div className="flex flex-col space-y-4">
            <div className="">
                <Link href={link}><h3 className="text-lg hover:underline cursor-pointer">{title}</h3></Link>
            </div>
            <p className='text-sm'>{description}</p>
            <small className="text-sm italic">
                <Link href={link} className='underline'>Link</Link> &mdash; {technologies}
            </small>    
        </div>
        <div className=" flex flex-col items-end space-y-2">
            <small className='text-nowrap text-stone-600'>{year}</small>
            {/* <Image
                src={logo}
                alt={company}
                width={60}
                height={60}
            /> */}
        </div>
  </div>
  )
}
