import "../styles/home.css";

const Home = () => {
  return (
    <div>
      {/* hiasan */}
      <img
        src="src/assets/Home/Union.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "250px",
          left: "530px",
          width: "30px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Union.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "120px",
          left: "1550px",
          width: "30px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "257px",
          left: "17px",
          width: "32px",
          height: "40px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "520px",
          left: "696px",
          width: "48px",
          height: "60px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Union.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "750px",
          left: "42px",
          width: "40px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "835px",
          left: "525px",
          width: "32px",
          height: "40px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "875px",
          left: "577px",
          width: "48px",
          height: "60px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "850px",
          right: "200px",
          width: "32px",
          height: "40px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Union.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "1450px",
          left: "500px",
          width: "30px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "1500px",
          left: "42px",
          width: "32px",
          height: "40px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "1533px",
          right: "100px",
          width: "32px",
          height: "40px",
          zIndex: 10,
        }}
      />

      <img
        src="src/assets/Home/Subtract.svg"
        alt="Hiasan"
        className="absolute"
        style={{
          top: "2200px",
          left: "58px",
          width: "32px",
          height: "40px",
          zIndex: 10,
        }}
      />

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
          <div className="flex flex-col mx-10 my-12 p-4 px-10 gap-10">
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

      {/* ketiga */}
      <div className="flex flex-col gap-16 mx-20 my-12 p-4">
        <h1
          className="text-4xl font-extrabold text-center"
          style={{
            textShadow: "-4px 8px 6px rgba(0, 0, 0, 0.3)", // offset-y menjadi -2px
          }}
        >
          Apa yang terjadi saat ini?
        </h1>
        <ul className="list-disc ml-6 text-lg flex flex-col gap-4 tracking-wider text-justify">
          <li>
            Berdasarkan Survei Kesehatan Indonesia 2023, prevalensi stunting di
            Indonesia sebesar 21,5 persen. Angka ini hanya turun 0,1 persen dari
            tahun sebelumnya yang sebesar 21,6 persen.
          </li>
          <li>
            Provinsi Papua Tengah menjadi provinsi dengan prevalensi stunting
            tertinggi se-Indonesia pada 2023 yaitu 39,2 persen.
          </li>
          <li>
            Di Provinsi Sulawesi Tenggara, angka stunting mengalami kenaikan
            dari 27,7% (SSGI, 2022) menjadi 30% (SKI, 2023).
          </li>
          <li>
            Di Kota Baubau, angka stunting mengalami kenaikan dari 26% (SSGI,
            2022) menjadi 29,7% (SKI, 2023).
          </li>
          <li>
            Pemerintah menargetkan angka prevalensi stunting di Indonesia
            mencapai 14% pada akhir 2024.
          </li>
        </ul>
        <div className="flex items-center justify-center space-x-16 px-10">
          <div className="flex-1 border-t-2 border-white"></div>
          <div className="w-6 h-6 rounded-full border-4 border-white"></div>
          <div className="flex-1 border-t-2 border-white"></div>
        </div>
      </div>

      {/* keempat */}
      <div className="flex gap-16 mx-20 my-12 p-4">
        <div className="w-[70%] flex flex-col gap-10">
          <h1 className="text-[50px] font-extrabold tracking-wider leading-[1]">
            Bagaimana cara kita <br />
            berkontribusi?
          </h1>
          <p className="text-lg tracking-wider leading-[1.5] text-justify">
            Bergabunglah bersama kami dalam misi untuk memerangi stunting.
            Platform kami menyediakan ruang bagi Anda untuk memberikan
            kontribusi yang berarti, menawarkan dukungan Anda melalui donasi,
            konsultasi ahli, dan saran nutrisi. Bersama, kita dapat memastikan
            setiap anak memiliki kesempatan untuk tumbuh sehat dan berkembang.
          </p>
        </div>
        <div className="w-[30%] justify-center flex">
          <img src="src\assets\Home\gambar3.svg" alt="" />
        </div>
      </div>

      {/* kelima */}
      <div className="relative mt-20">
        <img
          src="src\assets\Home\footer.png"
          alt=""
          className="h-full object-cover w-full"
        />
        <div className="absolute inset-0 bg-[#7CBCA0] bg-opacity-40"></div>
      </div>
    </div>
  );
};

export default Home;
