import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENT

import PersonOutline from "@mui/icons-material/PersonOutline"; // CUSTOM ICON COMPONENT
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ShoppingBagOutlined from "../../../icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK

import useCart from "../../../hooks/useCart"; // ==============================================================
import MegaMenu from "../../navbar/mega-menu";
import categoriesMegaMenu from "../../../data/categoriesMegaMenu"; // MEGA-MENU DATA

// ==============================================================
export default function LoginCartButtons({
  toggleDialog,
  toggleSidenav
}) {
  const {
    state
  } = useCart();
  const ICON_COLOR = {
    color: "grey.600"
  };
  return <div>
      <IconButton onClick={toggleDialog}>
        <FavoriteBorderIcon sx={ICON_COLOR} />
      </IconButton>

      <Badge badgeContent={state.cart.length} color="primary">
        <IconButton onClick={toggleSidenav}>
          <ShoppingBagOutlined sx={ICON_COLOR} />
        </IconButton>
      </Badge>

      <IconButton onClick={toggleDialog}>
        <PersonOutline sx={ICON_COLOR} />
      </IconButton>

      {/* <MegaMenu title="New" menuList={categoriesMegaMenu} /> */}


    </div>;
}