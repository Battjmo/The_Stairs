const Util = {
    
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    trim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
    },

    rgbaToHex(rgba) {
    var parts = rgba.substring(rgba.indexOf("(")).split(","),
        r = parseInt(this.trim(parts[0].substring(1)), 10),
        g = parseInt(this.trim(parts[1]), 10),
        b = parseInt(this.trim(parts[2]), 10);

    return ('#' + r.toString(16) + g.toString(16) + b.toString(16));
    }

};

export default Util;