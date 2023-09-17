import React from "react";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <h2>Contact Us</h2>
      <p>
        For any enquiries, including joining our club, or to gather additional information please see the below provided contact methods.<br/>
        Alternatively you can submit your message via our contact form.<br/>
        We endeavour to respond to all messages within two business days.
      </p>
      <div className="contactUsInfo">
        <h3>Location</h3>
        <p>
          21 S Wharf Promenade,<br/>
          South Wharf VIC 3006
        </p>

        <h3>Hours</h3>
        <table>
          <tr>
            <td class="openHours">Monday-Friday:</td>
            <td>6:00am-9:00am | 4:00pm-7:00pm</td>
          </tr>
          <tr>
            <td class="openHours">Saturday:</td>
            <td>6:00am-4:00pm</td>
          </tr>
        </table>
        
        <h3>Email</h3>
        <a href="mailto:PLACEHOLDER@EXAMPLE.edu.au">PLACEHOLDER@EXAMPLE.edu.au</a>
        <h3>Call</h3>
        <a href="tel:+61400111XXX">+61 400 111 XXX</a>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.7714461700305!2d144.
        95389331229!3d-37.82417454805445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x6ad65d9edcc576e1%3A0x4bd1300ed2b0f669!2sPolly%20Woodside%20Park!5e0!3m2!1sen!2sau!4v1692157395214!5m2!1sen!2sau"  
        allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
            
      <form className="contactForm" name="contact" method="post">
        <h3>Send us a Message</h3>
        <label className="formTitle" for="userName">Name:</label><br/>
        <input className="userName" name="userName" placeholder="John Doe" required/><br/><br/>

        <label className="formTitle" for="userEmail">Email:</label><br/>
        <input className="userEmail" name="userEmail" placeholder="johndoe@email.com" required/><br/><br/>

        <label className="formTitle" for="userPhone">Phone Number:</label><br/>
        <input name="userPhone" placeholder="04xx xxx xxx" required/><br/><br/>

        <label className="formTitle" for="contactMethod">Preferred Contact Method:</label><br/>
        <input className="contact_email" name="contactMethod" type="radio" value="email" required/>
        <label for="contact_email">Email</label><br/>
        <input className="contact_phone" name="contactMethod" type="radio" value="phone" required/>
        <label for="contact_phone">Phone</label><br/><br/>

        <label className="formTitle" for="userMessage">Comment:</label><br/>
        <textarea name="userMessage" placeholder="Your message..." required></textarea>
        <button name="submit" type="submit">Submit</button>
        <p><i>By submitting this form, you are acknowledging and accepting our 'Terms & Conditions'</i></p>
      </form>
    </div>
    );
};

export default ContactUs;