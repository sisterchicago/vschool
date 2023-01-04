import * as React from 'react'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator'
import ListItemContent from '@mui/joy/ListItemContent'
import ListItemButton from '@mui/joy/ListItemButton'
import Typography from '@mui/joy/Typography'
import Box from '@mui/joy/Box'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import InboxIcon from '@mui/icons-material/Inbox'
import Label from '@mui/icons-material/Label'
import Info from '@mui/icons-material/Info'
import Star from '@mui/icons-material/Star'

export default function SideBar() {
  const [index, setIndex] = React.useState(0)
  return (
    <Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
          '--List-item-paddingLeft': '0px',
          '--List-decorator-size': '64px',
          '--List-decorator-color': (theme) => theme.vars.palette.text.secondary,
          '--List-item-minHeight': '32px',
          '--List-nestedInsetStart': '13px',
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: 'flex-end',
            pr: '18px',
          },
          '& [role="button"]': {
            borderRadius: '0 20px 20px 0',
          },
        }}
      >
        <ListItem>
          <ListItemButton
            selected={index === 0}
            variant={index === 0 ? 'soft' : 'plain'}
            color={index === 0 ? 'danger' : undefined}
            onClick={() => setIndex(0)}
          >
            <ListItemDecorator>
              <InboxIcon fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Inbox</ListItemContent>
            <Typography level="body2" sx={{ fontWeight: 'bold', color: 'inherit' }}>
              1,950
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 1}
            variant={index === 1 ? 'soft' : 'plain'}
            color={index === 1 ? 'neutral' : undefined}
            onClick={() => setIndex(1)}
          >
            <ListItemDecorator>
              <Star fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Starred</ListItemContent>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}