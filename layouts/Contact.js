import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import axios from "axios";
import { useState } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-bold")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form className="contact-form">
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-black"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(val) => setName(val.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-black"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(val) => setEmail(val.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded text-black"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(val) => setSubject(val.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md text-black"
                  rows="7"
                  placeholder="Your message"
                  value={message}
                  onChange={(val) => setMessage(val.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const data = { name, email, subject, message };

                  axios
                    .post("/api/receiveMessage", data)
                    .then(() => alert("success"))
                    .catch(() => alert("failed"))
                    .finally(() => {
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    });
                }}
              >
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4", "text-dark")}
            {markdownify(info.description, "p", "mt-4 text-dark")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
