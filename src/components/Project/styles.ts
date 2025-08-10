import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      .project-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 0.8rem;
        margin-bottom: 1.5rem;
      }

      &:hover {
        transform: translateY(-5px);
        background-color: var(--blackGreen);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
        font-size: 2rem;
        word-break: break-word;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        font-size: 1.4rem;
        word-break: break-word;
        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      .body {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 800px) {
    .projects {
      grid-template-columns: 1fr;
    }
    .project {
      padding: 1.2rem 0.8rem;
    }
  }

  @media (max-width: 600px) {
    .projects {
      gap: 1rem;
      padding: 0.5rem;
    }
    .project {
      padding: 0.8rem 0.4rem;
      border-radius: 0.7rem;
      .project-image {
        height: 120px;
      }
      h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }
      .body {
        padding: 0;
      }
      header {
        margin-bottom: 2rem;
        a > img {
          width: 3.2rem;
        }
      }
      footer .tech-list {
        gap: 0.7rem;
        font-size: 1rem;
      }
    }
    h2 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 400px) {
    .project {
      padding: 0.5rem 0.2rem;
      .project-image {
        height: 80px;
      }
      h3 {
        font-size: 1.1rem;
      }
      p {
        font-size: 0.95rem;
      }
      footer .tech-list {
        font-size: 0.85rem;
      }
    }
  }

  // Light mode styles
  body.light & .project,
  .light & .project {
    background-color: rgb(219, 228, 228);
    color: #222;
  }
  body.light & .project:hover,
  .light & .project:hover {
    background-color: rgb(205, 206, 205);
  }
`;
