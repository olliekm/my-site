import React from 'react'
import Image from 'next/image'

export default function Experience({title, company, technologies, description, startDate, endDate, logo, link}: {title: string, company: string, technologies: string, description: string, startDate: string, endDate: string, logo: string, link: string}) {
  return (
    <div className="flex justify-between space-x-2">
        <div className="flex flex-col space-y-4">
            <div className="">
                <h3 className="text-lg">{title}</h3>
                <h4 className="text-sm italic">{company}</h4>
            </div>
            <p className='text-sm'>{description}</p>
            <small className="text-sm italic">
                <a href={link} target="_blank" rel="noopener noreferrer" className='underline'>Link</a> &mdash; {technologies}
            </small>    
        </div>
        <div className=" flex flex-col items-end space-y-2">
            <small className='text-nowrap text-stone-600'>{startDate} &mdash; {endDate}</small>
            <Image
                src={logo}
                alt={company}
                width={60}
                height={60}
            />
        </div>
  </div>
  )
}
