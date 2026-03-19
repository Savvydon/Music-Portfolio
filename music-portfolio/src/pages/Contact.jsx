import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "+2348063746319";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  const phoneNumbers = ["+2348063746319", "+2349039987874"];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row className="justify-content-center">
        {/* Contact Info / Social Buttons */}
        <Col md={6} className="text-center mb-4">
          <p>Reach me directly via WhatsApp, social media, or call!</p>

          <Button
            variant="success"
            className="m-2"
            href={whatsappLink}
            target="_blank"
          >
            <FaWhatsapp className="me-2" /> WhatsApp
          </Button>
          <Button
            variant="dark"
            className="m-2"
            href="https://tiktok.com/@crownpianostudio"
            target="_blank"
          >
            <FaTiktok className="me-2" /> TikTok
          </Button>
          <Button
            variant="primary"
            className="m-2"
            href="https://instagram.com/crownpianostudio"
            target="_blank"
          >
            <FaInstagram className="me-2" /> Instagram
          </Button>
          <Button
            variant="primary"
            className="m-2"
            href="https://facebook.com/@crownpianostudio"
            target="_blank"
          >
            <FaFacebook className="me-2" /> Facebook
          </Button>
          {phoneNumbers.map((num, idx) => (
            <Button
              key={idx}
              variant="info"
              className="m-2"
              href={`tel:${num}`}
            >
              <FaPhone className="me-2" /> {num}
            </Button>
          ))}
        </Col>

        {/* Optional Simple Form */}
        <Col md={6}>
          <h5>Send a Message</h5>
          <form>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Your Email"
            />
            <textarea
              className="form-control mb-2"
              rows={4}
              placeholder="Your Message"
            />
            <Button type="submit" variant="primary" className="w-100">
              Send Message
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
