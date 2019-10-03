import React from "react"
import Head from "next/head"

// import components
import Header from "./Header"
import Typography from "typography"

const Layout = ({ children }) => {
  const typography = new Typography({
    baseFontSize: "14px",
    baseLineHeight: 1.45,
    headerFontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    bodyFontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
    // See below for the full list of options.
  })

  return (
    <div>
      <Head>
        <style>{typography.toString()}</style>
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout
