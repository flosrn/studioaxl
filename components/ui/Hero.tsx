import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import ButtonLink from "components/ui/Button/ButtonLink";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const [bgIsLoaded, setBgIsLoaded] = useState<boolean>(false);

  // const { ref, inView, entry } = useInView({
  const { ref } = useInView({
    /* Optional options */
    threshold: 0.7,
    // rootMargin: "100px",
  });

  // const el = useRef<HTMLDivElement>(null);
  const bgText = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null); // useRef<HTMLButtonElement>(null)

  // useEffect(() => {
  //   // if (bgText && bgText.current) {
  //   //   console.log("bgText : ", bgText.current.style.display);
  //   //   bgText.current.style.display = !inView ? "none" : "block";
  //   // }
  //   if (el) {
  //     el.current.style.background = !inView ? "#fff" : "transparent";
  //   }
  // }, [inView]);

  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click(); // eslint-disable-line
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      toggleMenu(open);
    }
  };

  const handleClick = (open) => {
    setOpenState(!open); // toggle open state in React state
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <section className="flex relative flex-col pt-32 pl-32 h-screen text-white">
      <Image
        src="/images/home.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="!fixed"
        onLoad={() => setBgIsLoaded(true)}
      />
      {bgIsLoaded && (
        <>
          <div className="flex fixed flex-col pb-20 w-5/6 sm:w-auto text-left">
            <h1 className="font-sage text-9xl">.axelle</h1>
          </div>
          <div
            className="inline fixed bottom-20 md:left-32 z-10 max-w-3xl text-7xl text-white font-classico"
            ref={bgText}
          >
            <span>Keep Calm and call an</span>
            <Popover as="span" className="inline-block">
              {({ open }) => (
                <div
                  onMouseEnter={() => onHover(open, "onMouseEnter")}
                  onMouseLeave={() => onHover(open, "onMouseLeave")}
                >
                  <Popover.Button
                    ref={buttonRef}
                    onClick={() => handleClick(open)}
                    className="italic text-gold"
                  >
                    Artistic Director
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel static className="absolute -top-12 -right-44 max-w-[400px]">
                      <div className="overflow-hidden py-6 px-4 text-black bg-white ring-1 ring-black ring-opacity-5 shadow-lg">
                        <div className="mb-2 text-xs not-italic">
                          <span className="mr-3 text-[#6d758d]">1.</span>{" "}
                          <span className="">
                            of a person Peaceful, quiet, especially free from anger and anxiety
                          </span>
                        </div>
                        <div className="text-xs not-italic">
                          <span className="mr-3 text-[#6d758d]">2.</span>{" "}
                          <span className="">
                            of a person Peaceful, quiet, especially free from anger and anxiety
                          </span>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              )}
            </Popover>
            <ButtonLink url="/" text="On s'appelle ?" theme="dark" className="mt-5 w-[300px]" />
          </div>
        </>
      )}
      <div ref={ref} />
    </section>
  );
};

export default Hero;
