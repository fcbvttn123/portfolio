import * as React from "react"
import { Snackbar } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { IoMdClose } from "react-icons/io"

export function SnackbarComponent({
  vertical,
  horizontal,
  snackbarOpened,
  setSnackbarOpened,
  autoHideDuration,
  message,
}) {
  const snackbarAction = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(event, reason) => {
          if (reason === "clickaway") {
            return
          }
          setSnackbarOpened(false)
        }}
      >
        <IoMdClose />
      </IconButton>
    </React.Fragment>
  )
  return (
    <Snackbar
      anchorOrigin={{
        vertical: !vertical ? "top" : vertical,
        horizontal: !horizontal ? "center" : horizontal,
      }}
      open={snackbarOpened}
      autoHideDuration={!autoHideDuration ? 3000 : autoHideDuration}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return
        }
        setSnackbarOpened(false)
      }}
      message={message}
      action={snackbarAction}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: "rgb(22 163 74)",
        },
      }}
    />
  )
}
