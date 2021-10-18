# interactable-mandelbrot
Created to be able to quickly see and modify a Mandelbrot visual representation.

# Go ahead and play with it
It is fun! Just make sure you don't have anything important to do. As if you are like me, you won't have any rest until you have visited all areas!

## No installation needed
Just get the files on your computer in a file and open index.html

## Mandelbrot set
[Wikipedia](https://en.wikipedia.org/wiki/Mandelbrot_set)  
The Mandelbrot set is generated by iterating the following quadratic map. Where the starting value of z is 0.

> z<sub>n</sub> = z<sub>n-1</sub><sup>2</sup> + c

It is easy to see that for most values of c, the resulting value of z will eventually explode to infinity. Example for `c = 1`:

> 0<sup>2</sup> + 1 = 1  
> 1<sup>2</sup> + 1 = 2  
> 2<sup>2</sup> + 1 = 5  
> 5<sup>2</sup> + 1 = 26  
> ...

What is not as obvious is that for some values c the number will stay bounded. The most obvious example is `c = -1`:

> 0<sup>2</sup> - 1 = -1  
> -1<sup>2</sup> - 1 = 0  
> 0<sup>2</sup> - 1 = -1  
> -1<sup>2</sup> - 1 = 0  
> ...

The Mandelbrot set consists of every value of c that would remain bounded.

## Complex number
Where the Mandelbrot visualization takes all of its beauty is when applying the function to complex numbers. The resulting formula is simpler that it seems at first glance as some basic algebra and quadratics knowledge is sufficient to understand the following:

> (a + bi)<sup>2</sup> = a<sup>2</sup> + 2abi - b<sup>2</sup>  

This can be represented by the following pseudo code:
```js
function mandelbrot(Zr, Zi, Cr, Ci) {
  Tr = Zr^2 - Zi^2;
  Ti = 2 * Zr * Zi;
  return Tr, Ti;
}
```

## Visual representation
The commun way to represent the set is to color in black every point in the Mandelbrot set, those are the points for which the corresponding (x, y) coordinates would not diverge. We have to set 2 parameters. First, the maximum amount of iterations and second, the boundary. If the absolute value of z does not reach the boundary after iterating the function 'max' times, we will color the point black.

We could just color the rest of the points white and still get an infinitely complex fractal image. But we can do better than that.

By using the amount of iterations needed to reach the boundary to color the rest of the points, we can create many different colorful patterns. 

## To do

### Complete the readme
Optimization
How to use
Describe the different color patterns used

### Further optimization
Use of Web Workers to make the rendering multi-threaded
Use of large numbers to allow zooming in a lot more than Javascript precision allows

### Visual
Render line by line to allow the user to see the evolution of the calculation
Switch for the Julia set
