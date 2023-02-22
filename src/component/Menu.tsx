import { Link } from 'react-router-dom'
import { List, ListItem, Stack } from '@mui/joy'
import React from 'react'

export const Menu = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ background: "green" }}>
      <List>
        <ListItem>
          <Link to="/catalogue">Catalogue</Link>
        </ListItem>
        <ListItem>
          <Link to="/collection">Collection</Link>
        </ListItem>
      </List>
    </Stack>
  )
}
