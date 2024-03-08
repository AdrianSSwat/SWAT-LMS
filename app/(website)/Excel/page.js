import React from 'react'

const Excel = () => {
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
        title: "MS Excel - Zooming, Navigating, and Shortcuts ",
        img: "./img/excel/excel (40).png",
        authorLogo: "/img/it.jpg",
        authorName: "ICT Department",
        date: "Mar 8 2024",
        href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=811s"
    },
    {
      title: "MS Excel - Performing Excel Calculations ",
      img: "./img/excel/excel (39).png",
      authorLogo: "/img/it.jpg",
      authorName: "ICT Department",
      date: "Mar 8 2024",
      href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=1699s"
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
  title: "MS Excel - ABS, REF, and AutoFill Functions ",
  img: "./img/excel/excel (37).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=2545s"
},
{
  title: "MS Excel - Checking Compatibility ",
  img: "./img/excel/excel (36).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=2871s"
},
{
  title: "MS Excel - Inserting, Moving, and Cutting",
  img: "./img/excel/excel (35).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=2969s"
},
{
  title: "MS Excel - Cell Styles ",
  img: "./img/excel/excel (34).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=3270s"
},
{
  title: "MS Excel - Themes",
  img: "./img/excel/excel (33).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=3581s"
},
{
  title: "MS Excel - Showing and Hiding Worksheets ",
  img: "./img/excel/excel (32).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=3796s"
},
{
  title: "MS Excel - Grouping Worksheets ",
  img: "./img/excel/excel (31).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=3979s"
},
{
  title: "MS Excel - Freeze Panes",
  img: "./img/excel/excel (30).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=4125s"
},
{
  title: "MS Excel - Custom Views",
  img: "./img/excel/excel (29).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=4455s"
},
{
  title: "MS Excel - Saving Templates ",
  img: "./img/excel/excel (28).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=4569s"
},
{
  title: "MS Excel - Spell Check ",
  img: "./img/excel/excel (27).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=4716s"
},
{
  title: "MS Excel - Print Preview ",
  img: "./img/excel/excel (26).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=4809s"
},
{
  title: "MS Excel - Formatting Lists as Tables ",
  img: "./img/excel/excel (25).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=5119s"
},
{
  title: "MS Excel - Flash Fill",
  img: "./img/excel/excel (24).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=5656s"
},
{
  title: "MS Excel - Custom Sorting ",
  img: "./img/excel/excel (23).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=5823s"
},
{
  title: "MS Excel - Subtotals",
  img: "./img/excel/excel (22).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=6075s"
},
{
  title: "MS Excel - QA Tool",
  img: "./img/excel/excel (21).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=6355s"
},
{
  title: "MS Excel - Data Charts",
  img: "./img/excel/excel (20).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=6541s"
},
{
  title: "MS Excel - Sparklines ",
  img: "./img/excel/excel (19).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=6989s"
},
{
  title: "MS Excel - Introduction to Pivot Tables ",
  img: "./img/excel/excel (18).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=7286s"
},
{
  title: "MS Excel - Advanced Pivot Tables Options ",
  img: "./img/excel/excel (17).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=8012s"
},
{
  title: "MS Excel - Data Validation ",
  img: "./img/excel/excel (16).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=8461s"
},
{
  title: "MS Excel - Conditional Formats ",
  img: "./img/excel/excel (15).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=8854s"
},
{
  title: "MS Excel - Comments and Notes ",
  img: "./img/excel/excel (14).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=9245s"
},
{
  title: "MS Excel - Linking Data ",
  img: "./img/excel/excel (13).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=9400s"
},
{
  title: "MS Excel - Privacy and Protection ",
  img: "./img/excel/excel (12).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=9581s"
},
{
  title: "MS Excel - Nesting Functions ",
  img: "./img/excel/excel (11).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=10008s"
},
{
  title: "MS Excel - Database Functions  ",
  img: "./img/excel/excel (10).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=10480s"
},
{
  title: "MS Excel - XLOOKUP ",
  img: "./img/excel/excel (9).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=10991s"
},
{
  title: "MS Excel - UNIQUE  ",
  img: "./img/excel/excel (8).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=10991s"
},
{
  title: "MS Excel - SORT and SORTBY ",
  img: "./img/excel/excel (7).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=11814s"
},
{
  title: "MS Excel - FILTER ",
  img: "./img/excel/excel (6).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=12168s"
},
{
  title: "MS Excel - LET ",
  img: "./img/excel/excel (5).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=12558s"
},
{
  title: "MS Excel - Consolidate ",
  img: "./img/excel/excel (4).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=12882s"
},
{
  title: "MS Excel - Introduction to Macros ",
  img: "./img/excel/excel (3).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=13167s"
},
{
  title: "MS Excel - Recording and Playing Macros ",
  img: "./img/excel/excel (2).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=7tx1H7sxSL0&list=PLoyECfvEFOjYM5cCiDuhu0AfSwo0DBbSa&index=5&t=13322s"
},

]

return (
  <>
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center bg-green-700 py-8">
            <h1 className="text-3xl text-gray-100 font-semibold">
                Microsoft Excel
            </h1>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
    </>
  )
}

export default Excel