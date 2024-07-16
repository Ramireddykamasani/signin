import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  baseUrl,
  loginUrl,
  registerUrl,
  validateOtpUrl,
} from "../../urls/Urls";
import chickenImages, {
  ChickenImage,
} from "../../utils/data/chicken/ChickenImages";
import img1 from "../../assets/images/chicken/img(9).png";
import img2 from "../../assets/images/chicken/img(10).png";
import img3 from "../../assets/images/chicken/img(11).png";
import img4 from "../../assets/images/chicken/img(12).png";
import img5 from "../../assets/images/chicken/img(13).png";
import img6 from "../../assets/images/chicken/img(14).png";
import img7 from "../../assets/images/chicken/img(15).png";
import img8 from "../../assets/images/chicken/img(16).png";
import img10 from "../../assets/images/chicken/img(8).png";
import img9 from "../../assets/images/chicken/img(17).png";
import img11 from "../../assets/images/chicken/img(18).png";
import { IDeliveryAddress } from "../../utils/data/deliveryaddress/DeliveryAddress";
import { act } from "react";
export interface OtpInput {
  mobile_number: string;
  otp: string;
}

interface FipolaState {
  chickenData: ChickenImage[];
  cartData: ChickenImage[];
  value: number;
  allAddresses: IDeliveryAddress[];
  registeredData: {
    data: {
      id: string;
      type: string;
      attributes: {
        created_at: string;
        first_name: string;
        last_name: string;
        email: string;
        mobile_number: string;
        updated_at: string;
      };
    };
  };
  loginData: {
    data: {
      id: number;
      otp: string;
      status: boolean;
      created_at: string;
      updated_at: string;
      valid_time: string;
      mobile_number: string;
    };
    status: number;
    message: string;
  };
  slectedAddress: IDeliveryAddress;
  total: number;
  paymentMode: string;
  isDeliveryLocation: boolean;
  registerError: string | undefined;
  pincode: number;
  orderHistory: [ChickenImage[]];
}

export interface Idata {
  data: {
    user: {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
      mobile_number: string;
    };
  };
}
const initialState: FipolaState = {
  total: 0,
  value: 0,
  chickenData: [
    {
      id: 1,
      image: img1,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 2,
      image: img2,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      image: img3,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      id: 3,
      isAdded: false,
    },
    {
      id: 4,
      image: img4,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 5,
      image: img5,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 6,
      image: img6,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 7,
      image: img7,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 8,
      image: img8,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 9,
      image: img9,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 10,
      image: img10,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
    {
      id: 11,
      image: img11,
      title: "Chicken Boneless - Cube Cut",
      description: "we",
      actualPrice: 200,
      offerPrice: 173,
      isFavourate: false,
      quantity: 1,
      isAdded: false,
    },
  ],
  orderHistory: [[]],
  cartData: [],
  registeredData: {
    data: {
      id: "",
      type: "",
      attributes: {
        created_at: "",
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        updated_at: "",
      },
    },
  },
  loginData: {
    data: {
      id: 0,
      otp: "",
      status: false,
      created_at: "",
      updated_at: "",
      valid_time: "",
      mobile_number: "",
    },
    status: 0,
    message: "",
  },
  allAddresses: [
    {
      id: 1,
      username: "Rajesh Sigh",
      buildingName: "Extended Web",
      city: "Sarjapur Outer Ring Road, Kadabeesanahalli, Bengaluru",
      pincode: "500081",
      flatNumber: "301",
    },
    {
      id: 2,
      username: "Mukthar",
      buildingName: "Bhrundhavan Apartment",
      city: "banshankari, Bengaluru",
      pincode: "500079",
      flatNumber: "404",
    },
    {
      id: 3,
      username: "Varma",
      buildingName: "Paralakshmi Apartment",
      city: "Sarjapur Outer Ring Road, Kadabeesanahalli, Bengaluru",
      pincode: "500083",
      flatNumber: "501",
    },
  ],
  slectedAddress: {
    id: 0,
    username: "",
    buildingName: "",
    flatNumber: "",
    pincode: "",
    city: "",
  },
  paymentMode: "",
  isDeliveryLocation: true,
  registerError: "",
  pincode: 500001,
};
export const registerUser = createAsyncThunk(
  "registerUser",
  async (data: Idata["data"]) => {
    console.log("calling redux");
    try {
      const response = await fetch(registerUrl, {
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNzE3ODMxMzM3fQ.kWPFEDBzJ1ftgE27o_I4aPHZ9dV-q9JDV7iYmKJd4j4",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async (phoneNumber: string) => {
    console.log(phoneNumber);
    console.log("loginuser calling...");
    try {
      const result = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile_number: phoneNumber }),
      });
      const data = await result.json();
      // if(data.status === 200)
      //   {
      //     this.props.navigate(`/otp/${this.state.phoneNumber}`);
      //   }
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
export const ValidateOtp = createAsyncThunk(
  "ValidateOtp",
  async (value: OtpInput) => {
    console.log(value);
    try {
      const response = await fetch(validateOtpUrl, {
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
        body: JSON.stringify({
          mobile_number: value.mobile_number,
          otp: value.otp,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);
const fipolaSlice = createSlice({
  name: "fipola",
  initialState: initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<ChickenImage>) => {
      const item = state.cartData.filter(
        (each: ChickenImage) => each.id === actions.payload.id
      );
      const chickenItem = state.chickenData.filter(
        (each: ChickenImage) => each.id === actions.payload.id
      );

      if (item.length > 0) {
        console.log("hai");
        item[0].quantity += 1;
        chickenItem[0].quantity += 1;
        state.total += actions.payload.offerPrice;
      } else {
        state.cartData.push(actions.payload);
        chickenItem[0].isAdded = true;
        state.total += actions.payload.offerPrice;
        console.log("push");
      }
    },
    decreaseItem: (state, actions: PayloadAction<ChickenImage>) => {
      const item = state.cartData.filter(
        (each: ChickenImage) => each.id === actions.payload.id
      );
      const chickenItem = state.chickenData.filter(
        (each: ChickenImage) => each.id === actions.payload.id
      );
      if (item[0].quantity > 1) {
        item[0].quantity -= 1;
        chickenItem[0].quantity -= 1;
        state.total -= actions.payload.offerPrice;
      } else if (item[0].quantity === 1) {
        chickenItem[0].isAdded = false;
        state.total -= actions.payload.offerPrice;

        state.cartData = state.cartData.filter(
          (each: ChickenImage) => each.id !== actions.payload.id
        );
      }
    },

    deleteItem: (state, actions: PayloadAction<ChickenImage>) => {
      state.cartData = state.cartData.filter(
        (each: ChickenImage) => each.id !== actions.payload.id
      );
      const item = state.chickenData.filter(
        (each) => each.id === actions.payload.id
      );
      item[0].quantity = 1;
      item[0].isAdded = false;
      state.total -= actions.payload.quantity * actions.payload.offerPrice;
    },
    isSelected: (state, actions: PayloadAction<string>) => {
      state.slectedAddress = state.allAddresses.filter(
        (each) => each.username === actions.payload
      )[0];
    },
    addNewAddress: (state, actions: PayloadAction<IDeliveryAddress>) => {
      state.allAddresses.push(actions.payload);
    },
    setPaymentMode: (state, actions: PayloadAction<string>) => {
      state.paymentMode = actions.payload;
    },
    setIsdeliveryLocation: (state) => {
      state.isDeliveryLocation = !state.isDeliveryLocation;
    },
    handlePinCode: (state, actions: PayloadAction<number>) => {
      state.pincode = actions.payload;
    },
    orderDetails: (state, actions: PayloadAction<ChickenImage[]>) => {
      state.orderHistory.push(actions.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      registerUser.fulfilled,
      (state, actions: PayloadAction<FipolaState["registeredData"]>) => {
        state.registeredData = actions.payload;
        state.registerError = "";
      }
    );
    builder.addCase(registerUser.rejected, (state, actions) => {
      state.registerError = actions.error.message;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, actions: PayloadAction<FipolaState["loginData"]>) => {
        state.loginData = actions.payload;
      }
    );
  },
});
export default fipolaSlice.reducer;
export const {
  addItem,
  deleteItem,
  decreaseItem,
  isSelected,
  addNewAddress,
  setPaymentMode,
  setIsdeliveryLocation,
  handlePinCode,
  orderDetails,
} = fipolaSlice.actions;
