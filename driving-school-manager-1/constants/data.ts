export interface DrivingVehicleProps {
  vehicleName: string;
  school: string;
  type: string; // Car, Bike, Bus
  rate: number;
  pricePerHour: number;
  currency: string;
  favorite: boolean;
  image: any;
}

export const SAMPLE_DATA: DrivingVehicleProps[] = [
  {
    vehicleName: "Toyota Corolla 2023",
    school: "ABC Driving School",
    type: "Car",
    rate: 4.8,
    pricePerHour: 25,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/property1.jpeg"),
  },
  {
    vehicleName: "Honda CB500",
    school: "Motorcycle Academy",
    type: "Bike",
    rate: 4.9,
    pricePerHour: 20,
    currency: "$",
    favorite: true,
    image: require("@/assets/images/property1.jpeg"),
  },
  {
    vehicleName: "Mercedes Sprinter",
    school: "Bus Training Center",
    type: "Bus",
    rate: 4.7,
    pricePerHour: 50,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/property1.jpeg"),
  },
  {
    vehicleName: "Renault Clio 2022",
    school: "City Driving School",
    type: "Car",
    rate: 4.6,
    pricePerHour: 22,
    currency: "$",
    favorite: false,
    image: require("@/assets/images/property1.jpeg"),
  },
];

export const FILTERS = [
  { label: "Car", image: require("@/assets/images/property1.jpeg") },
  { label: "Bike", image: require("@/assets/images/property1.jpeg") },
  { label: "Bus", image: require("@/assets/images/property1.jpeg") },
  { label: "Automatic", image: require("@/assets/images/property1.jpeg") },
  { label: "Manual", image: require("@/assets/images/property1.jpeg") },
];
