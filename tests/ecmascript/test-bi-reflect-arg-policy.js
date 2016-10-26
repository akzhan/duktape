/*
 *  'Reflect' argument policy
 *
 *  All 'Reflect' methods take an object as their first argument and throw a
 *  TypeError if something other than an object is passed.  In no case is the
 *  value object coerced.
 *
 *  Reflect.apply() and Reflect.construct() additionally require their argument
 *  to be callable.
 */

/*===
[object Object]
TypeError
TypeError
true
true
812
[object Object]
[object Object]
false
true
test
true
false
false
[object Array]
TypeError
TypeError
true
true
812
[object Object]

false
true
0,1,2,length,test
true
false
false
[object Function]
undefined
[object Object]
true
true
812
[object Object]
function () {"native"}
false
true
name,fileName,length,prototype,test
true
false
false
[object Number]
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
[object String]
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
[object Null]
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
[object Undefined]
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
TypeError
===*/

function argPolicyTest() {
    [
        { foo: "bar" },
        [ 8, 1, 2 ],   // Note: Arrays are objects.
        function(){},  // As are functions.
        9000.5,
        "Oozaru",
        null,
        undefined
    ].forEach(function(value) {
        print(Object.prototype.toString.call(value));
        try {
            print(Reflect.apply(value, {}, []));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.construct(value, []));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.defineProperty(value, 'test', { value: 812 }));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.deleteProperty(value, 'foo'));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.get(value, 'test'));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.getOwnPropertyDescriptor(value, 'test'));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.getPrototypeOf(value));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.has(value, 'foo'));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.isExtensible(value));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.ownKeys(value));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.preventExtensions(value));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.set(value, 'fail', "epic fail"));
        } catch (e) {
            print(e.name);
        }
        try {
            print(Reflect.setPrototypeOf(value, null));
        } catch (e) {
            print(e.name);
        }
    });
}

try {
    argPolicyTest();
} catch (e) {
    print(e.stack || e);
}