module.exports = (application) => {
    application.get('/chat', (req, res, next) => {
      application.app.controllers.chat.start(application, req, res , next);
    })

    application.post('/chat', (req, res, next) => {
        application.app.controllers.chat.start(application, req, res , next);
     })
}