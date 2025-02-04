import { Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai';
const Header = () => {
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl fon-semibold dark:text-white'> 
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
        PenSpace's
      </span>
      Blog
      </Link>
      <form>
      <TextInput
      type='text'
      placeholder='Serarch...' 
      rightIcon={AiOutlineSearch}
      className='hidden lg:inline'
      />
      </form>
   <button className='w-12 h-10 lg:hidden' color='gray' pill>
    <AiOutlineSearch />
   </button>
      </Navbar>
  )
}

export default Header