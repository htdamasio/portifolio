import { styled } from "~/configuration.stitches"

import Hero from "~/components/sections/hero"
import NavigationBar from "../components/navbar"
import About from "~/components/sections/about"

const Main = styled('main', {
  mx: "auto",
  my: "0",
  width: "auto",
  maxWidth: "1600px",
  minHeight: "100vh",
  py: "0px",
  // px: "150px",

  px: "clamp(25px, 10vw, 150px)",

  // "@md": { px: "125px" },
  // "@sm": { px: "75px" },
  // "@xs": { px: "50px" },
})

export default function Index() {
  return (
    <>
      <NavigationBar />
      <div id="content">
        <Main>
          <Hero />
          <About />
        </Main>
      </div>
      {/* <Box align="center" direction="row">
        <h1 className="teste">Hello world!</h1>
        <Button style="ghost">
          Teste
        </Button>
        <Button style="secondary">
          Teste2
        </Button>
        <Button
          style="outline"
          rounded
          bordered
          size="sm"
        >
          <Link to="demo">Go to Demo Page</Link>
        </Button>
      </Box> */}
    </>
  )
}
