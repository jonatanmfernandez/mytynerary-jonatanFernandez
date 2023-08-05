import Anchor from '../Anchor/Anchor'
import Logo from '../Logo/Logo'

const NavBar = () => {
  let data = [
    {href:"",title:"My Tynerary"},
    {href:"",title:"Home"},
    {href:"",title:"Cities"},
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
       <Logo />
       </div>
      </div>
     

      <div className="navbar-nav ms-auto mb-2 mb-lg-0">
        {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)}
      </div>
    </nav>
  );
}

export default NavBar;
