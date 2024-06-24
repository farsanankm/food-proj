import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col, Form, Image } from 'react-bootstrap';
import fishicon from './images/fishicon.jpg';
import beeficon from './images/beeficon.jpeg';
import chickenicon from './images/chickenicon.jpeg';
import icon from './images/icon.jpg';
import desserticon from './images/desserticon.jpeg';
import muttonicon from './images/muttonicon.jpeg';
import vegicon from './images/vegicon.jpeg';

function Menu() {
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showCategories, setShowCategories] = useState(true);
    const [showMeals, setShowMeals] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
                setCategories(response.data.categories);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const fetchMealsByCategory = async (category) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            setMeals(response.data.meals);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setShowCategories(false);
            setShowMeals(true);
        }
    };

    const fetchMealsBySearch = async (query) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            setMeals(response.data.meals || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setShowCategories(false);
            setShowMeals(true);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery) {
            fetchMealsBySearch(searchQuery);
        }
    };

    const toggleCategories = () => {
        setShowCategories(true);
        setShowMeals(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Container style={{ marginTop: "20px" }}>
                <div className='w-100 mt-4 mb-5 ' style={{ textAlign: "center", color: "white" }}>
                    <h1 className='sofia-regular fw-bold' style={{ fontSize: "50px",fontFamily:"serif" }}>Just search for your tummy</h1>
                    <div className='w-100 mt-4 mb-5' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Form onSubmit={handleSearchSubmit}>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-2"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>

                <div style={buttonContainerStyle}>
                    <Button onClick={toggleCategories} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={icon}
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div style={buttonTextStyle}>All</div>
                        </div>
                    </Button>
                    <Button onClick={() => fetchMealsByCategory('Beef')} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={beeficon}
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div style={buttonTextStyle}>Beef</div>
                        </div>
                    </Button>
                    <Button onClick={() => fetchMealsByCategory('Chicken')} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={chickenicon}
                                alt="Chicken"
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div style={buttonTextStyle}>Chicken</div>
                        </div>
                    </Button>
                    <Button onClick={() => fetchMealsByCategory('Lamb')} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={muttonicon}
                                alt="Mutton"
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div style={buttonTextStyle}>Mutton</div>
                        </div>
                    </Button>
                    <Button onClick={() => fetchMealsByCategory('Vegetarian')} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={vegicon}
                                alt="Vegetarian"
                                roundedCircle
                                style={{ width: '40px', height: '40px'}}
                            />
                            <div style={buttonTextStyle}>Veg</div>
                        </div>
                    </Button>
                    <Button onClick={() => fetchMealsByCategory('Seafood')} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={fishicon}
                                alt="Seafood"
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div style={buttonTextStyle}>Fish</div>
                        </div>
                    </Button>
                    <Button onClick={() => fetchMealsByCategory('Dessert')} style={customButtonStyle}>
                        <div style={buttonContentStyle}>
                            <Image
                                src={desserticon}
                                alt="Desserts"
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <div style={buttonTextStyle}>Desserts</div>
                        </div>
                    </Button>
                </div>
                
                {error && <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>}

                {showCategories && (
                    <Row>
                        {categories.map((category) => (
                            <Col key={category.idCategory} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                                <Card style={customCardStyle}>
                                    <Card.Img variant="top" src={category.strCategoryThumb} style={cardImageStyle} className="rounded-circle" />
                                    <Card.Body>
                                        <Card.Title style={cardTitleStyle}>{category.strCategory}</Card.Title>
                                        <Button variant="primary" size="sm" onClick={() => fetchMealsByCategory(category.strCategory)}>View</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
                
                {showMeals && (
                    <Row>
                        {meals.map((meal) => (
                            <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
                                <Card style={customCardStyle}>
                                    <Card.Img variant="top" src={meal.strMealThumb} style={cardImageStyle} className="rounded-circle" />
                                    <Card.Body>
                                        <Card.Title style={cardTitleStyle}>{meal.strMeal}</Card.Title>
                                        <Button variant="primary" size="sm">Add</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
                
                {/* <div className='contact-section' style={{ marginTop: "50px" }}>
                    <h2>Contact Us</h2>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your message"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
                            Submit
                        </Button>
                    </Form>
                </div> */}
            </Container>
            
            {/* <div className="footer-section d-flex justify-content-around flex-wrap p-5 mt-5">
                <div className='footer-column ps-5'>
                    <h5>CONTACT</h5>
                    <div className='pt-3'>
                        <h6>130/Plot No. 20, 15th Phase,</h6>
                        <h6>Koduvally, Malappuram, Bangalore</h6>
                    </div>
                    <div className='pt-3'>
                        <h6>+91 9946949365</h6>
                        <h6>+91 123-456-7890</h6>
                    </div>
                    <div className='pt-3'>
                        <h6>demo@gmail.com</h6>
                        <h6>demo@gmail.com</h6>
                    </div>
                </div>
                <div className='footer-column'>
                    <h5>OUR LINKS</h5>
                    <h6 className='pt-3'>Home</h6>
                    <h6 className='pt-3'>About Us</h6>
                    <h6 className='pt-3'>Services</h6>
                    <h6 className='pt-3'>Team</h6>
                    <h6 className='pt-3'>Blog</h6>
                </div>
                <div className='footer-column'>
                    <h5>OUR SERVICES</h5>
                    <h6 className='pt-3'>Dining</h6>
                    <h6 className='pt-3'>Take away</h6>
                    <h6 className='pt-3'>Reservation</h6>
                    <h6 className='pt-3'>Our Premium Looks</h6>
                </div>
                <div className='footer-column'>
                    <h5>HELP CENTER</h5>
                    <h6 className='pt-3'>FAQ</h6>
                    <h6 className='pt-3'>Shop</h6>
                    <h6 className='pt-3'>Category Filter</h6>
                    <h6 className='pt-3'>Testimonials</h6>
                    <h6 className='pt-3'>Contact Us</h6>
                </div>
            </div> */}
        </div>
    );
}

const customButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
};

const buttonContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
};

const buttonTextStyle = {
    color: 'black',
    marginTop: '5px'
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
};

const customCardStyle = {
    textAlign: 'center',
    border: '1px solid #e1e1e1',
    borderRadius: '10px',
    padding: '10px'
};

const cardImageStyle = {
    width: '100px', // Smaller width
    height: '100px', // Smaller height
    objectFit: 'cover',
    margin: '0 auto' // Center the image
};

const cardTitleStyle = {
    fontSize: '14px', // Slightly smaller text size
    marginTop: '10px' // Space between image and title
};

// Adding hover effects using CSS-in-JS
const styles = document.createElement('style');
styles.innerHTML = `
    .btn:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(styles);

export default Menu;
