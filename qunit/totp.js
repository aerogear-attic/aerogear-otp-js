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

test('Create new TOTP object', function() {
    var totp = new Totp("B2374TNIQ3HKC446");
    ok(totp instanceof Totp, "Should return a new instance of Totp");
});

test('Retrieve a new TOTP', function() {
    var totp = new Totp("B2374TNIQ3HKC446");
    var result = totp.now();
    console.log("My sweet otp: " + result);
});

