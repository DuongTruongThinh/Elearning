import "./slick.css";
import "./slicktheme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};

export default function FeedBackComponent() {
    return (
        <div className='py-8 bg-[#f5f7fa]' style={{ borderBottom: "2px solid rgb(233, 237, 242)" }}>
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className='text-[32px] font-medium relative inline-flex mb-7'>
                        Feedback
                        <span className='absolute rounded-[2px] w-full h-1 left-0 bottom-[-10px] bg-[#5567ff]'></span>
                    </h2>
                    <p className='max-w-lg mr-auto ml-auto text-[#272c33b3] text-[14.625px]'>
                        What other students turned professionals have to say about us after learning with us and reaching their goals.
                    </p>
                </div>
                <Slider {...settings} className="cursor-grab">
                    <div className="px-3">
                        <div className="flex p-4 bg-white rounded-lg mb-6 relative" style={{ border: "1px solid #dfe2e6", boxShadow: "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)" }}>
                            <span className="absolute w-[15px] h-[15px] bottom-[-8px] left-[24px] right-0 bg-white rotate-45" style={{ borderBottom: "1px solid #dfe2e6", borderRight: "1px solid #dfe2e6" }}></span>
                            <blockquote className="px-4 py-2" style={{ borderLeft: "0.25rem solid #e9edf2" }}>
                                <p className="text-[#272c33b3] text-[13px] ">
                                    A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.
                                </p>
                            </blockquote>
                        </div>
                        <div className="flex ml-3">
                            <a href="" className="w-10 h-10 flex mr-3" >
                                <span className="rounded-[50%] font-medium text-white w-full h-full flex justify-center items-center bg-[#303840]">UK</span>
                            </a>
                            <div>
                                <a href="" className="flex font-medium">
                                    Umberto Kass
                                </a>
                                <div className="flex">
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star_border</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="flex p-4 bg-white rounded-lg mb-6 relative" style={{ border: "1px solid #dfe2e6", boxShadow: "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)" }}>
                            <span className="absolute w-[15px] h-[15px] bottom-[-8px] left-[24px] right-0 bg-white rotate-45" style={{ borderBottom: "1px solid #dfe2e6", borderRight: "1px solid #dfe2e6" }}></span>
                            <blockquote className="px-4 py-2" style={{ borderLeft: "0.25rem solid #e9edf2" }}>
                                <p className="text-[#272c33b3] text-[13px] ">
                                    A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.
                                </p>
                            </blockquote>
                        </div>
                        <div className="flex ml-3">
                            <a href="" className="w-10 h-10 flex mr-3" >
                                <span className="rounded-[50%] font-medium text-white w-full h-full flex justify-center items-center bg-[#303840]">UK</span>
                            </a>
                            <div>
                                <a href="" className="flex font-medium">
                                    Umberto Kass
                                </a>
                                <div className="flex">
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star_border</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="flex p-4 bg-white rounded-lg mb-6 relative" style={{ border: "1px solid #dfe2e6", boxShadow: "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)" }}>
                            <span className="absolute w-[15px] h-[15px] bottom-[-8px] left-[24px] right-0 bg-white rotate-45" style={{ borderBottom: "1px solid #dfe2e6", borderRight: "1px solid #dfe2e6" }}></span>
                            <blockquote className="px-4 py-2" style={{ borderLeft: "0.25rem solid #e9edf2" }}>
                                <p className="text-[#272c33b3] text-[13px] ">
                                    A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.
                                </p>
                            </blockquote>
                        </div>
                        <div className="flex ml-3">
                            <a href="" className="w-10 h-10 flex mr-3" >
                                <span className="rounded-[50%] font-medium text-white w-full h-full flex justify-center items-center bg-[#303840]">UK</span>
                            </a>
                            <div>
                                <a href="" className="flex font-medium">
                                    Umberto Kass
                                </a>
                                <div className="flex">
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star</i>
                                    <i class="material-icons text-base text-[#f9c32c]">star_border</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

