import { NavLink } from "react-router-dom";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

function Carrousel() {
    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },
        { _id: 5, text: "mno" },
        { _id: 6, text: "pqr" },
        { _id: 7, text: "stu" },
        { _id: 8, text: "vwx" },
        { _id: 9, text: "yza" }
      ];
    return (

        <div className="row justify-content-center">
            <div className="col-12 col-md-6">
            <Carousel style={{ height: 500 }}>
                {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src="img/rock.jpg" className="card-img-top img-fluid" alt="imagen de un festival de rock" id="img" />
                    <Card.Title>Featured Events</Card.Title>
                    <Card.Text>This are our featured events. We offer a full list of underground events for
                            you and and your friends, where you can filter by type & date.</Card.Text>
                    <Button variant="primary">Go to Events</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src="img/Avatar.png" className="card-img-top" alt="avatar de un usuario" id="img" />
                    <Card.Title>Do you have a profile?</Card.Title>
                    <Card.Text>If you don't have a profile, you can register just with a few steps and enjoy
                            the advantages of being user.</Card.Text>
                    <Button variant="primary">Log in</Button>
                    <Button variant="primary">Register</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src="img/map.jpg" className="card-img-top" alt="mapa eventos" id="img" />
                    <Card.Title>Map</Card.Title>
                    <Card.Text>Do you want to find events easily on the map? Register or create an account to access as soon as possible</Card.Text>
                    <Button variant="primary">Go to map</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
            ))}
            </Carousel>
            </div>
        </div>
    )
}

export default Carrousel;