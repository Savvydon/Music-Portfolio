import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/ProfilePics.jpeg";

export default function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={aboutImg}
            style={{
              maxHeight: "650px",
              objectFit: "cover",
            }}
            alt="About"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p>
            CROWN PIANO STUDIO Where Sound Meets Excellence At Crown Piano
            Studio, we turn your musical ideas into powerful, professional
            sound. We are a creative hub dedicated to delivering high-quality
            music production, recording, and sound engineering services tailored
            to artists, singers, and creators who want to stand out. Whether
            you're a beginner or an experienced artist, our studio provides the
            perfect environment to bring your vision to life — with clarity,
            creativity, and excellence.
          </p>
          <p>
            <h2>Our Services</h2>
            <li>🎹 Music Production (Beats & Instrumentals)</li>
            <li>🎤 Professional Recording </li>
            <li>Mixing & Mastering</li>
            <li>🎼 Piano Training & Music Coaching</li>
            <li>🎧 Vocal Processing & Tuning </li>
            <li>📀 Song Arrangement & Composition</li>
          </p>
          <p>
            <h2>Why Choose Crown Piano Studio? </h2>
            <li>High-quality sound output </li>
            <li>Affordable Price</li>
            <li>Creative and professional approach</li>
            <li>Attention to detail on every project </li>
            <li>📀 Song Arrangement & Composition</li>
            At Crown Piano Studio, we don’t just record music — we create
            timeless sound. Book your session today and let your music shine
            like a crown. 👑
          </p>
        </Col>
      </Row>
    </Container>
  );
}
