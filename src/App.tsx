import "./styles.css";
import DialogButton from "./components/DialogueButton";
import MyCombobox from "./components/Combobox";
import MyDisclosure from "./components/Disclosure";
import MyListbox from "./components/Listbox";
import MyRadioGroup from "./components/RadioGroup";
import MyToggle from "./components/Switch";
import Popover from "./components/Popover";
import PopoverItem from "./components/PopoverItem";
import { AiFillDelete } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "6em",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
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
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <MyDisclosure />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20em",
          }}
        >
          <DialogButton />
          <MyRadioGroup />
        </div>
      </div>
    </>
  );
}
