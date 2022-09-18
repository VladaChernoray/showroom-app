import items from "../data/data.json"
import { SidebarItem } from "./SideBarItem";
import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

export const SideBar = () => {
    const classes = useStyles()
    return (
    <List component="nav" className={classes.appMenu} disablePadding>
        { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </List>
  )
}

const drawerWidth = 200

const useStyles = makeStyles(theme =>
    createStyles({
      appMenu: {
        width: '100%',
      },
    }),
  )
