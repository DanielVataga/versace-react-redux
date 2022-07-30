import React from 'react'
import NewIn from './new-in-section/new-in.component'
import TitleSection from './title-section/title.components'


const Home = () => {
  return (
    <div className='HomePageWrapper' style={{
      margin: '0 auto',
      maxWidth: '1400px'
    }}>
      {/* <TitleSection /> */}
      <NewIn />
    </div>
  )
}

export default Home