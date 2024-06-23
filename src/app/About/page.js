import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className="text-center font-mono text-3xl mb-5 text-Brown font-bold">About Me</h1>
    <div className="w-full mt-15 mb-10 grid grid-cols-2 items-center ">
      <div className="justify-center col-span-1">
        <Image
          src="/blogs/Erin.png"
          alt="Erin"
          width={600}
          height={600}
          style={{
            margin: "auto",
          }}
          className="rounded-xl"

        />
      </div>
      <div className="p-10 bg-white text-center mb-15 col-span-1 items-center">
        <p className="text-lg font-semibold text-Brown" style={{ wordSpacing: '3px', lineHeight: '2' }}>
          My name is Erin, and I am a holistic-certified Nurse Practitioner, currently working in integrative and alternative medicine. In the summer of 2022, my life quickly took a turn, as I was diagnosed with Hashimoto’s Disease and then papillary carcinoma, shortly after. I have developed this site to share my story and ways I have integrated a healthier lifestyle. I believe in treating others and myself as a whole; physically, emotionally, mentally, and spiritually. I hope by sharing my journey and knowledge in the medical field, I will be able to help support others going through a similar experience.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
