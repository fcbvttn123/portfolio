import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"

export function MobileMenu({ opened, setMobileOpen }) {
  return (
    <Drawer open={opened} onClose={() => setMobileOpen(false)}>
      <Box sx={{ width: 250 }} role="presentation">
        {/* {drawer} */}
      </Box>
    </Drawer>
  )
}
