import  { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAvailableCamps } from '../../../Hook/useAvailableCamps';

const ManageCamps = () => {
  const navigate = useNavigate();
  const { data: availableCamp = [], isLoading } = useAvailableCamps();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState(null);

  const openModal = (camp) => {
    setSelectedCamp(camp);
    setIsModalOpen(true);
  };

  const handleUpdate = (campId) => {
    // Implementation of update logic
    // For now, just navigating
    navigate(`/update-camp/${campId}`);
    setIsModalOpen(false);
  };

  const deleteCamp = async (campId) => {
    if (window.confirm('Are you sure you want to delete this camp?')) {
      // Implementation of delete logic
      // For example, an API call to delete the camp
      console.log(`Delete camp with ID ${campId}`);
    }
  };

 
    const columns = [
      {
        name: 'Camp Name',
        selector: 'name', // Use the correct property name for camp name
      },
      {
        name: 'Scheduled Date and Time',
        selector: 'dateTime',
      },
      {
        name: 'Venue Location',
        selector: 'location',
      },
      {
        name: 'Specialized Services',
        selector: 'services',
      },
      {
        name: 'Healthcare Professionals',
        selector: 'professionals',
      },
      {
        name: 'Target Audience',
        selector: 'participantCount',
      },
      {
        name: 'Description',
        selector: 'description',
      },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600"
            onClick={() => openModal(row)}
          >
            <FaEdit />
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            onClick={() => deleteCamp(row.id)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Manage Camps</h1>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <DataTable
            columns={columns}
            data={availableCamp}
            pagination
            highlightOnHover
            responsive
          />
          {isModalOpen && (
            <div className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Update Camp: {selectedCamp?.name}</h3>
                <form onSubmit={() => handleUpdate(selectedCamp?.id)}>
                  {/* Form fields go here */}
                  <input type="text" placeholder="Camp Name" className="input input-bordered w-full max-w-xs" defaultValue={selectedCamp?.name} />
                  {/* Add other fields as needed */}
                  <div className="modal-action">
                    <button className="btn" type="submit">Save</button>
                    <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageCamps;
