import React, { useEffect, useState } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

function TabPanel(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data dari koleksi Firestore
        const projectCollection = collection(db, "projects");
        const certificateCollection = collection(db, "certificates");

        const projectQuerySnapshot = await getDocs(projectCollection);
        const certificateQuerySnapshot = await getDocs(certificateCollection);

        const projectData = projectQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          TechStack: doc.data().TechStack || [], // Provide a default empty array if not present
        }));

        // Format data untuk Certificates
        const certificateData = certificateQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        // Simpan data ke state
        setProjects(projectData);
        setCertificates(certificateData);

        // Simpan data ke localStorage
        localStorage.setItem("projects", JSON.stringify(projectData));
        localStorage.setItem("certificates", JSON.stringify(certificateData));

        console.log("Data berhasil di-fetch dan disimpan ke localStorage!");
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    // Lakukan fetch data setiap kali website dibuka
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowMoreProjects = () => {
    setShowAllProjects(true);
  };

  const handleShowMoreCertificates = () => {
    setShowAllCertificates(true);
  };

  const handleShowLessProjects = () => {
    setShowAllProjects(false);
  };

  const handleShowLessCertificates = () => {
    setShowAllCertificates(false);
  };

  return (
    <div
      className="md:px-[10%] w-full  bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl md:text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="px-2 md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 12px",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0, // Hide default indicator since we're using custom styling
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={
                <Code className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Award className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <Boxes className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {(showAllProjects ? projects : projects.slice(0, 6)).map(
                  (project, index) => (
                    <div
                      key={project.id || index}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <CardProject
                        Img={project.Img}
                        Title={project.Title}
                        Description={project.Description}
                        Link={project.Link}
                        id={project.id}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {projects.length > 6 && (
              <div className="mt-6 w-full flex justify-start">
                {showAllProjects ? (
                  <button
                    onClick={handleShowLessProjects}
                    className="
          px-3 py-1.5
          text-slate-300 
          hover:text-white 
          text-sm 
          font-medium 
          transition-all 
          duration-300 
          ease-in-out
          flex 
          items-center 
          gap-2
          bg-white/5 
          hover:bg-white/10
          rounded-md
          border 
          border-white/10
          hover:border-white/20
          backdrop-blur-sm
          group
          relative
          overflow-hidden
        "
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      See Less
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
              transition-transform 
              duration-300 
              group-hover:-translate-y-0.5
            "
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </span>

                    {/* Animated hover effect */}
                    <span
                      className="
            absolute 
            bottom-0 
            left-0 
            w-0 
            h-0.5 
            bg-purple-500/50 
            transition-all 
            duration-300 
            group-hover:w-full
          "
                    ></span>
                  </button>
                ) : (
                  <button
                    onClick={handleShowMoreProjects}
                    className="
          px-3 py-1.5
          text-slate-300 
          hover:text-white 
          text-sm 
          font-medium 
          transition-all 
          duration-300 
          ease-in-out
          flex 
          items-center 
          gap-2
          bg-white/5 
          hover:bg-white/10
          rounded-md
          border 
          border-white/10
          hover:border-white/20
          backdrop-blur-sm
          group
          relative
          overflow-hidden
        "
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      See More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
              transition-transform 
              duration-300 
              group-hover:translate-y-0.5
            "
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>

                    {/* Animated hover effect */}
                    <span
                      className="
            absolute 
            bottom-0 
            left-0 
            w-0 
            h-0.5 
            bg-purple-500/50 
            transition-all 
            duration-300 
            group-hover:w-full
          "
                    ></span>
                  </button>
                )}
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {(showAllCertificates
                  ? certificates
                  : certificates.slice(0, 6)
                ).map((Sertifikat, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate ImgSertif={Sertifikat.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > 6 && (
              <div className="mt-6 w-full flex justify-start">
                {showAllCertificates ? (
                  <button
                    onClick={handleShowLessCertificates}
                    className="
          px-3 py-1.5
          text-slate-300 
          hover:text-white 
          text-sm 
          font-medium 
          transition-all 
          duration-300 
          ease-in-out
          flex 
          items-center 
          gap-2
          bg-white/5 
          hover:bg-white/10
          rounded-md
          border 
          border-white/10
          hover:border-white/20
          backdrop-blur-sm
          group
          relative
          overflow-hidden
        "
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      See Less
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
              transition-transform 
              duration-300 
              group-hover:-translate-y-0.5
            "
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </span>

                    {/* Animated hover effect */}
                    <span
                      className="
            absolute 
            bottom-0 
            left-0 
            w-0 
            h-0.5 
            bg-purple-500/50 
            transition-all 
            duration-300 
            group-hover:w-full
          "
                    ></span>
                  </button>
                ) : (
                  <button
                    onClick={handleShowMoreCertificates}
                    className="
          px-3 py-1.5
          text-slate-300 
          hover:text-white 
          text-sm 
          font-medium 
          transition-all 
          duration-300 
          ease-in-out
          flex 
          items-center 
          gap-2
          bg-white/5 
          hover:bg-white/10
          rounded-md
          border 
          border-white/10
          hover:border-white/20
          backdrop-blur-sm
          group
          relative
          overflow-hidden
        "
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      See More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
              transition-transform 
              duration-300 
              group-hover:translate-y-0.5
            "
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>

                    {/* Animated hover effect */}
                    <span
                      className="
            absolute 
            bottom-0 
            left-0 
            w-0 
            h-0.5 
            bg-purple-500/50 
            transition-all 
            duration-300 
            group-hover:w-full
          "
                    ></span>
                  </button>
                )}
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {/* Programming icon / tech stack  */}
                <TechStackIcon TechStackIcon="html.svg" Language="HTML" />
                <TechStackIcon TechStackIcon="css.svg" Language="CSS" />
                <TechStackIcon TechStackIcon="javascript.svg" Language="JavaScript" />
                <TechStackIcon TechStackIcon="tailwind.svg" Language="Tailwind CSS" />
                <TechStackIcon TechStackIcon="reactjs.svg" Language="ReactJS" />
                <TechStackIcon TechStackIcon="vite.svg" Language="Vite" />
                <TechStackIcon TechStackIcon="nodejs.svg" Language="Node JS" />
                <TechStackIcon TechStackIcon="bootstrap.svg" Language="Bootstrap" />
                <TechStackIcon TechStackIcon="firebase.svg" Language="Firebase" />
                <TechStackIcon TechStackIcon="MUI.svg" Language="Material UI" />
                <TechStackIcon TechStackIcon="vercel.svg" Language="Vercel" />
                <TechStackIcon TechStackIcon="SweetAlert.svg" Language="SweetAlert2" />
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
