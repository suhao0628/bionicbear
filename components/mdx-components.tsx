"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LazyBlock = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const components = {
  p: (props: any) => (
    <LazyBlock>
      <p {...props} />
    </LazyBlock>
  ),
  h2: (props: any) => (
    <LazyBlock>
      <h2 {...props} />
    </LazyBlock>
  ),
  h3: (props: any) => (
    <LazyBlock>
      <h3 {...props} />
    </LazyBlock>
  ),
  li: (props: any) => (
    <LazyBlock>
      <li {...props} />
    </LazyBlock>
  ),
  img: (props: any) => (
    <LazyBlock>
      <Image
        src={props.src}
        alt={props.alt}
        width={800}
        height={400}
        loading="lazy"
        className="rounded"
      />
    </LazyBlock>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
