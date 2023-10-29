import React, { useState } from 'react';
import {
  Typography,
  Modal,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    backgroundImage: 'url(https://img.freepik.com/free-photo/blue-wallpaper-iphone-is-best-high-definition-iphone-wallpaper_1340-27554.jpg?size=626&ext=jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    // minHeight: '100vh',
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: '4px',
    outline: 'none',
    maxWidth: '100%',
    // minWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    overflow: 'hidden',
  },
  slideContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '2rem',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
  },
  slideTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  slideDescription: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  slideButton: {
    padding: '0.5rem 1.5rem',
    borderRadius: '4px',
    backgroundColor: 'white',
    color: 'black',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#40a9ff',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleModalOpen = (index) => {
    setCurrentSlide(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  const slides = [
    {
      title: 'Web Development Services',
      description: 'We offer professional web development services to help your business succeed online.',
      buttonText: 'Learn More',
      buttonLink: '/shop',
      imageUrl: 'https://example.com/deals.jpg',
    },
    {
      title: 'Explore React Charts',
      description: 'We offer Various react charts that expose live Data shows ',
      buttonText: 'Explore Now',
      buttonLink: '/shop',
      imageUrl: 'https://example.com/deals.jpg',
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Boost your sales with our e-commerce solutions tailored to your specific business needs.',
      buttonText: 'Explore Now',
      buttonLink: '/community',
      imageUrl: 'https://example.com/community.jpg',
    },
    {
      title: 'Mobile App Development',
      description: 'Get a cutting-edge mobile app to engage your users and enhance your business operations.',
      buttonText: 'Get Started',
      buttonLink: '/courses',
      imageUrl: 'https://example.com/courses.jpg',
    },
  ];

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.carouselContainer}>
          <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
            {slides.map((slide, index) => (
              <div key={index} className={classes.slideContent} onClick={() => handleModalOpen(index)}>
                <Typography variant="h4" className={classes.slideTitle}>
                  {slide.title}
                </Typography>
                <Typography variant="body1" className={classes.slideDescription}>
                  {slide.description}
                </Typography>
                <a href={slide.buttonLink} className={classes.slideButton}>
                  {slide.buttonText}
                </a>
              </div>
            ))}
          </Carousel>
        </div>
        <Modal open={modalOpen} onClose={handleModalClose}>
          <div className={classes.modalContent}>
            <Typography variant="h3" gutterBottom>
              {slides[currentSlide].title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {slides[currentSlide].description}
            </Typography>
            <a href={slides[currentSlide].buttonLink} className={classes.slideButton}>
              {slides[currentSlide].buttonText}
            </a>
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default Home;