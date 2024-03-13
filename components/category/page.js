import React from 'react'
import Image from 'next/image'

const page = () => {
  const team = [
    {
        avatar: "/img/word.png",
        name: "MS Word",
        path: "/Word",
    },
    {
        avatar: "/img/excel.png",
        name: "MS Excel",
        path: "/Excel",
    },
    {
        avatar: "/img/motivation.png",
        name: "Professional Development",
        path: "/Professional-Development",
    },
]

return (
    <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div>
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        team.map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-center">
                                <div className="flex-none w-auto h-auto w-full h-full rounded-full">
                                    <Image
                                        src={item.avatar}
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <a className="dark:text-gray-100 text-gray-700 font-semibold sm:text-lg" href={item.path}>
                                      {item.name}
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default page