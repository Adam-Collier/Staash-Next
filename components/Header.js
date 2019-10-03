import React from "react"

import UtilityLinks from "../components/UtilityLinks"

import AddIcon from "../icons/add.svg"
import Logo from "../icons/logo.svg"
import SearchIcon from "../icons/search.svg"
import SwitchIcon from "../icons/switch.svg"

const Header = props => {
  return (
    <div className="container">
      <UtilityLinks />
      <header>
        <AddIcon />
        <Logo />
        <div>
          <SwitchIcon />
          <SearchIcon />
        </div>
      </header>

      <style jsx>{`
        .container {
          width: 440px;
          padding-top: 40px;
          margin: 0 auto;
        }
        header {
          height: 60px;
          background: #363636;
          position: relative;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
          margin: 0 auto;
        }

        header :global(svg) {
          height: 16px;
        }

        header :global(.logo) {
          position: absolute;
          height: 24px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 106px;
        }

        header div :global(.search) {
          padding-left: 15px;
        }
      `}</style>
    </div>
  )
}

export default Header
