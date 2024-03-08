import React from 'react'

const Word = () => {
  const posts = [
    {
        title: "Microsoft Word 2021 Full Tutorial",
        img: "./img/word/word2021.png",
        authorLogo: "/img/it.jpg",
        authorName: "ICT Department",
        date: "Mar 8 2024",
        href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=470s"
    },
  {
    title: "MS Word - Formatting Text  ",
    img: "./img/word/word (10).png",
    authorLogo: "/img/it.jpg",
    authorName: "ICT Department",
    date: "Mar 8 2024",
    href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=1008s"
},
{
  title: "MS Word - Paragraph Layouts  ",
  img: "./img/word/word (9).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=1509s"
},
{
  title: "MS Word - Creating Lists  ",
  img: "./img/word/word (8).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=1854s"
},
{
  title: "MS Word - Shading and Borders  ",
  img: "./img/word/word (7).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=2302s"
},
{
  title: "MS Word - Format Painter and Styles  ",
  img: "./img/word/word (6).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=2523s"
},
{
  title: "MS Word - Managing Lists ",
  img: "./img/word/word (5).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=2886s"
},
{
  title: "MS Word - Inserting Tables  ",
  img: "./img/word/word (4).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=3269s"
},
{
  title: "MS Word - Inserting Images  ",
  img: "./img/word/word (3).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=4027s"
},
{
  title: "MS Word - Inserting Symbols and Characters",
  img: "./img/word/word (2).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=4591s"
},
{
  title: "MS Word - Page Appearance ",
  img: "./img/word/word (1).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=4863s"
},
{
  title: "MS Word - Headers and Footers  ",
  img: "./img/word/ms-word (1).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=5374s"
},
{
  title: "MS Word - Proofing and the Review Tab  ",
  img: "./img/word/ms-word (33).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=5603s"
},
{
  title: "MS Word - Converting to Other File Types  ",
  img: "./img/word/ms-word (32).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=5977s"
},
{
  title: "MS Word - Table Commands",
  img: "./img/word/ms-word (31).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=6440s"
},
{
  title: "MS Word - Charts",
  img: "./img/word/ms-word (30).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=7066s"
},
{
  title: "MS Word - Adding Tables and Charts from Excel",
  img: "./img/word/ms-word (29).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=7655s"
},
{
  title: "MS Word - Creating Text Styles ",
  img: "./img/word/ms-word (28).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=8060s"
},
{
  title: "MS Word - Creating Table Styles ",
  img: "./img/word/ms-word (27).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=8499s"
},
{
  title: "MS Word - Document Themes",
  img: "./img/word/ms-word (26).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=8863s"
},
{
  title: "MS Word - Building Blocks",
  img: "./img/word/ms-word (25).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=9106s"
},
{
  title: "MS Word - Inserting Fields",
  img: "./img/word/ms-word (24).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=9591s"
},
{
  title: "MS Word - Custom Templates",
  img: "./img/word/ms-word (23).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=9768s"
},
{
  title: "MS Word - Document Flow",
  img: "./img/word/ms-word (22).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=10496s"
},
{
  title: "MS Word - Linking Text Boxes ",
  img: "./img/word/ms-word (21).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=11074s"
},
{
  title: "MS Word - Cover Page and Table of Contents",
  img: "./img/word/ms-word (20).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=11348s"
},
{
  title: "MS Word - Outlines",
  img: "./img/word/ms-word (19).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=11842s"
},
{
  title: "MS Word - Mail Merge",
  img: "./img/word/ms-word (18).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=12488s"
},
{
  title: "MS Word - Manipulating Images",
  img: "./img/word/ms-word (17).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=13420s"
},
{
  title: "MS Word - Inserting Videos ",
  img: "./img/word/ms-word (16).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=13812s"
},
{
  title: "MS Word - Linking Text Boxes",
  img: "./img/word/ms-word (15).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=14058s"
},
{
  title: "MS Word - Drawing Shapes ",
  img: "./img/word/ms-word (14).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=14385s"
},
{
  title: "MS Word - SmartArt",
  img: "./img/word/ms-word (13).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=15072s"
},
{
  title: "MS Word - Sharing for Collaboration ",
  img: "./img/word/ms-word (12).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=15622s"
},
{
  title: "MS Word - Track Changes",
  img: "./img/word/ms-word (11).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=15948s"
},
{
  title: "MS Word - Review Markups",
  img: "./img/word/ms-word (10).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=16294s"
},
{
  title: "MS Word - Merging Changes",
  img: "./img/word/ms-word (9).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=16640s"
},
{
  title: "MS Word - Adding Captions",
  img: "./img/word/ms-word (8).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=16868s"
},
{
  title: "MS Word - Bookmarks and Hyperlinks",
  img: "./img/word/ms-word (7).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=17136s"
},
{
  title: "MS Word - Footnotes and Endnotes",
  img: "./img/word/ms-word (6).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=16868s"
},
{
  title: "MS Word - Bibliography and Citations",
  img: "./img/word/ms-word (5).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=17659s"
},
{
  title: "MS Word - Securing Documents",
  img: "./img/word/ms-word (4).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=18273s"
},
{
  title: "MS Word - Forms ",
  img: "./img/word/ms-word (3).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=18704s"
},
{
  title: "MS Word - Macros ",
  img: "./img/word/ms-word (2).png",
  authorLogo: "/img/it.jpg",
  authorName: "ICT Department",
  date: "Mar 8 2024",
  href: "https://www.youtube.com/watch?v=Hy2XzcW2mxc&t=19297s"
},

]

return (
  <>
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center bg-blue-800 py-8">
            <h1 className="text-3xl text-gray-100 font-semibold">
                Microsoft Word 
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

export default Word

