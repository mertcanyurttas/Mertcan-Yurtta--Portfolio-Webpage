import gulp from "gulp";
const { task, src, dest, watch, series } = gulp;
import autoprefixer from "gulp-autoprefixer";

// Define the autoprefixer task
task(
    "autoprefix",
    () =>
        src("./css/*.css") // Adjust the source path according to your project structure
            .pipe(
                autoprefixer({
                    overrideBrowserslist: ["last 100 versions", "> 1%"], // Adjust the browser support according to your needs
                    cascade: false,
                })
            )
            .pipe(dest("./css")) // Adjust the destination path according to your project structure
);

// Define a watch task
task("watch", () =>
    // Watch for changes in CSS files and run the 'autoprefix' task
    watch("./css/*.css", series("autoprefix"))
);

// Define the default task (run with 'gulp' command)
task("default", series("autoprefix", "watch"));
