import { useState, useEffect } from "react";
import { Modal } from "daisyui"; 
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";

function Feedback() {
  const [camps, setCamps] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchCampDetails() {
      try {
        const response = await axiosSecure.get(`/feedback-and-ratings/${user.email}`);
        setCamps(response.data);
      } catch (error) {
        console.error("Error fetching camp details:", error);
      }
    }
    fetchCampDetails();
  }, [user.email, axiosSecure]);

  const openReviewModal = (camp) => {
    setSelectedCamp(camp);
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setSelectedCamp(null);
    setReviewModalOpen(false);
  };

  const submitReview = (reviewData) => {
    
    // Submit review data to your backend API
    // Include 'reviewData', user information, and camp information
    // After submission, update the 'camps' state to reflect the new review
    closeReviewModal();
  };

  return (
    <div >
        {camps.length > 0 ? (
        <>
      <h1>Feedback and Ratings</h1>
      <table>
        <thead>
          <tr>
            <th>Camp Name</th>
            <th>Date and Time</th>
            <th>Venue</th>
            <th>Camp Fees</th>
            <th>Payment Status</th>
            <th>Confirmation Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {camps.map((camp) => (
            <tr key={camp.id}>
              <td>{camp.name}</td>
              <td>{camp.date}</td>
              <td>{camp.venue}</td>
              <td>{camp.fees}</td>
              <td>{camp.paymentStatus}</td>
              <td>{camp.confirmationStatus}</td>
              <td>
                <button onClick={() => openReviewModal(camp)}>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal v-model={isReviewModalOpen} width="2xl">
        <div className="p-4">
          {/* Review Modal Content */}
          <h2 className="text-2xl font-bold">Review for {selectedCamp?.name}</h2>
          <textarea
            className="w-full h-32 p-2 mt-2 border rounded-md"
            placeholder="Write your feedback here..."
          ></textarea>
          <input
            className="w-full p-2 mt-2 border rounded-md"
            type="number"
            placeholder="Rating (1-5)"
          />
          <div className="mt-4">
            <button className="btn btn-primary" onClick={submitReview}>
              Submit Review
            </button>
            <button className="btn btn-secondary" onClick={closeReviewModal}>
              Close
            </button>
          </div>
        </div>
      </Modal>
      </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Feedback;
