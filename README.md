HackCU
======
Welcome to the game changer. We are here to build a hacking culture at the University of Colorado, Boulder. Our first national hackathon is coming on February 20th, 2015. Signup and more info at [CUHack.me](http://cuhack.me/)
##Contributor Setup
If you are a new contributor or the username for your commits is identified as ```ubuntu```, perform the following command from the ```HackCU``` directory in the AWS instance in order to attribute your commits to your username:

    git config --global user.name "[insert github username]"
    git config --global user.email "[insert github attributable email address]"
##Style Guidelines
In addition, all links should contain the HTML target attribute "_blank". <br>
Example:
Before:

    <a href="https://www.facebook.com/letsHackCU">Visit our facebook</a>
    
After:
    
    <a href="https://www.facebook.com/letsHackCU" target="_blank">Visit our facebook</a>
    
##Show unique traffic
The following line counts the amount of unique IP's apache has served. As of 10/22, we have 62!

    cat /var/log/apache2/access.log | cut -d" " -f1 | sort -n | uniq | wc -l
