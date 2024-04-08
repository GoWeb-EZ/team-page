import React, { useState, useEffect } from 'react';
import s from './Guestbook.styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Card } from 'react-bootstrap';
import { Container } from '../../components/Container/Container';

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

  const backgroundColors = ['#EEA6AE', '#FEE98B', '#ACE5F1', '#A9E1E4', '#ECC0F0', '#BCE8CE'];

  const getRandomBackgroundColor = () =>
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    const newGuest = {
      id: Date.now(),
      name,
      message,
      backgroundColor: getRandomBackgroundColor(), // 항목 추가 시 색상 할당
    };
    setGuests((prevGuests) => [...prevGuests, newGuest]);
    setName('');
    setMessage('');
  };

  return (
    <Container style={{ justifyContent: 'flex-start' }}>
      <s.Title>Guest-book</s.Title>
      <s.Description>우리 팀을 위한 응원 메시지를 남겨주세요!</s.Description>

      {/* Input */}
      <s.StyledInputCard>
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
                    style={{
                      border: 'none',
                      boxShadow: 'none',
                      background: 'none',
                      height: 'auto',
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={2} className="d-flex justify-content-end">
                <s.StyledButton type="submit">추가</s.StyledButton>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </s.StyledInputCard>

      {/* Card */}
      <s.CardWrapper>
        {guests.map((guest) => (
          <s.StyledCard key={guest.id} style={{ background: guest.backgroundColor }}>
            <s.StyledCardTitle>{guest.name}</s.StyledCardTitle>
            <s.StyledCardText>{guest.message}</s.StyledCardText>
          </s.StyledCard>
        ))}
      </s.CardWrapper>
    </Container>
  );
}
