Repo:
https://github.com/bmoren/p5.collide2D/
Created by http://benmoren.com
Some functions and code modified
version from
http://www.jeffreythompson.org/collisio
n-detection
Version v0.7.3 | June 22, 2020
CC BY-NC-SA 4.0
*
2
3 4
5 6 7 8 9
10
console.log("### p5.collide v0.7.3
###")
11
12 p5.prototype._collideDebug = false;
13
147 p5.prototype.collideDebug
function(debugMode)f
15
_cOllideDebug = debugMode;
16
17
18 V X~++ X
2D
t1
t~
+*/
19
20 V p5.prototype.collideRectRect = function
(x, y, w, hy x2, y2, w2, h2) f
21//2d
22 //add in a thing to detect rectMode
CENTER
23
if (x + w >= x2 && // r1 right
edge past r2 left
24
x <= x2 + w2 && / r1 left
edge past r2 right
yth>=y2&& // r1 top edge
past r2 bottom
26v y <= y2+ h2) t // r1 bottom
edge past r2 top
27
return true;
28
29
return false;
30
3;
31
32 // p5.vector version of collideRectRect
33 p5.prototype.collideRectRectVector =
function(p1, sz, p2, sz2)t
34
return
p5.prototype.collideRectRect(p1.x,
p1.y, sz.x, sz.y, p2.x, p2.y,
sz2.x,sz2.y)
35
36
37
38 V p5. prototype.c collideRectCircle =
function (rx, ry , rW, rh, CX, 2
diameter)
39
//2d
40
H temporary variables to set edges
for testing
22
var testX = CX;
var testY = cy;
43
AX
45
// which edge is closest?
if (cx < rx)
testX = rx
// left edge
telse if (cx > rx+rw)f testX = rx+rw
// right edge
if (cy < ry)t
testY = ry
// top edge
Jelse if (cy > rytrh)f testY = rytrh
H // bottom edge
49
50
51
52
// // get distance from closest edges
var distance =
this.dist(cx,cy,testX,testY)
53
54
// if the distance is less than the
radius, collision!
if (distance <= diameter/2) f
return true;
return false;
3;
55
56
57
58
59
60
61
// p5.vector version of
collideRectCircle
62 p5.prototype.collideRectCircleVector =
function(r, sz, c, diameter)f
63
return
p5.prototype.collideRectCircle(r.x,r.y,
sz.x,sz.y, c.x,c.y, diameter)
64
65
66 p5.prototype.collideCircleCircle =
function (x, y,d, x2, y2, d2) f
67 //2d
687 if( this.dist(x,y,x2,y2) <= (d/2)+
(d2/2))t
69
return true;
70
)
71
return false;
