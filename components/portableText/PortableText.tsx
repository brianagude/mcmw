import type { PortableTextComponents } from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import clsx from "clsx";
import { useMemo } from "react";

import LinkEmailAnnotation from "./annotations/LinkEmail";
import LinkExternalAnnotation from "./annotations/LinkExternal";
import LinkInternalAnnotation from "./annotations/LinkInternal";
import Block from "./blocks/Block";
import GridBlock from "./blocks/Grid";
// import ImagesBlock from "./blocks/Images";
// import InstagramBlock from "./blocks/Instagram";

const SHARED_LIST_CLASSES = clsx(
  "first:mt-0 last:mb-0", //
  "my-8 space-y-0.5 leading-paragraph list-outside ml-8"
);

type Props = {
  blocks: PortableTextBlock[];
  className?: string;
  centered?: boolean;
};

export default function PortableText({ blocks, centered, className }: Props) {
  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => (
        <ul className={SHARED_LIST_CLASSES}>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className={SHARED_LIST_CLASSES}>{children}</ol>
      ),
    },
    marks: {
      annotationLinkExternal: LinkExternalAnnotation,
      annotationLinkInternal: LinkInternalAnnotation,
      annotationLinkEmail: LinkEmailAnnotation,
    },
    block: Block,
    // types: {
    //   "module.grid": GridBlock,
    // },
  };

  const portableText = useMemo(() => {
    return (
      <div className={clsx("portableText", className)}>
        <PortableTextReact value={blocks} components={components} />
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);

  return portableText;
}
