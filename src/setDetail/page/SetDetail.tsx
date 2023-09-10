import React, {useEffect, useState} from 'react'
import {Grid, LinearProgress} from '@mui/joy'
import {useParams} from 'react-router-dom'
import Kard from '../model/Kard'
import backend from '../port/SetBackend'
import KardDisplay from '../component/KardDisplay'

const SetDetail = () => {
  const { setCode } = useParams()
  const [cards, setCards] = useState<Kard[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (setCode && cards.length === 0) {
      const fetchData = async () => {
        const response = await backend.getSet(setCode)
        setCards(response.data.cards)
        setLoading(false)
      }

      fetchData()
    }
  })

  return (
    <>
      {
        loading && (<LinearProgress />)
      }
      {
        cards && (
          <Grid container margin={1} columns={9}>
            {
              cards.map(card => {
                return (
                  <Grid key={card.id} xs={1}>
                    <KardDisplay kard={card} />
                  </Grid>
                )
              })
            }
          </Grid>
        )
      }
    </>
  )
}

export default SetDetail
