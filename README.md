HackCU
======

Building a hacking culture at the University of Colorado, Boulder. Our first national Hackathon is coming on April 10th, 2015. Signup and more info at [HackCU.org](http://HackCU.org/)

## Install

1. Git it: `git clone https://github.com/Zandrr/HackCU HackCU && cd $_`
1. Make sure you have node.js installed
1. Install dependencies:
  - Install `imagemagick` and `graphicsmagick`
  - `npm install`

## Style Guidelines

In addition, all links should contain the HTML target attribute "_blank".

### Example:

Before:

    <a href="https://www.facebook.com/letsHackCU">Visit our facebook</a>

After:

    <a href="https://www.facebook.com/letsHackCU" target="_blank">Visit our facebook</a>

## Deployment

1. Check the site to make sure that everything looks OK. Give it about 30 seconds to build.
  - `gulp serve:dist`
1. Make sure your `AWS_ACCESS_KEY` and `AWS_SECRET_KEY` environment variables
   are set. Hit up @ianks for those keys.
1. Publish the site to production:
  - `gulp publish`
