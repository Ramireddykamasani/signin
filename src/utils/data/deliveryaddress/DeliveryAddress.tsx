export interface IDeliveryAddress {
  id: number;
  username:string,
  buildingName: string;
  flatNumber: string;
  pincode: string;
  city:string
}
export const deliverAddress: IDeliveryAddress[] = [
  {
    id: 1,
    username:'Rajesh Sigh',
    buildingName: "Extended Web",
    city: "Sarjapur Outer Ring Road, Kadabeesanahalli, Bengaluru",
    pincode: "500081",
    flatNumber:'301'
  },
  {
    id: 2,
    username:'Mukthar',
    buildingName: "Bhrundhavan Apartment",
    city: "banshankari, Bengaluru",
    pincode: "500079",
    flatNumber:'301'

  },
  {
    id: 3,
    username:'Varma',
    buildingName: "Paralakshmi Apartment",
    city: "Sarjapur Outer Ring Road, Kadabeesanahalli, Bengaluru",
    pincode: "500083",
    flatNumber:'301'

  },
];
export default deliverAddress;
