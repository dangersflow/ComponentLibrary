import "./styles.css";
import Popover from "./components/Popover";
import PopoverItem from "./components/PopoverItem";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import MyListbox from "./components/Listbox";
import MyCombobox from "./components/Combobox";
import MyToggle from "./components/Switch";
import MyDisclosure from "./components/Disclosure";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          gap: "2em",
          backgroundColor: "black",
        }}
      >
        <Popover buttonLabel={"Dropdown Menu"} iconOrientation={"right"}>
          <PopoverItem
            icon={<BiLogIn size={30} />}
            title={"Login"}
            subtitle={"Login to your account"}
          />
          <PopoverItem
            icon={<GiArchiveRegister size={30} />}
            title={"Register"}
            subtitle={"Register for an account"}
          />
          <PopoverItem
            icon={<AiFillDelete size={30} />}
            title={"Delete"}
            subtitle={"Delete your account"}
          />
        </Popover>
        <MyListbox />
        <MyCombobox />
        <MyToggle />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          gap: "2em",
          backgroundColor: "black",
        }}
      >
        <MyDisclosure />
      </div>
    </>
  );
}
