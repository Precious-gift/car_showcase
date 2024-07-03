"use client";
import { carDetailsProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import React from "react";

const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className={"relative z-10 focus:outline-none"}
          onClose={closeModal}
        >
          <TransitionChild>
            <div className="fixed inset-0 bg-black/30 transition data-[enter]:ease-out data-[enter]:duration-300 data-[enterFrom]:opacity-0 data-[enterTo]:opacity-100 data-[leave]:ease-in data-[leave]:duration-200 data-[leaveFrom]:opacity-100 data-[leaveTo]:opacity-0" />
          </TransitionChild>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild>
                <div className="flex min-h-full items-center justify-center p-4 fixed inset-0 transition data-[enter]:ease-out data-[enter]:duration-300 data-[enterFrom]:opacity-0 data-[enterFrom]:scale-95 data-[enterTo]:opacity-100 data-[enterTo]:scale-100 data-[leave]:ease-in data-[leave]:duration-200 data-[leaveFrom]:opacity-100 data-[leaveFrom]:scale-100 data-[leaveTo]:opacity-0 data-[leaveTo]:scale-95">
                  <DialogPanel className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-xl">
                    <button
                      type="button"
                      className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                      onClick={closeModal}
                    >
                      <Image
                        src={"/close.svg"}
                        alt="close modal"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </button>

                    <div className="flex-1 flex flex-col gap-3">
                      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-2xl">
                        <Image
                          src={generateCarImageUrl({ car })}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                          <Image
                            src={generateCarImageUrl({ car }, "29")}
                            alt="car model"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                          <Image
                            src={generateCarImageUrl({ car }, "33")}
                            alt="car model"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                          <Image
                            src={generateCarImageUrl({ car }, "13")}
                            alt="car model"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="text-xl font-semibold capitalize">
                        {car.make} {car.model}
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-4">
                        {Object.entries(car).map(([key, value]) => (
                          <div
                            className="flex justify-between gap-5 w-full text-right"
                            key={key}
                          >
                            <h4 className="text-gray capitalize">
                              {key.split("_").join(" ")}
                            </h4>
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogPanel>
                </div>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
