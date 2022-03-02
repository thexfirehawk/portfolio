import "../styles/layout/Contact.scss";
import envelope from "../images/envelope-solid.svg";
import github from "../images/github-brands.svg";
import linkedin from "../images/linkedin-brands.svg"
import phone from "../images/phone-solid.svg";

const Contact = () => {
  return (
    <div className="container_form">
      <form
        className="form"
        action="https://formspree.io/f/mdobzewp"
        method="post"
      >
        <label className="form__label" htmlFor="nombre">
          Full name<span className="span_contact"> *</span>
        </label>
        <input
          className="form__input"
          id="nombre"
          type="text"
          placeholder="Name..."
          pattern="[a-zA-ZàáèéìíòóùúüñçÀÁÉÌÍÒÓÜÑ ,.'-]{2,48}"
          required
        />
        <label className="form__label" htmlFor="nombre">
          Email<span className="span_contact"> *</span>
        </label>
        <input
          className="form__input"
          id="email"
          type="text"
          placeholder="email@gmail.com"
          required
        />

        <label className="form__label" htmlFor="texto">
          Message<span className="span_contact"> *</span>
        </label>
        <textarea
          className="textarea"
          id="texto"
          name="texto"
          rows="3"
          cols="80"
          placeholder="Hi Marta, I would like to ..."
          required
        ></textarea>

        <div className="container-button">
          <input
            className="container-button__item"
            type="submit"
            value="Submit"
          />
        </div>

        <article className="icons">
          <ul className="icons__list">
            <li className="icons__item">
              <a href="mailto:martarubiodiaz@hotmail.com">
              <img src={envelope} alt="envelope"></img>
              </a>
            </li>
            <li className="icons__item">
              <a href="https://github.com/Martarubio93">
              <img src={github} alt="github" />
              </a>
              
            </li>
            <li className="icons__item">
              <a href="https://www.linkedin.com/in/martarubiodiaz/">
              <img src={linkedin} alt="linkedin" />
              </a>
             
            </li>
            <li className="icons__item">
              <a href="tel:+447902069754">
              <img src={phone} alt="phone" />
              </a>
     
            </li>
          </ul>
        </article>
      </form>
    </div>
  );
};

export default Contact;
