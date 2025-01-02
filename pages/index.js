import BookingPage from "@/components/booking";

const HomePage = () => (
  <>
    <div style={{ marginBottom: "8vh" }}>
      <div className="flex items-center justify-center">
        <div
          className="text-center my-10"
          style={{
            border: "2px solid white",
            padding: "40px 50px",
            borderRadius: "30px",
            boxShadow: "0 10px 15px -3px #a5b4fc, 0 4px 6px -4px rgb(0 69 76)",
          }}
        >
          <h1 className="text-4xl font-bold mb-0 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-transparent md:text-5xl aos-init aos-animate">
            Welcome to Our Restaurant
          </h1>
        </div>
      </div>
      <div>
        <BookingPage />
      </div>
    </div>
  </>
);

export default HomePage;
