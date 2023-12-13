import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  Chip,
  SvgIcon,
  List,
} from "@mui/material";

const LINKS = [
  {
    key: 1,
    name: "Home",
  },
  {
    key: 2,
    name: "About",
  },
  {
    key: 3,
    name: "Technology",
  },
  {
    key: 4,
    name: "Projects",
  },
];

export default function Footer() {
  return (
    <Stack
      display="grid"
      gridTemplateRows="1.7fr 1fr"
      sx={{
        height: "750px",
        marginTop: "80px",
        background:
          "linear-gradient(transparent, rgb(222, 185, 212), rgba(43, 84, 138, 0.8) 80%)",
        position: "relative", // Add position property
      }}
    >
      <Grid
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          transform: "translateY(0%)",
          zIndex: 500,
        }}
      >
        <img
          src="assets/photo3.svg"
          alt="photo3"
          style={{
            maxWidth: "100%",
            display: "block",
          }}
        />
      </Grid>
      <Grid
        container
        item
        sx={{
          backgroundColor: "rgb(36, 73, 119)",
          height: "100%",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{ justifySelf: "end", zIndex: 500, position: "relative" }}
        >
          <Stack component="nav" sx={{ position: "static" }}>
            {LINKS.map((list) => (
              <Stack
                key={list.id}
                sx={{ fontSize: "24px", textTransform: "capitalize" }}
              >
                <Typography
                  sx={{
                    fontFamily: "GazeNozarashi, system-ui, cursive",
                    letterSpacing: "0px",
                    fontWeight: 600,
                    width: "fit-content",
                    color: "rgba(236, 246, 250, 0.93)",
                  }}
                >
                  {list.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontSize: "22px",
              color: "rgb(207, 215, 225)",
              fontFamily: "GazeNozarashi, cursive",
            }}
          >
            e-mail: andrewnakamura147@gmail.com <br />
            Website by Andrew Nakamura
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
