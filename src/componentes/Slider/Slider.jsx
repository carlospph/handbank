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
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="https://static.vecteezy.com/ti/vetor-gratis/p3/7978774-fundo-verde-fresco-e-natural-com-linhas-curvas-e-circulos-design-para-pagina-de-banner-website-vetor.jpg"
          alt="Slide tres"
          className="slide__img"
        />

        <Carousel.Caption>
          <h2 className='text-start text-white'>Somos mais do que bank</h2>
          <h3 className='text-start text-white'>Somo conexão de negócios</h3>
          <p className="text-white mt-2 text-start">
            Aqui levamos negócio,promovemos a região e seus projetos!
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
  );
};
