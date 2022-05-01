import { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  const [data, setData] = useState([]);

  //temporary
  const amount = 100;
  const diff = 20;

  useEffect(() => {
    switch (type) {
      case "user":
        setData({
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: <PersonOutlinedIcon className="icon users" />,
        });
        break;
      case "order":
        setData({
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: <ShoppingCartOutlinedIcon className="icon orders" />,
        });
        break;
      case "earning":
        setData({
          title: "EARNINGS",
          isMoney: true,
          link: "View net earnings",
          icon: <MonetizationOnOutlinedIcon className="icon earnings" />,
        });
        break;
      case "balance":
        setData({
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: <AccountBalanceWalletOutlinedIcon className="icon balance" />,
        });
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney ? "$" : null} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
