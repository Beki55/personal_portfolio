import { Container, ContainerSucces } from "./styles";
import { toast, ToastContainer } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
// import { ValidationError } from "@formspree/react";

export function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  // const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }
  useEffect(() => {
    if (status === "success") {
      toast.success("Email successfully sent!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  }, [status]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };
  if (status === "success") {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        {/* You can display your own error message below if needed */}
        {status === "error" && <p style={{ color: "red" }}>Invalid email</p>}
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {/* You can display your own error message below if needed */}
        {status === "error" && (
          <p style={{ color: "red" }}>Message is required</p>
        )}
        {/* <ReCAPTCHA
          sitekey="6LehCPgqAAAAANj46E2xQtT5qmRPRYiH7jvbSZ8w"
          onChange={() => {
            setIsHuman(true);
          }}
        /> */}
        <button type="submit" disabled={loading || !validEmail || !message}>
          {loading ? "Sending..." : "Send"}
        </button>
        {status === "error" && (
          <p style={{ color: "red" }}>Failed to send. Try again.</p>
        )}
      </form>
      <ToastContainer />
    </Container>
  );
}
