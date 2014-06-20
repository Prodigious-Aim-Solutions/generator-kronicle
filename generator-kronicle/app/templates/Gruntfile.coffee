module.exports = (grunt) ->
    
    grunt.initConfig(
        pkg: grunt.file.readJSON('package.json'),
        # put grunt tasks and opts here
        jsonlint:
            src: ['./kron.json', './bower.json', './package.json']
        coffeelint:
            app: ['./coffee/app/DataSources/*.coffee', './coffee/app/Views/*.coffee', './coffee/app/main.coffee']
        coffee:
            compile:
                files:
                    './js/app/DataSources/*.js': './coffee/app/DataSources/*.coffee',
                    './js/app/Views/*.js': './coffee/app/Views/*.coffee',
                    './js/app/main.js': './coffee/app/main.coffee'
    )
    grunt.loadNpmTasks('grunt-jsonlint')
    grunt.loadNpmTasks('grunt-coffee')
    grunt.loadNpmTasks('grunt-coffeelint')
    
    grunt.registerTask('default', ['jsonlint', 'coffeelint', 'coffee'])