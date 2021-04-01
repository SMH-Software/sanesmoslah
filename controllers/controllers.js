export const getHome = (req, res) => {
    res.render('index')
}

export const getSanes = (req, res) => {
    res.render('sanes')
}

export const getAssainisement = (req, res) => {
    res.render('assainissement')
}

export const getNettoyage = (req, res) => {
    res.render('nettoyage')
}

export const getProfessionnel = (req, res) => {
    res.render('devisprofessionnel') 
}

export const getParticulier = (req, res) => {
    res.render('devisparticulier') 
}

export const getBlog = (req, res) => {
    res.render('blog')
}

export const getFaq = (req, res) => {
    res.render('faq')
}

export const getContact = (req, res) => {
    res.render('contact')
}


