import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ImHome, } from 'react-icons/im';
import { FaSignOutAlt } from 'react-icons/fa';

const Header: FC = () => {
  const isAuth = false;
  return (
    <header className='flex items-center p-4 shadow-sm bg-slate-800 backdrop-blue-sm'>
      <Link to="/">
        <ImHome size={20} />
      </Link>

      {
        isAuth && (
          <nav className='ml-auto mr-10'>
            <ul className='flex items-center gap-5'>
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/transactions'}
                  className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/categories'}
                  className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
                >
                  Categories
                </NavLink>
              </li>
            </ul>
          </nav>
        )
      }

      {
        isAuth ? (
          <button className='bth bth-red'>
            <span>Log Out</span>
            <FaSignOutAlt />
          </button>
        ) : (
          <Link
            className='py-2 text-white/50 hover:text-white ml-auto'
            to={'auth'}
          >
            Log In / Sing In
          </Link>
        )
      }

    </header>
  )
}

export default Header;