import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { send } from '@emailjs/browser';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #e6f1ff;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 4px;
    background-color: #4ecca3;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  p {
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #8892b0;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4ecca3;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  background-color: #172a45;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #e6f1ff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: #0a192f;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  color: #e6f1ff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(78, 204, 163, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background-color: #0a192f;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  color: #e6f1ff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(78, 204, 163, 0.3);
  }
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: #4ecca3;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(78, 204, 163, 0.1);
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormMessage = styled.div<{ success?: boolean }>`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: ${props => props.success ? 'rgba(72, 187, 120, 0.1)' : 'rgba(245, 101, 101, 0.1)'};
  color: ${props => props.success ? '#48bb78' : '#f56565'};
  border: 1px solid ${props => props.success ? '#48bb78' : '#f56565'};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ text: string; success: boolean } | null>(null);

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
  const USER_ID = 'YOUR_EMAILJS_USER_ID';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      setFormMessage({
        text: 'Thank you for your message! I will get back to you soon.',
        success: true
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormMessage({
        text: 'Failed to send message. Please try again later.',
        success: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamically load Buy Me a Coffee script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'l0ser21');
    script.setAttribute('data-color', '#FFDD00');
    script.setAttribute('data-emoji', '');
    script.setAttribute('data-font', 'Poppins');
    script.setAttribute('data-text', 'Buy me a coffee');
    script.setAttribute('data-outline-color', '#000000');
    script.setAttribute('data-font-color', '#000000');
    script.setAttribute('data-coffee-color', '#ffffff');
    script.async = true;
    document.getElementById('bmc-widget')?.appendChild(script);
    // Cleanup
    return () => {
      document.getElementById('bmc-widget')?.removeChild(script);
    };
  }, []);

  return (
    <ContactContainer>
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactContent>
        <ContactInfo>
          <p>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <p>
            You can reach me directly at <strong>khushantubarhande390@gmail.com</strong> or through this form.
          </p>
          <SocialLinks>
            <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon href="https://youtube.com/@l0ser2108" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/notkhush.ant" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
          </SocialLinks>
          <div id="bmc-widget" style={{ margin: '2rem 0 0 0' }}>
            <a
              href="https://www.buymeacoffee.com/l0ser21"
              className="bmc-button"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'none' }} // The script will replace this
            >
              Buy me a coffee
            </a>
          </div>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          
          {formMessage && (
            <FormMessage success={formMessage.success}>
              {formMessage.text}
            </FormMessage>
          )}
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;