const Footer = () => (
  <div
    id="footer"
    style={{
      display: "flex",
      fleDirection: "row",
      // backgroundColor: "brown",
      alignItems: "center",
      justifyContent: "space-between",
      position: "absolute",
      width: "100%",
      bottom: 0,
      left: 0,
      right: 0,
      paddingLeft: 30,
      paddingTop: 10,
      paddingRight: 30,
      paddingBottom: 10
    }}
  >
    <p>social Icons</p>
    &copy; {"2020  HouseAssist Space"}
    <div
      style={{
        display: "flex",
        borderRadius: 35,
        width: 35,
        height: 35,
        border: "1px solid gray",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      ?
    </div>
  </div>
);

export default Footer;
