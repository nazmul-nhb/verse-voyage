import { useState } from 'react';
import contactDoodle from '../../assets/doodle.svg'

const Contact = () => {

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = event.target;

        if (form.checkValidity()) {
            setShowModal(true);
        } else {
            setShowModal(false)
        }
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="mx-4 my-4 md:my-12 grid grid-cols-1 gap-8 px-8 py-16 rounded-2xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&rsquo;s talk!</h2>
                    <div className="dark:text-gray-600">Thank you for your interest in reaching out to us! Whether you have a question, suggestion, or just want to say hello, we&rsquo;re here to listen. Please, feel free to use the form to get in touch with our team. We&rsquo;ll do our best to respond to you as soon as possible.</div>
                </div>
                <img src={contactDoodle} alt="Contact Us" className="p-6 h-52 md:h-64" />
            </div>
            <form onSubmit={handleSubmit} className="text-[#2b7178] space-y-6">
                <div>
                    <label className="text-sm">Full name</label>
                    <input name='name' required id="name" type="text" placeholder="Your Full Name" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input name='email' required id="email" type="email" placeholder="Your Email" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea name='message' required id="message" rows="3" placeholder="Your Message to us." className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
            </form>
            {
                showModal && (
                    <dialog open className="modal">
                        <div className="modal-box flex flex-col items-center justify-center text-[#2b7178]">
                            <h3 className="font-bold text-lg">Success!</h3>
                            <p className="py-4">Message Sent</p>
                            <div className="modal-action">
                                <button className="btn" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </dialog>
                )
            }
        </div>
    );
};

export default Contact;