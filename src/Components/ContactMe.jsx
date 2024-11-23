import React from 'react'
import Lottie from 'lottie-react'
import toast from 'react-hot-toast'
import mail from '../assets/Animations/cme4.json'
import msgSent from '../assets/Animations/msgSent.json'
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"
import { useRef } from 'react';
import CurtainReveal from './FramerMotion/CurtainReveal'


const toastStyles = {
  background: 'linear-gradient(90deg, #5E288A, #7933B6, #612A92)',
  borderRadius: '8px',
  color: '#F2F2F2',
  fontFamily: 'afacad, sans-serif',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
};

function ContactMe() {
  const form = useRef(null);

const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm();

const onSubmit = () => {
  emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message Sent!', {
            icon: <Lottie animationData={msgSent} style={{ height: 40, width: 40 }} />,
            style: toastStyles,
          });
          
          reset(); 
        },
        (error) => {
          toast.error('Failed to send the message, please try again.', {
            icon: '⚠️',
            style: { ...toastStyles, background: '#FF7F7F' },
          });
          console.log("FAILED...", error.text);
        }
      );
};

return (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3B3B58] via-[#7D3C98] to-[#9400D3] p-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-6">
      <div className="w-full md:w-1/2 space-y-6 text-center flex items-center">
        <Lottie animationData={mail} loop={true} style={{ height: "500px", width: "400px" }} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-8 justify-center md:justify-center mt-8 md:mt-0 items-center text-headings font-afacad font-bold bg-gradient-to-b from-[#2E0854] to-[#1D0030] p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-lg">
  <div style={{ margin: "2rem" }}>
    <h2 className="text-2xl mb-4 text-[#00FFFF] font-afacad text-center">Contact Me</h2>
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="w-full">
      
      
      <div className="mb-4">
        <CurtainReveal duration={0.5} color='inherit'>
          <label htmlFor="name"  className="block text-sm text-[#00FFFF] py-1">Name:</label>
        </CurtainReveal>
        <CurtainReveal duration={0.5} color='inherit'>
          
          <input
            id="name"
            placeholder='Enter your Full Name'
            type="text"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must contain only letters",
              },
            })}
            className={`w-full bg-[#1E1E30] text-[#FFC107] focus:outline-[#00FFFF] font-afacad placeholder:text-[#CCCCCC] px-4 py-2 border rounded-md ${errors.name ? "border-red-400" : "border-gray-300"}`}
          />
        </CurtainReveal>
        {errors.name && <p className="text-[#FF7F7F] pt-1 text-sm">{errors.name.message}</p>}
      </div>

      
      <div className="mb-4">
        <CurtainReveal duration={0.5} color='inherit'>
          <label htmlFor="email" className="block text-sm text-[#00FFFF] py-1">Email:</label>
        </CurtainReveal>
        <CurtainReveal duration={0.5} color='inherit'>
          <input
            id="email"
            placeholder='Enter your Email'
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full bg-[#1E1E30] text-[#FFC107] focus:outline-[#00FFFF] font-afacad placeholder:text-[#CCCCCC] px-4 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
        </CurtainReveal>
        {errors.email && <p className="text-[#FF7F7F] pt-1 text-sm">{errors.email.message}</p>}
      </div>

      
      <div className="mb-4">
        <CurtainReveal duration={0.5} color='inherit'>
          <label htmlFor="message" className="block text-sm text-[#00FFFF] py-1">Message:</label>
        </CurtainReveal>
        <CurtainReveal duration={0.5} color='inherit'>
          <textarea
            id="message"
            placeholder='Enter your message'
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
            })}
            className={`w-full resize-none text-[#FFC107] focus:outline-[#00FFFF] bg-[#1E1E30] font-afacad placeholder:text-[#CCCCCC] px-4 py-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"}`}
          />
        </CurtainReveal>
        {errors.message && <p className="text-[#FF7F7F] text-sm">{errors.message.message}</p>}
      </div>

      
      <div className="flex justify-center">
        <CurtainReveal duration={0.5} color='inherit'>
          <button type="submit" className="bg-gradient-to-r from-[#5E288A] via-[#7933B6] to-[#612A92] text-[#F2F2F2] font-semibold px-6 py-3 rounded-lg shadow-md hover:from-[#7933B6] hover:via-[#612A92] hover:to-[#430E61] transition duration-300">
            Send Message
          </button>
        </CurtainReveal>
      </div>
    </form>
  </div>
</div>

    </div>
  </section>
);
}

export default ContactMe;
        
