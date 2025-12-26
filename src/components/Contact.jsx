import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n2vvtbc",
        "template_jgjzzbj",
        formRef.current,
        "mWBLueQjdc3bH4pSh"
      )
      .then(() => {
        setSuccess(true);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id="contact" className="bg-[#eeeeee] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small Text */}
        <p className="text-sm text-gray-600 mb-6">And many more to come!</p>

        {/* Title */}
        <div className="inline-block border-4 border-black px-12 py-3 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest">
            CONTACT
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-10 max-w-2xl mx-auto">
          If you want to work together or have any questions, feel free to reach
          out. I’ll try to respond as soon as possible.
        </p>

        {/* Divider */}
        <div className="flex justify-center items-center gap-3 mb-16">
          <span className="w-10 h-[1px] bg-black"></span>
          <span className="tracking-widest text-sm">〰</span>
          <span className="w-10 h-[1px] bg-black"></span>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-10 text-left"
        >
          <div>
            <label className="block text-xs text-gray-500 mb-2">
              ENTER YOUR NAME*
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-transparent border-b-2 border-black outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2">
              ENTER YOUR EMAIL*
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-transparent border-b-2 border-black outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2">
              YOUR MESSAGE*
            </label>
            <textarea
              rows="4"
              name="message"
              required
              className="w-full bg-transparent border-b-2 border-black outline-none py-2 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <span className="w-8 h-[1px] bg-black"></span>
            <button
              type="submit"
              className="tracking-widest text-sm font-medium"
            >
              SUBMIT
            </button>
            <span className="w-8 h-[1px] bg-black"></span>
          </div>
        </form>

        {/* Success Message */}
        {success && (
          <p className="mt-6 text-green-600 font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        {/* Back to Top */}
        <a href="#" className="text-sm tracking-widest">
          <div className="mt-20">
            ↑ <br /> BACK TO TOP
          </div>
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-xl">
          <a
            href="https://github.com/FaizanMulani75"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/faizan.m_75"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-600 mt-10">
          ©2025 Faizan Mulani. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
