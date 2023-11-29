import { useQuery } from "@tanstack/react-query";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import SectionTitle from "../../Shared/Section Tittle/SectionTittle";
import { Link } from "react-router-dom";

const PopularMedicalCamps = () => {
  const axiosPublic = useAxiosPublicApi();

  const { data: popularCamps = [] } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const res = await axiosPublic.get("/popularCamps");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        subHeading={"Showcasing Our Commitment to Public Health"}
        heading={"Popular Medical Camp"}
      ></SectionTitle>
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4">
          {popularCamps.map((camp) => (
            <div key={camp.id} className="border p-4 rounded-lg">
              <img
                src={camp.image}
                alt={camp.name}
                className="w-full h-auto mb-2"
              />
              <h3 className="text-xl font-semibold">{camp.name}</h3>
              <p>
                <strong>Date/Time:</strong>{" "}
                {new Date(camp.dateTime).toLocaleString()}
              </p>
              <p>
                <strong>Location:</strong> {camp.location}
              </p>
              <p>
                <strong>Services:</strong> {camp.services}
              </p>
              <p>
                <strong>Professionals:</strong> {camp.professionals}
              </p>
              <p>
                <strong>Audience:</strong> {camp.audience}
              </p>
              <p>
                <strong>Participants:</strong> {camp.participantCount}
              </p>
              {/* <a
                href={`/camp-details/${camp.id}`}
                className="bg-green-500 text-white px-3 py-2 rounded block text-center"
              >
                View Details
              </a> */}
              <div className="flex justify-center mt-2">
                <Link to={`/camp-details/${camp._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <a
          href="/available-camps"
          className="bg-red-500 text-white px-4 py-2 rounded block text-center my-4"
        >
          See All Camps
        </a>
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
