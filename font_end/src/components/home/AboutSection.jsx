import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="hidden md:block">
                        <img
                            src="/images/about.jpg"
                            alt="OOUTH Hospital"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">ABOUT US</h2>
                            <h3 className="text-xl text-oouth-500 mb-4">What we are and our history</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Olabisi Onabanjo University Teaching Hospital, Sagamu is designed to focus on
                                providing high quality healthcare services to Ogun in particular and Nigeria as a whole.
                                OOUTH is driven by the vision of providing excellent health to the people. OOUTH is a
                                epitome of a contemporary Teaching Hospital geared towards mutual interaction between health
                                workers and patients.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900">VISION & MISSION</h2>

                            <div>
                                <h3 className="text-xl font-semibold text-oouth-500 mb-2">Our Mission</h3>
                                <p className="text-gray-600">
                                    To achieve a client-friendly, efficient and effective tertiary health care services and to
                                    operate best practices through absolute dedication, discipline and commitment to the well
                                    being of the people of Ogun State.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-oouth-500 mb-2">Our Vision</h3>
                                <p className="text-gray-600">
                                    To provide standards of teaching and tertiary healthcare services with a leading edge amongst
                                    its peers internationally in support of improved well being of the people of Ogun State
                                    towards the agenda for a secured future.
                                </p>
                            </div>
                        </div>

                        <button className="px-6 py-3 bg-oouth-500 text-white rounded-lg hover:bg-oouth-600 transition-colors">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;