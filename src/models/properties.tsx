import { isPropertyAccessChain } from 'typescript'
import {Property} from './models'

let properties : Property [] =  [];

let property1 : Property = {
    id: 1,
    address: "Lagos, NG",
    type: "bungalow",
    numOfBedRooms: 3,
    state: "NEW",
    numOfSittingRooms:4,
    distance: "450 Kilometers away",
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop1.svg",
    price: 3000000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property2 : Property = {
    id: 2,
    address: "Owerri, NG",
    type: "Duplex",
    state: "SERVICED",
    numOfBedRooms: 2,
    distance: "500 Kilometers away",
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 4,
    numOfToilets: 2,
    propertyOwner: "Henry, Jones",
    description:  "2 bedrooms bungalow at owerri Imo state ",
    image:"/assets/properties/prop2.svg",
    price: 4000000,
    validFrom: new Date("2019-02-16"),
    validTo: new Date("2019-03-16")
};

let property3 : Property = {
    id: 3,
    address: "Abia, NG",
    type: "Flat",
    distance: "350 Kilometers away",
    numOfBedRooms: 4,
    state: "NEW",
    numOfSittingRooms:2,
    numOfKitchens: 3,
    numOfBathrooms: 2,
    numOfToilets: 1,
    propertyOwner: "Harry porter",
    description: "4 bedrooms bungalow at lekki lagos",
    image:"/assets/properties/prop3.svg",
    price: 3000000,
    validFrom: new Date("2020-03-16"),
    validTo: new Date("2020-05-16")
};

let property4 : Property = {
    id: 4,
    address: "Koggi, NG",
    type: "Flat",
    state: "SERVICED",
    distance: "600 Kilometers away",
    numOfBedRooms: 3,
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop1.svg",
    price: 3000000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property5 : Property = {
    id: 5,
    address: "London, UK",
    type: "Bungalow",
    state: "NEW",
    numOfBedRooms: 3,
    distance: "670 Kilometers away",
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop4.svg",
    price: 5000000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property6 : Property = {
    id: 6,
    address: "Lagos, NG",
    type: "flat",
    state: "SERVICED",
    numOfBedRooms: 3,
    numOfSittingRooms:4,
    distance: "460 Kilometers away",
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop5.svg",
    price: 4500000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property7 : Property = {
    id: 7,
    address: "Lagos, NG",
    type: "flat",
    state: "NEW",
    numOfBedRooms: 3,
    distance: "800 Kilometers away",
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop1.svg",
    price: 4500000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property8 : Property = {
    id: 8,
    address: "Abuja, NG",
    type: "flat",
    state: "NEW",
    numOfBedRooms: 3,
    distance: "250 Kilometers away",
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop5.svg",
    price: 6000000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property9 : Property = {
    id: 9,
    address: "Lagos, NG",
    type: "Bungalow",
    distance: "300 Kilometers away",
    state: "NEW",
    numOfBedRooms: 3,
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Justice Erhabor",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop5.svg",
    price: 4500000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property10 : Property = {
    id: 10,
    address: "Rivers, NG",
    type: "flat",
    distance: "100 Kilometers away",
    state: "NEW",
    numOfBedRooms: 3,
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop3.svg",
    price: 5800000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property11 : Property = {
    id: 11,
    address: "Rivers, NG",
    type: "flat",
    distance: "100 Kilometers away",
    state: "NEW",
    numOfBedRooms: 3,
    numOfSittingRooms:4,
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop2.svg",
    price: 5800000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

let property12 : Property = {
    id: 12,
    address: "Lagos, NG",
    type: "bungalow",
    numOfBedRooms: 3,
    state: "NEW",
    numOfSittingRooms:4,
    distance: "450 Kilometers away",
    numOfKitchens: 2,
    numOfBathrooms: 3,
    numOfToilets: 2,
    propertyOwner: "Steven brown",
    description: "3 bedrooms bungalow at lekki lagos ",
    image:"/assets/properties/prop5.svg",
    price: 3000000,
    validFrom: new Date("2019-01-16"),
    validTo: new Date("2019-02-16")
};

properties.push(property1);
properties.push(property2);
properties.push(property3);
properties.push(property4);
properties.push(property5);
properties.push(property6);
properties.push(property7);
properties.push(property8);
properties.push(property9);
properties.push(property10);
properties.push(property11);
properties.push(property12);


export default properties;

