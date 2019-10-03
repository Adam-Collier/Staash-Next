import React from "react"
import Link from "next/link"

const UtilityLinks = props => {
  return (
    <div>
      <Link href="/profile">
        <a>profile</a>
      </Link>
      <a href="https://slack.com/oauth/authorize?client_id=161362817169.304108932706&scope=identity.basic">
        login
      </a>
      <a href="/api/logout">logout</a>

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
