import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddCampPage = () => {
  const initialValues = {
    campName: '',
    image: null,
    campFees: '',
    scheduledDateTime: '',
    venueLocation: '',
    specializedServices: '',
    healthcareProfessionals: '',
    targetAudience: '',
    description: '',
  };

  const onSubmit = (values) => {
    // Handle form submission and data validation here
    console.log(values);
  };

  return (
    <div className="max-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-xl w-full p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Add a Camp</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="space-y-4">
            <div>
              <label htmlFor="campName" className="block text-sm font-medium">Camp Name</label>
              <Field type="text" id="campName" name="campName" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="campName" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium">Image</label>
              <input type="file" id="image" name="image" accept="image/*" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="image" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="campFees" className="block text-sm font-medium">Camp Fees</label>
              <Field type="text" id="campFees" name="campFees" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="campFees" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="scheduledDateTime" className="block text-sm font-medium">Scheduled Date and Time</label>
              <Field type="datetime-local" id="scheduledDateTime" name="scheduledDateTime" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="scheduledDateTime" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="venueLocation" className="block text-sm font-medium">Venue Location</label>
              <Field type="text" id="venueLocation" name="venueLocation" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="venueLocation" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="specializedServices" className="block text-sm font-medium">Specialized Services Provided</label>
              <Field type="text" id="specializedServices" name="specializedServices" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="specializedServices" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="healthcareProfessionals" className="block text-sm font-medium">Healthcare Professionals in Attendance</label>
              <Field type="text" id="healthcareProfessionals" name="healthcareProfessionals" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="healthcareProfessionals" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="targetAudience" className="block text-sm font-medium">Target Audience</label>
              <Field type="text" id="targetAudience" name="targetAudience" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="targetAudience" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium">Comprehensive Description</label>
              <Field as="textarea" id="description" name="description" rows="2" className="w-full border rounded-md px-3 py-2" />
              <ErrorMessage name="description" component="div" className="text-red-600 text-sm" />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCampPage;
