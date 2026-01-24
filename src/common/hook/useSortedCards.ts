import { useMemo, useState } from 'react'
import { Card } from '../../setDetail/model/SetResponse'

export type SortType = 'name' | 'price' | 'priceDesc' | 'color'

export const useSortedCards = (cards: Card[] | undefined) => {
  const [sortBy, setSortBy] = useState<SortType>('priceDesc')

  const sortedCards = useMemo(() => {
    if (!cards) return []

    const getPriceForSort = (c: Card) => {
      const prices = [c.prices.eur, c.prices.eurFoil].filter(p => p > 0)
      return prices.length > 0 ? Math.max(...prices) : Number.MIN_SAFE_INTEGER
    }

    const colorOrder: Record<string, number> = {
      WHITE: 1,
      BLUE: 2,
      BLACK: 3,
      RED: 4,
      GREEN: 5,
      UNCOLOR: 10
    }

    const normalizeColor = (colors: string[]): number => {
      return colors
        .map((value) => (colorOrder[value]))
        .reduce((a, b) => a + b, 0);
    }

    const arr = [...cards]
    arr.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price':
          return getPriceForSort(a) - getPriceForSort(b)
        case 'priceDesc':
          return getPriceForSort(b) - getPriceForSort(a)
        case 'color': {
          const ca = normalizeColor(a.colors)
          const cb = normalizeColor(b.colors)
          if (ca !== cb) return ca - cb
          // same color: sort by name only
          return a.name.localeCompare(b.name)
        }
        default:
          return 0
      }
    })
    return arr
  }, [cards, sortBy])

  return { sortedCards, sortBy, setSortBy }
}
