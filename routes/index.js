module.exports = (app) => {
    let entries = [];

    app.locals.entries = entries;

    // Mi pagina Principal
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Inicio'
        });
    });

    app.get('/new-entry', (req, res) => {
        res.render('new-entry', {
            title: 'Nueva Entrada'
        });
    });

    app.post('/new-entry', (req, res) => {
        if (!req.body.title || !req.body.body) {
            res.status(400).send('Las estradas deben tener titulo y cuerpo');
        }
        let newEntry = {
            title: req.body.title,
            content: req.body.body,
            publish: new Date()
        };
        entries.push(newEntry);
        // console.log(req.body);
        res.redirect('/');
    });
}