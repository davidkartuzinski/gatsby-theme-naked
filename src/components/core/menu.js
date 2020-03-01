import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { HamburgerMenuIcon } from "../core/icons.js"

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  const menuLiItems = menuLinks.map(link => (
    <li key={link.id}>
      <Link
        // activeStyle={}
        activeClassName="active" // style in your CSS
        to={`${link.link}`}
      >
        {link.name}
      </Link>
    </li>
  ))
  return (
    <div className="main-menu">
      <label
        htmlFor="nav-toggle"
        class="nav-toggle-label"
        aria-haspopup="true"
        aria-controls="nav-toggle"
      >
        <HamburgerMenuIcon size="35" />
        <input
          type="checkbox"
          id="nav-toggle"
          class="nav-toggle"
          name="nav-toggle-label"
        />
      </label>
      <nav aria-label="Main menu">
        <h2 id="mainmenulabel" className="sr-only">
          Main Menu
        </h2>
        <ul className="menu">{menuLiItems}</ul>
      </nav>
    </div>
  )
}

export default Menu
