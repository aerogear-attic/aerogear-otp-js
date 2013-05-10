# aerogear-otp-js - JavaScript One Time Password API

A JavaScript library for generating one time passwords according to [RFC 4226.](http://tools.ietf.org/html/rfc4226). 

## Getting started

### Use

	String secret = "B2374TNIQ3HKC446"; //Base32
	var totp = new Totp(secret);
	totp.now(); //427773


For more details, please refer to our [documentation](http://aerogear.org/docs/specs/aerogear-security-otp/)