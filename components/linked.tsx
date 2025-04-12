"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Donwload from "@/public/donwload.svg";
import Linked from "@/public/Link.svg";

interface Props {
  role: string;
}

const ClientButtons = ({ role }: Props) => {
  const handleLinkedInSearch = () => {
    if (!role) return;
    const query = encodeURIComponent(role);
    const linkedInUrl = `https://www.linkedin.com/jobs/search/?keywords=${query}`;
    window.open(linkedInUrl, "_blank");
  };

  const handleDownload = () => {
    // Your logic to download an image/pdf
    alert("Download triggered!"); // Replace this with html2canvas logic if needed
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <Button
        onClick={handleDownload}
        className="btn-primary h-[30px] mr-2"
        size={"lg"}
      >
        <Image src={Donwload} className="w-5 h-5 mr-2" alt="Download" />
        Download
      </Button>
      <Button
        onClick={handleLinkedInSearch}
        className="btn-primary h-[30px]"
        size={"lg"}
      >
        <Image src={Linked} className="w-5 h-5 mr-2" alt="LinkedIn" />
        Connect with Company
      </Button>
    </div>
  );
};

export default ClientButtons;
