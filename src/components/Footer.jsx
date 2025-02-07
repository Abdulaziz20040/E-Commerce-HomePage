import { AiOutlineSend } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import qrcod from "../img/Qr Code.png";
import googe from "../img/GooglePlay.png";
import store from "../img/AppStore.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="mb-2 cursor-pointer">Subscribe</p>
          <p className="text-sm mb-3 cursor-pointer">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-gray-500 pr-4 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white px-3 py-2 outline-none w-full"
            />
            <AiOutlineSend />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 ">Support</h3>
          <p className="text-sm cursor-pointer">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm mt-1 cursor-pointer">exclusive@gmail.com</p>
          <p className="text-sm mt-2 cursor-pointer">+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 ">Account</h3>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer">My Account</li>
            <li className="cursor-pointer">Login / Register</li>
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms Of Use</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className=" flex items-center gap-2">
            <img
              src={qrcod}
              alt="qrcod"
              className=" w-20 h-20  cursor-pointer"
            />
            <div className="flex flex-col gap-2">
              <img
                src={googe}
                alt="Google Play cursor-pointer"
                className="h-10"
              />
              <img
                src={store}
                alt="App Store cursor-pointer"
                className="h-10"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3 ">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm border-t text-gray-500 border-gray-700 mt-6 pt-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
