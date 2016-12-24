/**
 * Created by Akshar on 12/24/2016. its new one
 */
module.exports = function(x,y,callback) {
    try {
        if (x < 0 || y < 0) {
            throw new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y);
        }
        else
            callback(null, {  // this is callback function it send back the info to your node application.... the very first is
                                                    // parameter is error . if no error then its sets to null. check 1st parameter to
                                            // make sure that thats not error. thye 2nd paraameter of callback is js objects that calculate
                                        // parameter and area.      then if the first parameter is not null, then an error has occurred and
                                        // I have to handle it. If not, then the second parameter coming in would be the JavaScript object.
                                        // That has two properties perimeter and area.
                                        //the 2nd parameter is js object . parameter and area
                perimeter: function () {
                    return (2*(x+y)); // here is use of closures so this x and y have access to funtion up..
                },
                area:function () {
                    return (x*y);
                }
            });
    }
    catch (error) {
        callback(error,null);
    }
}
