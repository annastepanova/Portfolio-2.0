import React from 'react'

const useScroll = () => {
  const [scroll, setScroll] = React.useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, []) 

  return scroll
}

export default useScroll
