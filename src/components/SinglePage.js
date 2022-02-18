import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.css'
const Main = () => {

    const images = [
        {
            url: 'img/01.jpg',
            caption: 'Slide 1'
        },
        {
            url: 'img/02.jpg',
            caption: 'Slide 2'
        },
        {
            url: 'img/03.jpg',
            caption: 'Slide 3'
        },
    ];

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div class="container px-5">
                    {/* <div className="Brandmain"> */}
                    <a class="navbar-brand" href="#page-top">HairCareTv</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="#!">Sign Up</a></li>
                            <li class="nav-item"  ><a class="nav-link" href="#!">Log In</a></li>
                        </ul>
                    </div>
                </div>
                {/* </div> */}
            </nav>
            {/* <!-- Header--> */}
            
            <header class="masthead text-center text-white " style={{ backgroundImage: "url(/img/aq.jpg)" }}>
                <div class="masthead-content">

                    <div class="container px-5">
                        <div class="col-lg-12 order-lg-1">

                            <div class="p-5">
                                <h2 class="display-4"><b>Become a Host</b></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>

                            </div>
                        </div>

      
           
                        <div class="card">
                            <div class="row gx-5 align-items-center backgroung-black">
                                <div class="col-lg-4 order-lg-1">

                                    <div class="p-5">
                                        <h2 ><b>Benefits Become a Host</b></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur  amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>

                                    </div>
                                </div>
                                <div class="col-lg-8 order-lg-2">
           
                                    <div class="p-5">
                                    <div class="row">
                                        <div class="col-sm-5 m-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img width={40} height={40} src="https://img.icons8.com/color-glass/48/000000/coins.png" />
                                                    <h5>Earn Money</h5>
                                                    <p class="card-text">With supporting text lead-in to additional content.</p>
                                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a>     */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 m-2">
                                            <div class="card">
                                                <div class="card-body">
                                                <img src="https://img.icons8.com/color/48/000000/money-bag-euro.png"/>
                                                    <h5 >Earn Cash</h5>
                                                    <p class="card-text">With supporting text below as a natural content.</p>
                                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="row">
                                            <div class="col-sm-5 m-2">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <img  width={40} height={40} src="https://img.icons8.com/fluency/48/000000/get-revenue.png" />
                                                        <h5>Supplement Income</h5>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-5 m-2">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <img  width={40} height={40} src="https://img.icons8.com/external-filled-outline-geotatah/64/000000/external-distinctive-brand-positioning-filled-outline-filled-outline-geotatah.png" />
                                                        <h5 class="card-title">Earn Extra Money</h5>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div> */}
            </header>

          
            {/* <!-- Content section 1--> */}
            {/* <section id="scroll" class="bg-black">
            <div class="p-5">
                                <h4 class="display-4">Let there be rock!</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </section> */}
            {/* <!-- Content section 2--> */}
            <section className="bg-dark text-white" >
                <div class="container px-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6">
                            <div class="p-5"><img class="img-fluid rounded-rectangle" src="img/02.jpg" alt="..." /></div>
                        </div>
                        <div class="col-lg-6" >
                            <div class="p-5">
                                <h2 class="display-4">Host Benefits</h2>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white" >
                <div class="container px-5 bg-black">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-12 align-items-center text-center">
                            <div class="p-25 ">
                                <h2 >Registraion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </div>
                        <div class="col-lg-12" >
                            <form>
                                <div class="row ">
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                            <label>Your Name</label>
                                                <input type="text" class="form-control" placeholder="Name" />


                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                            <label>Your Email</label>

                                                <input type="text" class="form-control" placeholder="Email" />


                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                            <label>Phone Number   </label>
                                                <input type="text" class="form-control" placeholder="Phone Number" />


                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                            <label>Password</label>

                                                <input type="text" class="form-control" placeholder="Password" />


                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 align-items-center text-center">
                            <div class="p-45 ">
                            <button type="button" class="btn btn-success col-sm-6">Sign Up</button>
                                
                            </div>
                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Content section 3--> */}
            <section class="col-lg-12 align-items-center text-center"g >
                <div class="container px-5 py-5">
                    <div class="row align-items-center text-white">
                    <Carousel>
                <div>
                    <img  src="IMG/01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="IMG/02.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="IMG/03.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                    </div>
                </div>
            </section>
            {/* <!-- Footer--> */}
            <footer class="py-5  bg-black text-white" >
                <div class="row gx-5 align-items-center">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 >About IICTV</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
                                <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
                                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" />
                                <img src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-youtube-multimedia-prettycons-flat-prettycons.png" />
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a>     */}
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Company</h5>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>



                                {/* <a href="#" class="btn btn-primary">Go somewhere</a>     */}
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Useful Links</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a>     */}
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Latest News</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a>     */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer class="py-2 bg-black" style={{borderTop:'1px solid white'}}>
                <div class="container px-1"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2021</p></div>
            </footer>
        </>
    )
}
export default Main;