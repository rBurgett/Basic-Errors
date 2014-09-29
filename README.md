Basic-Errors
============

This is a basic JavaScript object for handling errors.

First, create your ```errors``` object:
```
var errors = Errors.create();
```
Now you have an errors object with three useful methods. To add an error, use the ```throw()``` method:
```
errors.throw('This is an error!');
```
When you want to retrieve your errors, use the ```list()``` method:
```
errors.list();
```
This returns an array of ```{error: message}``` objects.

To clear the errors, use the ```clear()``` method:
```
errors.clear();
```
All gone!
