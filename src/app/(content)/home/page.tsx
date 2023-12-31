"use client";
import Content from "../../components/Content/Content";
import Card from "../../components/Card/Card";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function Home() {
    return (
            <Content caption="Hello HOMEhomhoemhome">
                <div className="wrapper w-[50vw] h-[30vh] mt-[25vh] justify-center border border-green-500">
                    <Splide
                        style={{}}
                        options={{
                            autoplay: true,
                            interval: 4000,
                            drag: "free",
                            loop: true,
                            arrows: false,
                            type: "loop",
                            perPage: 1,
                            padding: { left: "0vw", right: "21.5vw" },
                            gap: "0.1vw",
                        }}
                        hasTrack={false}
                        aria-label="My Favorite Images"
                    >
                        <SplideTrack>
                            <SplideSlide>
                                <Image
                                    src="/Screenshot1.png"
                                    width={100}
                                    height={100}
                                    style={{
                                        width: "27vw",
                                        height: "30vh",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "1vh",
                                        borderBottomLeftRadius: "1vh",
                                    }}
                                    sizes="100"
                                    alt="Image 1"
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <Image
                                    src="/Screenshot2.png"
                                    width={100}
                                    height={100}
                                    style={{
                                        width: "27vw",
                                        height: "30vh",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "1vh",
                                        borderBottomLeftRadius: "1vh",
                                    }}
                                    sizes="100"
                                    alt="Image 2"
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <Image
                                    src="/Screenshot1.png"
                                    width={75}
                                    height={100}
                                    style={{
                                        width: "27vw",
                                        height: "30vh",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "1vh",
                                        borderBottomLeftRadius: "1vh",
                                    }}
                                    sizes="100"
                                    alt="Image 3"
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <Image
                                    src="/Screenshot2.png"
                                    width={100}
                                    height={100}
                                    style={{
                                        width: "27vw",
                                        height: "30vh",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "1vh",
                                        borderBottomLeftRadius: "1vh",
                                    }}
                                    sizes="100"
                                    alt="Image 4"
                                />
                            </SplideSlide>
                        </SplideTrack>

                        <div className="splide__pagination" />
                    </Splide>
                </div>

                <div className="hero flex absolute gap-[2vw] right-[6vh] bottom-[2vw]">
                    {Array.from(Array(3).keys()).map((_, i) => (
                        <Card key={i} />
                    ))}
                </div>
            </Content>
    );
}
