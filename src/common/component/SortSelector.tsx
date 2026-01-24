import React from 'react'
import { Option, Select } from '@mui/joy'
import { SortType } from '../hook/useSortedCards'

interface SortSelectorProps {
  sortBy: SortType
  setSortBy: (value: SortType) => void
}

const SortSelector = ({ sortBy, setSortBy }: SortSelectorProps) => {
  return (
    <Select value={sortBy} onChange={(event, value) => value && setSortBy(value as SortType)} size="sm">
      <Option value="name">Sort by Name (A→Z)</Option>
      <Option value="price">Sort by Price (low→high)</Option>
      <Option value="priceDesc">Sort by Price (high→low)</Option>
      <Option value="color">Sort by Color</Option>
    </Select>
  )
}

export default SortSelector
