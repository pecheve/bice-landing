module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-war');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        war: {
            target: {
                options: {
                    war_dist_folder: 'war', /* DONDE SE ALOJA ARCHIVO WAR. */
                    war_name: 'landing-go-bice'   /* NOMBRE DESPLIEGUE WAR || AL SUBIR A WEBLOGIC SE ACCEDE EN ESA RUTA (DEBE SER IGUAL QUE LA BASE HREF DE INDEX.HTML)*/
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist', /* Carpeta que se utilizará como base para generar WAR, TODO lo que esté dentro de esta carpeta se generará dentro del war. */
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }
    });
    grunt.registerTask('default', ['war']);
};