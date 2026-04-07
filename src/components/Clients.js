import React from "react";

// 👉 Import logos (add your logos in assets folder)
import client1 from "../assests/clients/client1.jpg";
import client2 from "../assests/clients/client2.jpg";
import client3 from "../assests/clients/client3.jpg";
import client4 from "../assests/clients/client4.png";
import client5 from "../assests/clients/client5.png";
import client6 from "../assests/clients/client6.jpg";
import client7 from "../assests/clients/client7.png";
import client8 from "../assests/clients/client8.jpg";
import client9 from "../assests/clients/client9.png";
import client10 from "../assests/clients/client10.jpg";

const clients = [client1, client2, client3, client4, client5,client6,client7,client8,client9,client10];

function Clients() {
  return (
    <section className="clients-section py-5">
      <div className="container text-center">

        <h2 className="clients-title mb-4">Trusted By</h2>

        <div className="clients-slider">

          <div className="clients-track">
            {/* Duplicate logos for smooth infinite scroll */}
            {[...clients, ...clients].map((logo, index) => (
              <div className="client-logo" key={index}>
                <img src={logo} alt="client" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Clients;