import Image from "next/image";

interface EmptyProps {
  label: string;
  type: string;
}

const Empty = ({ label, type }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        {type === "code" && <Image alt="Empty" fill src="/empty_code.png" />}
        {type === "image" && <Image alt="Empty" fill src="/empty_image.png" />}
        {type === "conversation" && <Image alt="Empty" fill src="/empty.png" />}
        {type === "music" && <Image alt="Empty" fill src="/empty_music.png" />}
        {type === "video" && <Image alt="Empty" fill src="/empty_video.jpg" />}
      </div>
      <p className="text-muted-foreground text-md text-center">{label}</p>
    </div>
  );
};

export default Empty;
