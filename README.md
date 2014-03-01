#Dynamio.css
*Ready-to-cook CSS animation*

`dynamio.css` is a bunch of cool, playful, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general ready-to-cook-awesomeness.

##Usage
To use dynamio.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```
<head>
	<link rel="stylesheet" href="dynamio.min.css">
</head>
```

You can do a whole bunch of other stuff with dynamio.css when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```
$('#yourElement').addClass('animated bounceOutLeft');
```

You can also detect when an animation ends:

<!--
Before you make changes to this file, you should know that $('#yourElement').one() is *NOT A TYPO*

http://api.jquery.com/one/
-->

```
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething());
```

You can change the duration of your animations, add a delay or change the number of times that it plays:

```
#yourElement {
	-vendor-animation-duration: 3s;
	-vendor-animation-delay: 2s;
	-vendor-animation-iteration-count: infinite;
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, etc)*

## Custom Builds
Dynamio.css is powered by [Grunt](http://gruntjs.com), and you can create custom builds pretty easily. First of all, you’ll need Grunt and all other dependencies:

```
$ cd path/to/animate.css/
$ sudo npm install
```

Next, run `grunt watch` to watch for changes and compile your custom builds. For example, if you want only some of the the “attention seekers”, simply edit the `animate-config.json` file to select only the animations you want to use.

```
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "swing": true,
  "tada": true,
  "wobble": true
}
```

## License
Dynamio.css is licensed under the MIT license. (http://opensource.org/licenses/MIT)
