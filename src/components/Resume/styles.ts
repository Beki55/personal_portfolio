import styled from "styled-components";

export const Container = styled.section`
  margin-top: 7rem;
  padding: 0 1.5rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  .resume-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    color: var(--green);
  }

  .resume-desc {
    text-align: center;
    margin-bottom: 2.2rem;
    font-size: 1.6rem;
    opacity: 0.8;
  }

  .resume-content {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .resume-left,
  .resume-right {
    flex: 1 1 340px;
    min-width: 300px;
    max-width: 470px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1.1rem;

    color: var(--green);
    border-left: 4px solid var(--green);
    padding-left: 1rem;
  }

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .resume-block {
    background: #2b2b2b;
    border-radius: 0.8rem;
    padding: 1.7rem 2rem;
    margin-bottom: 1.7rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    color: #fff;
    position: relative;
    transition: box-shadow 0.2s;
    word-break: break-word;
  }

  .resume-block:last-child {
    margin-bottom: 0;
  }

  // Light mode styles for resume cards
  :root.light & .resume-block,
  .light & .resume-block,
  body.light & .resume-block {
    background: rgb(219, 228, 228);
    color: #222;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  :root.light & .resume-block strong,
  .light & .resume-block strong,
  body.light & .resume-block strong {
    color: var(--green);
  }
  :root.light & .resume-block .resume-date,
  .light & .resume-block .resume-date,
  body.light & .resume-block .resume-date {
    color: var(--blue);
  }
  :root.light & .resume-block ul,
  .light & .resume-block ul,
  body.light & .resume-block ul {
    color: #222;
  }
  :root.light & .resume-block em,
  .light & .resume-block em,
  body.light & .resume-block em {
    color: #444;
  }
  :root.light & .resume-block p,
  .light & .resume-block p,
  body.light & .resume-block p {
    color: #444;
  }
  :root.light & .resume-block div,
  .light & .resume-block div,
  body.light & .resume-block div {
    color: var(--blue);
  }

  @media (max-width: 900px) {
    .resume-content {
      flex-direction: column;
      gap: 1.5rem;
    }
    .resume-left,
    .resume-right {
      max-width: 100%;
      min-width: 0;
    }
  }

  @media (max-width: 600px) {
    .resume-block {
      padding: 1.2rem 1rem;
      font-size: 1.4rem;
    }
    .resume-title {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.5rem;
      padding-left: 0.5rem;
    }
    .resume-left,
    .resume-right {
      padding: 0;
    }
  }
`;
