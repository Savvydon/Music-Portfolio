import { Container, Row, Col, Card } from "react-bootstrap";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

export default function Services() {
  const services = [
    {
      img: service1,
      title: "Music Production",
      description:
        "From concept to completion, I craft high-quality music that resonates with your audience. My services include:",
      bullets: [
        "Custom composition and scoring",
        "Sound design and audio post-production",
        "Music production and mixing",
        "Audio mastering",
      ],
      footer:
        "Whether you're a filmmaker, advertiser, or artist, we'll work together to help you create the perfect soundtrack for your project.",
    },
    {
      img: service2,
      title: "Piano Lessons",
      description:
        "Unlock your musical journey with my expert piano lessons. My experienced instructors provide:",
      bullets: [
        "Beginner to advanced lessons",
        "Personalized instruction",
        "Flexible scheduling",
        "Performance opportunities",
      ],
      footer:
        "Come onboard with the community of musicians and discover the joy of playing the piano.",
    },
    {
      img: service3,
      title: "Overall Services",
      description:
        "Elevate Your Sound with Expert Music Services from recording to performance, we offer top-notch music services to help you create, refine, and showcase your sound. Our services include professional recording, production, training, and more. Let's bring your music to life! 😊",
      bullets: [
        "Vocal recording",
        "Instrumental recording",
        "Multi-track recording",
        "Session management and production",
      ],
      footer:
        "We create a comfortable environment so you can perform at your best.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={service.img}
                style={{
                  maxHeight: "350px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <ul>
                  {service.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Card.Text>{service.footer}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
