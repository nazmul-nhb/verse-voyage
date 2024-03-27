import contactDoodle from '../../assets/doodle.svg'

const Contact = () => {

    return (
        <div className="mx-4 my-4 md:my-12 grid grid-cols-1 gap-8 px-8 py-16 rounded-2xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&rsquo;s talk!</h2>
                    <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src={contactDoodle} alt="Contact Us" className="p-6 h-52 md:h-64" />
            </div>
            <form className="text-[#2b7178] space-y-6">
                <div className=''>
                    <label className="text-sm">Full name</label>
                    <input required id="name" type="text" placeholder="Your Full Name" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input required id="email" type="email" placeholder="Your Email" className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500" />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea required id="message" rows="3" placeholder="Your Message to us." className="border border-[#59C6D2] rounded-lg focus:outline-0 w-full p-3 bg-[#328eff0c] focus:bg-[#328EFF26] transition duration-500"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50" onClick={() => document.getElementById('my_modal_1').showModal()}>Send Message</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box flex flex-col items-center justify-center">
                        <h3 className="font-bold text-lg">Success!</h3>
                        <p className="py-4">Message Sent</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </form>
        </div>
    );
};

export default Contact;