import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [removeAlert])

  return (
    <p className={`mb-4 h-5 grid items-center text-center text-xs rounded-s tracking-widest ${type}`}>{msg}</p>
  )
}

export default Alert