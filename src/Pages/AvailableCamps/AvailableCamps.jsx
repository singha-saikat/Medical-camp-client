import { useQuery } from '@tanstack/react-query';
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animation.json";
import useAxiosPublicApi from '../../Hook/useAxiosPublicApi';
import Container from '../../Shared/Conteinar/Conteinar';
import Campcard from './Campcard';
import { Helmet } from 'react-helmet-async';


const AvailableCamps = () => {
  const axiosPublic = useAxiosPublicApi();
  const { data: availableCamp = [], isLoading } = useQuery({
    queryKey: ["availableCamp"],
    queryFn: async () => {
      const res = await axiosPublic.get("/availableCamp");
      return res.data;
    },
  });
  return (
    <>
    <Helmet>
        <title>MediAssist Hub|AllCamp</title>
      </Helmet>
        <Container>
      <div className=" mt-32 grid md:grid-cols-3 gap-4">
      {isLoading ? (
            <Lottie className='flex justify-center items-center min-h-[70%]' animationData={loadingAnimation} width={500} height={350} />
          ) : (
          
          availableCamp.map((camp) => (
            <Campcard key={camp.id} camp={camp} />
          ))
        )}
      </div>
    </Container>
    
    </>

  );
};

export default AvailableCamps;
