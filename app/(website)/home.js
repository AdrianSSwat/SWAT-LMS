import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Category from "../../components/category/page";
import MSWord from "../../components/msword/page";
import MSExcel from "../../components/msexcel/page";


export default function Post() {

  return (
    <>
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
          <MSWord />
          <MSExcel />
        </Container>
    </>
  );
}
