import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/jobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    
    <section bg='bg-white'>
    <JobListings isHome={true} />

    </section>
    <ViewAllJobs/>

    
    </>

  )
}

export default HomePage