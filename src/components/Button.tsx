import Link from "next/link";

const Button = ({
  title,
  Trailer,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}: {
  title: string;
  Trailer: string;
  containerClass: string;
  id: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}) => {
  return (
    <Link
      href={`https://www.youtube.com/watch?v=${Trailer}`}
      id={id}
      target="__blank"
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </Link>
  );
};

export default Button;
