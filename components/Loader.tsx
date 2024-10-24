import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/loadinggg.svg" />
      </div>
      <p className="text-md text-muted-foreground">
        Genius is start thinking...
      </p>
    </div>
  );
};

export default Loader;
