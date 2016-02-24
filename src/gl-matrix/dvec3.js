/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var glMatrix = require("./common.js");

/**
 * @class 3 Dimensional Vector
 * @name dvec3
 */
var dvec3 = {};

/**
 * Creates a new, empty dvec3
 *
 * @returns {dvec3} a new 3D vector
 */
dvec3.create = function() {
    var out = new glMatrix.ARRAY_TYPE_D(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new dvec3 initialized with values from an existing vector
 *
 * @param {dvec3} a vector to clone
 * @returns {dvec3} a new 3D vector
 */
dvec3.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE_D(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new dvec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {dvec3} a new 3D vector
 */
dvec3.fromValues = function(x, y, z) {
    var out = new glMatrix.ARRAY_TYPE_D(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one dvec3 to another
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the source vector
 * @returns {dvec3} out
 */
dvec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a dvec3 to the given values
 *
 * @param {dvec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {dvec3} out
 */
dvec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link dvec3.subtract}
 * @function
 */
dvec3.sub = dvec3.subtract;

/**
 * Multiplies two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link dvec3.multiply}
 * @function
 */
dvec3.mul = dvec3.multiply;

/**
 * Divides two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link dvec3.divide}
 * @function
 */
dvec3.div = dvec3.divide;

/**
 * Returns the minimum of two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a dvec3 by a scalar number
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {dvec3} out
 */
dvec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two dvec3's after scaling the second operand by a scalar value
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {dvec3} out
 */
dvec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two dvec3's
 *
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {Number} distance between a and b
 */
dvec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link dvec3.distance}
 * @function
 */
dvec3.dist = dvec3.distance;

/**
 * Calculates the squared euclidian distance between two dvec3's
 *
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
dvec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link dvec3.squaredDistance}
 * @function
 */
dvec3.sqrDist = dvec3.squaredDistance;

/**
 * Calculates the length of a dvec3
 *
 * @param {dvec3} a vector to calculate length of
 * @returns {Number} length of a
 */
dvec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link dvec3.length}
 * @function
 */
dvec3.len = dvec3.length;

/**
 * Calculates the squared length of a dvec3
 *
 * @param {dvec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
dvec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link dvec3.squaredLength}
 * @function
 */
dvec3.sqrLen = dvec3.squaredLength;

/**
 * Negates the components of a dvec3
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a vector to negate
 * @returns {dvec3} out
 */
dvec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Returns the inverse of the components of a dvec3
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a vector to invert
 * @returns {dvec3} out
 */
dvec3.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
};

/**
 * Normalize a dvec3
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a vector to normalize
 * @returns {dvec3} out
 */
dvec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two dvec3's
 *
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {Number} dot product of a and b
 */
dvec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @returns {dvec3} out
 */
dvec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two dvec3's
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {dvec3} out
 */
dvec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @param {dvec3} c the third operand
 * @param {dvec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {dvec3} out
 */
dvec3.hermite = function (out, a, b, c, d, t) {
  var factorTimes2 = t * t,
      factor1 = factorTimes2 * (2 * t - 3) + 1,
      factor2 = factorTimes2 * (t - 2) + t,
      factor3 = factorTimes2 * (t - 1),
      factor4 = factorTimes2 * (3 - 2 * t);
  
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  
  return out;
};

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the first operand
 * @param {dvec3} b the second operand
 * @param {dvec3} c the third operand
 * @param {dvec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {dvec3} out
 */
dvec3.bezier = function (out, a, b, c, d, t) {
  var inverseFactor = 1 - t,
      inverseFactorTimesTwo = inverseFactor * inverseFactor,
      factorTimes2 = t * t,
      factor1 = inverseFactorTimesTwo * inverseFactor,
      factor2 = 3 * t * inverseFactorTimesTwo,
      factor3 = 3 * factorTimes2 * inverseFactor,
      factor4 = factorTimes2 * t;
  
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {dvec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {dvec3} out
 */
dvec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the dvec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {dvec3} out
 */
dvec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
};

/**
 * Transforms the dvec3 with a mat3.
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {dvec3} out
 */
dvec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the dvec3 with a quat
 *
 * @param {dvec3} out the receiving vector
 * @param {dvec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {dvec3} out
 */
dvec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-dvec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Rotate a 3D vector around the x-axis
 * @param {dvec3} out The receiving dvec3
 * @param {dvec3} a The dvec3 point to rotate
 * @param {dvec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {dvec3} out
 */
dvec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/**
 * Rotate a 3D vector around the y-axis
 * @param {dvec3} out The receiving dvec3
 * @param {dvec3} a The dvec3 point to rotate
 * @param {dvec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {dvec3} out
 */
dvec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Rotate a 3D vector around the z-axis
 * @param {dvec3} out The receiving dvec3
 * @param {dvec3} a The dvec3 point to rotate
 * @param {dvec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {dvec3} out
 */
dvec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of dvec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each dvec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of dvec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
dvec3.forEach = (function() {
    var vec = dvec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Get the angle between two 3D vectors
 * @param {dvec3} a The first operand
 * @param {dvec3} b The second operand
 * @returns {Number} The angle in radians
 */
dvec3.angle = function(a, b) {
   
    var tempA = dvec3.fromValues(a[0], a[1], a[2]);
    var tempB = dvec3.fromValues(b[0], b[1], b[2]);
 
    dvec3.normalize(tempA, tempA);
    dvec3.normalize(tempB, tempB);
 
    var cosine = dvec3.dot(tempA, tempB);

    if(cosine > 1.0){
        return 0;
    } else {
        return Math.acos(cosine);
    }     
};

/**
 * Returns a string representation of a vector
 *
 * @param {dvec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
dvec3.str = function (a) {
    return 'dvec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {dvec3} a The first vector.
 * @param {dvec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
dvec3.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {dvec3} a The first vector.
 * @param {dvec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
dvec3.equals = function (a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
};

module.exports = dvec3;
