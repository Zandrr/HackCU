HackCU
======
Building a hacking culture at the University of Colorado, Boulder. Our first national Hackathon is coming on April 10th, 2015. Signup and more info at [HackCU.org](http://HackCU.org/)

##Image Optimization
Whenever you add a new png or jpg to the directory, **perform a lossless image minification** to save on file sizing.

Follow instructions below. Keep in mind you may need a ```sudo apt-get install```

Execute calls from ```/HackCU```

Lossless png optimization:

```find . -iname ‘*.png’ -print0 | xargs -0 optipng -o7 -preserve```

Lossless jpg optimization:

```find . -iname ‘*.jpg’ -print0 | xargs -0 jpegoptim --max=90 --strip-all --preserve --totals```

##Style Guidelines
In addition, all links should contain the HTML target attribute "_blank". <br>
Example:
Before:

    <a href="https://www.facebook.com/letsHackCU">Visit our facebook</a>
    
After:
    
    <a href="https://www.facebook.com/letsHackCU" target="_blank">Visit our facebook</a>
    
