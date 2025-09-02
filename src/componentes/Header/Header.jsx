import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiHandCoinLine } from 'react-icons/ri';
import './Header.css';

function Header() {
  return (
    <div className="bg__header">
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">
              <RiHandCoinLine className="icone" />
              <span>HandBank</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <NavDropdown title="Para você" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/para-voce/conta-corrente">
                  Conta Corrente
                </NavDropdown.Item>
                <NavDropdown.Item href="/para-voce/credito">
                  Crédito
                </NavDropdown.Item>
                <NavDropdown.Item href="/para-voce/investimentos">
                  Investimentos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/para-voce/cartoes">
                  Cartões
                </NavDropdown.Item>
                <NavDropdown.Item href="/para-voce/seguros">
                  Seguros
                </NavDropdown.Item>
                <NavDropdown.Item href="/para-voce/previdencia">
                  Previdência
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Empresas" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/empresas/conta-pj">
                  Conta PJ
                </NavDropdown.Item>
                <NavDropdown.Item href="/empresas/maquininha">
                  Maquininha de Cartão
                </NavDropdown.Item>
                <NavDropdown.Item href="/empresas/capital-de-giro">
                  Capital de Giro
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Rural" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/rural/credito-agricola">
                  Crédito Agrícola
                </NavDropdown.Item>
                <NavDropdown.Item href="/rural/safra">
                  Crédito de Safra
                </NavDropdown.Item>
                <NavDropdown.Item href="/rural/seguro-rural">
                  Seguro Rural
                </NavDropdown.Item>
                <NavDropdown.Item href="/rural/consorcio">
                  Consórcio Rural
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Financiamentos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/financiamentos/imoveis">
                  Imóveis
                </NavDropdown.Item>
                <NavDropdown.Item href="/financiamentos/veiculos">
                  Veículos
                </NavDropdown.Item>
                <NavDropdown.Item href="/financiamentos/educacional">
                  Educacional
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="O banco" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/o-banco/sobre-nos">
                  Sobre Nós
                </NavDropdown.Item>
                <NavDropdown.Item href="/o-banco/sustentabilidade">
                  Sustentabilidade
                </NavDropdown.Item>
                <NavDropdown.Item href="/o-banco/imprensa">
                  Sala de Imprensa
                </NavDropdown.Item>
                <NavDropdown.Item href="/o-banco/carreiras">
                  Trabalhe Conosco
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Atendimento" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/atendimento/canais">
                  Canais de Atendimento
                </NavDropdown.Item>
                <NavDropdown.Item href="/atendimento/faq">
                  Dúvidas Frequentes (FAQ)
                </NavDropdown.Item>
                <NavDropdown.Item href="/atendimento/ouvidoria">
                  Ouvidoria
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/abra-sua-conta">Abra sua conta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
