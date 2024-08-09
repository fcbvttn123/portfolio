import { Drawer, Hidden, useTheme } from "@material-ui/core"
import { useStyles } from "../mui-styles/mobileMenu"

export function MobileMenu({ window, opened, setMobileOpen }) {
  const classes = useStyles()
  const container =
    window !== undefined ? () => window().document.body : undefined
  const theme = useTheme()
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={opened}
          onClose={() => setMobileOpen(!opened)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {/* {drawer} */}
        </Drawer>
      </Hidden>
    </nav>
  )
}
