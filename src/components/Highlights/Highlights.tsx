interface HighlightsProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function Highlights({
  title,
  description,
  imageUrl,
  imageAlt,
}: HighlightsProps) {
  return (
    <div className="h-full w-full">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="box-content inline-block w-[100px] rounded-[50%] border-[10px] border-solid border-[#00bc77] p-4"
      />
      <h3 className="text-secondary mb-2 mt-5 text-xl font-bold">{title}</h3>
      <p className="my-4">{description}</p>
    </div>
  );
}
