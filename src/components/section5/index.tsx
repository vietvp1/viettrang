import Line from "../icons/Line";

const Section5 = () => {
  return (
    <div className="mt-4" id="SECTION5">
      <div className="page-width py-6">
        <div className={"section-title scale hover:text-[#BDA4B3]"}>
          Video Cưới
        </div>
        <div className="flex justify-center">
          <Line className="w-[100px] md:w-[150px] -mt-3 h-2 fill-[#BB6A07]" />
        </div>
        <div className="section-sub-heading">
          Cảm ơn đời mỗi sớm mai thức dậy, ta có thêm ngày nữa để yêu thương.
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <div className="h-[225px] md:h-[425px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/06-XXOTP3Gc"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
