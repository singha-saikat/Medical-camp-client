// import Container from '../../Shared/Conteinar/Conteinar';
// import Campcard from './Campcard';
// import useAxiosPublicApi from '../../Hook/useAxiosPublicApi';
// import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';

// const AvailableCamps = () => {
//   const axiosPublic = useAxiosPublicApi();
// const [campData,setCampData] = useState([]);
// //   const { data: availableCamp = [], isLoading } = useQuery({
// //     queryKey: ["availableCamp"],
// //     queryFn: async () => {
// //       const res = await axiosPublic.get("/availableCamp");
// //       return res.data;
// //     },
// //   });
// useEffect(() => {
//     fetch('http://localhost:4000/availableCamp')
//     .then(res => res.json())
//     .then( data => setCampData(data))
// },[])
// console.log(campData);

//   return (
//     <Container>
//       {/* <div className="grid md:grid-cols-3 gap-4">
//         {isLoading ? (
//           // Render a loading state, e.g., a spinner
//           <div>Loading...</div>
//         ) : (
//           // Render the list of camps when data is available
//           availableCamp.map((camp) => (
//             <Campcard key={camp.id} camp={camp} />
//           ))
//         )}
//       </div> */}
//     </Container>
//   );
// };

// export default AvailableCamps;
