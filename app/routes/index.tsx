import { styled } from "~/configuration.stitches"

import Hero from "~/components/sections/hero"
import NavigationBar from "../components/navbar"
import About from "~/components/sections/about"
import Jobs from "~/components/sections/jobs"
import Contact from "~/components/sections/contact"
import Footer from "~/components/footer"
import Socials from "~/components/socials"

const Main = styled('main', {
  mx: "auto",
  my: "0",
  width: "auto",
  maxWidth: "1600px",
  minHeight: "100vh",
  py: "0px",

  px: "clamp(25px, 10vw, 150px)",
})



export default function Index() {
  return (
    <>
      <NavigationBar />
      <Socials place="floater"/>
      <div id="content">
        <Main>
          <Hero />
          <About />
          <Jobs />
          <Contact />
        </Main>
        <Footer />
      </div>
    </>
  )
}
