import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour
  console.log(isOpen, hour)

  // if(hour >= openHour && hour <= closedHour) {
  //   console.log('we are currently open')
  // } else {
  //   console.log('sorry we are closed')
  // }

  return (
    <footer className="footer">
      <div className="order">
        {
          isOpen && (
            <p>We're Open Until {closedHour}:00. Come visit us or order online</p>
          )
        }
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;