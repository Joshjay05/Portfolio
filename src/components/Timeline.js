import React, { useContext } from "react";
import styled from "styled-components";
import EachTimeline from "./EachTimeline";
import { ThemeContext } from "../context/ThemeContext";

const Timeline = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const faqs = [
    {
      title: "TM30 Academy",
      text:
        ".",
      id: "faq1",
      date: "March 15, 2022",
      direction: "left",
      githubLink: "https://github.com/Joshjay05/Tm30-Academy",
      website: "https://tmacademy.tm30.net/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Teens-Literacy Foundation",
      text: ".",
      id: "faq2",
      direction: "right",
      date: "October 11, 2023",
      githubLink: "https://github.com/Joshjay05/teens-litereacy",
      website: "https://teensliteracyfoundation.org/",
      organization: "Teens-Literacy Foundation",
    },
    {
      title: "GWC WaitList",
      text:
        ".",
      id: "faq3",
      direction: "left",
      date: "June 05, 2023",
      githubLink: "https://github.com/Joshjay05/New-WaitList",
      website: "https://waitlist.gwctechhub.com/",
      organization: "GWCTechSchoolAFrica",
    },
    {
      title: "GWCTechSChoolAfrica Website",
      text:
        ".",
      id: "faq4",
      direction: "right",
      date: "ongoing",
      githubLink: "https://github.com/Joshjay05/GWC",
      website: "https://gwc-school-22dv.vercel.app/",
      organization: "GWCTechSchoolAFrica",
    },
    {
      title: "TMSaaS Admin-Dashboard",
      text:
        ".",
      id: "faq5",
      direction: "left",
      date: "ongoing",
      githubLink: "https://github.com/Joshjay05/TmSaas",
      website: "https://tm-saas-28xp.vercel.app/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "GWC-Student Dashboard",
      text:
        "",
      id: "faq6",
      direction: "right",
      date: "Ongoing",
      githubLink: "https://github.com/Joshjay05/Student_dashboard",
      website: "https://student-dashboard-7sim.vercel.app/",
      organization: "GWCTechSchoolAFrica",
    },
    {
      title: "GWC-Teacher's Dashboard",
      text:
        ".",
      id: "faq6",
      direction: "left",
      date: "Ongoing",
      githubLink: "#",
      website: "",
      organization: "GWC-TechSchool Africa",
    },
    {
      title: "CHATTER APP",
      text:
        ".",
      id: "faq6",
      direction: "left",
      date: "Ongoing",
      githubLink: "https://github.com/Joshjay05/Chatter_Page",
      website: "",
      organization: "Personal",
    },
  ];
  return (
    <Wrapper $isDark={isDarkTheme}>
      <h3>Project Timeline</h3>
      <p className="bigText">
        Here is a breakdown of some of my relevant projects. Showcasing the{" "}
        <br />
        name and the tools used for development
      </p>
      <p className="smallText">
        Here is a breakdown of some of my relevant projects. Showcasing the name
        and the tools used for development
      </p>
      <div className="timelineContainer">
        {faqs.map((faq, idx) => {
          const {
            title,
            text,
            direction,
            id,
            date,
            website,
            organization,
          } = faq;
          return (
            <div
              key={id}
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-delay={idx + 1 * 500}
            >
              <EachTimeline
                id={id}
                direction={direction}
                text={text}
                title={title}
                date={date}
                website={website}
                organization={organization}
                index={idx}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Timeline;
const Wrapper = styled.section`
  border-bottom: 1px solid #ffffff2e;
  padding: 2rem 15%;
  position: relative;
  .star_pu {
    position: absolute;
    top: 16%;
    left: 24%;
  }
  h3 {
    color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .bigText {
    color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  .smallText {
    display: none;
  }
  .timelineContainer {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 480px) {
    /* display: none; */
    .bigText {
      display: none;
    }
    .smallText {
      color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
      font-size: 0.7rem;
      text-align: center;
      margin-bottom: 1rem;
      line-height: 1.6;
      display: block;
    }
  }
`;
