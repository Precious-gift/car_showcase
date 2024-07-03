import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface searchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface carCardProps {
  car: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  };
}

export interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carCardProps["car"];
}

export interface filterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface optionProps {
  title: string;
  value: string;
}

export interface customFilterProps {
  title: string;
  options: optionProps[];
}

export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;
}
