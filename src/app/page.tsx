import Image from "next/image";
import bgImage from "@fantasy-magic-landscape.jpg"

export default function Home() {
  return (
    <div className="absolute -z-10 inset-0">
      <Image
        src={bgImage}
        alt="background image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
  