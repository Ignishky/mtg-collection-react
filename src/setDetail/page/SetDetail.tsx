import { Grid } from '@mui/joy'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Kard from '../model/Kard'
import backend from '../port/SetBackend'
import { KardDisplay } from '../component/KardDisplay'

export const SetDetail = () => {
  const { setCode } = useParams()
  const [cards, setCards] = useState<Kard[]>([])

  useEffect(() => {
    if (setCode && cards.length === 0) {
      const fetchData = async () => {
        const response = await backend.getSet(setCode)
        setCards(response.data.cards)
      }

      fetchData()
    }
  })

  return (
    <Grid container margin={1} columns={9}>
      {
        cards.map(card => {
          return (
            <Grid key={card.name} xs={1}>
              <KardDisplay kard={card} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}
