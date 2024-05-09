import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { IoIosMail, IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import Shapes from '../home/Shapes';
import styles from './Contact.module.scss';

const ContactForm = () => {
    const validate = (event) => {
        event.preventDefault(); // Prevent form submission
        const error_message = document.getElementById("error_message");

        let name = document.getElementById("name").value;
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let message = document.getElementById("message");

        if (name.length < 3) {
            error_message.innerHTML = "Enter a valid name!";
            return false;
        }

        if (email.value.indexOf("@") === -1 || email.value.length < 7) {
            error_message.innerHTML = "Enter a valid email!";
            return false;
        }

        if (phone.value.length !== 10) {
            error_message.innerHTML = "Enter a valid phone number!";
            return false;
        }

        if (message.value.length === 0) {
            error_message.innerHTML = "Enter a message!";
            return false;
        }

        console.log("Name: " + name, "Email: " + email.value, "Phone: " + phone.value, "Message: " + message.value);
        error_message.style.background = "blue";
        error_message.style.color = "white";
        error_message.innerHTML = "You will get a callback soon!";
        alert("Form submitted successfully!");

        // Reset form fields
        document.getElementById("myform").reset();

        return true;
    };

    return (
        <div className="container">
            <Shapes />
            <div className={styles.wrapper}>
                <h2>Hire Me for a Job</h2>
                <Row className="tech-icons-row">
                    <Col>
                        <Button className="linkBtn" href="mailto:dedee.pnc@gmail.com">
                            <IoIosMail />
                        </Button>
                    </Col>
                    <Col>
                        <Button className="linkBtn" href="https://github.com/dedeepnc">
                            <IoLogoGithub />
                        </Button>
                    </Col>
                    <Col>
                        <Button className="linkBtn" href="https://www.linkedin.com/in/phonnatcha-chantaro-a22b13251/">
                            <FaLinkedin />
                        </Button>
                    </Col>
                </Row>
            </div>
            <div id="error_message"></div>
            <form id="myform" onSubmit={validate}>
                <div className={styles.input_field}>
                    <input type="text" placeholder="Name" id="name" required />
                </div>
                <div className={styles.input_field}>
                    <input type="email" placeholder="Email" id="email" required />
                </div>
                <div className={styles.input_field}>
                    <input type="tel" placeholder="Phone" id="phone" pattern="[0-9]{10}" required />
                </div>
                <div className={styles.input_field}>
                    <textarea placeholder="Message" id="message" rows="4" required />
                </div>
                <div className={styles.btn}>
                    <input type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
