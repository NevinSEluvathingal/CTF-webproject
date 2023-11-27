import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cityImg from "./image21.png";
import heroImg from "./flag.png";
import logo1 from "./picture.jpg";
import logo2 from "./123.png";


export default function WelcomePage() {
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      setY(scrollY / 3.3);
      setScale(1 + scrollY / 1000);
    });
  }, []);

  return (
    <>
      <header id="welcome-header">
        <div className="hoader">
          <img src={logo1} alt="Logo 1" className="logo-left" />
          <a href="https://www.dhishna.org">
            <img src={logo2} alt="Logo 2" className="logo-right" />
          </a>
        </div>
        <div id="poda">
          <div className="hell">
            <motion.h1
              style={{
                transform: `translateY(${y / 1.5}px)`,
              }}
            >
              Capture The Flag
            </motion.h1>
          </div>
          <div className="hie">
            <motion.h2
              style={{
                transform: `translateY(${y}px) scale(${scale})`,
                //y: y,
                //scale: scale,
              }}
            >
              Ready To Hack?
            </motion.h2>
          </div>
          <div id="podi">
            <motion.img
              style={{
                y: -y * 2,
              }}
              src={heroImg}
              alt="mountain-flag"
              id="hero-image"
            />
          </div>
        </div>

        <img
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
      </header>
      <main>
        <section>
          <div className="hehe">
            <form  method="POST">
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="email" id="mail" name="mail" required />
                <label htmlFor="mail">Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" id="college" name="college" required />
                <label htmlFor="college">College name</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  min="1"
                  max="4"
                  id="year"
                  name="year"
                  required
                />
                <label htmlFor="year">Year Of Study</label>
              </div>

              <button type="submit" >Register</button>
            </form>
          </div>
          <div className="event">
            <nav className="events-dropdown">
              <button className="events-btn">Events</button>
              <div className="events-content">
                <p>Capture the flag</p>
                <p>Super-Tux-kart</p>
                <p>Discussion panel</p>
                <p>Minetest</p>
                <p>Text-based-adventure</p>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
