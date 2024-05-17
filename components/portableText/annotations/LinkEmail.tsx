import type { PortableTextMarkComponentProps } from "@portabletext/react";
import clsx from "clsx";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    email: string;
  };
};

const LinkEmailAnnotation = ({ children, value }: Props) => {
  if (!value?.email) {
    return null;
  }

  return (
    <a
      className="annotation-email"
      href={`mailto:${value?.email}`}
    >
      <>{children}</>
    </a>
  );
};

export default LinkEmailAnnotation;
