class KronicleBlog
    constructor: (args) ->
        new Kronicle(args)
        return
    
$(document).ready () -> 
    new KronicleBlog(
        dataSources: [new ArrayDataSource()]
        routes:
            "/": new Kronicle.View("posts")
            "/signin": new Kronicle.View("signin")
            "/edit": new Kronicle.View("editor")
    )