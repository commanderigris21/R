// Email service using EmailJS
import { send } from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const USER_ID = 'YOUR_EMAILJS_USER_ID';

export const sendEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      subject: params.subject,
      message: params.message,
    };

    await send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
};