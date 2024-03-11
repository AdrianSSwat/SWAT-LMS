import React from 'react'

const ProfessionalDevelopment = () => {
  const posts = [
    {
        title: "The 7 Habits of Highly Effective People",
        img: "./img/professional/professional.jpg",
        authorLogo: "/img/it.jpg",
        authorName: "ICT Department",
        date: "Mar 8 2024",
        href: "https://www.youtube.com/watch?v=A-LJ6wvk7Cw"
    },
  {
    title: "Robert Greene: A Process for Finding & Achieving Your Unique Purpose",
    img: "./img/professional/professional-2.jpg",
    authorLogo: "/img/it.jpg",
    authorName: "ICT Department",
    date: "Mar 8 2024",
    href: "https://www.youtube.com/watch?v=50BZQRT1dAg"
},
{
  title: "Proactive vs Reactive | Be Proactive",
  img: "./img/professional/professional-3.jpg",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Tex0zKuLCMg"
},
{
  title: "10 Management skills every manager should have.",
  img: "./img/professional/professional-4.jpg",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=xHBhFKBLhWs"
},
{
  title: "How Emotional Intelligence Makes Leaders More Impactful",
  img: "./img/professional/professional-6.jpg",
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
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
    Professional Development
    </h1>
    <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {
                posts.map((items, key) => (
                    <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm relative" key={key}>
                        <a href={items.href}>
                            <img src={items.img} loading="lazy" alt={items.title}  className="object-cover object-center w-full h-64 rounded-lg lg:h-60" />
                            <div className="flex items-center  pt-3 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
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