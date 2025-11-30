import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
console.log(parcel)
  if (isLoading) {
    <div>
      <span className="loading loading-ring loading-lg"></span>
    </div>;
  }
  return (
    <div>
      <h2>Please Pay for : {parcel?.parcelName}</h2>


    </div>
  );
};

export default Payment;
