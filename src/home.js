import React from 'react';
import FBLogin from './fblogin';
 
class Home extends React.Component{

  render () {
    return (
 <div>
   <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="index.html">MentorBot</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#feature" data-toggle="popover" title="Popover Header" data-content="This a mentor bot. It creates a mentor mentee relationship.">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
    
  <div className="banner">
    <div className="bg-color">
      <div className="container">
        <div className="row">
          <div className="banner-text text-center">
            <div className="text-border">
              <h2 className="text-dec">Trust & Quality</h2>
            </div>
            <div className="intro-para text-center quote">
              <p className="big-text">Learning Today . . . Investing in Tomorrow.</p>
              <p className="small-text">In life we will need each and in every level there must be people more experienced than us. Let's grow together to great heights.</p>
            </div>
           
              <div className="mouse">
              <FBLogin/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section id="feature" className="section-padding">
    <div className="container">
    <div className="row">
        <div className="header-section text-center">
          <h2>Features</h2>
        </div>
        <div className="feature-info">
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4> Technologies used</h4>
                <p>Mentor bot has been implemented using facebook technologies. We leveraged on facebook login, messenger and react.</p>
              </div>
              <div className="fea-img pull-left">
                <i className="fa fa-css3"></i>
              </div>
            </div>
          </div>
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>Bot Background</h4>
                <p>This a bot built for helping developers find mentors in their area of interest as developers. We hope to use it at work to help developers find mentors instantly without delays.</p>
              </div>
              <div className="fea-img pull-left">
                <i className="fa fa-drupal"></i>
              </div>
            </div>
          </div>
          <div className="fea">
            <div className="col-md-4">
              <div className="heading pull-right">
                <h4>Bot Design</h4>
                <p>It has been designed to achieve two key functions help mentors register and mentees look for mentors.</p>
              </div>
              <div className="fea-img pull-left">
                <i className="fa fa-trophy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
  <section id="faculity-member" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="header-section text-center">
          <h2>Developers Involved</h2>
          <p>The mentorbot was developed by two ladies, who have a passion for technology.</p>
          <hr className="bottom-line"/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="pm-staff-profile-container">
            <div className="pm-staff-profile-image-wrapper text-center">
              <div className="pm-staff-profile-image">
                <img src="img/joan.jpg" alt="" className="img-thumbnail img-circle" />
              </div>
            </div>
            <div className="pm-staff-profile-details text-center">
              <p className="pm-staff-profile-name">Joan Awinja</p>
              <p className="pm-staff-profile-title">Software Developer</p>

              <p className="pm-staff-profile-bio">Joan Awinja is an experienced developer with key technical skills. Her major is in web development </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="pm-staff-profile-container">
            <div className="pm-staff-profile-image-wrapper text-center">
              <div className="pm-staff-profile-image">
                <img src="img/angie.jpg" alt="" className="img-thumbnail img-circle" />
              </div>
            </div>
            <div className="pm-staff-profile-details text-center">
              <p className="pm-staff-profile-name">Angela Mutava</p>
              <p className="pm-staff-profile-title">Software Developer</p>

              <p className="pm-staff-profile-bio">Angela Mutava has majored in developing web projects. She is however not limited and is open to challenges.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="footer" className="footer">
    <div className="container text-center">
    <h3>Become a mentor!What do we live for if not to make others better.</h3>
      <ul className="social-links">
        <li><a href="#link"><i className="fa fa-twitter fa-fw"></i></a></li>
        <li><a href="https://www.facebook.com/findamentorke/"><i className="fa fa-facebook fa-fw"></i></a></li>
      </ul>
      ©2017 MentorBot Developer Circle Community Challenge.
    
    </div>
  </footer>       
</div>
    );

  }
 
}

export default Home;