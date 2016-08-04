# guppy
A set of codes and flows to kick start frontend web projects. Supports Gulp, Bourbon and Bower.

## about

Guppy facilitates the creation of frontend web projects.

With Guppy, you don't need configure a set of common tasks for frontend developers, as:

1. Generate sprites
2. Optimize images
3. Minify and concat stylesheets and scripts
4. Create a livereload server

## requirements

You need install [Sass](http://sass-lang.com/), [Gulp](http://gulpjs.com/) and [Bower](https://bower.io/).

## usage

Install Gulp dependencies:
```shell
  sudo npm install
```

Install Bower dependencies:
```shell
  bower install
```

Run Gulp tasks:
```shell
  gulp
```

## generate sprites

For include an image in generated sprites, move the desired image to: *app/sprites*.

The sprites image will be generated in: *public/images/sprites.png*.

To use sprites in your code, visit the [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith) repository.

## bourbon

I'm not using Compass in this project, because he is very slow. For that, I'm using [Bourbon](http://bourbon.io/).

## thanks

If use this project, take my thanks. I hope for that.

Any colaboration are welcome.
