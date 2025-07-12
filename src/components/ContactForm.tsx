import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimateOnView from "./AnimateOnView";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can use EmailJS, Formspree, or your backend API here.
    alert(
      `Message sent!\n\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    // Reset form
    setFormData({ email: "", message: "" });
  };

  return (
    <StyledWrapper>
      <AnimateOnView>
        <form
          className="form min-w-xl lg:min-h-[60vh] "
          onSubmit={handleSubmit}
        >
          <div className="title">
            Get in touch,
            <br />
            <span>we'll respond soon</span>
          </div>

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="textarea"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            className="button-confirm hover:[transform:scale3d(1.1,1.1,1.2)] transition-transform duration-300"
          >
            Send →
          </button>
        </form>
      </AnimateOnView>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    --input-focus: #f9c85c;
    --font-color: #1e1d1a;
    --font-color-sub: #555;
    --bg-color: #fffaf1;
    --main-color: #1e1d1a;

    padding: 32px;
    background: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 20px;
    border-radius: 12px;
    border: 1.5px solid var(--main-color);
    box-shadow: 8px 8px 0px rgba(30, 29, 26, 0.2);
    max-width: 420px;
    transition: all 0.3s ease;
  }

  .title {
    color: var(--font-color);
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 10px;
  }

  .title span {
    color: var(--font-color-sub);
    font-weight: 500;
    font-size: 17px;
  }

  .input,
  .textarea {
    width: 100%;
    border-radius: 8px;
    border: 1.5px solid var(--main-color);
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    color: var(--font-color);
    padding: 12px;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .input::placeholder,
  .textarea::placeholder {
    color: var(--font-color-sub);
    opacity: 0.7;
  }

  .input:focus,
  .textarea:focus {
    border-color: var(--input-focus);
  }

  .button-confirm {
    margin: 0 auto;
    width: 130px;
    height: 44px;
    border-radius: 8px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 16px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    transition: transform 0.1s ease;
  }

  .button-confirm:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px var(--main-color);
  }
`;

export default ContactForm;
