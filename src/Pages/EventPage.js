import "../Styles/EvenPage.css"
import React from "react";
import Tag from "../Components/Tag.js";
import {Link} from "react-router-dom";


export default function EventPage() {
    return (
        <>
            <main className="EventPage">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://img.freepik.com/free-photo/group-friends-eating-together-with-glass-wine-dining-table-hands-taking-food-from-bowl-plate-group-people-enjoying-variety-food-drinks-getogether-party_425263-3880.jpg?w=2000')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                // src={require("assets/img/team-2-800x800.jpg").default}
                                                src = "https://img2.ad.co.il/NadlanSaleImages/1696349_0.jpg"
                                                style={{width: 210, height: 210, borderRadius: 210/ 2}}
                                                className="shadow-xl rounded h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                             <button>
                                                 <Link to="JoinEvent" className="bg-purple-dark text-white active:bg-purple-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"> Join</Link>

                      </button>

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        4-8
                        </span>
                                                <span className="text-sm text-blueGray-400">
                                                    <br/>
                        Guests
                        </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        3
                        </span>
                                                <span className="text-sm text-blueGray-400">
                                                    <br/>
                        Available Spots
                        </span>
                                            </div>



                                            {/* <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        Traditional Shabbat Dinner
                                    </h3>
                                    <div className="text-lg mt-0 leading-normal mb-2 font-regular text-blueGray-400">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        Sderot Ben Maimon, Rehavia
                                    </div>
                                    <div className="text-lg mt-0 leading-normal mb-2 font-regular text-blueGray-400">
                                        {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "} */}
                                        Friday 20/05/22 at 19:00
                                    </div>
                                    {/* <div className="mb-4 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div> */}
                                    <div className="text-lg mt-0 leading-normal mb-2 font-regular text-blueGray-400">
                                        {/* <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                                        Hosted by Amit Lahav
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                Let's enjoy a happy family traditional shabbat meal.
                                                <br/>
                                                Nice food, traditional Shabbat songs and great Israeli vibes!
                                                <br/>
                                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                                    <h4 className= "font-bold text-blueGray-600">Guest List </h4>
                                                    <br/>
                                                    Tomer Lev
                                                    <br/>
                                                    Eden Hadar
                                                    <br/>
                                                    Michal Cohen
                                                    <br/>
                                                    Lian Rozenberg
                                                    <br/>
                                                    Eran Peleg
                                                </div>
                                            </p>
                                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                                <h4 className= "font-bold text-blueGray-600"> Our Common Interests
                                                </h4>
                                                <br/>
                                                <Tag name="Singing"/><Tag name="Football"/><Tag name="Dancing"/><Tag name="Reading"/><Tag name="Wine Tasting"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
