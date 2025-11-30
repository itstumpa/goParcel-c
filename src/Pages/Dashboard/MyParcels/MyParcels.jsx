import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FileEdit, MagnetIcon, Trash } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: parcels = [] } = useQuery({
    // const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Only run query if user email exists
    })
const handleParcelDelete = async (id) => {
    console.log('deleting parcel', id);

    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
        const response = await axiosSecure.delete(`/parcels/${id}`);
        console.log("Parcel deleted:", response.data);

        if (response.data && response.data.deletedCount > 0) {
          // refetch();
            await Swal.fire({
                title: "Deleted!",
                text: "Your parcel has been deleted.",
                icon: "success",
                confirmButtonText: "OK",
            });
            // refresh the parcels list
            queryClient.invalidateQueries(['my-parcels', user?.email]);
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to delete parcel. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
            title: "Error!",
            text: "Failed to delete parcel. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
};

const handlePayment =async (parcel) => {
  const paymentInfo = {
    parcelId: parcel._id,
    parcelName: parcel.parcelName,
    cost: parcel.cost,
    senderEmail: parcel.senderEmail,
  };
  console.log(paymentInfo)
  const response = await
  axiosSecure
    .post("/create-checkout-session", paymentInfo)
    .then((response) => {
      if (response.data.url) {
        // window.location.href = response.data.url;
        window.location.assign(response.data.url);
      }
    })
    .catch((error) => {
      console.error("Error creating checkout session:", error);
    });
  };  


    return (
        <div>
            <h2>All of my parcels : {parcels.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Parcel Name</th>
        <th>Cost</th>
        <th>Payment Status</th>
        <th>Delivery Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel, index) => <tr key={parcel._id}>
            
        <th>{index + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>
          {
            parcel.paymentStatus === 'paid' ? <span className='text-green-600 font-bold'>Paid</span> 
            : 
            // <Link to={`/dashboard/payment/${parcel._id}`}>
            <button
            onClick= {() => handlePayment(parcel)}
            className='btn primary-btn btn-sm text-red-600 font-bold'>Pay</button>
            // </Link> 
          }
        </td>
        <td>{parcel.deliveryStatus}</td>
        <td>
          <button className='btn btn-square hover:bg-gray-200'>
            <FileEdit className='w-6 h-6 '></FileEdit>
          </button>
          <button className='btn  btn-square hover:bg-gray-200  mx-2'>
            <MagnetIcon className='w-6 h-6  '></MagnetIcon>
          </button>
          <button
          onClick={() => handleParcelDelete(parcel._id)}
          className='btn btn-square hover:bg-gray-200 '>
            <Trash className='w-6 h-6 '></Trash>
          </button>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyParcels;