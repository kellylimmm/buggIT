import React from 'react'

class Navbar extends React.Component{
render(){

return(

<div>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Features</Nav.Link>
      <Nav.Link href="#">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

  </div>
)

}


}
export default Navbar;