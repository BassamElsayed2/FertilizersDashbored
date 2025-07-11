import Image from "next/image";

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <div>
      <div className="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] py-[20px] md:py-[80px] px-[20px] md:px-[25px] rounded-md">
        <div className="trezo-card-content text-center">
          <Image
            src="/images/starter.png"
            className="inline-block"
            alt="starter-image"
            width={880}
            height={538}
          />
        

          <h4 className="md:!max-w-[550px] !mx-auto !leading-[1.5] !mt-[25px] md:!mt-[38px] !mb-[20px] md:!mb-[30px] !text-[19px] md:!text-[21px]">
          أهلاً بكم في لوحة إدارة الشركة المصرية الأسترالية للأسمدة
          الآن، يمكنك إنشاء وإدارة محتواك بسهولة وسرعة، كل ذلك من مكان واحد.
          </h4>
        </div>
      </div>
    </div>
  );
}
