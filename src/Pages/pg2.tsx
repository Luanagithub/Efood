import { TicketItens } from '../Components/Body.tsx'
import { SFooter } from '../Components/Footer.tsx';
import { ContainerCardComponent as CardContainer} from '../Components/Card.tsx'
import { SMiniCard} from '../Components/MiniCard.tsx'
import { SButtonCard} from '../Components/MiniCard.tsx'
import { PiForkKnife} from 'react-icons/pi'
import pizza from '../Imagens/pizza.png'
import italianfood from '../Imagens/italian-food.png'
import { FaInstagramSquare} from 'react-icons/fa'
import { BiLogoFacebookSquare} from 'react-icons/bi'
import { FaTwitterSquare} from 'react-icons/fa'
import EstiloGlobal from '../GlobalStyle'
import { useState } from 'react'


function Page2(){
    const [modalState, setModal] = useState(true);
    const [OtherState, setOtherState] = useState(false);
    const [OtherState2, setOtherState2] = useState(false);
    const [OpenState, setOpenState] = useState(false);

    return(
    <>
    <EstiloGlobal/>
    <br></br>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100vw'}}>

    <TicketItens>
        <div style={{ color: '#E66767', backgroundColor: 'white', width: 'fit-content', border: '2px solid #E66767', padding: '2px', margin: 'auto' }}>
        efood<PiForkKnife />
        </div>
        <button style={{background:'white',color:'#E66767',border:'2px solid #E66767'}}><a href="/" style={{background:'white',color:'#E66767',textDecoration:'none'}}>Voltar</a></button>
        <div style={{ color: '#E66767', paddingTop: '4%', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <nav style={{ margin: '0 10px' }}>efood</nav>
        <nav style={{ margin: '0 10px' }}>Restaurante</nav>
        <nav style={{ margin: '0 10px' }}>x produto(s) no carrinho</nav>
        </div>
        </TicketItens>
        <div style={{backgroundColor:'blue', width:'95vw',height:'auto',margin:'auto', background: `url(${italianfood})`,backgroundSize: 'cover'}} ></div>
        
        
        <CardContainer>
            <SMiniCard>
                <img src={pizza} width="100%"></img>
                <h3 style={{ height:'fit-content',width:'100%',margin:'10px 0 10px 0',}}>Pizza Margherita</h3>
                <p style={{fontWeight:'300', marginTop:'-10px'}}>A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.</p>
            <SButtonCard onClick={()=> setOpenState(!OpenState)}>Adicionar ao carrinho</SButtonCard>    
            </SMiniCard>

            <SMiniCard>
                <img src={pizza} width="100%"></img>
                <h3 style={{ height:'fit-content',width:'100%',margin:'10px 0 10px 0'}}>Pizza Margherita</h3>
                <p style={{fontWeight:'300', marginTop:'-10px'}}>A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.</p>
                <SButtonCard onClick={()=> setOpenState(!OpenState)}>Adicionar ao carrinho</SButtonCard>
            </SMiniCard>

            <SMiniCard>
                <img src={pizza} width="100%"></img>
                <h3 style={{ height:'fit-content',width:'100%',margin:'10px 0 10px 0'}}>Pizza Margherita</h3>
                <p style={{fontWeight:'300', marginTop:'-10px'}}>A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.</p>
            <SButtonCard  onClick={()=> setOpenState(!OpenState)}>Adicionar ao carrinho</SButtonCard>
        
            </SMiniCard>

            <SMiniCard>
                <img src={pizza} width="100%"></img>
                <h3 style={{ height:'fit-content',width:'100%',margin:'10px 0 10px 0'}}>Pizza Margherita</h3>
                <p style={{fontWeight:'300', marginTop:'-10px'}}>A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.</p>
            <SButtonCard  onClick={()=> setOpenState(!OpenState)}>Adicionar ao carrinho</SButtonCard>
            </SMiniCard>

            <SMiniCard>
                <img src={pizza} width="100%"></img>
                <h3 style={{ height:'fit-content',width:'100%',margin:'10px 0 10px 0'}}>Pizza Margherita</h3>
                <p style={{fontWeight:'300', marginTop:'-10px'}}>A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.</p>
                <SButtonCard  onClick={()=> setOpenState(!OpenState)}>Adicionar ao carrinho</SButtonCard>
            </SMiniCard>

            <SMiniCard>
                <img src={pizza} width="100%"></img>
                <h3 style={{ height:'fit-content',width:'100%',margin:'10px 0 10px 0'}}>Pizza Margherita</h3>
                <p style={{fontWeight:'300', marginTop:'-10px'}}>A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.</p>
                <SButtonCard  onClick={()=> setOpenState(!OpenState)}>Adicionar ao carrinho</SButtonCard>
            </SMiniCard>
        </CardContainer>


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

    </div>

    {OpenState && <Modal setOpenState={setOpenState} OpenState={OpenState} />}
    <br></br>

    {modalState && !OtherState && <LateralModal OtherState={OtherState} modalState={modalState} setModal={setModal} setOtherState={setOtherState}/>}
    {modalState && !OtherState2 && OtherState && <LateralModalEnvio OtherState={OtherState} OtherState2={OtherState2} setOtherState2={setOtherState2} setOtherState={setOtherState} modalState={modalState} setModal={setModal} />}
    {modalState && OtherState2 && OtherState &&<LateralModalEnvio2 OtherState={OtherState} OtherState2={OtherState2} setOtherState2={setOtherState2} setOtherState={setOtherState} modalState={modalState} setModal={setModal} />}

    </>
    )
}

export function Modal({ setOpenState, OpenState }:OpenState){
    return (
        <SMiniCard
        style={{
          position: 'absolute',
          top: '30%', // Centralizar verticalmente
          left: '50%', // Centralizar horizontalmente
          transform: 'translate(-50%, -50%)', // Centralizar vertical e horizontalmente
          width: '100%',
          padding: '10px 90px 10px 90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'fit-content', // Ocupa 100% da altura da tela
        }}
      >
    <button onClick={()=> setOpenState(!OpenState)} style={{position:'absolute',zIndex:'2',top:'10px',right:'20px',backgroundColor:'#ffffff',cursor:'pointer',border:'none'}}>X</button>
        <div
        style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxWidth: '1200px', // Define uma largura máxima

        }}
        >
        <div style={{ flex: '1', position:'relative', margin:'10px 0px 0px 0px'}}>
            <img src={pizza} width="auto" height='120px' alt="Pizza" />
        </div>

        <div style={{ flex: '2', minWidth:'230px', padding: '20px' }}>
            <h3>Pizza Margherita</h3>
            <p style={{ fontWeight: '300' }}>
            A clássica Marguerita: molho de tomate, mussarela, manjericão fresco e um toque de azeite.
            </p>
            <SButtonCard>Adicionar ao carrinho</SButtonCard>
        </div>
        
    </div>
    </SMiniCard>

    );
}

interface LateralModalProps {
    modalState: boolean;
    OtherState: boolean;
    setOtherState: React.Dispatch<React.SetStateAction<boolean>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    OtherState2: boolean;
    setOtherState2: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LateralModalProps1 {
    modalState: boolean;
    OtherState: boolean;
    setOtherState: React.Dispatch<React.SetStateAction<boolean>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OpenState{
    OpenState:boolean;
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LateralModal({ modalState, setModal, OtherState, setOtherState }: LateralModalProps1) {
    return (
    <>
    <button onClick={()=> setModal(!modalState)} style={{position:'absolute',zIndex:'2',top:'10vh',right:'20px',backgroundColor:'#ffffff',cursor:'pointer',border:'none'}}>X</button>

    <div style={{height:'70%',padding:'',backgroundColor:'#E66767',position:'absolute',width:'320px',top:'10vh',right:'10px'}}>
    <SMiniCard
        style={{
        width: '100px',
        minWidth:'260px',
        maxWidth:'28px',
        height: 'fit-content',
        margin:'10px',
        backgroundColor:'#FFEBD9',
        }}
    >
        <div
        style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        }}
        >
        <div style={{ flex: '1', position:'relative'}}>
            <img src={pizza} width="auto" height='60px' alt="Pizza" />
        </div>

        <div style={{ flex: '2', minWidth:'60px', padding: '20px',color:'#E66767' }}>
            <h4 style={{width:'120%'}}>Pizza Margherita</h4>
            <p style={{ fontWeight: '300' }}>
            R$:60,00
            </p>
            
        </div>
            
        </div>
        </SMiniCard>
        <br></br>
        <SMiniCard
        style={{
        width: '100px',
        minWidth:'260px',
        maxWidth:'28px',
        height: 'fit-content',
        margin:'10px',
        backgroundColor:'#FFEBD9',
        
        }}
    >
        <div
        style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        }}
        >
        <div style={{ flex: '1', position:'relative'}}>
            <img src={pizza} width="auto" height='60px' alt="Pizza" />
        </div>

        <div style={{ flex: '2', minWidth:'60px', padding: '20px',color:'#E66767'}}>
            <h4 style={{width:'120%'}}>Pizza Margherita</h4>
            <p style={{ fontWeight: '300' }}>
            R$:60,00
            </p>
            
        </div>
            
        </div>
        </SMiniCard>
        <br></br>
        <SMiniCard
        style={{
        width: '100px',
        minWidth:'260px',
        maxWidth:'28px',
        height: 'fit-content',
        margin:'10px',
        backgroundColor:'#FFEBD9',
        
        }}
    >
        <div
        style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        }}
        >
        <div style={{ flex: '1', position:'relative'}}>
            <img src={pizza} width="auto" height='60px' alt="Pizza" />
        </div>

        <div style={{ flex: '2', minWidth:'60px', padding: '20px',color:'#E66767'}}>
            <h4 style={{width:'120%'}}>Pizza Margherita</h4>
            <p style={{ fontWeight: '300' }}>
            R$:60,00
            </p>
            
        </div>
            
        </div>
        </SMiniCard>
        <br></br>
        <div style={{display:'flex',justifyContent:'space-between',margin:'10px 10px 20px 10px',color:'#FFEBD9'}}>
        <div>Valor total</div>
        <div>R$ 182,70</div>
        </div>
        <SButtonCard onClick={()=> setOtherState(!OtherState)} style={{width:'89%'}}>Continuar com a entrega</SButtonCard>
        </div>
    </>
    )
}

export function LateralModalEnvio({ modalState, setModal, OtherState, setOtherState, OtherState2, setOtherState2 }: LateralModalProps) {
    return(
        <>
        <button onClick={()=> setModal(!modalState)} style={{position:'absolute',zIndex:'2',top:'10vh',right:'20px',backgroundColor:'#ffffff',cursor:'pointer',border:'none'}}>X</button>

        <div style={{height:'50%',padding:'',backgroundColor:'#E66767',position:'absolute',width:'320px',top:'10vh',right:'0px',color:'#ffffff', display:'flex', flexDirection:'column',textAlign:'left',marginLeft:'20px',paddingLeft:'15px'}}>
        <h3 style={{marginTop:'10px',textAlign:'left'}}>Entrega</h3>

        <form style={{width:'100%'}}>
        <div>Quem irá receber</div>
        <input style={{width:'86%'}} />

        <div>Endereço</div>
        <input style={{width:'86%'}} />

        <div>Cidade</div>
        <input style={{width:'86%'}} />

        <div style={{width:'45%',display:'inline-flex',justifyContent: 'center'}}>CEP</div>
        <div style={{width:'45%',display:'inline-flex',justifyContent: 'center'}}>Número</div>
        <input style={{width:'42%'}} />
        <input style={{width:'42%'}} />

        <div>Complemento (opcional)</div>
        <input style={{width:'86%'}} />
        

        <SButtonCard  onClick={()=> setOtherState2(!OtherState2)} style={{width:'90%',fontSize:'16px',marginTop:'20px'}}>Continuar com o pagamento</SButtonCard>
        <SButtonCard onClick={()=> setOtherState(!OtherState)} style={{width:'90%',fontSize:'16px',marginTop:'20px'}}>Voltar para o carrinho</SButtonCard>
        </form>
        </div>
        </>
    )
}


export function LateralModalEnvio2({ modalState, setModal, OtherState2, setOtherState2 }: LateralModalProps) {
    return(
        <>
        <button onClick={()=> setModal(!modalState)} style={{position:'absolute',zIndex:'2',top:'10vh',right:'20px',backgroundColor:'#ffffff',cursor:'pointer',border:'none'}}>X</button>

        <div style={{height:'50%',padding:'',backgroundColor:'#E66767',position:'absolute',width:'320px',top:'10vh',right:'0px',color:'#ffffff', display:'flex', flexDirection:'column',textAlign:'left',marginLeft:'20px',paddingLeft:'15px'}}>
        <h3 style={{marginTop:'10px',textAlign:'left'}}>Pagamento - Valor a pagar R$ 190,90</h3>

        <form style={{width:'100%'}}>

        <div style={{width:'70%'}} >Nome no cartão</div>
        <input style={{width:'70%'}} />

        <div style={{width:'30%'}} >CVV</div>
        <input style={{width:'30%'}} />

        <div style={{width:'30%'}}>Mês de vencimento</div>
        <input style={{width:'30%'}} />

        <div style={{width:'50%'}}>Ano de vencimento</div>
        <input style={{width:'50%'}} />
        

        <SButtonCard onClick={()=> setOtherState2(!OtherState2)} style={{width:'90%',fontSize:'16px',marginTop:'20px'}}>Finalizar pagamento</SButtonCard>
        <p></p>
        <SButtonCard onClick={()=> setOtherState2(!OtherState2)} style={{width:'90%',fontSize:'16px',marginTop:'20px'}}>Voltar para a edição de endereço</SButtonCard>
        </form>
        </div>
        </>
    )
}

export default Page2