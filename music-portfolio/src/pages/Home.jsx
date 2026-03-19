import { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../assets/opened.jpg";
import promoVideo from "../assets/vid1.mp4";
import promoVideo2 from "../assets/Vid2.mp4";
import promoVideo3 from "../assets/vid3.mp4";

export default function Home() {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== index) {
        video.pause();
      }
    });
  };

  const videos = [promoVideo, promoVideo2, promoVideo3];

  return (
    <>
      <div className="bg-light p-5 text-center">
        <Container>
          <h1>Welcome to Our Website</h1>
          <p>
            We provide high-quality solutions tailored to your needs. Explore
            our services and discover how we can help you grow.
          </p>
          <Button variant="primary">Get Started</Button>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={heroImg}
              alt="Hero"
              className="img-fluid rounded w-75 mx-auto d-block"
            />
          </Col>
          <Col md={6}>
            <h2>Who We Are</h2>
            <p>
              We are a team of professionals dedicated to delivering excellence
              in every project we undertake. Our focus is innovation, quality,
              and customer satisfaction.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Watch Our Story</h2>
        <Row className="g-4 justify-content-center">
          {videos.map((vid, idx) => (
            <Col md={4} key={idx}>
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                controls
                className="w-100 rounded"
                style={{ aspectRatio: "16 / 20", objectFit: "cover" }}
                onPlay={() => handlePlay(idx)}
              >
                <source src={vid} type="video/mp4" />
              </video>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
