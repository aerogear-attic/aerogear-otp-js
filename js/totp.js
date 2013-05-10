var Totp = function (secret) {
    function hash(secret, interval) {
      var key = sjcl.codec.base32.toBits(secret);
      var hmacsha1 = new sjcl.misc.hmac(key, sjcl.hash.sha1);
      var hashed = hmacsha1.encrypt(interval);

      var otp = bytesToInt(hashed);

      return leftPadding(otp.toString());
    }

    function currentInterval() {
        var date = Math.floor((new Date() - 0) / 30000);
        return [((date & 0xffffffff00000000) >> 32), date & 0xffffffff];
    }

    function bytesToInt(hash){
        var data = sjcl.bitArray.extract(hash, 152, 8) & 0x0f;
        var offset = data * 8;
        var endBits = offset + 4 * 8;
        var slice = sjcl.bitArray.bitSlice(hash, offset, endBits);
        var binary = slice[0] & 0x7fffffff;
        var length = 6;
        return binary % Math.pow(10, length);
    }

    function leftPadding(otp) {
        return Array((6 - otp.length)).join("0") + otp;
    }

    return {
        now: function() {
            return hash(secret, currentInterval());
        }
    };
};
