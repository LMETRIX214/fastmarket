import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        <hr />
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">Quienes Somos?</h5>
              <p>
                Somos una Empresa dedicada a la venta de equipo de computo. Nuestro
                Principal objetivo es vender calidad al mejor precio del mercado 
                aparte de tener una pagina con ventas seguras y envios a toda la
                Republica Mexicana!
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
              <h5 className="text-uppercase">Contáctenos</h5>

              <address>
                <strong>FASTMARKET, Inc.</strong>
                <br />
                Los Heroes, Ixtapaluca
                <br />
                Edo Mex, CP 56530
                <br />
                <abbr title="Phone">Tel:</abbr> (55) 2150-1245
              </address>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#222", color: "#fff" }}
        >
          © 2022 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
