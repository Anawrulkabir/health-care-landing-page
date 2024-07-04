import { Link } from 'react-router-dom'
import { MdArrowOutward } from 'react-icons/md'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <div>
        <img src="/Media/logo dark.png" alt="" />
      </div>
      <div>
        <ul className="flex items-center justify-between gap-12 text-lg font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Service</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="flex items-center gap-2 border rounded-xl px-5 py-3">
          Appointment <MdArrowOutward />
        </button>
      </div>
    </div>
  )
}

export default Navbar
