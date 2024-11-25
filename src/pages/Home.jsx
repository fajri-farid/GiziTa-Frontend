import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="m-10 p-4 flex gap-6 flex-col justify-center">
          <h1
            className="font-bold text-[2.5rem] leading-[1]"
            style={{
              textShadow: "-4px 8px 6px rgba(0, 0, 0, 0.5)", // offset-y menjadi -2px
            }}
          >
            Ciptakan masa depan
            <br /> sehat untuk setiap anak
          </h1>
          <p>
            Bergabunglah dengan misi kami mencegah stunting dengan <br />
            dukungan Anda dan solusi dari para ahli.
          </p>
          <button
            className="mt-4 bg-white py-4 text-[#49A47A] w-[40%] rounded-2xl font-bold text-lg"
            style={{
              boxShadow: "4px 6px 8px rgba(0, 0, 0, 0.25)",
            }}
          >
            Get Started Now
          </button>
        </div>
        <div>
          <img
            src="src\assets\Home\gambar1.webp"
            alt=""
            className="m-0 w-[35rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
