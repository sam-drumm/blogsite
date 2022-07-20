import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostCard from '../components/PostCard'

export default function Home () {
  const styles = {
    postList: 'flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
    container: 'max-w-7xl flex-1',
    main: 'flex justify-center',
    wrapper: 'mx-auto'
  }
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Banner/>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </div>
        </div>
      </div>
    </div>
  )
}
