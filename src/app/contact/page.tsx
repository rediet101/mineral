"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useForm } from "react-hook-form";

const url = process.env.NEXT_PUBLIC_API_LINK + "methods";
const url2 = process.env.NEXT_PUBLIC_API_LINK + "registrations";

interface FetchDataType {
  id: string;
  method_name: string;
  code: string;
}

interface FormInputs {
  company_name: string;
  sample_type: string;
  number_of_samples: string;
  file_name: string;
  tin_number: string;
  license_number: string;
  contact_person: string;
  mobile_number: string;
  date_submitted: string;
  sample_delivery: string;
  is_agreed: boolean;
  hand_over_by: string;
  received_by: string;
  field_numbers: string;
  lab_numbers: string;
  analytical_methods: FetchDataType[];
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analyticalMethods, setAnalyticalMethods] = useState<FetchDataType[]>(
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      company_name: "",
      sample_type: "",
      number_of_samples: "",
      file_name: "",
      tin_number: "",
      license_number: "",
      contact_person: "",
      mobile_number: "",
      date_submitted: "",
      sample_delivery: "",
      is_agreed: false,
      hand_over_by: "",
      received_by: "",
      field_numbers: "",
      lab_numbers: "",
      analytical_methods: [],
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const cleanedData = res.data.map((m: any) => ({
          ...m,
          code: m.code || "",
        }));
        setAnalyticalMethods(cleanedData);
        setValue("analytical_methods", cleanedData);
      } catch (error) {
        console.error("Error fetching methods:", error);
        setError("Failed to fetch analytical methods");
      }
    };

    fetchData();
  }, [setValue]);

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    setError(null);

    try {
      // Process field numbers and lab numbers
      const field_numbers = data.field_numbers
        ? data.field_numbers
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line !== "")
        : [];

      const lab_numbers = data.lab_numbers
        ? data.lab_numbers
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line !== "")
        : [];

      // Process analytical methods - transform to match API expected format
      const methods = (data.analytical_methods || [])
        .filter((method) => method && method.code && method.code.trim() !== "")
        .map((method) => ({
          method_id: method.id,
          codes: method.code.trim(),
        }));

      // Validate required arrays
      if (field_numbers.length === 0) {
        setError(
          "Field numbers are required. Please enter at least one field number."
        );
        setIsLoading(false);
        return;
      }

      if (lab_numbers.length === 0) {
        setError(
          "Lab numbers are required. Please enter at least one lab number."
        );
        setIsLoading(false);
        return;
      }

      // Format the data exactly as the API expects
      const formattedData = {
        company_name: data.company_name,
        sample_type: data.sample_type,
        number_of_samples: parseInt(data.number_of_samples) || 0,
        file_name: data.file_name,
        tin_number: data.tin_number,
        license_number: data.license_number,
        contact_person: data.contact_person,
        mobile_number: data.mobile_number,
        date_submitted: data.date_submitted,
        sample_delivery: data.sample_delivery,
        is_agreed: Boolean(data.is_agreed),
        hand_over_by: data.hand_over_by,
        received_by: data.received_by,
        field_numbers,
        lab_numbers,
        methods, // Changed from analytical_methods to methods
      };

      console.log("Final formatted data:", formattedData);

      const response = await axios
        .post(url2, formattedData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      
        if(response) {
            alert("Form sent successfully!");
            reset();
            setAnalyticalMethods([]);
        }
    } catch (error) {
      console.error("Error sending message:", error);

      if (axios.isAxiosError(error)) {
        console.error("Full error response:", error.response?.data);
        console.error("Request data sent:", error.config?.data);

        if (error.response?.data) {
          const errorData = error.response.data;
          if (errorData.error) {
            setError(errorData.error);
          } else if (errorData.errors) {
            const errorMessages = Object.entries(errorData.errors)
              .map(([field, messages]: [string, any]) => {
                const messageText = Array.isArray(messages)
                  ? messages.join(", ")
                  : messages;
                return `${field}: ${messageText}`;
              })
              .join("\n");
            setError(`Validation errors:\n${errorMessages}`);
          } else {
            setError(
              "Invalid form data. Please check your inputs and try again."
            );
          }
        } else if (error.request) {
          setError(
            "Network error. Please check your connection and try again."
          );
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
     <section className="relative w-full h-[100vh] bg-[url('/contact.svg')] bg-contain bg-no-repeat justify-center items-center">
       {/* Background Image - remains unchanged */}
       
       {/* Content - responsive adjustments */}
       <div className="relative z-20 pt-3">
         <Navbar />
         
         <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-30">
           {/* Responsive heading */}
           <h1 className="text-white text-8xl md:text-[140px] font-bold leading-tight md:leading-none">
             Form
           </h1>
           
           {/* Responsive paragraph - hidden on mobile if it doesn't fit well */}
           <p className="hidden md:block text-white/90 text-xl max-w-2xl">
             Reach out to our team for inquiries, support, or to discuss how we
              can meet your mineral exploration and processing needs.
           </p>
           
           {/* Mobile-only alternative content */}
           <div className="md:hidden mt-6">
             <p className="text-white/90 text-base max-w-[90%]">
               Expert mineral services with cutting-edge technology and decades of experience.
             </p>
           </div>
         </div>
       </div>
       
       {/* Optional mobile adjustments for background */}
       <style jsx>{`
         @media (max-width: 767px) {
           section {
             background-size: cover;
             background-position: center;
             height: 80vh;
           }
         }
       `}</style>
     </section>

      {/* Background Image */}

      <div className="min-h-screen bg-white -mt-2 md:-mt-30">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-lg"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              Customers Registration & Sample Hand Over Format
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Ethiopian Mineral Corporation - Laboratory Service Center
            </p>
            <p className="text-gray-500 text-sm sm:text-base">Form 004</p>
          </div>

          <div className="space-y-4">
            <div className="form-group">
              <label>Company Name:</label>
              <input
                {...register("company_name", {
                  required: "Company name is required",
                })}
                className={`w-full p-2 border rounded ${
                  errors.company_name ? "border-red-500" : ""
                }`}
              />
              {errors.company_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.company_name.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Sample Type:</label>
              <input
                {...register("sample_type", {
                  required: "Sample type is required",
                })}
                className={`w-full p-2 border rounded ${
                  errors.sample_type ? "border-red-500" : ""
                }`}
              />
              {errors.sample_type && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sample_type.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Number of Samples:</label>
              <input
                {...register("number_of_samples", {
                  required: "Number of samples is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid number",
                  },
                })}
                className={`w-full p-2 border rounded ${
                  errors.number_of_samples ? "border-red-500" : ""
                }`}
              />
              {errors.number_of_samples && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.number_of_samples.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>File Name:</label>
              <input
                {...register("file_name", {
                  required: "File name is required",
                })}
                className={`w-full p-2 border rounded ${
                  errors.file_name ? "border-red-500" : ""
                }`}
              />
              {errors.file_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.file_name.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>TIN Number:</label>
              <input
                {...register("tin_number", {
                  required: "TIN number is required",
                })}
                className={`w-full p-2 border rounded ${
                  errors.tin_number ? "border-red-500" : ""
                }`}
              />
              {errors.tin_number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tin_number.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>License Number:</label>
              <input
                {...register("license_number", {
                  required: "License number is required",
                })}
                className={`w-full p-2 border rounded ${
                  errors.license_number ? "border-red-500" : ""
                }`}
              />
              {errors.license_number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.license_number.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Contact Person:</label>
              <input
                {...register("contact_person", {
                  required: "Contact person is required",
                })}
                className={`w-full p-2 border rounded ${
                  errors.contact_person ? "border-red-500" : ""
                }`}
              />
              {errors.contact_person && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contact_person.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                {...register("mobile_number", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9+\-\s]+$/,
                    message: "Please enter a valid mobile number",
                  },
                })}
                className={`w-full p-2 border rounded ${
                  errors.mobile_number ? "border-red-500" : ""
                }`}
              />
              {errors.mobile_number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile_number.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-group">
                <label>Date Submitted:</label>
                <input
                  type="date"
                  {...register("date_submitted", {
                    required: "Date submitted is required",
                  })}
                  className={`w-full p-2 border rounded ${
                    errors.date_submitted ? "border-red-500" : ""
                  }`}
                />
                {errors.date_submitted && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.date_submitted.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>Sample Delivery Date:</label>
                <input
                  type="date"
                  {...register("sample_delivery", {
                    required: "Sample delivery date is required",
                  })}
                  className={`w-full p-2 border rounded ${
                    errors.sample_delivery ? "border-red-500" : ""
                  }`}
                />
                {errors.sample_delivery && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.sample_delivery.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 overflow-x-auto">
              <h3 className="text-lg font-bold mb-4">Analytical Methods</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="min-w-full table-fixed border-collapse border border-black text-xs sm:text-sm text-center">
                  <thead>
                    <tr>
                      <th className="border border-black bg-gray-100 px-4 py-2">
                        Analytical Methods
                      </th>
                      {analyticalMethods.map((method) => (
                        <th
                          key={method.id}
                          className="border border-black bg-gray-100 px-4 py-2"
                        >
                          {method.method_name}
                        </th>
                      ))}
                      <th className="border border-black bg-gray-100 px-4 py-2">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black font-semibold bg-white text-b px-4 py-2">
                        Code
                      </td>
                      {analyticalMethods.map((method, index) => (
                        <td
                          key={method.id}
                          className="border border-black px-2 py-1"
                        >
                          <input
                            {...register(
                              `analytical_methods.${index}.code` as any
                            )}
                            className="w-full border border-black px-2 py-1 text-center"
                            placeholder="Code"
                          />
                        </td>
                      ))}
                      <td className="border border-black px-2 py-1">
                        <input
                          type="text"
                          className="w-full border border-black px-2 py-1 text-center"
                          placeholder="Remark"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="form-group">
              <label>Field Numbers (enter one per line):</label>
              <textarea
                {...register("field_numbers", {
                  required: "Field numbers are required",
                  validate: (value) => {
                    const lines = value
                      .split("\n")
                      .filter((line) => line.trim() !== "");
                    if (lines.length === 0)
                      return "At least one field number is required";
                    return true;
                  },
                })}
                placeholder="Enter each field number on a new line"
                className={`w-full p-2 border rounded h-24 ${
                  errors.field_numbers ? "border-red-500" : ""
                }`}
              />
              {errors.field_numbers && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.field_numbers.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Lab Numbers (enter one per line):</label>
              <textarea
                {...register("lab_numbers", {
                  required: "Lab numbers are required",
                  validate: (value) => {
                    const lines = value
                      .split("\n")
                      .filter((line) => line.trim() !== "");
                    if (lines.length === 0)
                      return "At least one lab number is required";
                    return true;
                  },
                })}
                placeholder="Enter each lab number on a new line"
                className={`w-full p-2 border rounded h-24 ${
                  errors.lab_numbers ? "border-red-500" : ""
                }`}
              />
              {errors.lab_numbers && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lab_numbers.message}
                </p>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-base sm:text-lg font-bold mb-4">Terms of Service</h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 text-sm sm:text-base">
                <li>
                  Samples will be disposed of after 90 days unless otherwise
                  agreed.
                </li>
                <li>
                  The customer is responsible for ensuring samples are properly
                  labeled and comply with safety regulations.
                </li>
                <li>
                  Results will be provided as per the agreed delivery date
                  unless unforeseen circumstances arise.
                </li>
                <li>Payment must be made as per the agreed terms.</li>
              </ol>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("is_agreed", {
                    required: "You must agree to the terms of service",
                  })}
                  className={`h-4 w-4 ${
                    errors.is_agreed ? "border-red-500" : ""
                  }`}
                />
                <label>I agree to the terms above.</label>
              </div>
              {errors.is_agreed && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.is_agreed.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="form-group">
                <label>Hand Over by (Name):</label>
                <input
                  {...register("hand_over_by", {
                    required: "Hand over name is required",
                  })}
                  className={`w-full p-2 border rounded ${
                    errors.hand_over_by ? "border-red-500" : ""
                  }`}
                />
                {errors.hand_over_by && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.hand_over_by.message}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label>Received by (Name):</label>
                <input
                  {...register("received_by", {
                    required: "Receiver name is required",
                  })}
                  className={`w-full p-2 border rounded ${
                    errors.received_by ? "border-red-500" : ""
                  }`}
                />
                {errors.received_by && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.received_by.message}
                  </p>
                )}
              </div>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 whitespace-pre-line">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-8 px-6 sm:px-8 py-3 rounded-full ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-black/90"
              } text-white text-sm sm:text-base`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
