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
 * @class 2x3 Matrix
 * @name dmat2d
 * 
 * @description 
 * A dmat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */
var dmat2d = {};

/**
 * Creates a new identity dmat2d
 *
 * @returns {dmat2d} a new 2x3 matrix
 */
dmat2d.create = function() {
    var out = new glMatrix.ARRAY_TYPE_D(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new dmat2d initialized with values from an existing matrix
 *
 * @param {dmat2d} a matrix to clone
 * @returns {dmat2d} a new 2x3 matrix
 */
dmat2d.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE_D(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one dmat2d to another
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the source matrix
 * @returns {dmat2d} out
 */
dmat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a dmat2d to the identity matrix
 *
 * @param {dmat2d} out the receiving matrix
 * @returns {dmat2d} out
 */
dmat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a dmat2d
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the source matrix
 * @returns {dmat2d} out
 */
dmat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a dmat2d
 *
 * @param {dmat2d} a the source matrix
 * @returns {Number} determinant of a
 */
dmat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two dmat2d's
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the first operand
 * @param {dmat2d} b the second operand
 * @returns {dmat2d} out
 */
dmat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link dmat2d.multiply}
 * @function
 */
dmat2d.mul = dmat2d.multiply;

/**
 * Rotates a dmat2d by the given angle
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {dmat2d} out
 */
dmat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the dmat2d by the dimensions in the given vec2
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {dmat2d} out
 **/
dmat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the dmat2d by the dimensions in the given vec2
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {dmat2d} out
 **/
dmat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     dmat2d.identity(dest);
 *     dmat2d.rotate(dest, dest, rad);
 *
 * @param {dmat2d} out dmat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {dmat2d} out
 */
dmat2d.fromRotation = function(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    out[4] = 0;
    out[5] = 0;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     dmat2d.identity(dest);
 *     dmat2d.scale(dest, dest, vec);
 *
 * @param {dmat2d} out dmat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {dmat2d} out
 */
dmat2d.fromScaling = function(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    out[4] = 0;
    out[5] = 0;
    return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     dmat2d.identity(dest);
 *     dmat2d.translate(dest, dest, vec);
 *
 * @param {dmat2d} out dmat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {dmat2d} out
 */
dmat2d.fromTranslation = function(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = v[0];
    out[5] = v[1];
    return out;
}

/**
 * Returns a string representation of a dmat2d
 *
 * @param {dmat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
dmat2d.str = function (a) {
    return 'dmat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a dmat2d
 *
 * @param {dmat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
dmat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 


/**
 * Adds two dmat2d's
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the first operand
 * @param {dmat2d} b the second operand
 * @returns {dmat2d} out
 */
dmat2d.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    return out;
};

/**
 * Subtracts matrix b from matrix a
 *
 * @param {dmat2d} out the receiving matrix
 * @param {dmat2d} a the first operand
 * @param {dmat2d} b the second operand
 * @returns {dmat2d} out
 */
dmat2d.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    return out;
};

/**
 * Alias for {@link dmat2d.subtract}
 * @function
 */
dmat2d.sub = dmat2d.subtract;

module.exports = dmat2d;
