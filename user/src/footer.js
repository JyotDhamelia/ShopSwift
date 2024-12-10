export default function Footer()
{
    return (<footer className="footer bg-darker pt-5">
    <div className="mt-n10 pt-4 pb-4 bg-dark">
      <div className="container">
        <div className="row">
        
          <div className="col-lg-12">
            <div className="d-flex flex-sm-row flex-column justify-content-sm-between mx-lg-n3">
              <div className="widget widget-links widget-light  px-lg-3 px-sm-n2">
                <h3 className="widget-title text-light">Company</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      About Us
                    </a>
                  </li>
              
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-lg-4 my-3 py-2">
      <div className="d-flex flex-md-row flex-column-reverse align-items-center justify-content-md-between">
        <div className="fs-xs text-light opacity-50">
          © All rights reserved. Made by{" "}
          <a
            className="text-light"
            href="https://theeasylearnacademy.com/"
            target="_blank"
            rel="noopener">
                The easylearn academy
          </a>
        </div>
       
      </div>
    </div>
  </footer>)
}