import { useState } from "react"
import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'


export const SidebarItem = ({ item }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    function handleClick() {
        setOpen(!open)
    }

    if (item.childrens) {
        return (
            <>
                <ListItem button onClick={handleClick} className={classes.menuItem}>
                    <ListItem> {item.title}</ListItem>
                    {open ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                        {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                    </List>
                </Collapse>
            </>
        )
    } else {
        return (
            <ListItem>
                <a href={item.path || "#"} className={classes.pathItem}>
                    {item.title}
                </a>
            </ListItem>
        )
    }
}

const drawerWidth = 350
const useStyles = makeStyles(theme =>
    createStyles({
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
        },
        pathItem: {
            textDecoration: "none",
            color: '#fff',
        }
    }),
)