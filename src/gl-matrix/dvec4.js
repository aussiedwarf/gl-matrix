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
 * @class 4 Dimensional Vector
 * @name   dvec4
 */
var   dvec4 = {};

/**
 * Creates a new, empty   dvec4
 *
 * @returns {  dvec4} a new 4D vector
 */
  dvec4.create = function() {
    var out = new glMatrix.ARRAY_TYPE_D(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new   dvec4 initialized with values from an existing vector
 *
 * @param {  dvec4} a vector to clone
 * @returns {  dvec4} a new 4D vector
 */
  dvec4.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE_D(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new   dvec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {  dvec4} a new 4D vector
 */
  dvec4.fromValues = function(x, y, z, w) {
    var out = new glMatrix.ARRAY_TYPE_D(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one   dvec4 to another
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the source vector
 * @returns {  dvec4} out
 */
  dvec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a   dvec4 to the given values
 *
 * @param {  dvec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {  dvec4} out
 */
  dvec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two   dvec4's
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {  dvec4} out
 */
  dvec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {  dvec4} out
 */
  dvec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link   dvec4.subtract}
 * @function
 */
  dvec4.sub =   dvec4.subtract;

/**
 * Multiplies two   dvec4's
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {  dvec4} out
 */
  dvec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link   dvec4.multiply}
 * @function
 */
  dvec4.mul =   dvec4.multiply;

/**
 * Divides two   dvec4's
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {  dvec4} out
 */
  dvec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link   dvec4.divide}
 * @function
 */
  dvec4.div =   dvec4.divide;

/**
 * Returns the minimum of two   dvec4's
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {  dvec4} out
 */
  dvec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two   dvec4's
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {  dvec4} out
 */
  dvec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a   dvec4 by a scalar number
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {  dvec4} out
 */
  dvec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two   dvec4's after scaling the second operand by a scalar value
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {  dvec4} out
 */
  dvec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two   dvec4's
 *
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {Number} distance between a and b
 */
  dvec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link   dvec4.distance}
 * @function
 */
  dvec4.dist =   dvec4.distance;

/**
 * Calculates the squared euclidian distance between two   dvec4's
 *
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
  dvec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link   dvec4.squaredDistance}
 * @function
 */
  dvec4.sqrDist =   dvec4.squaredDistance;

/**
 * Calculates the length of a   dvec4
 *
 * @param {  dvec4} a vector to calculate length of
 * @returns {Number} length of a
 */
  dvec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link   dvec4.length}
 * @function
 */
  dvec4.len =   dvec4.length;

/**
 * Calculates the squared length of a   dvec4
 *
 * @param {  dvec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
  dvec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link   dvec4.squaredLength}
 * @function
 */
  dvec4.sqrLen =   dvec4.squaredLength;

/**
 * Negates the components of a   dvec4
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a vector to negate
 * @returns {  dvec4} out
 */
  dvec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Returns the inverse of the components of a   dvec4
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a vector to invert
 * @returns {  dvec4} out
 */
  dvec4.inverse = function(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
};

/**
 * Normalize a   dvec4
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a vector to normalize
 * @returns {  dvec4} out
 */
  dvec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
    }
    return out;
};

/**
 * Calculates the dot product of two   dvec4's
 *
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @returns {Number} dot product of a and b
 */
  dvec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two   dvec4's
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the first operand
 * @param {  dvec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {  dvec4} out
 */
  dvec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {  dvec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {  dvec4} out
 */
  dvec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = glMatrix.RANDOM();
    out[1] = glMatrix.RANDOM();
    out[2] = glMatrix.RANDOM();
    out[3] = glMatrix.RANDOM();
      dvec4.normalize(out, out);
      dvec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the   dvec4 with a mat4.
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {  dvec4} out
 */
  dvec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the   dvec4 with a quat
 *
 * @param {  dvec4} out the receiving vector
 * @param {  dvec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {  dvec4} out
 */
  dvec4.transformQuat = function(out, a, q) {
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
    out[3] = a[3];
    return out;
};

/**
 * Perform some operation over an array of   dvec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each   dvec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of   dvec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
  dvec4.forEach = (function() {
    var vec =   dvec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
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
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {  dvec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
  dvec4.str = function (a) {
    return '  dvec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

module.exports =   dvec4;
