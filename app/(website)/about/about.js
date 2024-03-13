import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <p href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </p>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
      <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Empower Your Workforce with S.W.A.T. Learning Platform
        </h1>
        <p>
        Welcome to S.W.A.T. Learning Platform, where knowledge meets opportunity. Our comprehensive internal learning management system LMS is designed to empower your workforce by providing a dynamic and personalized learning experience tailored to the organization needs.
        </p>
        <p>
        Personalized Learning Paths: Our platform offers personalized learning paths tailored to each employee role, skill level, and career aspirations.
        </p>
        <p>
        On-Demand Access: Access a vast library of courses, resources, and interactive content anytime, anywhere, and on any device.
        </p>
        <p>
          <Link href="/archive">See resources</Link>
        </p>
      </div>
    </Container>
  );
}
