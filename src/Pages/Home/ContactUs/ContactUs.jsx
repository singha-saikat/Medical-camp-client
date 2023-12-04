import { Helmet } from "react-helmet-async";

function ContactUs() {
  return (
    <>
     <Helmet>
        <title>MediAssist Hub|ContactUs</title>
      </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          {/* Add your form fields here */}
          {/* Example: */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" className="w-full border rounded-md py-2 px-3" />
          </div>
          {/* More form fields... */}
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default ContactUs;
