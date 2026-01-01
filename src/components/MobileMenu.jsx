import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemButton } from "@mui/material";
import { DocumentIcon } from "@heroicons/react/20/solid";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { BriefcaseIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export function MobileMenu({ opened, setMobileOpen }) {
  const links = [
    {
      path: "/projects",
      icon: <ComputerDesktopIcon className="text-color w-8 h-8" />,
      text: "Projects",
    },
    {
      path: "/experiences",
      icon: <BriefcaseIcon className="text-color w-8 h-8" />,
      text: "Work Experiences",
    },
    {
      path: "/contact",
      icon: <EnvelopeIcon className="text-color w-8 h-8" />,
      text: "Contact",
    },
  ];
  return (
    <Drawer open={opened} onClose={() => setMobileOpen(false)}>
      <Box
        sx={{
          width: 250,
          height: "100%",
          backgroundColor: "rgb(31 41 55)",
          color: "#d1d5db",
        }}
        role="presentation"
      >
        <List>
          {links.map((e, i) => (
            <ListItem key={e.text + i} disablePadding>
              <Link to={e.path}>
                <ListItemButton onClick={(e) => setMobileOpen(false)}>
                  {e.icon}
                  <p className="text-color ml-4 font-bold text-lg">{e.text}</p>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
