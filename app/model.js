var MODEL = (function(){

    var _homeContent = `<div class="landing">
<img src="images/home-landing.jpg" alt="structure background">
</div>
<div class="title">
<div class="one">
<h1>Modeling Agency Inc</h1>
</div>
<div class="two">
<h2>New York City, New York</h2>
</div>
</div>
<div class="welcome">
<p>Welcome to the Modeling Agency Inc. Here we strive to Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed alias quas odio dolorum? Aspernatur delectus, exercitationem fugiat eaque consequuntur repellendus perferendis deserunt facilis dicta, voluptatum nulla aliquam, officiis dolorem.</p>
</div>
<div class="current">
<h4>Please view a few of our current models and thier work in our portfolio:</h4>
</div>
<div class="home-container">
<div class="home-image">
    <img src="images/model1.jpg" alt="model">
    </div>
    <div class="home-text">
    <p><h6>Alice</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
    </div>
</div>
<div class="home-container">
    <div class="home-image">
    <img src="images/model2.jpg" alt="model">
    </div>
    <div class="home-text">
    <p> <h6>Zack</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
    </div>
</div>
<div class="home-container">
    <div class="home-image">
    <img src="images/model3.jpg" alt="model">
    </div>
    <div class="home-text">
    <p> <h6>Lucy</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
    </div>
</div>`;
var _aboutContent = `<h1 class="about-title">ABOUT</h1>
<h4 class="opening">More about us  . . .</h4>
<div class="pride">
    Modeling Agency is the go-to agency in New York City, Paris, and California.
</div>
<div class="pride-all"> 
<div class="pride-one">
    <div class="mission">
    <h3>Mission</h3>
    
    <p class="pride-one">We pride ourselves on ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
</div>
</div>

<div class="pride-second">
    <div class="vision">
<h3>Vision</h3>
    <p class="pride-second">Our Vision for Modeling Agency... Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis ducimus quo ab omnis. Porro, aperiam. Eaque architecto at ea quo provident iste quis, nobis, autem perspiciatis a deleniti dolorem.</p>
</div>
</div>
</div>
<div class="heading">
    <h4>Get in contact with us . . .</h4>
</div>
<div class="about-container">
    <div class="about-image">
        <img src="images/about1.jpg" alt="employee">
        </div>
        <div class="about-text">
        <p><h6>Jeremy: Office Manager</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
        </div>
    </div>
    <div class="about-container">
        <div class="about-image">
        <img src="images/about2.jpg" alt="employee">
        </div>
        <div class="about-text">
        <p> <h6>Jared: Photographer</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
        </div>
    </div>
    <div class="about-container">
        <div class="about-image">
        <img src="images/about3.jpg" alt="employee">
        </div>
        <div class="about-text">
        <p> <h6>Jessica: Stylist</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad maiores vel voluptatum iusto molestiae quam modi. Pariatur sint iste impedit dicta repudiandae eos dolorem explicabo veniam reprehenderit! Dolorum.</p>
        </div>
    </div>
    <p class="pride-bottom">If you're looking to get into contact with any of our members, please visit our contact page.</p>`;
var _locationsContent = `  <h1 class="locations-header">LOCATIONS</h1>
<div class="opening-locations">
<p>We have three main offices located in the biggest modeling cities in the world:</p>
<div class="cities">
<h6>New York City, New York</h6>
<h6>Paris, France</h6>
<h6>Los Angeles, California</h6>
</div>
</div>
<div class="photo-area">
    <div class="photos">
        <div class="photo-one">
            <img src="images/new-york.jpg" alt="New York">
        </div>
        <div class="photo-two">
            <img src="images/Paris.jpg" alt="Paris">
        </div>
        <div class="photo-three">
            <img src="images/california.jpg" alt="California">
        </div>
    </div>
</div>

<div class="caption-area">
<div class="picture-caption">
<p class="ny">New York City has so much to offer... Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga rerum magnam neque, modi harum quasi, non molestias sint, vitae laborum! Ducimus reprehenderit vel libero in tempore omnis dolorem rerum.</p>
<p class="paris">Paris and all of it's beauty holds... Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid, sit labore, accusantium rem quia illum quaerat magnam error soluta totam minus alias, dolore quod commodi! Aspernatur quos neque unde.</p>
<p class="la">Los Angeles has some of the... Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati vero laudantium nostrum ut. Quis quaerat veniam dolores fugit, ad, sapiente debitis voluptas hic iure est expedita recusandae libero vero.</p>
</div>
</div>`;
var _contactContent = `<h1 class="contact">CONTACT US:</h1>
<p class="contact-p">Interested in working with us? Let us know by filling out this form.</p>
<div class="whole">
<div class="map">
    <div class="contact-photo">
    <img src="images/contact.jpg" alt="map">
    </div>
</div>
<div class="form">
    <div class="first-name">
        <input class="first" type="text" name="name" placeholder="Your name...">
        <input class="first" type="text" name="email" placeholder="Email Address..."> 
        <input class="first" type="text" name="agency" placeholder="Current Agency...">
    </div>
    <div class="msg">
        <textarea class="message" name="" placeholder="Tell us about you..." cols="100" rows="10"></textarea>
    </div>
    <div class="send-message-box">
        <a class="send-message" href="">SEND MESSAGE</a>
    </div>
  </div> 

  </div> 
  <div class="strive">
    <img src="images/phone.jpg" alt="phone">
    <p>We strive to get back to potential clients and partners as soon as possible. Please allow 2-3 business days before you recieve a reply from one of our agencies. Thank you.</p>
    <img src="images/email.jpg" alt="email">
  </div>
  <div class=""></div>
<div class="more-contact">
    <div class="contact-box">
        <h3>Contact details for Modeling Agency:</h3>
        <div class="info">
            <div class="info-info">
        <h5>641-889-0346</h5>
        <h5>539 North Illinois Blvd</h5>
        <h5>New York City, NY 57300</h5>
        </div>
        </div>
    </div>
    </div>`;

    var _updateView = function(pageName){
        console.log("Model " + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    }


    return {
        updateView: _updateView,
    }

})();