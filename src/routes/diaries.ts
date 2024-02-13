import express from 'express'//ESModules
import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils/utils';

const router = express.Router()

router.get('/', (_req,res) =>{
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req,res) =>{
    const diary = diaryServices.findById(+req.params.id)
    
    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404)
        
})


router.post('/', (req,res) =>{

    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)
        const addedDiaryEntry = diaryServices.addDiary( newDiaryEntry )

        res.json(addedDiaryEntry)  

    } catch (error) {

        if (error instanceof Error) {
            // Ahora TypeScript sabe que 'error' es una instancia de Error
            res.status(400).send(error.message)
        } else {
            // Manejar cualquier otro caso inesperado
            res.status(500).send('An unexpected error occurred')
        }
    
    }

})

export default router