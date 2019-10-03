import React from "react"
import Link from "next/link"

const UtilityLinks = props => {
  return (
    <div>
      <Link href="/profile">
        <a>profile</a>
      </Link>
      <Link href="/api/login">
        <a>login</a>
      </Link>
      <Link href="/api/logout">
        <a>profile</a>
      </Link>

      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-end;
        }
        a {
          padding-left: 10px;
        }
      `}</style>
    </div>
  )
}

export default UtilityLinks
