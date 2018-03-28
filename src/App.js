import React, {Component} from 'react';

// images/videos
const products = [
  {id: 1, img: '/static/media/frontpage.1b525a86.jpg'},
  {id: 2, img: '', vid:'asset/img/digitalsymphony.mov'}
];

const getProductImageStyle = product => ({
  background: 'url(' + products[0].img +')'
});


class App extends Component {
  render() {
    return (<div className="App">
      <div>
        <a onclick="slidePage.index(1)">
          <div className="logo animated fadeIn"/>
        </a>
        <nav className="navbar animated fadeIn">
          <div className="ambege ambege-spring" data-click-state={1}>
            <div className="ambege-box">
              <div className="ambege-inner"/>
            </div>
          </div>
        </nav>
        <div className="menu-page animated hide zoomOut">
          <div className="nav">
            <ul>
              <li>
                <a href="./aboutus">
                  <p className="menu-link">ABOUT US</p>
                  <p className="menu-desc">WHO WE ARE</p>
                </a>
              </li>
              <li>
                <a href="./work">
                  <p className="menu-link">WORK</p>
                  <p className="menu-desc">OUR PORTFOLIO</p>
                </a>
              </li>
              <li>
                <a href="./services">
                  <p className="menu-link">SERVICES</p>
                  <p className="menu-desc">WHAT WE DO</p>
                </a>
              </li>
              <li>
                <a href="./contact">
                  <p className="menu-link">CONTACT</p>
                  <p className="menu-desc">CONTACT INFO</p>
                </a>
              </li>
              <li>
                <div className="social-link oren">
                  <a href="https://www.facebook.com/digitalsymp/" target="_blank">
                    <i className="fa fa-facebook"/>
                  </a>
                  <a href="https://www.linkedin.com/in/digital-symphony-45baa7134/" target="_blank">
                    <i className="fa fa-linkedin"/>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="slidePage-container animated fadeIn" id="slidePage-container">
          <div className="item active" style={{
              overflow: 'hidden'
            }}>
            <div className="page1" style={getProductImageStyle(products[0])}>
              <div className="row">
                <div className="col-xs-12">
                  <div className="content-wrap">
                    <div className="content">
                      <div className="animated slideInDown" data-delay={250}>
                        <p className="heading">Orchestrating Digital</p>
                      </div>
                      <div className="animated slideInUp" data-delay={250}>
                        <div className="container">
                          <div className="row">
                            <div className="col-xs-6 col-md-6 p-r-0 p-sm-l-0">
                              <p className="subheading  text-right m-b-0">
                                We are a
                              </p>
                            </div>
                            <div className="col-xs-6 col-md-6 p-l-0">
                              <span id="flipper" className="subheading flip">
                                <span className="word step0 set">data</span>
                                <span className="word step1">customer</span>
                                <span className="word step2">results
                                </span>
                              </span>
                            </div>
                            <div className="col-xs-12 col-md-12">
                              <p className="subheading m-t-0">first performance agency</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll-down animated slideInUp hidden-xs">
                <a onclick="slidePage.index(2)">
                  <span>SCROLL TO EXPLORE</span>
                  <i className="icon-hexa-light"/>
                  <i className="icon-arrow-down animated flash infinite"/>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="page2">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="content-wrap">
                  <div className="content">
                    <div className="animated slideInLeft">
                      <p className="heading">Turning Clicks
                        <br/>To SPA’S</p>
                    </div>
                    <div className="animated slideInLeft" data-delay={250}>
                      <p className="subheading">Biji Living by Conlay Property</p>
                    </div>
                    <div className="clearfix"/>
                    <div className="animated slideInUp" data-delay={500}>
                      <div className="btn-border-light" onclick="window.location.href='biji-casestudy';">
                        <div className="btn-border-light-inner" onclick="window.location.href='biji-casestudy';">
                          <a href="biji-casestudy">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="animated slideInDown hidden-xs">
              <div className="row">
                <div className="col-lg-3 pull-right">
                  <div className="social-link">
                    <a href="https://www.linkedin.com/in/digital-symphony-45baa7134/" target="_blank">
                      <i className="fa fa-linkedin"/>
                    </a>
                    <a href="https://www.facebook.com/digitalsymp/" target="_blank">
                      <i className="fa fa-facebook"/>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 pull-left">
                  <p>© 2018
                    <span>Digital Symphony</span>
                    All Rights Reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <div className="item">
            <div className="page3">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="content-wrap">
                  <div className="content">
                    <div className="animated slideInLeft">
                      <p className="heading">Converting Audience
                        <br/>
                        to Foot Traffic</p>
                    </div>
                    <div className="animated slideInLeft" data-delay={250}>
                      <p className="subheading">Melawati Mall by CapitaLand</p>
                    </div>
                    <div className="clearfix"/>
                    <div className="animated slideInUp" data-delay={500}>
                      <div className="btn-border-light" onclick="window.location.href='melawati-casestudy';">
                        <div className="btn-border-light-inner" onclick="window.location.href='melawati-casestudy';">
                          <a href="melawati-casestudy">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="animated slideInDown hidden-xs">
              <div className="row">
                <div className="col-lg-3 pull-right">
                  <div className="social-link">
                    <a href="https://www.linkedin.com/in/digital-symphony-45baa7134/" target="_blank">
                      <i className="fa fa-linkedin"/>
                    </a>
                    <a href="https://www.facebook.com/digitalsymp/" target="_blank">
                      <i className="fa fa-facebook"/>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 pull-left">
                  <p>© 2018
                    <span>Digital Symphony</span>
                    All Rights Reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <div className="item">
            <div className="page4">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="content-wrap">
                  <div className="content">
                    <div className="animated slideInLeft">
                      <p className="heading">It’s The Process
                        <br/>
                        Not The Industry</p>
                    </div>
                    <div className="animated slideInLeft" data-delay={250}>
                      <p className="subheading">Solution building is a science</p>
                    </div>
                    <div className="animated slideInUp" data-delay={500}>
                      <div className="btn-border-light" onclick="window.location.href='services';">
                        <div className="btn-border-light-inner" onclick="window.location.href='services';">
                          <a href="services">OUR SERVICES</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="animated slideInDown hidden-xs">
              <div className="row">
                <div className="col-lg-3 pull-right">
                  <div className="social-link">
                    <a href="https://www.linkedin.com/in/digital-symphony-45baa7134/" target="_blank">
                      <i className="fa fa-linkedin"/>
                    </a>
                    <a href="https://www.facebook.com/digitalsymp/" target="_blank">
                      <i className="fa fa-facebook"/>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 pull-left">
                  <p>© 2018
                    <span>Digital Symphony</span>
                    All Rights Reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          {/*
    <div class="item">
<div class="page4">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="content-wrap">
          <div class="content">
            <div class="animated slideInLeft">
              <p class="heading">It’s The Process
                <br>Not The Industry</p>
            </div>
            <div class="animated slideInLeft" data-delay="250">
              <p class="subheading">Accurate methods and tools allow us to customise business conscious solutions across business verticals
                and industries.</p>
            </div>
            <div class="clearfix"></div>
            <div class="animated slideInUp" data-delay="500">
              <div class="btn-border-light" onclick="window.location.href='services.html';">
                <div class="btn-border-light-inner" onclick="window.location.href='services.html';">
                  <a href="services.html">LEARN MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-5 hidden-xs">
        <div class="content-wrap">
          <div class="content">
            <div class="row">
              <div class="col-sm-6 m-b animated slideInDown" data-delay="300">
                <div class="app">
                  <i class="icon-rocket"></i>
                </div>
                <p class="app-heading">DIGITAL
                  <br>MARKETING</p>
              </div>
              <div class="col-sm-6 m-b animated slideInDown">
                <div class="app">
                  <i class="icon-all-arrow"></i>
                </div>
                <p class="app-heading">APPLICATION
                  <br>DEVELOPMENT</p>
              </div>
              <div class="col-sm-6 animated slideInUp" data-delay="300">
                <div class="app">
                  <i class="icon-two-slide"></i>
                </div>
                <p class="app-heading">DIGITAL
                  <br>CONSULT</p>
              </div>
              <div class="col-sm-6 animated slideInUp">
                <div class="app">
                  <i class="icon-mobile"></i>
                </div>
                <p class="app-heading">MOBILE
                  <br>APPLICATION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class="animated slideInDown hidden-xs">
  <div class="row">
    <div class="col-lg-3 pull-right">
      <div class="social-link">
        <a href="https://www.linkedin.com/in/digital-symphony-45baa7134/" target="_blank">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/digitalsymp/" target="_blank">
          <i class="fa fa-facebook"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-9 pull-left">
      <p>&copy; 2018
        <span>Digital Symphony</span> All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </div> */
          }
          <nav className="desktop-nav pagination hidden-xs" id="pagination">
            <ul>
              <li>
                <a onclick="slidePage.index(1)">
                  <div className="page-label">HOME</div>
                  <hr className="solid white"/>
                </a>
              </li>
              <li>
                <a onclick="slidePage.index(2)">
                  <div className="page-label">CASE STUDY 1</div>
                  <hr className="solid white"/>
                </a>
              </li>
              <li>
                <a onclick="slidePage.index(3)">
                  <div className="page-label">CASE STUDY 2</div>
                  <hr className="solid white"/>
                </a>
              </li>
              <li>
                <a onclick="slidePage.index(4)">
                  <div className="page-label">OUR SERVICES</div>
                  <hr className="solid white"/>
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mobile-nav visible-xs">
            <ul>
              <li>
                <a onclick="slidePage.index(1)"/>
              </li>
              <li>
                <a onclick="slidePage.index(2)"/>
              </li>
              <li>
                <a onclick="slidePage.index(3)"/>
              </li>
              <li>
                <a onclick="slidePage.index(4)"/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>);
  }
}

export default App;
