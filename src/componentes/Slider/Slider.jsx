import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

export const Slider = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item className="slide__item">
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide inicial"
          className="slide__img"
        />
        <Carousel.Caption>
          <h3>Mãos amigas</h3>
          <h4>Ajudando a crescer e desenvolver a Região Norte</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide__item">
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Slide dois"
          className="slide__img"
        />

        <Carousel.Caption>
          <h3>É a fonte da vida</h3>
          <h4>Aonde o rio passa deixa a vida e transforma</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide__item">
      <div className="bg-success">
        <div className="d-flex align-items-center container">
            <div>
              <h2 className='text-white w-75'>
                Acreditamos que fomento e tecnologia podem ser iniciados no campo
              </h2>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/carlospph/handbank/refs/heads/main/public/tecnologia___campo.jpg"
                alt="Tecnologia no campo"
                className="slide__img w-100 h-100"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
