import { Header } from '../Components/Header.tsx'
import { SFooter } from '../Components/Footer.tsx'
import { TicketBody } from '../Components/Body.tsx'
import {
  ContainerCardComponent as ContainerCard,
  CardComponent as Card,
  SButtonAbsolut as ButtonAbsolut,
} from '../Components/Card.tsx'
import { SButtonCard } from '../Components/Card.tsx'
import sushi from '../Imagens/sushi.jpg'
import italianfood from '../Imagens/italian-food.png'
import star from '../Imagens/star.png'
import EstiloGlobal from '../GlobalStyle'
import { PiForkKnife } from 'react-icons/pi'
import { FaInstagramSquare } from 'react-icons/fa'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { FaTwitterSquare } from 'react-icons/fa'

function Page1(): JSX.Element {
  const handleClick = () => {
    alert("Adicionado ao carrinho!")
  }

  return (
    <>
      <EstiloGlobal />
      <Header>EBAC FOOD DELIVERY</Header>
      <TicketBody>
        <div style={{ color: '#E66767', backgroundColor: 'white', width: 'fit-content', border: '2px solid #E66767', padding: '2px', margin: 'auto' }}>
          efood<PiForkKnife />
          
        </div>
        
        <div style={{ color: '#E66767', paddingTop: '15px' }}>Viva experiências gastronômicas no conforto de sua casa</div>
        <br></br>
        <button style={{color:'white',backgroundColor:'#E66767',border:'none',padding:'5px'}}><a href="/vejamais" style={{textDecoration:'none',color:'white'}}>Veja mais</a></button>
      </TicketBody>

      
      <ContainerCard>
        <Card>
          <ButtonAbsolut style={{ marginRight: '10vw' }}>Destaque da semana</ButtonAbsolut>
          <ButtonAbsolut>Japonesa</ButtonAbsolut>
          <img style={{ width: '100%', height: '200px', maxHeight: '400px', backgroundColor: 'white' }} src={italianfood} alt="Italian Food" />
          <div style={{ width: '100%', height: '100px' }}>
            <div style={{ justifyContent: 'space-between', margin: '10px 10px 10px 10px', display: 'flex', fontWeight: '800' }}>
              <nav style={{ display: 'inline-block' }}>La Dolce Vita Trattoria</nav>
              <nav style={{ display: 'inline-block' }}>4.6 <img src={star} style={{ width: '15px' }} alt="Star" />
              </nav>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas e risotos incríveis, tudo no conforto de seu lar. Entrega rápida, pratos bem embalados e sabor garantido. Peça já!
            </div>
            <SButtonCard onClick={handleClick}>Saiba Mais</SButtonCard>
          </div>
        </Card>

        <Card>
          <ButtonAbsolut>Japonesa</ButtonAbsolut>
          <img style={{ width: '100%', height: '200px', maxHeight: '400px', backgroundColor: 'white' }} src={sushi} alt="Sushi" />
          <div style={{ width: '100%', height: '100px' }}>
            <div style={{ justifyContent: 'space-between', margin: '0 10px 10px 10px', display: 'flex', fontWeight: '800' }}>
              <nav style={{ display: 'inline-block' }}>Sushi</nav>
              <nav style={{ display: 'inline-block' }}>4.9 <img src={star} style={{ width: '15px' }} alt="Star" />
              </nav>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              Peça o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair de casa com nosso delivery!
            </div>
            <SButtonCard onClick={handleClick}>Saiba Mais</SButtonCard>
          </div>
        </Card>

        <Card>
          <ButtonAbsolut>Japonesa</ButtonAbsolut>
          <img style={{ width: '100%', height: '200px', maxHeight: '400px', backgroundColor: 'white' }} src={sushi} alt="Sushi" />
          <div style={{ width: '100%', height: '100px' }}>
            <div style={{ justifyContent: 'space-between', margin: '0 10px 10px 10px', display: 'flex', fontWeight: '800' }}>
              <nav style={{ display: 'inline-block' }}>Sushi</nav>
              <nav style={{ display: 'inline-block' }}>4.9 <img src={star} style={{ width: '15px' }} alt="Star" />
              </nav>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              Peça o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair de casa com nosso delivery!
            </div>
            <SButtonCard onClick={handleClick}>Saiba Mais</SButtonCard>
          </div>
        </Card>

        <Card>
          <ButtonAbsolut style={{ marginRight: '7vw' }}>Favoritos</ButtonAbsolut>
          <ButtonAbsolut>Italiana</ButtonAbsolut>
          <img style={{ width: '100%', height: '200px', maxHeight: '400px', backgroundColor: 'white' }} src={italianfood} alt="Italian Food" />
          <div style={{ width: '100%', height: '100px' }}>
            <div style={{ justifyContent: 'space-between', margin: '10px 10px 10px 10px', display: 'flex', fontWeight: '800' }}>
              <nav style={{ display: 'inline-block' }}>La Dolce Vita Trattoria</nav>
              <nav style={{ display: 'inline-block' }}>4.6 <img src={star} style={{ width: '15px' }} alt="Star" />
              </nav>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas e risotos incríveis, tudo no conforto de seu lar. Entrega rápida, pratos bem embalados e sabor garantido. Peça já!
            </div>
            <SButtonCard onClick={handleClick}>Saiba Mais</SButtonCard>
          </div>
        </Card>

        
        <Card>
          <ButtonAbsolut style={{ marginRight: '7vw' }}>Favoritos</ButtonAbsolut>
          <ButtonAbsolut>Italiana</ButtonAbsolut>
          <img style={{ width: '100%', height: '200px', maxHeight: '400px', backgroundColor: 'white' }} src={italianfood} alt="Italian Food" />
          <div style={{ width: '100%', height: '100px' }}>
            <div style={{ justifyContent: 'space-between', margin: '10px 10px 10px 10px', display: 'flex', fontWeight: '800' }}>
              <nav style={{ display: 'inline-block' }}>La Dolce Vita Trattoria</nav>
              <nav style={{ display: 'inline-block' }}>4.6 <img src={star} style={{ width: '15px' }} alt="Star" />
              </nav>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas e risotos incríveis, tudo no conforto de seu lar. Entrega rápida, pratos bem embalados e sabor garantido. Peça já!
            </div>
            <SButtonCard onClick={handleClick}>Saiba Mais</SButtonCard>
          </div>
        </Card>

        
        <Card>
          <ButtonAbsolut style={{ marginRight: '7vw' }}>Favoritos</ButtonAbsolut>
          <ButtonAbsolut>Italiana</ButtonAbsolut>
          <img style={{ width: '100%', height: '200px', maxHeight: '400px', backgroundColor: 'white' }} src={italianfood} alt="Italian Food" />
          <div style={{ width: '100%', height: '100px' }}>
            <div style={{ justifyContent: 'space-between', margin: '10px 10px 10px 10px', display: 'flex', fontWeight: '800' }}>
              <nav style={{ display: 'inline-block' }}>La Dolce Vita Trattoria</nav>
              <nav style={{ display: 'inline-block' }}>4.6 <img src={star} style={{ width: '15px' }} alt="Star" />
              </nav>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas e risotos incríveis, tudo no conforto de seu lar. Entrega rápida, pratos bem embalados e sabor garantido. Peça já!
            </div>
            <SButtonCard onClick={handleClick}>Saiba Mais</SButtonCard>
          </div>
        </Card>
      </ContainerCard>

      <SFooter>
        <div style={{ color: '#E66767', backgroundColor: 'white', width: 'fit-content', border: '2px solid #E66767', fontSize: '20px', padding: '2px', margin: 'auto', fontWeight: '800' }}>
          efood<PiForkKnife />
        </div>
        <br></br>
        <div style={{ color: '#E66767', textAlign: 'center' }}>
          <FaInstagramSquare /><BiLogoFacebookSquare /><FaTwitterSquare />
        </div>
        <p style={{ color: '#E66767', padding: '3%' }}>A efood é uma plataforma de delivery.</p>
      </SFooter>
    </>
  );
}

export default Page1;
