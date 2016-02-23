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
 * @class 2x2 Matrix
 * @name dmat2
 */
var dmat2 = {};

/**
 * Creates a new identity dmat2
 *
 * @returns {dmat2} a new 2x2 matrix
 */
dmat2.create = function() {
    var out = new glMatrix.ARRAY_TYPE_D(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new dmat2 initialized with values from an existing matrix
 *
 * @param {dmat2} a matrix to clone
 * @returns {dmat2} a new 2x2 matrix
 */
dmat2.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE_D(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one dmat2 to another
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the source matrix
 * @returns {dmat2} out
 */
dmat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a dmat2 to the identity matrix
 *
 * @param {dmat2} out the receiving matrix
 * @returns {dmat2} out
 */
dmat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a dmat2
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the source matrix
 * @returns {dmat2} out
 */
dmat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a dmat2
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the source matrix
 * @returns {dmat2} out
 */
dmat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a dmat2
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the source matrix
 * @returns {dmat2} out
 */
dmat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a dmat2
 *
 * @param {dmat2} a the source matrix
 * @returns {Number} determinant of a
 */
dmat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two dmat2's
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the first operand
 * @param {dmat2} b the second operand
 * @returns {dmat2} out
 */
dmat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link dmat2.multiply}
 * @function
 */
dmat2.mul = dmat2.multiply;

/**
 * Rotates a dmat2 by the given angle
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {dmat2} out
 */
dmat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the dmat2 by the dimensions in the given vec2
 *
 * @param {dmat2} out the receiving matrix
 * @param {dmat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {dmat2} out
 **/
dmat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     dmat2.identity(dest);
 *     dmat2.rotate(dest, dest, rad);
 *
 * @param {dmat2} out dmat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {dmat2} out
 */
dmat2.fromRotation = function(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     dmat2.identity(dest);
 *     dmat2.scale(dest, dest, vec);
 *
 * @param {dmat2} out dmat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {dmat2} out
 */
dmat2.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}

/**
 * Returns a string representation of a dmat2
 *
 * @param {dmat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
dmat2.str = function (a) {
    return 'dmat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a dmat2
 *
 * @param {dmat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
dmat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {dmat2} L the lower triangular matrix 
 * @param {dmat2} D the diagonal matrix 
 * @param {dmat2} U the upper triangular matrix 
 * @param {dmat2} a the input matrix to factorize
 */

dmat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 


module.exports = dmat2;
