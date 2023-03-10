import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar/index'
import Timeline from '../components/Timeline'

const Dashboard = () => {
  return (
    <div className='bg-gray-background'>
       <Header />
       <div className='grid grid-cols-3 gap-4 justify-between max-auto max-w-screen-lg'>
       <Timeline />
       <Sidebar />
       </div>
        </div>
  )
}

export default Dashboard