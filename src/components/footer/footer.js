import React from "react";
import './footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin ,BsGithub, BsWhatsapp } from 'react-icons/bs';
import logo from '../../media/img/4panas-Logo-noBG.png'

const Footerc = () => {
  return (
    <footer>
       <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className="social-container">
          <a href='' className='me-4 text-reset'>
           <BsFacebook/>
          </a>
          <a href='' className='me-4 text-reset'>
          <BsTwitter/>
          </a>
          <a href='' className='me-4 text-reset'>
          <BsInstagram />
          </a>
          <a href='' className='me-4 text-reset'>
          <BsWhatsapp/>
          </a>
          <a href='' className='me-4 text-reset'>
          <BsGithub/>
          </a>
          <a href='' className='me-4 text-reset'>
           <BsLinkedin/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <img item-center width='70%' src={logo}/>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links Utiles</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Lista de Precios
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ordenes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ayuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Buenos Aires, CABA 1765, Arg
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@4panastech.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href=''>
          4PanasDevs
        </a>
      </div>
    </MDBFooter>
    </footer>
  );
};

export default Footerc;
