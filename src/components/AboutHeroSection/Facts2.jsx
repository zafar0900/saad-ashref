import React from "react";
import OdometerComponent from "../AboutHeroSection/OdometerComponent";
import { counterData2 } from "@/constant/NewHero/facts";
import UAE from "../../../public/uae.png";
import Image from "next/image";

export default function Facts2() {
    return (
        <section className="counter-area" >
            <div className="container">
                <div className="row g-5 animation-action-3">
                    <div className="col-12 col-lg-8 col-xl-6 col-xxl-6 paralax-image">
                        <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <div className="year-expariance-wrap with-flex">
                                {/* <h2 class="year-number"><span class="counter">25 </span> </h2> */}
                                <h2 className="counter year-number" style={{ fontSize: '74px' }}>
                                    <OdometerComponent max={25} />
                                </h2>
                                <h3 className="year-title" style={{ fontSize: '24px' }}>
                                    Years Of <br />
                                    experience
                                </h3>
                            </div>
                            <div className="div" style={{ display: "flex" }}>

                                <div className="col-md-9">
                                    <p className="year-para">
                                        Business consulting consultants provide expert advice and guida
                                        the a businesses.
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <div style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "0px",
                                        height: "460"
                                    }}>
                                        <Image
                                            alt="UAE"
                                            src={UAE}
                                            width={660}
                                            height={460}
                                            style={{
                                                objectFit: "contain",
                                                marginTop: "10px",
                                                maxHeight: '300',
                                            }}
                                        />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-6 col-xxl-6">
                        <div className="counter-area-right-content">
                            <div className="row g-5">
                                {counterData2.map((item, index) => (
                                    <div
                                        className="col-lg-6 col-sm-6 col-12 paralax-image"
                                        key={index}
                                    >
                                        <div
                                            className={`counter-card tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder } ${item.active ? "active" : ""}`}
                                        >
                                            <h3 className="counter counter-title" style={{ lineHeight: '0', fontSize: '24px' }}>
                                                <OdometerComponent max={item.count} />
                                                {item.unit}
                                            </h3>
                                            <div className="tmp-light light-left" />
                                            <p className="counter-para">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
