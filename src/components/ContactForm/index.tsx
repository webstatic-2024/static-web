"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import axios from 'axios';

export default function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [contactForm, setContactForm] = useState({});
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { name, email, phone_number, subject, comment } = contactForm as {
        subject: string;
        name: string;
        email: string;
        phone_number: string;
        comment: string;
      };

      if (!name) {
        throw 'Name cannot be blank';
      }

      if (!email) {
        throw 'Email cannot be blank';
      }

      if (!subject) {
        throw 'Subject cannot be blank';
      }

      if (!phone_number) {
        throw 'Phone Number cannot be blank';
      }

      if (!comment) {
        throw 'Comment cannot be blank';
      }

      try {
        const resp = await axios.post('/api/send-mail', contactForm);
        setModalMessage(resp.data.message);
        setModalIsOpen(true);
        setModalType('success');
        setTimeout(() => setModalIsOpen(false), 2000);

        const formElement = document.getElementById('contact-us-form') as HTMLFormElement | null;
        if (formElement) {
          formElement.reset();
          setContactForm({});
        }
      } catch (error) {
        console.log(error);
        setModalMessage("Failed to send email. Please try again.");
        setModalIsOpen(true);
        setModalType('error');
        setTimeout(() => setModalIsOpen(false), 2000);
      } finally {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setModalMessage(err as string);
      setModalIsOpen(true);
      setModalType('error');
      setTimeout(() => setModalIsOpen(false), 2000);
      setLoading(false);
    }
  };

  return (
    <div className="mb-[15px]">
      <form
        id="contact-us-form"
        onSubmit={handleOnSubmit}
      >
        <div className="flex justify-between sm:gap-[50px] sm:flex-nowrap flex-wrap">
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="name"
              onChange={(e) => {
                      setContactForm({ ...contactForm, name: e.target.value });
                    }}
              placeholder="Enter your name"
              type="text"
              id="Name"
              required
            />
          </div>
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="email"
              onChange={(e) => {
                      setContactForm({ ...contactForm, email: e.target.value });
                    }}
              placeholder="Enter your email"
              type="email"
              id="Email"
              required
            />
          </div>
        </div>
        <div className="flex justify-between sm:gap-[50px] sm:flex-nowrap flex-wrap mb-[10px] sm:mb-0">
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="subject"
              onChange={(e) => {
                      setContactForm({ ...contactForm, subject: e.target.value });
                    }}
              placeholder="Enter your subject"
              type="text"
              id="Subject"
            />
          </div>
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Phone-No"
            >
              Phone No
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="phone_number"
              onChange={(e) => {
                      setContactForm({ ...contactForm, phone_number: e.target.value });
                    }}
              placeholder="Enter your phone no"
              type="tel"
              id="Phone-No"
            />
          </div>
        </div>
        <div className=" flex w-full items-start flex-col mb-[10px]">
          <label
            htmlFor="Message"
            className="text-[16px] font-semibold mb-2 block"
          >
            Message
          </label>
          <textarea
            id="Message"
            name="comment"
            maxLength={5000}
            onChange={(e) => {
                      setContactForm({ ...contactForm, comment: e.target.value });
                    }}
            placeholder=""
            className="w-full h-[100px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="text-white text-center bg-[#6f00eb] rounded-[30px] px-[30px] py-[10px] cursor-pointer border-0 inline-block transition-colors duration-300 ease-in-out hover:bg-[#5b00c4]"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      
      <Modal 
        isOpen={isModalOpen}
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
}
