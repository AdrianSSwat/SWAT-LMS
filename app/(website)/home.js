import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Category from "../../components/category/page";


export default function Post({ posts }) {

  return (
    <>
      {posts && (
        <Container>
          <section className="relative">
              <div className="mx-auto max-w-3xl text-center px-4 pb-16">
                  <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                  Empower Your Workforce with S.W.A.T. Learning Management System
                  </h1>
                  <div className="text-center">
                    <p className="mt-2 text-lg">
                    Elevate Skills, Enhance Performance, Drive Success
                    </p>
                  </div>
              </div>
          </section>
          <Category />
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3 lg:gap-10 xl:grid-cols-3">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
