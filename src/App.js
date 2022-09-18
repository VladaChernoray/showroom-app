import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import { SideBar } from './components/SideBar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <main />,
  },
]);

export const App = () => {
  const classes = useStyles()

  return (
    <div className={clsx('App', classes.root)}>
      <RouterProvider router={router}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SideBar />
        </Drawer>
        <main className={classes.content}></main>
      </RouterProvider>
    </div>
  )
}

const drawerWidth = 350

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    background: '#006184',
    color: '#fff',
    overflow: 'hidden'
  },
  content: {
    background: '#0b3750',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}))

export default App

