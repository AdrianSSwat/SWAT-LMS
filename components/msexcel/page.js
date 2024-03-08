import React from 'react'

const msexcel = () => {
    const posts = [
    {
        title: "Microsoft Excel 2021 Full Tutorial",
        img: "./img/excel/excel.jpg",
        authorLogo: "/img/it.jpg",
        authorName: "ICT Department",
        date: "Mar 8 2024",
        href: "https://www.youtube.com/watch?v=bF31VEFvMmY&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=1"
    },
  {
    title: "MS Excel - Simple Excel Functions ",
    img: "./img/excel/excel (38).png",
    authorLogo: "/img/it.jpg",
    authorName: "ICT Department",
    date: "Mar 8 2024",
    href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=2213s"
},
{
  title: "MS Excel - Themes",
  img: "./img/excel/excel (33).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=3581s"
},
]
  return (
    <>
  <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      From the blog
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

export default msexcel