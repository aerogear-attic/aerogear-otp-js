/*
* JBoss, Home of Professional Open Source
* Copyright 2012, Red Hat, Inc., and individual contributors
* by the @authors tag. See the copyright.txt in the distribution for a
* full listing of individual contributors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* http://www.apache.org/licenses/LICENSE-2.0
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/*
Unit tests that cover basic functionality of app.js.
*/

module('TOTP');

test('Retrieve a new TOTP', function() {
    expect(2);
    var totp = Totp("B2374TNIQ3HKC446"),
        originalDate = Date;

    // Temporarily override Date to return a known integer to work with currentInterval
    Date = function() {
        return 1111111111111;
    };

    var result = totp.now();
    equal( result, "920997", "Expected TOTP generated" );

    // Reset Date
    Date = originalDate;
    notEqual( new Date() - 0, 1111111111111, "Date has been returned to original functionality" );
});

