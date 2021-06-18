/*
Exercise 3.3.2. Develop the program volume-cylinder . It consumes the radius of a cylinder's
base disk and its height; it computes the volume of the cylinder.

πr2h 
*/

const volumeOfCylinder = (r,h)=>{
    const pi = 3.14159
    return pi*r*2*h
}
console.log(volumeOfCylinder(5,10))

/*
Exercise 3.3.3. Develop area-cylinder . The program consumes the radius of the cylinder's
base disk and its height. Its result is the surface area of the cylinder.

2πrh+2πr2 
*/
const areaOfSylinder = (r,h)=>{
    const pi = 3.14159
    return volumeOfCylinder(r,h) + 2*pi*r*r
}
console.log(areaOfSylinder(5,10))

/*
Exercise 3.3.4. Develop the function area-pipe . It computes the surface area of a pipe, which
is an open cylinder. The program consumes three values: the pipe's inner radius, its length, and
the thickness of its wall.
*/