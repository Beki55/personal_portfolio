import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import resumePdf from "../../assets/bereket-cv.pdf";

export function Resume() {
  return (
    <Container id="resume">
      <ScrollAnimation animateIn="fadeInDown">
        <h2 className="">Resume</h2>
        <p className="resume-desc">
          Innovative and deadline-driven Software Engineer with 3+ years of
          experience designing and developing user-centered digital/print
          marketing material from initial concept to final, polished
          deliverable.
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
          className=""
        >
          <a
            href={resumePdf}
            download
            className="resume-download-btn"
            style={{
              display: "inline-block",
              margin: "1.2rem auto 3rem auto",
              padding: "1rem 2.5rem",
              background: "var(--green)",
              color: "#fff",
              borderRadius: "2rem",
              fontWeight: 500,
              fontSize: "1.5rem",
              textDecoration: "none",
              transition: "filter 0.25s",
              textAlign: "center",
            }}
          >
            Download CV (PDF)
          </a>
        </p>
      </ScrollAnimation>
      <div className="resume-content">
        <div className="resume-left">
          {/* <section>
            <h3>Summary</h3>
            <div className="resume-block">
              <strong>BEREKET MELESE</strong>
              <p>
                <em>
                  Software Engineer with experience in full stack web
                  development, ERP systems, and user-centered solutions.
                </em>
              </p>
              <ul>
                <li>Bahir Dar, Ethiopia</li>
                <li>(+251) 974512450</li>
                <li>bereket21bnm@gmail.com</li>
              </ul>
            </div>
          </section> */}
          <section>
            <h3>Education</h3>
            <div className="resume-block">
              <strong>Bachelor of Software Engineering</strong>
              <br />
              <span className="resume-date"> 2021 - Present</span>
              <br />
              <div>Bahir Dar University, Ethiopia</div>
              <br />
              <p>
                Pursuing a Bachelor's degree in Software Engineering. Focused on
                web development, backend systems, and software engineering
                principles.
              </p>
            </div>
            <div className="resume-block">
              <div>
                <strong style={{ marginRight: "2rem" }}>
                  High School Diploma
                </strong>
                <span className="resume-date">2021</span>
                <br />
                <br />
              </div>
              <div>BLESSED G/MICHEAL CATHOLIC SCHOOL, Ethiopia</div>
              <br />
              <p>
                Graduated with distinction. Participated in coding clubs and
                science competitions.
              </p>
            </div>
          </section>
        </div>
        <div className="resume-right">
          <section>
            <h3>Professional Experience</h3>
            <div className="resume-block">
              <strong style={{ marginRight: "2rem" }}>
                Front-end Developer
              </strong>
              <span className="resume-date">2025 - Present</span>
              <br />
              <div>Tinamart Business PLC</div>
              <br />
              <ul>
                <li>
                  Developed robust admin dashboard systems for business
                  operations and analytics.
                </li>
                <li>
                  Collaborated with backend teams to deliver seamless user
                  experiences.
                </li>
              </ul>
            </div>
            <div className="resume-block">
              <strong style={{ marginRight: "2rem" }}>
                Full Stack Developer
              </strong>
              <span className="resume-date">2024 - 2025</span>
              <br />
              <div>Awura Tech</div>
              <br />
              <ul>
                <li>
                  Built and deployed web applications for clients in various
                  industries.
                </li>
                <li>
                  Worked with React, Node.js, Express, MongoDB, and REST APIs.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
