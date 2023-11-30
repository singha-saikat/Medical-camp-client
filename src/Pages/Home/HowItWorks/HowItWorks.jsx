import SectionTitle from "../../../Shared/Section Tittle/SectionTittle";

const HowItWorks = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Navigating Our System"
        heading="Simplified Steps to Access Medical Camps"
      ></SectionTitle>
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Register for Camps</h3>
              <p className="text-gray-600">
                Sign up for upcoming medical camps that suit your needs. Provide
                necessary information for registration.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Participation
              </h3>
              <p className="text-gray-600">
                Medical professionals can join and offer their services for the
                camps. They can manage their schedules and services through the
                system.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-600">
                Receive notifications and updates about upcoming camps and any
                changes in camp details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
