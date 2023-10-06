import { Link } from "react-router-dom";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

function Carrousel() {
    return (

        <div className="row justify-content-center">
          <div className="container-fluid">
            <Carousel style={{ height: 500 }}>
            <Carousel.Item style={{ height: 500 }}>
              <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
                <Card style={{ width: "25rem" }}>
                  <Card.Body>
                  <img src="img/rock.jpg" className="card-img-top" alt="imagen de un festival de rock" id="img" />
                    <Card.Title>Featured Events</Card.Title>
                    <Card.Text>This are our featured events. We offer a full list of underground events for you and and your friends, where you can filter by type & date.</Card.Text>
                    <Button as={Link} to="events" variant="primary">Go to Events</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
            
            <Carousel.Item style={{ height: 500 }}>
              <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                  <img src="img/Avatar2.png" className="card-img-top" alt="avatar de un usuario" id="img" />
                    <Card.Title>Log in now</Card.Title>
                    <Card.Text>Are you already registered? Well, log in so you don't miss anything.</Card.Text>
                    <Button as={Link} to="register" variant="primary">Register</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
              
            <Carousel.Item style={{ height: 500 }}>
              <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>    
                <Card style={{ width: "25rem" }}>
                  <Card.Body>
                  <img src="img/Avatar.png" className="card-img-top" alt="avatar de un usuario" id="img" />
                    <Card.Title>Do you have a profile?</Card.Title>
                    <Card.Text>If you don't have a profile, you can register just with a few steps and enjoy the advantages of being user.</Card.Text>
                    <Button as={Link} to="login" variant="primary">Log in</Button>
                  </Card.Body>
                </Card>              
                </Stack>
            </Carousel.Item>

            <Carousel.Item style={{ height: 500 }}>
              <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
                <Card style={{ width: "25rem" }}>
                  <Card.Body>
                  <img src="img/map.jpg" className="card-img-top" alt="mapa eventos" id="img" />
                    <Card.Title>Map</Card.Title>
                    <Card.Text>Do you want to find events easily on the map? Register or create an account to access as soon as possible</Card.Text>
                    <Button as={Link} to="" variant="primary">Go to map</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
            </Carousel>
          </div>
        </div>
    )
}

export default Carrousel;