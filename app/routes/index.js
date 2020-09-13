module.exports = (application) => {
    application.get('/', (req, res, next) => {
        application.app.controllers.index.start(application, req, res, next)
    })
}