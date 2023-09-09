import React from 'react'
import {Card, CardContent, CardCover, Chip} from '@mui/joy'
import Kard from '../model/Kard'

interface KardDisplayProps {
  kard: Kard
}

const KardDisplay = ({ kard }: KardDisplayProps) => {
  return (
    <Card sx={{ height: 250 }}>
      <CardCover>
        <img src={kard.image} loading="lazy" alt={kard.name} height={260} />
      </CardCover>
      <CardContent sx={{ justifyContent: 'flex-end', textAlign: 'center' }}>
        <Chip size='sm' variant='soft' color='warning'>
          {kard.prices.eur / 100} € / {kard.prices.eurFoil / 100} €
        </Chip>
      </CardContent>
    </Card>
  )
}

export default KardDisplay
