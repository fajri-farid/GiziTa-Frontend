import "../styles/home.css";

const Home = () => {
  return (
    <div>
      {/* pertama */}
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
          <p className="tagP">
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
            className="m-0 w-[32rem]"
          />
        </div>
      </div>

      {/* kedua */}
      <div className="flex justify-between mt-10">
        <div className="w-[40%]">
          <img
            src="src\assets\Home\Gambar2.webp"
            alt=""
            className="mt-[-4rem]"
          />
        </div>

        <div className="w-[60%]">
          <div className="flex flex-col mx-10 my-12 p-4 gap-10">
            <h1
              className="font-bold text-[1.6rem] leading-[1.2] tracking-widest"
              style={{
                textShadow: "-4px 8px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Seberapa penting pola makan bergizi dalam <br /> mendukung
              pertumbuhan seorang anak?
            </h1>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Pencegahan Stunting</h1>
                <p className="text-md text-justify leading-[1.5]">
                  Stunting, yang disebabkan oleh malnutrisi, menghambat
                  anak-anak untuk tumbuh secara maksimal, mempengaruhi kesehatan
                  mereka, fungsi otak, dan produktivitas di masa depan, namun
                  dapat dicegah dengan nutrisi yang tepat.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Pertumbuhan Fisik</h1>
                <p className="text-md text-justify leading-[1.5]">
                  Nutrisi yang memadai, termasuk protein untuk pertumbuhan otot,
                  kalsium dan vitamin D untuk tulang yang kuat, serta lemak
                  sehat untuk fungsi otak, sangat penting bagi anak-anak agar
                  dapat tumbuh sehat dan terhindar dari stunting.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-10 my-12 p-4">
            <hr className="border-t-2 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
