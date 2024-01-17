import  {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todo:[
        {
            id:1,
            title:'Keep Notes',
            notes:' Seed your thoughts, reap possibilities: Every note sprouts into action, every scribble into a brighter story. Write it down, watch it grow.',
            date:'01/15/2024',
            time:'20:15'
        },
        {
            id:2,
            title:'First Day of Gym',
            notes:' Nerves jangled like loose weights, I stepped into the iron jungle. Rows of machines gleamed like chrome gods, whispers of exertion filling the air. Tentatively, I touched a treadmill, its digital heart pulsing. A bead of sweat traced a map of my fear, but as I took the first stride, fear morphed into exhilaration. My breath, a rhythmic chant, mingled with the clanking symphony of progress. I left, muscles humming, a sense of conquest blooming in my chest. The gym, once a beast, had become my playground.',
            date:'01/15/2024',
            time:'14:15'
        },
    ]
}

export const notesSlice = createSlice({
    name:"notes",
    initialState,
    reducers:{
        addNote:(state,action)=>{
            const note={
                id: nanoid(),
                title:action.payload.title,
                notes:action.payload.notes,
                date:new Date().toLocaleDateString().substr(0,10),
                time: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`
            }
            state.todo.unshift(note)
        },
        removeNote:(state,action)=>{
            state.todo=state.todo.filter((note)=>{return note.id !== action.payload.id})
        },
    }
})

export const {addNote, removeNote,} = notesSlice.actions;
export default notesSlice.reducer;