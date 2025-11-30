import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  console.log("Payment successful, session ID:", sessionId);

  useEffect(() => {
    if (sessionId) {
   axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
   .then((response) => {
      console.log("Payment success recorded:", response.data);
    });
  }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2>payment successful</h2>
    </div>
  );
};

export default PaymentSuccess;
