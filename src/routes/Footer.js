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
      sx={{
        height: "750px",
        marginTop: "80px",
        backgroundImage: "url(/assets/footer1.png)",
        backgroundSize: "inherit",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container item sx={{ marginTop: "560px" }}>
        <Grid
          item
          xs={4}
          sx={{
            justifySelf: "end",
          }}
        >
          <Stack component="nav" sx={{ position: "static", float: "right" }}>
            {LINKS.map((list) => (
              <Stack key={list.id} sx={{ textTransform: "capitalize" }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "GazeNozarashi,  cursive",
                    letterSpacing: "0px",
                    fontWeight: 400,
                    width: "fit-content",
                    color: "rgba(236, 246, 250, 0.93)",
                    lineHeight: 1.6,
                  }}
                >
                  {list.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={8} sx={{ marginTop: "64px" }}>
          <Typography
            sx={{
              fontSize: "22px",
              color: "rgb(207, 215, 225)",
              fontFamily: "GazeNozarashi, cursive",
              textAlign: "start",
              paddingLeft: "100px",
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
