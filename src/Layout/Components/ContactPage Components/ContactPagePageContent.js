import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pic1 from "../../../Assets/Arrow 2 (1).png";

const ContactPagePageContent = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[96rem] iphone:h-[51rem] flex flex-col justify-around items-center">
        <div className="w-full h-[11.5rem] iphone:w-[39.5rem] iphone:h-32 flex flex-col justify-between items-center text-quaternary">
          <h6 className="font-bold text-sm leading-6">VISIT OUR OFFICE</h6>
          <h2 className="w-[18.5rem] h-[9.5rem] iphone:w-[33rem] iphone:h-24 font-bold text-4xl leading-[3rem]">
            We help small businesses with big ideas
          </h2>
        </div>
        <div className="w-full h-[70rem] flex-col iphone:flex-row iphone:w-[62rem] iphone:h-[25rem] flex justify-evenly items-center">
          <div className="w-[20.5rem] h-[21.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-2xl">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ width: "4.5rem", height: "4.5rem", color: "#23A6F0" }}
            />
            <div className="w-56 h-12 flex flex-col">
              <h6 className="font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className="font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
            </div>
            <h5 className="font-bold text-base leading-5">Get Support</h5>
            <button className="w-48 h-12 row-centered border border-[#23A6F0] rounded-3xl primary">
              Submit Request
            </button>
          </div>
          <div className="w-[20.5rem] h-[25rem] bg-tertiary flex flex-col justify-around items-center border border-[#23A6F0] rounded-2xl">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ width: "4.5rem", height: "4.5rem", color: "#23A6F0" }}
            />
            <div className="w-56 h-12 flex flex-col text-white">
              <h6 className="font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className="font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
            </div>
            <h5 className="font-bold text-base leading-5 text-white">
              Get Support
            </h5>
            <button className="w-48 h-12 row-centered border border-[#23A6F0] rounded-3xl primary">
              Submit Request
            </button>
          </div>
          <div className="w-[20.5rem] h-[21.5rem] flex flex-col justify-around items-center border border-[#23A6F0] rounded-2xl">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ width: "4.5rem", height: "4.5rem", color: "#23A6F0" }}
            />
            <div className="w-56 h-12 flex flex-col">
              <h6 className="font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className="font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
            </div>
            <h5 className="font-bold text-base leading-5">Get Support</h5>
            <button className="w-48 h-12 row-centered border border-[#23A6F0] rounded-3xl primary">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[21.75rem] column-centered">
        <img src={Pic1} alt="" />
        <div className="w-full iphone:w-[38rem] h-48 flex flex-col items-center justify-around">
          <h5 className="font-bold text-base leading-6 text-quaternary">
            WE Can't WAIT TO MEET YOU
          </h5>
          <h1 className="font-bold text-6xl leading-[5rem] text-quaternary">
            Let’s Talk
          </h1>
          <button className="w-48 h-14 rounded font-bold text-sm leading-5 text-white bg-primary">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPagePageContent;
