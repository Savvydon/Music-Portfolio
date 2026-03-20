import { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../assets/Pf.jpg";
import promoVideo from "../../public/Vid1.mp4";
import promoVideo2 from "../../public/Vid2.mp4";
import promoVideo3 from "../../public/vid3.mp4";
import promoVideo4 from "../../public/Vid4.mp4";
import promoVideo5 from "../../public/vid5.mp4";
import promoVideo6 from "../../public/vid6.mp4";

export default function Home() {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== index) {
        video.pause();
      }
    });
  };

  const videos = [
    promoVideo,
    promoVideo2,
    promoVideo3,
    promoVideo4,
    promoVideo5,
    promoVideo6,
  ];

  return (
    <>
      <div className="bg-light p-5 text-center">
        <Container>
          <h1>Welcome to Crown Piano Studio</h1>
          <p>
            I provide high-quality solutions tailored to your needs. Explore my
            services and discover how I can help you grow.
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
              style={{
                clipPath: "circle()",
                objectFit: "cover",
              }}
              className="img-fluid rounded w-75 mx-auto d-block"
            />
          </Col>
          <Col md={6}>
            {/* professional summary */}
            <h2>Professional Summary</h2>
            <p>
              Crown Piano Studio is a modern music production and recording
              space dedicated to delivering high-quality sound and musical
              excellence. The studio provides a creative environment for
              artists, singers, instrumentalists, and producers to bring their
              ideas to life.
            </p>
            <p>
              With a focus on piano-based music, vocal recording, and full music
              production, Crown Piano Studio offers services such as recording,
              mixing, mastering, beat production, and music training. The studio
              is designed to inspire creativity while maintaining professional
              standards that meet both local and international music demands.
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
