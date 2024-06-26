import type { PortableTextMarkComponentProps } from "@portabletext/react";
import clsx from "clsx";
import Link from "next/link";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    slug?: string;
  };
};

export default function LinkInternalAnnotation({ children, value }: Props) {
  if (!value?.slug) {
    return null;
  }

  return (
    <Link
      href={value?.slug}
      target="blank"
      className={clsx(
        "inline-flex items-center underline transition-opacity duration-200",
        "hover:opacity-60"
      )}
    >
      <>{children}</>
    </Link>
  );
}
