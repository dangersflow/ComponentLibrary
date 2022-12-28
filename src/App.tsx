import "./styles.css";
import Popover from "./components/Popover";
import PopoverItem from "./components/PopoverItem";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";

export default function App() {
  return (
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
  );
}
