## Deprecation Notice
This repository has been deprecated and is not being maintained. If you have any questions, please get in touch with the collaborators.

# aerogear-otp-js - JavaScript One Time Password API

A JavaScript library for generating one time passwords according to [RFC 4226.](http://tools.ietf.org/html/rfc4226). 

|                 | Project Info  |
| --------------- | ------------- |
| License:        | Apache License, Version 2.0  |
| Project Type:   | JavaScript  |
| Documentation:  | https://aerogear.org/docs/  |
| Issue tracker:  | https://issues.jboss.org/browse/AGSEC  |
| Mailing lists:  | [aerogear-users](http://aerogear-users.1116366.n5.nabble.com/) ([subscribe](https://lists.jboss.org/mailman/listinfo/aerogear-users))  |
|                 | [aerogear-dev](http://aerogear-dev.1069024.n5.nabble.com/) ([subscribe](https://lists.jboss.org/mailman/listinfo/aerogear-dev))  |

## Getting started

### Use

	String secret = "B2374TNIQ3HKC446"; //Base32
	var totp = new Totp(secret);
	totp.now(); //427773


For more details, please refer to our [documentation](http://aerogear.org/docs/specs/aerogear-security-otp/)

## Documentation

For more details about the current release, please consult [our documentation](https://aerogear.org/docs/).

## Development

If you would like to help develop AeroGear you can join our [developer's mailing list](https://lists.jboss.org/mailman/listinfo/aerogear-dev), join #aerogear on Freenode, or shout at us on Twitter @aerogears.

Also takes some time and skim the [contributor guide](http://aerogear.org/docs/guides/Contributing/)

## Questions?

Join our [user mailing list](https://lists.jboss.org/mailman/listinfo/aerogear-users) for any questions or help! We really hope you enjoy app development with AeroGear!

## Found a bug?

If you found a bug please create a ticket for us on [Jira](https://issues.jboss.org/browse/AGSEC) with some steps to reproduce it.
