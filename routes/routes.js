import express from 'express'
import { getHome, getSanes, getAssainisement, getNettoyage, getProfessionnel, getParticulier, getBlog, getFaq, getContact } from '../controllers/controllers.js'

const router = express.Router()

router.get('/', getHome)
router.get('/sanes', getSanes)
router.get('/assainissement', getAssainisement)
router.get('/nettoyage', getNettoyage)
router.get('/devisprofessionnel', getProfessionnel)
router.get('/devisparticulier', getParticulier)
router.get('/blog', getBlog)
router.get('/faq', getFaq)
router.get('/contact', getContact)

export default router  