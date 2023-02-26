import { Card, CardOverflow } from '@mui/joy'
import React from 'react'
import Kard from '../model/Kard'

interface KardDisplayProps {
  kard: Kard
}

export const KardDisplay = ({ kard }: KardDisplayProps) => {
  return (
    <Card sx={{ height: 250 }}>
      <CardOverflow>
        <img src={kard.image} loading="lazy" alt={kard.name} height={260} />
      </CardOverflow>
    </Card>
  )
}
