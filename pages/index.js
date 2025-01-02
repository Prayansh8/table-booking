import BookingPage from "@/components/booking";

const HomePage = () => (
  <>
    <div className="mb-[8vh] mx-5">
      <div className="flex items-center justify-center">
        <div
          className="text-center my-10 border-2 border-white rounded-[30px] 
                 shadow-lg px-8 py-6"
          style={{
            boxShadow: "0 10px 15px -3px #a5b4fc, 0 4px 6px -4px rgb(0 69 76)",
            width: "100vh"
          }}
        >
          <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-0 
                     animate-[gradient_6s_linear_infinite] 
                     bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50 
                     bg-[length:200%_auto] bg-clip-text 
                     text-transparent font-nacelle">
            Welcome to Our Restaurant
          </h2>
        </div>
      </div>
      <div>
        <BookingPage />
      </div>
    </div>
  </>
);

export default HomePage;
