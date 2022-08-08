import { useState, useEffect } from 'react'
import Alert from './component/Alert'
import { nanoid } from 'nanoid'
import List from './component/List'
import { MdWbSunny, MdNightlightRound } from 'react-icons/md'

function getLocalStorage(item) {
  return localStorage.getItem(item)
    ? JSON.parse(localStorage.getItem(item))
    : []
}

function App() {
  const [lightTheme, setLightTheme] = useState(true)
  const [theme, setTheme] = useState(getLocalStorage('theme'))
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage('list'))
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: ''
  })

  const handleChange = (e) => setName(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'text-[#721c24] bg-[#f8d7da]', 'please enter value')
    } else if (name && isEditing) {
      setList(prevValue => {
        return prevValue.map(item => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      })
      setEditID(null)
      setName('')
      setIsEditing(false)
      showAlert(true, 'text-[#155724], bg-[#d4edda]', 'item changed')
    } else {
      showAlert(true, 'text-[#155724], bg-[#d4edda]', 'item added to list')
      const newItem = { id: nanoid(), title: name }
      setList(prevValue => [...prevValue, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert(prevValue => ({ ...prevValue, show, type, msg }))
  }

  const clearItems = () => {
    setList([]);
    showAlert(true, 'text-[#721c24] bg-[#f8d7da]', 'empty list')
  }

  const editItem = (id) => {
    const itemToEdit = list.find(item => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(itemToEdit.title)
  }

  const removeItem = (id) => {
    showAlert(true, 'text-[#721c24] bg-[#f8d7da]', 'item removed')
    const newItem = list.filter(item => item.id !== id)
    setList(newItem)
  }

  const toggleThemeState = () => {
    setLightTheme(prevState => !prevState)
    const checkThemeState = (theme) => {
      if (lightTheme) {
        theme = 'light'
      }
      if (!lightTheme) {
        theme = 'dark'
      }
      return theme
    }
    setTheme(prevValue => checkThemeState(prevValue))
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [lightTheme])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div className={`${theme}`}>
      <section className="relative w-[90vw] mx-auto max-w-[35rem] mt-32 lg:w-[95vw] bg-clrWhite rounded-s transition-all duration-200 p-8 hover:drop-shadow-md dark:bg-clrPrimary1">
        <button onClick={toggleThemeState} className='absolute top-4 right-4 text-2xl transition-all duration-300 dark:text-clrGrey10'>{theme === 'dark' ? <MdWbSunny /> : <MdNightlightRound />}</button>
        <form onSubmit={handleSubmit}>
          {alert && <Alert {...alert} removeAlert={showAlert} />}
          <h3 className='text-clrPrimary1 mb-6 text-center dark:text-clrGrey10'>grocery bud</h3>
          <div className="flex justify-center">
            <input onChange={handleChange} value={name} placeholder="e.g. egg" name="item" type="text" className="p-1 pl-1 bg-clrGrey10 rounded-l-s border-transparent text-base flex-grow flex-shrink-0 basis-auto indent-2 text-clrGrey5 placeholder:text-clrGrey5 dark:text-clrGrey10 dark:placeholder:text-clrGrey7 dark:bg-clrPrimary2" />
            <button className="grid items-center p-1 capitalize spacing-1 rounded-r-s cursor-pointer text-clrPrimary5 transition-all duration-200 text-sm border-transparent bg-clrPrimary8 flex-grow-0 flex-shrink-0 basis-10 hover:bg-clrPrimary5 hover:text-clrWhite">{isEditing ? 'edit' : 'submit'}</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="mt-8">
            < List items={list} removeItem={removeItem} editItem={editItem} />
            <button onClick={clearItems} className="capitalize w-20 h-4 grid items-center bg-transparent border-transparent text-clrRedLight mx-auto text-sm spacing-1 cursor-pointer transition-all duration-200 mt-2 hover:text-clrRedDark">clear items</button>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
