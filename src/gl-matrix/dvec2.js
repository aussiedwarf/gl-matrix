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
 * @class 2 Dimensional Vector
 * @name dvec2
 */
var dvec2 = {};

/**
 * Creates a new, empty dvec2
 *
 * @returns {dvec2} a new 2D vector
 */
dvec2.create = function() {
    var out = new glMatrix.ARRAY_TYPE_D(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new dvec2 initialized with values from an existing vector
 *
 * @param {dvec2} a vector to clone
 * @returns {dvec2} a new 2D vector
 */
dvec2.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE_D(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new dvec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {dvec2} a new 2D vector
 */
dvec2.fromValues = function(x, y) {
    var out = new glMatrix.ARRAY_TYPE_D(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one dvec2 to another
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the source vector
 * @returns {dvec2} out
 */
dvec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a dvec2 to the given values
 *
 * @param {dvec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {dvec2} out
 */
dvec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two dvec2's
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {dvec2} out
 */
dvec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {dvec2} out
 */
dvec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link dvec2.subtract}
 * @function
 */
dvec2.sub = dvec2.subtract;

/**
 * Multiplies two dvec2's
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {dvec2} out
 */
dvec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link dvec2.multiply}
 * @function
 */
dvec2.mul = dvec2.multiply;

/**
 * Divides two dvec2's
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {dvec2} out
 */
dvec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link dvec2.divide}
 * @function
 */
dvec2.div = dvec2.divide;

/**
 * Returns the minimum of two dvec2's
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {dvec2} out
 */
dvec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two dvec2's
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {dvec2} out
 */
dvec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a dvec2 by a scalar number
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {dvec2} out
 */
dvec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two dvec2's after scaling the second operand by a scalar value
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {dvec2} out
 */
dvec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two dvec2's
 *
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {Number} distance between a and b
 */
dvec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link dvec2.distance}
 * @function
 */
dvec2.dist = dvec2.distance;

/**
 * Calculates the squared euclidian distance between two dvec2's
 *
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
dvec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link dvec2.squaredDistance}
 * @function
 */
dvec2.sqrDist = dvec2.squaredDistance;

/**
 * Calculates the length of a dvec2
 *
 * @param {dvec2} a vector to calculate length of
 * @returns {Number} length of a
 */
dvec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link dvec2.length}
 * @function
 */
dvec2.len = dvec2.length;

/**
 * Calculates the squared length of a dvec2
 *
 * @param {dvec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
dvec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link dvec2.squaredLength}
 * @function
 */
dvec2.sqrLen = dvec2.squaredLength;

/**
 * Negates the components of a dvec2
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a vector to negate
 * @returns {dvec2} out
 */
dvec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Returns the inverse of the components of a dvec2
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a vector to invert
 * @returns {dvec2} out
 */
dvec2.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a dvec2
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a vector to normalize
 * @returns {dvec2} out
 */
dvec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two dvec2's
 *
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {Number} dot product of a and b
 */
dvec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two dvec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @returns {vec3} out
 */
dvec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two dvec2's
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the first operand
 * @param {dvec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {dvec2} out
 */
dvec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {dvec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {dvec2} out
 */
dvec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the dvec2 with a mat2
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {dvec2} out
 */
dvec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the dvec2 with a mat2d
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {dvec2} out
 */
dvec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the dvec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {dvec2} out
 */
dvec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the dvec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {dvec2} out the receiving vector
 * @param {dvec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {dvec2} out
 */
dvec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of dvec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each dvec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of dvec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
dvec2.forEach = (function() {
    var vec = dvec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
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
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {dvec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
dvec2.str = function (a) {
    return 'dvec2(' + a[0] + ', ' + a[1] + ')';
};

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {dvec2} a The first vector.
 * @param {dvec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
dvec2.exactEquals = function (a, b) {
    return a[0] === b[0] && a[1] === b[1];
};

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {dvec2} a The first vector.
 * @param {dvec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
dvec2.equals = function (a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
};

module.exports = dvec2;
