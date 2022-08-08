import { FaTrash, FaEdit } from 'react-icons/fa'

const List = ({ items, removeItem, editItem }) => {
  return (
    <>
      {items.map(item => {
        const { id, title } = item
        return <article id='effectOnChild' key={id} className="grocery-item flex items-center justify-between mb-2 transition-all duration-200 px-4 py-1 h-max rounded-s capitalize hover:text-clrGrey5 hover:bg-clrGrey10 dark:hover:bg-clrPrimary3 dark:hover:text-clrGrey8">
          <p className="text-clrGrey1 tracking-widest transition-colors duration-200 self-center dark:text-clrGrey9">{title}</p>
          <div>
            <button onClick={() => editItem(id)} className="bg-transparent border-transparent cursor-pointer text-sm text-clrGreenLight transition-all duration-200 my-0 mx-[0.4rem] hover:text-clrGreenDark">
              <FaEdit />
            </button>
            <button onClick={() => removeItem(id)} className="bg-transparent border-transparent cursor-pointer text-sm text-clrRedLight transition-all duration-200 my-0 mx-[0.4rem] hover:text-clrRedDark">
              <FaTrash />
            </button>
          </div>
        </article>
      })}
    </>
  )
}

export default List