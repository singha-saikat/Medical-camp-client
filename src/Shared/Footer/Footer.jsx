import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    // Replace the following with your actual contact information and social media links
    const contactInfo = {
        address: "123 Medical Camp Way, City, Country",
        email: "contact@medicalcampapp.com",
        phone: "+1 (123) 456-7890",
    };

    // Replace these links with actual URLs
    const importantLinks = [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about" },
        { text: "Upcoming Camps", url: "/upcoming-camps" },
        { text: "Services", url: "/services" },
        { text: "Contact Us", url: "/contact" },
    ];

    // Replace these social media links with your own
    const socialMediaLinks = [
        { icon: <FaFacebook />, url: "https://www.facebook.com/yourmedicalcamp" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourmedicalcamp" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/yourmedicalcamp" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold">Contact Us</h3>
                    <p className="mt-2">{contactInfo.address}</p>
                    <p>{contactInfo.email}</p>
                    <p>{contactInfo.phone}</p>
                </div>
                <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
                    {importantLinks.map((link, index) => (
                        <a key={index} href={link.url} className="hover:underline">
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {socialMediaLinks.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
