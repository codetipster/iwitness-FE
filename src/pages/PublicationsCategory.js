
//fetching all articles with a tag and title label corresponding to a category

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'


function PublicationCategory() {
  const [publications, setPublications] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastFetchedPublication, setlastFetchedPublication] = useState(null)

  const params = useParams()

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Get reference
        const publicationsRef = collection(db, 'publications')

        // Create a query
        const q = query(
          publicationsRef,
          where('category', '==', params.publicationName),
          orderBy('timestamp', 'desc'),
          limit(10)
        )

        // Execute query
        const querySnap = await getDocs(q)

        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        setlastFetchedPublication(lastVisible)

        const publications = []

        querySnap.forEach((doc) => {
          return publications.push({
            id: doc.id,
            data: doc.data(),
          })
        })

        setPublications(publications)
        setLoading(false)
      } catch (error) {
        toast.error('Could not fetch publications')
        setLoading(false)
      }
    }

    fetchPublications()
  }, [params.publicationName])

  // Pagination / Load More
  const onFetchMorepublications = async () => {
    try {
      // Get reference
      const publicationsRef = collection(db, 'publications')

      // Create a query
      const q = query(
        publicationsRef,
        where('category', '==', params.publicationName),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedPublication),
        limit(10)
      )

      // Execute query
      const querySnap = await getDocs(q)

      const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      setlastFetchedPublication(lastVisible)

      const publications = []

      querySnap.forEach((doc) => {
        return publications.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setPublications((prevState) => [...prevState, ...publications])
      setLoading(false)
    } catch (error) {
      toast.error('Could not fetch publications')
    }
  }

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          {params.publicationName}
        </p>
      </header>

      {loading ? (
        <Spinner />
      ) : publications && publications.length > 0 ? (
        <>
          <main>
            <ul className='categorylistings'>
              {publications.map((publication) => (
                <h3>{publication.data.title} </h3>
              ))}
            </ul>
          </main>

          <br />
          <br />
          {lastFetchedPublication && (
            <p className='loadMore' onClick={onFetchMorepublications}>
              Load More
            </p>
          )}
        </>
      ) : (
        <p>No publications for {params.publicationName}</p>
      )}
    </div>
  )
}

export default PublicationCategory
