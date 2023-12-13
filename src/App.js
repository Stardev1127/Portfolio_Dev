import React, { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  Chip,
  SvgIcon,
} from "@mui/material";

import Footer from "./routes/Footer.js";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const skills = [
    {
      key: 1,
      skill: "HTML",
    },
    {
      key: 2,
      skill: "CSS/SCSS",
    },
    {
      key: 3,
      skill: "JavaScript",
    },
    {
      key: 4,
      skill: "React",
    },
    {
      key: 5,
      skill: "Vue",
    },
    {
      key: 6,
      skill: "NodeJS",
    },
    {
      key: 7,
      skill: "Django/Flask",
    },
    {
      key: 8,
      skill: "Express",
    },
    {
      key: 9,
      skill: "MongoDb",
    },
    {
      key: 10,
      skill: "NPM",
    },
    {
      key: 11,
      skill: "Styled-Components",
    },
    {
      key: 12,
      skill: "Framer-Motion",
    },
    {
      key: 13,
      skill: "Tailwind CSS",
    },
    {
      key: 14,
      skill: "MUI",
    },
    {
      key: 15,
      skill: "Web3.js/Ether.js",
    },
    {
      key: 16,
      skill: "Vite",
    },
    {
      key: 17,
      skill: "Figma",
    },
    {
      key: 18,
      skill: "OpenAI",
    },
    {
      key: 19,
      skill: "Computer Vision",
    },
    {
      key: 20,
      skill: "NLP",
    },
    {
      key: 21,
      skill: "Python",
    },
    {
      key: 22,
      skill: "Selenium",
    },
    {
      key: 23,
      skill: "Scraper",
    },
    {
      key: 24,
      skill: "Puppeteer",
    },
    {
      key: 25,
      skill: "Appium",
    },
    {
      key: 26,
      skill: "AWS",
    },
    {
      key: 27,
      skill: "Firebase",
    },
    {
      key: 28,
      skill: "Cloudflare",
    },
  ];

  const technologies1 = [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "MVC",
    "RESTfulAPI",
  ];

  const technologies2 = ["React", "Tailwind CSS", "Django", "MongoDB", "GPT 4"];
  const technologies3 = ["Vue", "TypeScript", "Django", "OpenAI"];
  const technologies4 = ["React", "Style-Components", "Framer-Motion", "Vite"];

  const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, flexShrink: 0, ...sx }}
      {...other}
    />
  ));

  const handleButtonClick = () => {
    setShow((prevShow) => !prevShow);
  };

  const Array = [
    {
      key: 1,
      title: "Huddle",
      url: "/assets/Huddle.png",
    },
    {
      key: 2,
      title: "Nexter",
      url: "/assets/Nexter.png",
    },
    {
      key: 3,
      title: "AI Code Generator",
      url: "/assets/code-generator.png",
    },
    {
      key: 4,
      title: "HAKONE",
      url: "/assets/hakone.png",
    },
    {
      key: 5,
      title: "Japan Job Sites",
      url: "/assets/job-site.png",
    },
    {
      key: 6,
      title: "Blockchain based Game",
      url: "/assets/game.png",
    },
  ];

  return (
    <>
      <main
        className="App"
        style={{
          backgroundColor: "rgb(40, 62, 81)",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      >
        {/* Hello World */}
        <Box
          sx={{
            backgroundImage: "url(/assets/background1.png)",
            backgroundSize: "inherit",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width0: "100vh",
          }}
        >
          <Stack
            container
            item
            sx={{
              height: "90%",
              maxWidth: "1140px",
              margin: "0px 100px",
              justifyContent: "end",
              width: { md: "50%", xs: "100%" },
            }}
          >
            <Stack sx={{ alignItems: "start" }}>
              <Typography
                sx={{
                  display: "block",
                  fontSize: "38px",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.2,
                  fontWeight: 600,
                  color: "#DDE9ED",
                }}
              >
                Hi there, I'm
                <span> </span>
                <span
                  style={{
                    fontFamily: "GazeNozarashi, cursive",
                    fontSize: "40px",
                    color: "#DDE9ED",
                    fontWeight: 600,
                  }}
                >
                  Andrew.
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "32px",
                  color: "#79a2d5",
                  lineHeight: 0.9,
                  marginTop: "5px",
                }}
              >
                Welcome to my portfolio!
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#ecf6fa",
                  lineHeight: 1.5,
                  fontWeight: 600,
                  textAlignLast: "start",
                  letterSpacing: "1px",
                  marginTop: "20px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                I'm a Full Stack AI developer who builds interesting and
                beautiful
                <br />
                websites that help people. My current focus is on powerful AI/ML
                <br />
                technology. I love Japan.
              </Typography>

              <Stack
                sx={{
                  marginTop: "28px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "white",
                    color: "#ECF6FA",
                    display: "inline-block",
                    position: "relative",
                    fontSize: "14px",
                    padding: "13px 22px",
                  }}
                >
                  Resume
                </Button>
                <Button sx={{ color: "#ecf6fa" }}>
                  <Iconify icon="material-symbols:language" />
                  <span style={{ fontSize: "15px" }}>日本語</span>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* About Page */}
        <Stack
          sx={{
            backgroundImage:
              "linear-gradient(rgb(207, 215, 225), rgba(40, 62, 81, 0.7), rgba(40, 62, 81, 0.9), rgb(40, 62, 81)), url(/assets/background2.png)",
            backgroundColor: "#406281",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            paddingTop: "160px",
            justifySelf: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "50px",
              fontFamily: "GazeNozarashi, cursive",
              fontWeight: 100,
              letterSpacing: "0px",
              color: "#79a2d5",
              marginBottom: "60px",
            }}
          >
            About Me
          </Typography>

          <Grid item container justifyContent="center" alignItems="center">
            <Grid
              item
              xs={6}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                paddingBottom: "160px",
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                  position: "relative",
                  boxSizing: "inherit",
                }}
              >
                <Stack sx={{ width: "450px", height: "auto" }}>
                  <picture>
                    <img
                      src="/assets/photo.png"
                      alt="img"
                      style={{
                        width: "450px",
                        outline: "rgb(207, 215, 225) solid 8px",
                      }}
                    />
                  </picture>
                </Stack>
                <Stack
                  sx={{
                    width: "170px",
                    height: "auto",
                    position: "absolute",
                    right: "0px",
                    top: "50%",
                    transform: "translate(50%, -50%)",
                    borderRadius: "50%",
                  }}
                >
                  <picture
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      boxShadow: "inherit",
                    }}
                  >
                    <img
                      src="/assets/me.png"
                      alt="img"
                      style={{
                        width: "170px",
                        height: "170px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        outline: "rgb(207, 215, 225) solid 8px",
                      }}
                    />
                  </picture>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Stack display="flex" flexDirection="row" sx={{ gap: "172px" }}>
                <Stack
                  display="flex"
                  flexDirection="column"
                  sx={{ gap: "12px", paddingBottom: "160px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "1px",
                      lineHeight: 1.5,
                      fontFamily: "Montserrat, sans-serif",
                      color: "#ecf6fa",
                      textAlign: "start",
                      boxSizing: "inherit",
                    }}
                  >
                    An accomplished Full Stack AI Developer bringing over 8
                    years in designing, developing, and maintaining web
                    applications. <br />
                    Demonstrates an excellent track record in working with MERN
                    stack and AI backend, keeping up with the latest technology
                    trends, and contributing to business growth. Proficient in
                    providing effective solutions to complex business challenges
                    through innovative technologies and algorithms. Recognized
                    for my ability to collaborate in teams, manage projects, and
                    deliver high-quality solutions on time. Seeking
                    opportunities to leverage my skill-set in a challenging and
                    progressive environment.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "1px",
                      lineHeight: 1.5,
                      fontFamily: "Montserrat, sans-serif",
                      color: "#ecf6fa",
                      textAlign: "start",
                      boxSizing: "inherit",
                    }}
                  >
                    Outside of the IT world, I enjoy traveling and studying
                    English. I also play video games, DJ, enjoy pencil drawing,
                    and practice the piano during my free time.
                  </Typography>
                </Stack>
                <img
                  src="assets/photo2.svg"
                  alt="photo2"
                  style={{
                    height: "500px",
                    width: "auto",
                    maskImage:
                      "radial-gradient(99% 69% at 68% 48%, black 10%, transparent 69%)",
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        {/* Technology Page */}
        <Stack
          sx={{
            backgroundImage:
              "linear-gradient(rgba(40, 62, 81, 0.8) 20%, rgba(40, 62, 81, 0.5), rgba(40, 62, 81, 0.9)), url(/assets/photo1.png)",
            backgroundSize: "inherit",
            backgroundRepeat: "no-repeat",
            position: "relative",
            placeItems: "center",
            backgroundPosition: "center center",
            paddingTop: "120px",
            paddingBottom: "140px",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "50px",
              fontFamily: "GazeNozarashi, cursive",
              fontWeight: 100,
              letterSpacing: "0px",
              color: "#79a2d5",
              marginBottom: "60px",
            }}
          >
            Technology
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            style={{
              opacity: 1,
              maxWidth: "800px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {skills.map((items) => (
              <Stack
                key={items.key}
                label={items.skill}
                variant="outlined"
                style={{
                  opacity: 0.83,
                  transform: "none",
                  border: "none",
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                  backgroundColor: "#244977",
                  color: "#bfccdc",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  padding: "14px 20px",
                  margin: "8px",
                }}
              >
                {items.skill}
              </Stack>
            ))}
          </Stack>
        </Stack>

        {/* ProjectPage */}
        <Box style={{ textAlign: "-webkit-center" }}>
          <Stack
            sx={{
              padding: ("60px", "0px", "90px"),
              maxWidth: "1070px",
              position: "relative",
              alignItems: "center",
            }}
          >
            <Stack sx={{ justifySelf: "center", textTransform: "capitalize" }}>
              <Typography
                style={{
                  fontSize: "50px",
                  fontFamily: "GazeNozarashi, cursive",
                  fontWeight: 100,
                  letterSpacing: "0px",
                  color: "#79a2d5",
                  marginBottom: "40px",
                }}
              >
                Projects
              </Typography>
            </Stack>

            <Grid container item sx={{ gap: "140px" }}>
              <Grid
                container
                item
                style={{
                  marginBottom: "2rem",
                  opacity: 1,
                  transform: "none",
                  gap: "1rem",
                  alignItems: "center",
                  listStyleType: "none",
                  color: "rgba(236, 246, 250, 0.93)",
                  flexFlow: "row",
                }}
              >
                <Grid item xs={6}>
                  <div
                    style={{
                      maxWidth: "700px",
                      display: "block",
                      width: "620px",
                      height: "400px",
                      borderRadius: "2px",
                      objectFit: "cover",
                    }}
                  >
                    <source
                      srcSet="url(/assets/FF-Search.webp)"
                      type="image/webp"
                      media="(min-width: 768px)"
                    />
                    <source
                      srcSet="url(/assets/FF-Search.webp)"
                      type="image/webp"
                      media="(max-width: 768px)"
                    />
                    <img
                      src="/assets/FF-Search.png"
                      alt="SearchImg"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        height: "100%",
                        borderRadius: "2px",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="baseline"
                    sx={{
                      borderInlineEnd: "2px solid",
                      borderBlockStart: "2px solid",
                      paddingTop: "12px",
                      paddingRight: "12px",
                      borderImageSource:
                        "radial-gradient(circle at right top, rgb(206, 55, 60), transparent 30%)",
                      borderImageSlice: 1,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        lineHeight: 1.5,
                        fontFamily: "Montserrat, system-ui, sans-serif",
                        color: "#ecf6fa",
                        textTransform: "lowercase",
                        marginBottom: "3px",
                        alignSelf: "end",
                      }}
                    >
                      Featured Project
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        marginBottom: "16px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        fontWeight: 300,
                        color: "#bfccdc",
                        alignSelf: "end",
                        lineHeight: 1.6,
                      }}
                    >
                      FF-Search
                    </Typography>
                  </Box>
                  <Stack
                    sx={{
                      marginBottom: "1rem",
                      padding: "25px",
                      textAlign: "start",
                      borderRadius: "2px",
                      backgroundColor: "#244977",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "none",
                        lineHeight: 1.5,
                        letterSpacing: "1px",
                        fontFamily: "Montserrat, sans-serif",
                        color: "#ecf6fa",
                      }}
                    >
                      A search application that utilizes the Google API to
                      search for Final Fantasy characters; users can search for
                      the games and characters from the main series.
                    </Typography>
                  </Stack>
                  <Box
                    display="flex"
                    gap={1}
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: "flex-end",
                      position: "relative",
                      mt: "15px",
                      mb: "10px",
                    }}
                  >
                    {technologies1.map((tech, index) => (
                      <Chip
                        key={index}
                        size="small"
                        label={tech}
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#ecf6fa",
                          fontWeight: 600,
                          listStyleType: "none",
                          fontSize: "16px",
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <Grid
                container
                item
                style={{
                  marginBottom: "2rem",
                  opacity: 1,
                  transform: "none",
                  gap: "1rem",
                  alignItems: "center",
                  listStyleType: "none",
                  color: "rgba(236, 246, 250, 0.93)",
                  flexFlow: "row",
                }}
              >
                <Grid item xs={6} style={{ zIndex: 100 }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="baseline"
                    sx={{
                      borderInlineEnd: "2px solid",
                      borderBlockStart: "2px solid",
                      textAlign: "start",
                      paddingTop: "12px",
                      paddingRight: "12px",
                      borderImageSource:
                        "radial-gradient(circle at right top, rgb(206, 55, 60), transparent 30%)",
                      borderImageSlice: 1,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        lineHeight: 1.5,
                        fontFamily: "Montserrat, system-ui, sans-serif",
                        color: "#ecf6fa",
                        textTransform: "lowercase",
                        marginBottom: "3px",
                        alignSelf: "start",
                      }}
                    >
                      Featured Project
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        marginBottom: "16px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        fontWeight: 300,
                        color: "#bfccdc",
                        alignSelf: "start",
                        lineHeight: 1.6,
                      }}
                    >
                      Chatbot Building System
                    </Typography>
                  </Box>
                  <Stack
                    sx={{
                      marginBottom: "1rem",
                      padding: "25px",
                      textAlign: "start",
                      borderRadius: "2px",
                      backgroundColor: "#244977",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "none",
                        lineHeight: 1.5,
                        letterSpacing: "1px",
                        fontFamily: "Montserrat, sans-serif",
                        color: "#ecf6fa",
                      }}
                    >
                      This system allows users to create a custom chatbot by
                      their personal needs.
                    </Typography>
                  </Stack>
                  <Box
                    display="flex"
                    gap={1}
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: "start",
                      position: "relative",
                      mt: "15px",
                      mb: "10px",
                    }}
                  >
                    {technologies2.map((tech, index) => (
                      <Chip
                        key={index}
                        size="small"
                        label={tech}
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#ecf6fa",
                          fontWeight: 600,
                          listStyleType: "none",
                          fontSize: "16px",
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      maxWidth: "700px",
                      display: "block",
                      width: "620px",
                      height: "400px",
                      borderRadius: "2px",
                      objectFit: "cover",
                      float: "right",
                    }}
                  >
                    <source
                      srcSet="url(/assets/Chatbot.png)"
                      type="image/webp"
                      media="(min-width: 768px)"
                    />
                    <source
                      srcSet="url(/assets/Chatbot.png)"
                      type="image/webp"
                      media="(max-width: 768px)"
                    />
                    <img
                      src="/assets/Chatbot.png"
                      alt="SearchImg"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        height: "100%",
                        borderRadius: "2px",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </Grid>
              </Grid>

              <Grid
                container
                item
                style={{
                  marginBottom: "2rem",
                  opacity: 1,
                  transform: "none",
                  gap: "1rem",
                  alignItems: "center",
                  listStyleType: "none",
                  color: "rgba(236, 246, 250, 0.93)",
                  flexFlow: "row",
                }}
              >
                <Grid item xs={6}>
                  <div
                    style={{
                      maxWidth: "700px",
                      display: "block",
                      width: "620px",
                      height: "400px",
                      borderRadius: "2px",
                      objectFit: "cover",
                    }}
                  >
                    <source
                      srcSet="url(/assets/poem-generator.webp)"
                      type="image/webp"
                      media="(min-width: 768px)"
                    />
                    <source
                      srcSet="url(/assets/poem-generator.webp)"
                      type="image/webp"
                      media="(max-width: 768px)"
                    />
                    <img
                      src="/assets/poem-generator.png"
                      alt="SearchImg"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        height: "100%",
                        borderRadius: "2px",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="baseline"
                    sx={{
                      borderInlineEnd: "2px solid",
                      borderBlockStart: "2px solid",
                      textAlign: "end",
                      paddingTop: "12px",
                      paddingRight: "12px",
                      borderImageSource:
                        "radial-gradient(circle at right top, rgb(206, 55, 60), transparent 30%)",
                      borderImageSlice: 1,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        lineHeight: 1.5,
                        fontFamily: "Montserrat, system-ui, sans-serif",
                        color: "#ecf6fa",
                        textTransform: "lowercase",
                        marginBottom: "3px",
                        alignSelf: "end",
                      }}
                    >
                      Featured Project
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        marginBottom: "16px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        fontWeight: 300,
                        color: "#bfccdc",
                        alignSelf: "end",
                        lineHeight: 1.6,
                      }}
                    >
                      Poem Generator
                    </Typography>
                  </Box>
                  <Stack
                    sx={{
                      marginBottom: "1rem",
                      padding: "25px",
                      textAlign: "start",
                      borderRadius: "2px",
                      backgroundColor: "#244977",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "none",
                        lineHeight: 1.5,
                        letterSpacing: "1px",
                        fontFamily: "Montserrat, sans-serif",
                        color: "#ecf6fa",
                      }}
                    >
                      The Poem Generator platform is an innovative tool that
                      unleashes your creativity and helps you effortlessly
                      create beautiful poems. You can generate a great poem from
                      your idea.
                    </Typography>
                  </Stack>
                  <Box
                    display="flex"
                    gap={1}
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: "flex-end",
                      position: "relative",
                      mt: "15px",
                      mb: "10px",
                    }}
                  >
                    {technologies3.map((tech, index) => (
                      <Chip
                        key={index}
                        size="small"
                        label={tech}
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#ecf6fa",
                          fontWeight: 600,
                          listStyleType: "none",
                          fontSize: "16px",
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <Grid
                container
                item
                style={{
                  marginBottom: "2rem",
                  opacity: 1,
                  transform: "none",
                  gap: "1rem",
                  alignItems: "center",
                  listStyleType: "none",
                  color: "rgba(236, 246, 250, 0.93)",
                  flexFlow: "row",
                }}
              >
                <Grid item xs={6} style={{ zIndex: 100 }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="baseline"
                    sx={{
                      borderInlineEnd: "2px solid",
                      borderBlockStart: "2px solid",
                      textAlign: "end",
                      paddingTop: "12px",
                      paddingRight: "12px",
                      borderImageSource:
                        "radial-gradient(circle at right top, rgb(206, 55, 60), transparent 30%)",
                      borderImageSlice: 1,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        lineHeight: 1.5,
                        fontFamily: "Montserrat, system-ui, sans-serif",
                        color: "#ecf6fa",
                        textTransform: "lowercase",
                        marginBottom: "3px",
                        alignSelf: "start",
                      }}
                    >
                      Featured Project
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        marginBottom: "16px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "24px",
                        fontWeight: 300,
                        color: "#bfccdc",
                        alignSelf: "start",
                        lineHeight: 1.6,
                      }}
                    >
                      Task-Manager
                    </Typography>
                  </Box>
                  <Stack
                    sx={{
                      marginBottom: "1rem",
                      padding: "25px",
                      textAlign: "start",
                      borderRadius: "2px",
                      backgroundColor: "#244977",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "none",
                        lineHeight: 1.5,
                        letterSpacing: "1px",
                        fontFamily: "Montserrat, sans-serif",
                        color: "#ecf6fa",
                      }}
                    >
                      A 'task manager' or todo application built with React.
                      Users can add, delete, edit, and view their tasks. I've
                      also included drag and drop functionality to reorder
                      tasks, a mark as complete option, and a dark/light theme
                      toggler.
                    </Typography>
                  </Stack>
                  <Box
                    display="flex"
                    gap={1}
                    sx={{
                      flexWrap: "wrap",
                      justifyContent: "start",
                      position: "relative",
                      mt: "15px",
                      mb: "10px",
                    }}
                  >
                    {technologies4.map((tech, index) => (
                      <Chip
                        key={index}
                        size="small"
                        label={tech}
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#ecf6fa",
                          fontWeight: 600,
                          listStyleType: "none",
                          fontSize: "16px",
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      maxWidth: "700px",
                      display: "block",
                      width: "620px",
                      height: "400px",
                      borderRadius: "2px",
                      objectFit: "cover",
                      float: "right",
                    }}
                  >
                    <source
                      srcSet="url(/assets/Task-Manager.webp)"
                      type="image/webp"
                      media="(min-width: 768px)"
                    />
                    <source
                      srcSet="url(/assets/Task-Manager.webp)"
                      type="image/webp"
                      media="(max-width: 768px)"
                    />
                    <img
                      src="/assets/Task-Manager.png"
                      alt="SearchImg"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        height: "100%",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Button
              variant="outlined"
              data-projection-id="10"
              style={{
                opacity: 1,
                transform: "none",
                justifySelf: "center",
                border: "1.2px solid rgb(206, 55, 60)",
                backgroundColor: "transparent",
                padding: "14.5px 24.5px",
                position: "absolute",
                bottom: "25px",
                display: show ? "none" : "inline-block",
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(236, 246, 250, 0.93)",
                outlineColor: "transparent",
                textDecoration: "none",
                cursor: "pointer",
                textTransform: "capitalize",
                fontWeight: 600,
                lineHeight: 1,
                fontSize: "16px",
                borderRadius: "4px",
                letterSpacing: "1px",
              }}
              onClick={handleButtonClick}
            >
              Show More
            </Button>

            <Box sx={{ display: show ? "block" : "none" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.map((items) => (
                  <Grid item xs={2} sm={4} md={4} key={items.key}>
                    <Stack
                      display="flex"
                      flexDirection="column"
                      gap="11px"
                      height="100%"
                      width="100%"
                      sx={{ borderRadius: "2px" }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "18px",
                            fontWeight: 600,
                            color: "rgb(191, 204, 220)",
                            alignSelf: "flex-start", // replace placeSelf with alignSelf
                          }}
                        >
                          {items.title} Huddle
                        </Typography>
                        <Button
                          variant="text"
                          display="flex"
                          alignItems="center"
                          sx={{
                            outlineColor: "transparent",
                            cursor: "pointer", // correct typo in pointer
                            borderRadius: "4px",
                            backgroundColor: "transparent",
                            alignSelf: "flex-start", // replace placeSelf with alignSelf
                            gap: "5px",
                          }}
                        >
                          <Typography
                            style={{
                              fontWeight: 500,
                              fontSize: "14px", // correct typo in fontSize
                              lineHeight: 1,
                              fontFamily: "Montserrat, system-ui, sans-serif",
                              color: "rgba(236, 246, 250, 0.93)",
                            }}
                          >
                            More Info
                          </Typography>
                          <SvgIcon
                            style={{
                              marginLeft: "5px",
                              width: "12px",
                              height: "12px",
                              color: "white",
                              maskImage:
                                "radial-gradient(99% 69% at 68% 48%, black 10%, transparent 69%)",
                            }}
                          >
                            <polyline
                              points="15 3 21 3 21 9"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></polyline>
                            <polyline
                              points="9 21 3 21 3 15"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></polyline>
                            <line
                              x1="21"
                              y1="3"
                              x2="14"
                              y2="10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></line>
                            <line
                              x1="3"
                              y1="21"
                              x2="10"
                              y2="14"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></line>
                          </SvgIcon>
                        </Button>
                      </Stack>
                      <div
                        style={{
                          borderRadius: "2px",
                          boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px 0px",
                          width: "auto",
                          height: "185px",
                        }}
                      >
                        <img
                          src={items.url}
                          alt="Huddle"
                          style={{
                            width: "100%",
                            height: "100%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "fill",
                            display: "block",
                            borderRadius: "2px",
                          }}
                        />
                      </div>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Button
              variant="outlined"
              data-projection-id="10"
              style={{
                opacity: 1,
                marginTop: 2,
                transform: "none",
                color: "rgb(121, 162, 213)",
                transition: "color 0.25s ease 0s",
                justifySelf: "center",
                border: "1.2px solid rgb(206, 55, 60)",
                backgroundColor: "transparent",
                padding: "14.5px 24.5px",
                position: "absolute",
                bottom: "25px",
                display: show ? "inline-block" : "none",
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(236, 246, 250, 0.93)",
                outlineColor: "transparent",
                textDecoration: "none",
                cursor: "pointer",
                textTransform: "capitalize",
                fontWeight: 600,
                lineHeight: 1,
                fontSize: "16px",
                borderRadius: "4px",
                letterSpacing: "1px",
              }}
              onClick={handleButtonClick}
            >
              Show Less
            </Button>
          </Stack>
        </Box>
        <Footer />
      </main>
    </>
  );
}

export default App;
