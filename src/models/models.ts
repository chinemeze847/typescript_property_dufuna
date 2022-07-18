export interface Property {
    id: number;
    address: string;
    type: string;
    numOfBedRooms: number;
    numOfSittingRooms: number;
    numOfKitchens: number;
    numOfBathrooms: number;
    numOfToilets: number;
    propertyOwner: string;
    description: string;
    state:string;
    image:string;
    distance: string;
    price: number;
    validFrom: Date;
    validTo: Date;
  }
