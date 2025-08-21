import React from 'react'

const CommHero = () => {
    return (
        <div>
            <section className="relative overflow-hidden bg-gradient-to-b from-brand/10 to-transparent">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                Join the Community
                            </h1>
                            <p className="mt-3 text-gray-600">
                                Learn, build, and grow with developers across topics—web, DSA, ML, and more.
                            </p>
                            <div className="mt-6 flex gap-3">
                                <button className="rounded-md bg-brand px-5 py-2.5 text-white hover:bg-brand-dark transition">
                                    Explore Communities
                                </button>
                                <button className="rounded-md border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50">
                                    Create Community
                                </button>
                            </div>
                        </div>
                        <div className="md:justify-self-end">
                            <div className="h-56 w-full rounded-xl bg-brand-light shadow-card md:h-72" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommHero
