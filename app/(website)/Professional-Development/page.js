import React from 'react'
import Image from 'next/image'
const ProfessionalDevelopment = () => {
  const posts = [
    {
        title: "The 7 Habits of Highly Effective People",
        img: "/img/professional/3.png",
        authorLogo: "/img/it.jpg",
        authorName: "ICT Department",
        date: "Mar 8 2024",
        href: "https://www.youtube.com/watch?v=A-LJ6wvk7Cw"
    },
  {
    title: "Robert Greene: A Process for Finding & Achieving Your Unique Purpose",
    img: "/img/professional/5.png",
    authorLogo: "/img/it.jpg",
    authorName: "ICT Department",
    date: "Mar 8 2024",
    href: "https://www.youtube.com/watch?v=50BZQRT1dAg"
},
{
  title: "Proactive vs Reactive | Be Proactive",
  img: "/img/professional/2.png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Tex0zKuLCMg"
},
{
  title: "10 Management skills every manager should have.",
  img: "/img/professional/4.png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=xHBhFKBLhWs"
},
{
  title: "How Emotional Intelligence Makes Leaders More Impactful",
  img: "/img/professional/1.png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://youtube.com/watch?v=75obHtjUsG8"
},
]
  return (
    <>
  <section className="bg-white dark:bg-gray-900">

  <div className="container px-6 py-10 mx-auto">
  <div className="text-center bg-gray-700 py-8">
            <h1 className="text-3xl text-gray-100 font-semibold">
            Professional Development
            </h1>
        </div>
    <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {
                         posts.map((items, key) => (
                            <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm relative" key={key}>
                                <a className="object-cover object-center w-full h-64 rounded-lg lg:h-60" href={items.href}>
                                   <div>
                                   <Image src={items.img} loading="lazy" alt={items.title}         
                                      width={500}
                                      height={500}
                                      quality={100}  />
                                   </div>
                                    <div className="flex items-center  pt-3 ml-4 mr-2">
                                        <div className="flex-none w-10 h-10 rounded-full">
                                            <Image 
                                              src={items.authorLogo}
                                              width={500}
                                              height={500}
                                              alt={items.authorName} />
                                        </div>
                                        <div className="ml-3">
                                            <span className="block dark:text-gray-100 text-gray-900">{items.authorName}</span>
                                            <span className="block dark:text-gray-500 text-gray-400 text-sm">{items.date}</span>
                                        </div>
                                    </div>
                                    <div className="pt-3 ml-4 mr-2 mb-3">
                                        <h3 className="text-xl dark:text-gray-100 text-gray-900">
                                            {items.title}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
  </div>
</section>
</>
  )
}

export default ProfessionalDevelopment