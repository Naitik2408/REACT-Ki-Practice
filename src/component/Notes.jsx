import React, { useState } from 'react'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { addNote, removeNote } from '../Store/StoreNotes';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


function Notes({ title, note, date, time, thisId }) {
  const dispatch = useDispatch();
  const [Exptitle, setTitle] = useState(null);
  const [Expnote, setNote] = useState(null);
  const handelDelete = () => {
    dispatch(removeNote({ id: thisId }))
  }
  const handleEdit = () => {
    setTitle(title)
    setNote(note)
  }
  const handeChange = () => {
    dispatch(removeNote({ id: thisId }))
    dispatch(addNote({ title: Exptitle, notes: Expnote }))
    setTitle("");
    setNote("");
  }

  return (
    <div className='bg-slate-800 p-5 rounded-md cursor-pointer max-h-52 overflow-hidden relative group'>
      <div className='overflow-auto h-full'>
        <div className='text-gray-100 font-semibold'>{title}</div>
        <div className='text-gray-400'>{note}</div>
      </div>

      <div className='absolute bottom-0 right-0 w-full bg-gradient-to-t from-slate-800 to-transparent flex justify-end'>
        <span className='text-gray-300 flex justify-end text-sm items-end'>{date}</span>
        <span className=' text-gray-500 text-[9px] flex justify-end items-end px-1 pb-[2px]'>{time}</span>
      </div>
      <div className='absolute left-0 right-0 top-0 justify-end hidden group-hover:flex bg-gradient-to-lb from-slate-800 to-transparent'>
        <div className='flex'>
          <span className='p-1 mx-1 my-3 bg-red-800 rounded-md' onClick={handelDelete}><TrashIcon className='w-5 h-5 text-white' /></span>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <span className='p-1 mx-1 my-3 mr-3 bg-gray-100 rounded-md' onClick={handleEdit}><PencilIcon className='w-5 h-5 text-gray-900' /></span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Edit Note
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-gray-600">
                  Make changes to your note here. Click save when you're done.
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
                    Edit Title
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="name"
                    value={Exptitle} onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
                    Edit Note
                  </label>
                  <textarea name="" id="" cols="10" rows="3" className='bo border-[1px] border-gray-500 rounded-md w-full p-2' value={Expnote} onChange={(e) => setNote(e.target.value)} ></textarea>
                </fieldset>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
                    <button className="text-green11 hover:bg-green5 focus:shadow-green7 bg-blue-300 text-green-700 font-normal py-1 hover:bg-blue-200 px-2 rounded" onClick={handeChange}>
                      Save Changes
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                  >
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  )
}

export default Notes