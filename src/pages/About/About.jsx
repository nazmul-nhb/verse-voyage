import { Helmet } from "react-helmet-async";
import bookReview from '../../assets/book-review.jpg'

const About = () => {
    return (
        <div className="mx-6 my-4 md:my-12 text-justify flex flex-col items-center gap-6">
            <Helmet>
                <title>About Verse Voyage</title>
            </Helmet>
            <div className="w-full bg-[#1313130D] py-9 rounded-2xl flex justify-center items-center mb-6">
                <h3 className="text-center text-3xl font-bold">About Us</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-3/5 gap-8 bg-[#d7eaf0] p-6 md:px-10 md:py-6 rounded-lg">
                <div className="md:w-1/3"><img className="rounded-lg hover:scale-105 transition duration-700" src={bookReview} alt="Book Review" /></div>
                <p className="indent-6 md:w-2/3 text-xl text-[#415860]">
                    Welcome to <span className="text-teal-800 font-semibold italic">Verse Voyage</span>, where our passion for literature meets our love for sharing great stories. Founded by avid readers, we aim to create a vibrant community where book lovers of all ages and interests can discover their next favorite read.
                </p>
            </div>

            <fieldset id="about-1" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-[#e3f4f8]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-[#415860] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-2">Our Mission</a></legend>
                <p className="text-xl">
                    At <span className="text-teal-800 font-semibold italic">Verse Voyage</span>, our mission is simple: to celebrate the power of storytelling and foster a love for reading. We believe that books have the remarkable ability to inspire, educate, and entertain, and we&rsquo;re dedicated to helping readers find the perfect book for every occasion.
                </p>
            </fieldset>

            <fieldset id="about-2" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-[#e3f4f8]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-[#415860] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-3">What We Offer</a></legend>
                <p className="text-xl space-y-3">
                    <li className="list-disc"><span className="text-teal-800 font-semibold">Expert Reviews: </span>Our team of experienced reviewers provides honest, insightful critiques of a wide range of books, from bestsellers to hidden gems.</li>
                    <li className="list-disc"><span className="text-teal-800 font-semibold">Author Interviews: </span>Get to know the faces behind the words with exclusive interviews and behind-the-scenes peeks into the lives of your favorite authors.</li>
                    <li className="list-disc"><span className="text-teal-800 font-semibold">Book Recommendations: </span>Whether you&rsquo;re searching for your next page-turner or looking to explore a new genre, our curated lists and recommendations have you covered.</li>
                    <li className="list-disc"><span className="text-teal-800 font-semibold">Community Engagement: </span>Join the conversation! Connect with fellow book enthusiasts, share your thoughts on recent reads, and participate in lively discussions on our blog and social media channels.</li>
                </p>
            </fieldset>

            <fieldset id="about-3" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-[#e3f4f8]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-[#415860] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-4">Our Commitment</a></legend>
                <p className="text-xl">At <span className="text-teal-800 font-semibold italic">Verse Voyage</span>, we&rsquo;re committed to promoting diversity and representation in literature. We strive to highlight books from diverse authors and perspectives, ensuring that everyone can find stories that resonate with them.</p>
            </fieldset>

            <fieldset id="about-4" className="md:w-2/3 mt-8 text-[#415860] border border-solid border-[#415860] rounded-lg py-3 px-6 bg-[#e3f4f8]">
                <legend className="text-lg border border-[#415860] px-4 py-2 rounded-lg font-semibold bg-[#415860] text-white hover:text-[#415860] hover:bg-transparent cursor-pointer transition duration-500"><a href="#about-1">Get Involved</a></legend>
                <p className="text-xl">
                    Are you passionate about books and storytelling? Join our community! Whether you&rsquo;re a reader, author, or industry professional, there are plenty of ways to get involved. Follow us on social media, subscribe to our newsletter, or reach out to learn more about opportunities for collaboration.
                </p>
            </fieldset>

            <p className="md:w-2/3 text-xl mt-8 md:mt-16 text-center text-gray-500">
                Thank you for being a part of our voyage. Together, let&rsquo;s explore the boundless world of books and celebrate the magic of reading!
            </p>
        </div>
    );
};

export default About;