// import React from "react";
// import { useForm, useWatch } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useLoaderData } from "react-router";
// import Swal from "sweetalert2";

// const BeARider = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     // formState: { errors }
//   } = useForm();
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const serviceCenters = useLoaderData();
//   console.log(serviceCenters);
//   const regionsDuplicate = serviceCenters.map((c) => c.region);

//   const regions = [...new Set(regionsDuplicate)];
//   // explore useMemo useCallback
//   const districtsByRegion = (region) => {
//     const regionDistricts = serviceCenters.filter((c) => c.region === region);
//     const districts = regionDistricts.map((d) => d.district);
//     return districts;
//   };

//   const riderRegion = useWatch({ control, name: "region" });

//   const handleRiderApplication = (data) => {
//     console.log(data);
//     axiosSecure.post("/riders", data).then((res) => {
//       if (res.data.insertedId) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title:
//             "Your application has been submitted. We will reach to you in 145 days",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//       }
//     });
//   };
//   return (
//     <div>
//       <h2 className="text-4xl mt-32 text-center font-bold">Be a Rider</h2>
//       <form
//         onSubmit={handleSubmit(handleRiderApplication)}
//         className="mt-12 p-4 text-black"
//       >
//         {/* two column */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* rider Details */}

//           <fieldset className="fieldset">
//             <h4 className="text-2xl font-semibold">Rider Details</h4>
//             {/* rider name */}
//             <label className="label">Rider Name</label>
//             <input
//               type="text"
//               {...register("name")}
//               defaultValue={user?.displayName}
//               className="input w-full"
//               placeholder="Sender Name"
//             />

//             {/* rider email */}
//             <label className="label">Email</label>
//             <input
//               type="text"
//               {...register("email")}
//               defaultValue={user?.email}
//               className="input w-full"
//               placeholder="Sender Email"
//             />

//             {/* rider region */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Regions</legend>
//               <select
//                 {...register("region")}
//                 defaultValue="Pick a region"
//                 className="select"
//               >
//                 <option disabled={true}>Pick a region</option>
//                 {regions.map((r, i) => (
//                   <option key={i} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             </fieldset>

//             {/* rider districts */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Districts</legend>
//               <select
//                 {...register("district")}
//                 defaultValue="Pick a district"
//                 className="select"
//               >
//                 <option disabled={true}>Pick a district</option>
//                 {districtsByRegion(riderRegion).map((r, i) => (
//                   <option key={i} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             </fieldset>

//             {/* rider address */}
//             <label className="label mt-4">Your Address</label>
//             <input
//               type="text"
//               {...register("address")}
//               className="input w-full"
//               placeholder="Sender Address"
//             />
//           </fieldset>
//           {/* receiver Details */}
//           <fieldset className="fieldset">
//             <h4 className="text-2xl font-semibold">More Details</h4>
//             {/* receiver name */}
//             <label className="label">Driving License</label>
//             <input
//               type="text"
//               {...register("license")}
//               className="input w-full"
//               placeholder="Driving License"
//             />

//             {/* receiver email */}
//             <label className="label">NID</label>
//             <input
//               type="text"
//               {...register("nid")}
//               className="input w-full"
//               placeholder="NID"
//             />

//             {/* Bike */}
//             <label className="label mt-4">BIKE</label>
//             <input
//               type="text"
//               {...register("bike")}
//               className="input w-full"
//               placeholder="Bike"
//             />
//             {/*  address */}
//           </fieldset>
//         </div>
//         <input
//           type="submit"
//           className="btn primary-btn mt-8 text-black"
//           value="Apply as a Rider"
//         />
//       </form>
//     </div>
//   );
// };

// export default BeARider;


import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const BeARider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo useCallback
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you in 145 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mt-20 mb-3">
            Be a Rider
          </h2>
          <p className="text-gray-600 text-lg">Join our team and start earning on your schedule</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* rider Details */}
            <fieldset className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4 mb-6">
                <h4 className="text-2xl font-bold text-gray-800">Rider Details</h4>
                <p className="text-sm text-gray-500 mt-1">Tell us about yourself</p>
              </div>
              
              {/* rider name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rider Name</label>
                <input
                  type="text"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Sender Name"
                />
              </div>

              {/* rider email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="text"
                  {...register("email")}
                  defaultValue={user?.email}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Sender Email"
                />
              </div>

              {/* rider region */}
              <fieldset className="space-y-2">
                <legend className="block text-sm font-semibold text-gray-700 mb-2">Regions</legend>
                <select
                  {...register("region")}
                  defaultValue="Pick a region"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white cursor-pointer"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* rider districts */}
              <fieldset className="space-y-2">
                <legend className="block text-sm font-semibold text-gray-700 mb-2">Districts</legend>
                <select
                  {...register("district")}
                  defaultValue="Pick a district"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white cursor-pointer"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(riderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* rider address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4">Your Address</label>
                <input
                  type="text"
                  {...register("address")}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Sender Address"
                />
              </div>
            </fieldset>
            
            {/* receiver Details */}
            <fieldset className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4 mb-6">
                <h4 className="text-2xl font-bold text-gray-800">More Details</h4>
                <p className="text-sm text-gray-500 mt-1">Verification information</p>
              </div>
              
              {/* receiver name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Driving License</label>
                <input
                  type="text"
                  {...register("license")}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Driving License"
                />
              </div>

              {/* receiver email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">NID</label>
                <input
                  type="text"
                  {...register("nid")}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="NID"
                />
              </div>

              {/* Bike */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4">BIKE</label>
                <input
                  type="text"
                  {...register("bike")}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Bike"
                />
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 rounded-xl p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">What's Next?</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      After submission, our team will review and contact you within 145 days.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          
          <div className="mt-10 flex justify-center">
            <input
              type="submit"
              className="px-12 py-4 primary-btn font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg cursor-pointer"
              value="Apply as a Rider"
              onClick={handleSubmit(handleRiderApplication)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeARider;