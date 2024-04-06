import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

export default function GuestBook() {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // 페이지 로드 시 localStorage에서 게스트 목록을 로드합니다.
  useEffect(() => {
    const savedGuests = localStorage.getItem('guests');
    if (savedGuests) {
      setGuests(JSON.parse(savedGuests));
    }
  }, []);

  // guests 상태가 변경될 때마다 localStorage에 저장합니다.
  useEffect(() => {
    localStorage.setItem('guests', JSON.stringify(guests));
  }, [guests]);

  const backgroundColors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

  const getRandomBackgroundColor = () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const newGuest = {
      id: Date.now(),
      name,
      message,
      backgroundColor: getRandomBackgroundColor(), // 항목 추가 시 색상 할당
    };
    setGuests(prevGuests => [...prevGuests, newGuest]);
    setName('');
    setMessage('');
  };


  return (
    <Container style={{ marginTop: '100px' }}>
      <h2>Guest-book</h2>
      <p>우리 팀을 위한 응원 메시지를 남겨주세요!</p>
      <Card style={{ borderRadius: '50px', border: '1px solid black' }}>
        <Card.Body style={{ padding: '10px' }}>
          <Form onSubmit={handleSubmit} style={{ border: 'none', padding: 0, background: 'none' }}>
            <Row className="align-items-start">
              <Col md={2}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ border: 'none', boxShadow: 'none', height: '38px' }}
                  />
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="응원 메시지를 입력해주세요!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ border: 'none', boxShadow: 'none', background: 'none', height: 'auto' }}
                  />
                </Form.Group>
              </Col>
              <Col md={2} className="d-flex justify-content-end">
                <Button variant="primary" type="submit" style={{ borderRadius: '20px', boxShadow: 'none', paddingRight: '40px', paddingLeft: '40px' }}>
                  추가
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Row xs={1} md={4} className="g-4 mt-3">
        {guests.map((guest) => (
          <Col key={guest.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{
              width: '300px',
              height: '300px',
              borderRadius: '15px',
              border: '0px',
              marginBottom: '40px',
              background: guest.backgroundColor,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              overflow: 'auto',
            }}>
              <Card.Body style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <Card.Title style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {guest.name}
                </Card.Title>
                <Card.Text style={{ overflow: 'hidden', maxHeight: '250px' }}>
                  {guest.message}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
