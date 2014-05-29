// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var CookieHelper = {
	this.pinnedCookies = {};
	
	this.reset = function() {
		this.pinnedCookies = {};
	}
	
	this.persistCookie = function() {
		alert('Bingo');
		var div = document.createElement('div');
		div.innerHTML = 'Test';
		
		document.body.appendChild(div);
	}
	
	/*
	this.add = function(cookie) {
		//var domain = cookie.domain;
		//if (!this.cookies_[domain]) {
		//	this.cookies_[domain] = [];
		//}
		//this.cookies_[domain].push(cookie);
		this.pinnedCookies.push(cookie);
	};
	*/
	
	/*
	chrome.cookies.getAll({}, function(cookies) {
		//startListening();
		//start = new Date();
		for (var i in cookies) {
			cache.add(cookies[i]);
		}
		//timer.reset();
		//reloadCookieTable();
	});
	*/
	
	//this.test
}

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  //kittenGenerator.requestKittens();
  
  //alert('test');
  
  CookieHelper.persistCookie();
  
});
