import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { toast } from "react-hot-toast";

const baseurl = `https://restaurant-booking-system-dsd6abhvf3f9f9gu.southeastasia-01.azurewebsites.net/`;

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${baseurl}/api/bookings`);
        if (response) {
          const data = await response.json();
          setBookings(data.reverse());
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  const handleNewBooking = (newBooking) => {
    setBookingSuccess(true);
    setSummaryData(newBooking);
    setBookings([...bookings, newBooking]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const confirmDeleteBooking = (id) => {
    toast((t) => (
      <span>
        Are you sure you want to delete this booking?
        <button
          onClick={() => {
            deleteBooking(id);
            toast.dismiss(t.id);
          }}
          className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-2 px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          No
        </button>
      </span>
    ));
  };

  const deleteBooking = async (id) => {
    try {
      const response = await fetch(`${config.baseurl}/api/bookings/${id}`, {
        method: "DELETE",
      });
      if (response) {
        setBookings(bookings.filter((booking) => booking._id !== id));
        toast.success("Table Slot is Deleted!");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      toast.error("booking not deleted");
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-4 text-center">
        <h1
          className="text-3xl pb-2 font-bold text-center"
          style={{
            boxShadow: "0 4px 8px -3px #a5b4fc, 0 4px 6px -4px rgb(0 69 76)",
            color: "#a5b4fc"
          }}
        >
          Table Booking

        </h1>
        <BookingForm onNewBooking={handleNewBooking} />
      </div>
      <div style={{ marginBottom: "8vh" }} className=" mt-12">
        <div className="flex items-center justify-center">
          <div className="p-6" style={{ width: "100vh" }}>
            <h1
              className="text-3xl pb-2 font-bold text-center"
              style={{
                boxShadow: "0 4px 8px -3px #a5b4fc, 0 4px 6px -4px rgb(0 69 76)",
                color: "#a5b4fc"
              }}
            >
              Bookings
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 my-3">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="border rounded-lg p-6 bg-transparent text-gray-300"
                  style={{
                    boxShadow:
                      "0 4px 8px -3px #a5b4fc, 0 4px 6px -4px rgb(0 69 76)",
                  }}
                >
                  <h2 className="text-xl font-semibold mb-2">
                    <strong> Name:</strong>{" "}
                    {capitalizeFirstLetter(booking.name)}
                  </h2>
                  <p>
                    <strong>Date:</strong> {formatDate(booking.date)}
                  </p>
                  <p>
                    <strong>Time:</strong> {booking.time}
                  </p>
                  <p>
                    <strong>Guests:</strong> {booking.guests}
                  </p>
                  <p>
                    <strong>Contact Number:</strong> {booking.contact}
                  </p>
                  <p>
                    <strong>Booking Date:</strong>
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => confirmDeleteBooking(booking._id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
