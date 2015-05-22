/**
 * Created by thangnv on 5/20/15.
 */
"use strict";
var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var stringTest = "Cho vào một chuỗi string, hãy in ra từ và tần suất xuất hiện từ cao xuống thấp";
require("../stringMethodExtend.js");

//describe('Array', function(){
//    describe('#indexOf()', function(){
//        it('should return -1 when the value is not present', function(){
//            assert.equal(-1, [1,2,3].indexOf(5));
//            assert.equal(-1, [1,2,3].indexOf(0));
//        })
//    })
//})


describe('String', function () {
    describe('revert_String()',function(){
        it('revert_String "123456789"',function(){
            expect('123456789'.revert_String()).to.equal("987654321");

        })

    })
});

describe('String', function () {
    describe('isEmail()',function(){
        it('isEmail func with Pattern',function(){
            expect('thang@gmail.com'.isEmail()).to.equal(true) ; // wrong ???

        })

    })
});

describe('String', function () {
    describe('isPassword()',function(){
        it('isPassword func with Pattern',function(){
            expect('thang@gmailcom'.isPassword()).to.equal(true) ; // wrong ???

        })

    })
});

describe('String', function () {
    describe('wordCount()',function(){
        it('wordCount string function',function(){
            expect(stringTest.wordCount()).to.equal(18);

        })

    })
});

