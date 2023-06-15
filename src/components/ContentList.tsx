import useContentList from '../hooks/useContentList'
import ContentCard from './ContentCard'
import Loading from './Loading'
import * as React from 'react'

const ContentList = () => {
  const {
    status: { loading, error, ready },
    data,
  } = useContentList()

  // TODO: Display differently given all possible loading, error, and ready state
  if (!ready) return <Loading />
  if (!loading) return <Loading />
  if (error) return <Loading />

  return (
    <div>
      {data!.map((content) => (
        <ContentCard key={content.id} {...content} />
      ))}
    </div>
  )
}

export default ContentList
